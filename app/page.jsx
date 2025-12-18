'use client';

import Link from 'next/link';

const projectsData = [
  {
    id: 1,
    title: 'Client Site',
    description:
      'A beautifully designed web application built with modern technologies.',
    tags: ['React', 'Next.js', 'CSS'],
    link: 'https://rianattia.github.io/client_site/',
  },
  {
    id: 2,
    title: 'Design Project',
    description:
      'An interactive dashboard for data visualization and analysis.',
    tags: ['React', 'D3.js', 'Node.js'],
    link: 'https://rianattia.github.io/is117-test-site/',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: '70vh',
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-2xl)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              gap: 'var(--spacing-xl)',
              '@media (max-width: 768px)': {
                flexDirection: 'column',
                minHeight: 'auto',
                padding: 'var(--spacing-xl)',
              }
            }}
            className="hero-section"
          >
            <div style={{ flex: 1 }}>
              <h1 style={{ marginBottom: 'var(--spacing-lg)', maxWidth: '800px' }}>
                Rian Attia, AI Product Engineer
              </h1>
              <p
                style={{
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--color-gray-800)',
                  marginBottom: 'var(--spacing-xl)',
                  maxWidth: '700px',
                  lineHeight: 'var(--line-height-relaxed)',
                }}
              >
                I&apos;m a passionate developer and designer dedicated to creating thoughtful, functional, and beautiful digital products that matter.
              </p>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                <Link href="/projects" className="button button-primary">
                  Explore My Work
                </Link>
                <a href="https://calendly.com/rianattia/30min" target="_blank" rel="noopener noreferrer" className="button button-outline">
                  Free Consulting
                </a>
              </div>
            </div>
            <div style={{ flex: 0.5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="/Portfolio_images/3.jpg"
                alt="Rian Attia"
                style={{ 
                  width: '300px',
                  height: '400px',
                  borderRadius: 'var(--radius-lg)', 
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <div className="section-title" style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-2xl)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            marginBottom: 'var(--spacing-xl)',
          }}>
            <h2>Featured Projects</h2>
            <p>Hand-picked work showcasing design excellence and technical expertise</p>
          </div>
          <div className="grid grid-2">
            {projectsData.map((project) => (
              <div
                key={project.id}
                style={{
                  padding: 'var(--spacing-xl)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-xl)',
                  transition: 'all var(--transition-base)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(13, 71, 161, 0.5)';
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(13, 71, 161, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <h3 style={{ color: 'var(--color-accent)', marginBottom: 'var(--spacing-md)' }}>{project.title}</h3>
                <p style={{ flex: 1, marginBottom: 'var(--spacing-lg)', color: 'var(--color-gray-700)' }}>{project.description}</p>
                <div
                  style={{
                    display: 'flex',
                    gap: 'var(--spacing-sm)',
                    flexWrap: 'wrap',
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span key={tag} className="feature-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-accent)', fontSize: 'var(--font-size-base)' }}>
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CTA Section */}
      <section className="section-small">
        <div className="container">
          <div
            style={{
              textAlign: 'center',
              padding: 'var(--spacing-2xl)',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Ready to collaborate?</h2>
            <p
              style={{
                marginBottom: 'var(--spacing-lg)',
                fontSize: 'var(--font-size-lg)',
                color: 'var(--color-gray-700)',
              }}
            >
              Let&apos;s create something exceptional together.
            </p>
            <Link href="/contact" className="button button-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
