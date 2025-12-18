'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-2xl)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <h1>Get in Touch</h1>
            <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px' }}>
              I&apos;m always interested in hearing about new opportunities and
              connecting with like-minded individuals. Feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {/* Form */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-2xl)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Send me a message</h2>
              {submitted && (
                <div
                  style={{
                    backgroundColor: 'var(--color-gray-100)',
                    padding: 'var(--spacing-md)',
                    borderRadius: '4px',
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--color-gray-900)',
                  }}
                >
                  ✓ Thanks for reaching out! I&apos;ll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="button button-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-2xl)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Other ways to connect</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2xl)' }}>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:rianattia@gmail.com" style={{ fontSize: 'var(--font-size-lg)' }}>
                    rianattia@gmail.com
                  </a>
                </div>
                <div>
                  <h3>LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/rian-attia-1b1956384/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 'var(--font-size-lg)' }}
                  >
                    Connect on LinkedIn
                  </a>
                </div>
                <div>
                  <h3>GitHub</h3>
                  <a
                    href="https://github.com/RianAttia"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 'var(--font-size-lg)' }}
                  >
                    View on GitHub
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
