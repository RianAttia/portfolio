'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/header.css';

export default function Header() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo">
            <span className="logo-dot"></span>
            Portfolio
          </Link>
          <ul className="nav-links">
            <li>
              <Link
                href="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
