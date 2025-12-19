'use client';

export default function Blog() {
  return (
    <div>
      {/* Blog Header */}
      <section className="section">
        <div className="container">
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-2xl)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              marginBottom: 'var(--spacing-2xl)',
              textAlign: 'center',
            }}
          >
            <h1 style={{ marginBottom: 'var(--spacing-md)', fontSize: '3.5rem' }}>Design Process</h1>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-gray-700)' }}>
              Exploring the design and development journey behind my featured projects.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section">
        <div className="container">
          {/* Client Site Design Process */}
          <article
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-3xl)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              marginBottom: 'var(--spacing-3xl)',
            }}
          >
            <h2 style={{ color: 'var(--color-accent)', marginBottom: 'var(--spacing-xl)', fontSize: '2.5rem' }}>Client Site</h2>
            
            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.5rem', color: 'var(--color-accent)' }}>Concept & Planning</h3>
              <p style={{ marginBottom: '0', color: 'var(--color-gray-800)', lineHeight: 'var(--line-height-relaxed)', fontSize: 'var(--font-size-lg)' }}>
                The Client Site project began with a clear objective: create a modern, visually stunning web application that showcases professional capabilities while maintaining excellent user experience. I started by defining the core requirements and identifying the target audience. This foundational phase was critical in setting the direction for the entire project.
              </p>
            </div>

            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.5rem', color: 'var(--color-accent)' }}>Visual Design</h3>
              <p style={{ marginBottom: '0', color: 'var(--color-gray-800)', lineHeight: 'var(--line-height-relaxed)', fontSize: 'var(--font-size-lg)' }}>
                I focused on creating a clean, minimalist design with a cohesive color palette. The emphasis was on readability and accessibility while maintaining a modern aesthetic. I incorporated interactive elements to enhance user engagement and create a memorable browsing experience. Every design decision was made with intention to guide users through the content seamlessly.
              </p>
            </div>

            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.5rem', color: 'var(--color-accent)' }}>Technical Implementation</h3>
              <p style={{ marginBottom: '0', color: 'var(--color-gray-800)', lineHeight: 'var(--line-height-relaxed)', fontSize: 'var(--font-size-lg)' }}>
                Built with React and Next.js, the site leverages modern web technologies for optimal performance. CSS was carefully crafted to ensure responsive design across all devices. The component-based architecture allows for easy maintenance and future enhancements, ensuring the codebase remains scalable and maintainable as the project evolves.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.5rem', color: 'var(--color-accent)' }}>Key Learnings</h3>
              <p style={{ marginBottom: '0', color: 'var(--color-gray-800)', lineHeight: 'var(--line-height-relaxed)', fontSize: 'var(--font-size-lg)' }}>
                This project reinforced the importance of balancing aesthetics with functionality. Working with modern frontend frameworks taught me how to build scalable, maintainable applications that deliver both performance and beauty. The experience shaped my approach to future projects and deepened my understanding of user-centered design.
              </p>
            </div>
          </article>

          {/* Design Project Design Process */}
          <article
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-3xl)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <h2 style={{ color: 'var(--color-accent)', marginBottom: 'var(--spacing-xl)', fontSize: '2.5rem' }}>Design Project</h2>
            
            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.5rem', color: 'var(--color-accent)' }}>Challenge & Approach</h3>
              <p style={{ marginBottom: '0', color: 'var(--color-gray-800)', lineHeight: 'var(--line-height-relaxed)', fontSize: 'var(--font-size-lg)' }}>
                The Design Project was created as an interactive dashboard for data visualization and analysis. The main challenge was presenting complex data in an intuitive, visually appealing manner without overwhelming the user. I approached this by focusing on user research and iterative design to find the perfect balance between functionality and aesthetics.
              </p>
            </div>

            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.5rem', color: 'var(--color-accent)' }}>Data Visualization</h3>
              <p style={{ marginBottom: '0', color: 'var(--color-gray-800)', lineHeight: 'var(--line-height-relaxed)', fontSize: 'var(--font-size-lg)' }}>
                I integrated D3.js to create dynamic, interactive visualizations that bring data to life. The goal was to make data exploration feel natural and intuitive. Each chart and graph was designed to tell a story and provide actionable insights. The visualizations adapt responsively to user interactions, creating an engaging and informative experience.
              </p>
            </div>

            <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.5rem', color: 'var(--color-accent)' }}>Backend Architecture</h3>
              <p style={{ marginBottom: '0', color: 'var(--color-gray-800)', lineHeight: 'var(--line-height-relaxed)', fontSize: 'var(--font-size-lg)' }}>
                Node.js was used for the backend to handle data processing and API requests efficiently. The architecture was designed with scalability in mind, allowing for future expansion and additional data sources. By separating concerns between frontend and backend, I created a robust system that can handle growth without compromising performance.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.5rem', color: 'var(--color-accent)' }}>Lessons & Impact</h3>
              <p style={{ marginBottom: '0', color: 'var(--color-gray-800)', lineHeight: 'var(--line-height-relaxed)', fontSize: 'var(--font-size-lg)' }}>
                This project deepened my understanding of how to bridge design and data science. It taught me that effective data visualization requires both technical expertise and thoughtful design to create meaningful user experiences. These insights continue to guide my approach to building applications that are both powerful and beautiful.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
