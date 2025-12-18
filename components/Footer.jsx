'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="footer-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Social</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.linkedin.com/in/rian-attia-1b1956384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RianAttia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
              </li>

            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p>Designed with minimalism in mind.</p>
        </div>
      </div>
    </footer>
  );
}
