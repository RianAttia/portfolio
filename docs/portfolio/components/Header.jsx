'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/header.css';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href) => pathname === href;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo" onClick={closeMenu}>
            <span className="logo-dot"></span>
            Portfolio
          </Link>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link
                href="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
