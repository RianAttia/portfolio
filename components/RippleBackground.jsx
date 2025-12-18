'use client';

import { useEffect, useRef } from 'react';

const block_size = 25;
const block_core = 1;
const block_move_distance = 10;
const block_move_range = 70;
const block_scale = 0.02;
const ripple_speed = 0.24;

class Block {
  constructor(x, y, id) {
    this.pos = { x, y };
    this.id = id;
  }

  render(ctx, ripples) {
    ctx.fillStyle = this.getColorWithAlpha(this.amp);
    ctx.fillRect(
      this.pos.x + this.diff.x - (block_core + this.amp * block_scale) * 2.5,
      this.pos.y + this.diff.y - (block_core + this.amp * block_scale) * 2.5,
      (block_core + this.amp * block_scale) * 5,
      block_core + this.amp * block_scale * 0.5
    );
    ctx.fillRect(
      this.pos.x + this.diff.x - (block_core + this.amp * block_scale * 0.25),
      this.pos.y + this.diff.y - (block_core + this.amp * block_scale) * 2.5,
      block_core + this.amp * block_scale * 0.5,
      (block_core + this.amp * block_scale) * 5
    );
  }

  getColorWithAlpha(amp) {
    const alpha = cubicInOut(amp, 60, 240, 15) / 255;
    return `rgba(255, 255, 255, ${alpha})`;
  }

  calcDiff(ripples) {
    this.diff = { x: 0, y: 0 };
    this.amp = 0;

    ripples.forEach((ripple) => {
      if (!ripple.dists[this.id]) {
        ripple.dists[this.id] = Math.hypot(
          this.pos.x - ripple.pos.x,
          this.pos.y - ripple.pos.y
        );
      }
      let distance = ripple.dists[this.id] - ripple.currRadius;
      if (distance < 0 && distance > -block_move_range * 2) {
        if (!ripple.angles[this.id]) {
          ripple.angles[this.id] = Math.atan2(
            this.pos.y - ripple.pos.y,
            this.pos.x - ripple.pos.x
          );
        }
        const angle = ripple.angles[this.id];
        const localAmp =
          cubicInOut(
            -Math.abs(block_move_range + distance) + block_move_range,
            0,
            block_move_distance,
            block_move_range
          ) * ripple.scale;
        this.amp += localAmp;
        const movement = {
          x: Math.cos(angle) * localAmp,
          y: Math.sin(angle) * localAmp,
        };
        this.diff.x += movement.x;
        this.diff.y += movement.y;
      }
    });
  }
}

class Ripple {
  constructor(x, y, scale, width, height) {
    this.pos = { x, y };
    this.initTime = Date.now();
    this.currRadius = 0;
    this.endRadius =
      Math.max(
        Math.hypot(this.pos.x, this.pos.y),
        Math.hypot(this.pos.x, height - this.pos.y),
        Math.hypot(width - this.pos.x, this.pos.y),
        Math.hypot(width - this.pos.x, height - this.pos.y)
      ) + block_move_range;
    this.scale = scale;
    this.dists = [];
    this.angles = [];
  }

  checkKill() {
    return this.currRadius > this.endRadius;
  }

  updateRadius() {
    this.currRadius = (Date.now() - this.initTime) * ripple_speed;
  }

  draw(ctx) {
    ctx.strokeStyle = `rgba(255, 255, 255, ${cubicInOut(this.scale, 30, 120, 1) / 255})`;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.currRadius, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function cubicInOut(t, b, c, d) {
  if (t <= 0) return b;
  else if (t >= d) return b + c;
  else {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
}

export default function RippleBackground() {
  const canvasRef = useRef(null);
  const rippleRef = useRef([]);
  const blocksRef = useRef([]);
  const fpsRef = useRef(0);
  const prevTimeRef = useRef(0);
  const prevFrameRef = useRef(0);
  const mouseSpeedRef = useRef(0);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeBlocks();
    };

    const initializeBlocks = () => {
      const left_padding = Math.round(canvas.width % block_size) / 2;
      const top_padding = Math.round(canvas.height % block_size) / 2;

      blocksRef.current = Array.from(
        { length: Math.floor(canvas.height / block_size) },
        (_, y) =>
          Array.from(
            { length: Math.floor(canvas.width / block_size) },
            (_, x) =>
              new Block(
                left_padding + block_size * (x + 0.5),
                top_padding + block_size * (y + 0.5),
                y * Math.floor(canvas.width / block_size) + x
              )
          )
      );
    };

    resizeCanvas();

    let frameCount = 0;
    const fpsInterval = 1000;

    const animate = () => {
      frameCount++;

      // Random ripples
      if (Math.random() < Math.pow(fpsRef.current / 60, 3) / 16) {
        rippleRef.current.push(
          new Ripple(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            0.1,
            canvas.width,
            canvas.height
          )
        );
      }

      // FPS calculation
      const now = Date.now();
      if (now - prevTimeRef.current > fpsInterval) {
        fpsRef.current = ((frameCount - prevFrameRef.current) / fpsInterval) * 1000;
        prevFrameRef.current = frameCount;
        prevTimeRef.current = now;
      }

      // Clear background
      ctx.fillStyle = 'rgba(100, 140, 180, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw ripples
      rippleRef.current = rippleRef.current.filter((ripple) => {
        ripple.updateRadius();
        return !ripple.checkKill();
      });

      // Update and render blocks
      blocksRef.current.forEach((line) =>
        line.forEach((block) => {
          block.calcDiff(rippleRef.current);
          block.render(ctx, rippleRef.current);
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse event listeners
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseSpeedRef.current = Math.hypot(
        x - prevMouseRef.current.x,
        y - prevMouseRef.current.y
      );

      if (Math.random() < Math.pow(fpsRef.current / 60, 3) * mouseSpeedRef.current / 30) {
        rippleRef.current.push(
          new Ripple(
            x,
            y,
            (0.15 * mouseSpeedRef.current) / 40,
            canvas.width,
            canvas.height
          )
        );
      }

      prevMouseRef.current = { x, y };
    };

    const handleMouseDrag = (e) => {
      if (e.buttons === 1) {
        const x = e.clientX;
        const y = e.clientY;
        mouseSpeedRef.current = Math.hypot(
          x - prevMouseRef.current.x,
          y - prevMouseRef.current.y
        );

        if (Math.random() < Math.pow(fpsRef.current / 60, 3) * mouseSpeedRef.current / 20) {
          rippleRef.current.push(
            new Ripple(
              x,
              y,
              (0.6 * mouseSpeedRef.current) / 40,
              canvas.width,
              canvas.height
            )
          );
        }

        prevMouseRef.current = { x, y };
      }
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMouseDrag);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseDrag);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      }}
    />
  );
}
