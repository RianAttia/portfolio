'use client';

const allProjects = [
  {
    id: 1,
    title: 'Client Site',
    description:
      'A beautifully designed web application built with modern technologies.',
    fullDescription:
      'This project showcases my ability to create responsive, user-friendly web applications. Built with React and Next.js, it features a clean Nordic design aesthetic with smooth animations and transitions.',
    tags: ['React', 'Next.js', 'CSS', 'Responsive'],
    link: 'https://rianattia.github.io/client_site/',
  },
  {
    id: 2,
    title: 'IS117 Test Site',
    description:
      'An interactive dashboard for data visualization and analysis.',
    fullDescription:
      'A comprehensive dashboard built to visualize complex data sets. Utilizes D3.js for interactive visualizations and Node.js for backend operations.',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: 'https://rianattia.github.io/is117-test-site/',
  },
];

export default function Projects() {
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
            <h1>My Projects</h1>
            <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px' }}>
              A collection of projects I&apos;ve built, showcasing my skills in design,
              development, and problem-solving.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {allProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  padding: 'var(--spacing-lg)',
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
                  e.currentTarget.style.borderColor =
                    'rgba(13, 71, 161, 0.5)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 48px rgba(13, 71, 161, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 32px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <h3 style={{ color: 'var(--color-accent)' }}>{project.title}</h3>
                <p style={{ flex: 1 }}>{project.fullDescription}</p>
                <div
                  style={{
                    display: 'flex',
                    gap: 'var(--spacing-sm)',
                    flexWrap: 'wrap',
                    marginTop: 'var(--spacing-lg)',
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 'var(--font-size-xs)',
                        backgroundColor: 'var(--color-accent-light)',
                        color: 'var(--color-accent)',
                        padding:
                          'var(--spacing-xs) var(--spacing-sm)',
                        borderRadius: '4px',
                        fontWeight: 'var(--font-weight-semibold)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--color-accent)' }}
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CTA */}
      <section className="section-small">
        <div className="container">
          <div style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-2xl)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <h2>Interested in working together?</h2>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
              Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            <a href="https://ai-product-contact-form.zapier.app/contact-form" className="button button-primary" target="_blank" rel="noopener noreferrer">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
