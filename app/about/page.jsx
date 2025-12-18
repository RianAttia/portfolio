export const metadata = {
  title: 'About Me - Portfolio',
  description: 'Learn more about my background, skills, and passion for development.',
};

const sectionBoxStyle = {
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(10px)',
  borderRadius: 'var(--radius-lg)',
  padding: 'var(--spacing-2xl)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  marginBottom: 'var(--spacing-2xl)',
};

export default function About() {
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
            <h1>About Me</h1>
            <p style={{ fontSize: 'var(--font-size-lg)' }}>
              Full-stack developer, problem solver, and continuous learner with experience in business systems and data analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Education</h2>
          <div style={sectionBoxStyle}>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>B.S. in Business Information Systems</h3>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-sm)' }}>Minor in Data Data Analysis</p>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>NJIT • Newark, NJ • Sep 2023 - Present</p>
            <p style={{ marginBottom: 'var(--spacing-md)' }}>
              <strong>Relevant Coursework:</strong> Introduction to Computer Science, UI Designing the User Experience, Information Design Techniques, Intro to Networking Technology
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Experience</h2>
          
          <div style={sectionBoxStyle}>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Payroll Organizer and Counter Lead</h3>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-sm)' }}>La Mia Pizza • New York</p>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>Jun 2015 - Present</p>
            <ul style={{ listStyle: 'disc', paddingLeft: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                Processed payroll for eight employees to ensure accurate and timely compensation, resulting in zero payroll discrepancies and increased employee satisfaction.
              </li>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                Advised employees on delivery applications by providing step-by-step guidance and tech support, demonstrating leadership between business operations and technology, which led to improved efficiency and greater confidence in managing deliveries.
              </li>
            </ul>
          </div>

          <div style={sectionBoxStyle}>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Cashier</h3>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-sm)' }}>Walgreens, Carlstadt</p>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>Oct 2022 - May 2023</p>
            <ul style={{ listStyle: 'disc', paddingLeft: 'var(--spacing-lg)' }}>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>
                Provided customer service at the cash register to ensure smooth and efficient transactions, resulting in faster checkout times and enhanced customer satisfaction.
              </li>
              <li>
                Organized products in several different aisles according to company standards to maintain a clean and shoppable environment, improving product visibility and contributing to increased sales.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Technical Skills</h2>
          
          <div style={sectionBoxStyle}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Languages</h3>
            <p style={{ marginBottom: 'var(--spacing-md)' }}>C++, C, Python, Java</p>
            <p>
              I have strong programming proficiency in a wide variety of programming languages through both academic and practical experience. This versatility allows me to quickly adapt to different development environments and contribute effectively to diverse technical projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Projects</h2>
          
          <div style={sectionBoxStyle}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>LangQuick</h3>
            <p style={{ marginBottom: 'var(--spacing-md)' }}>
              Designed a detailed mockup for an innovative learning application focused on delivering a more personalized and engaging educational experience. The concept combines user-centered design, tailoring content and functionality to meet individual learner needs and preferences.
            </p>
            <p style={{ marginBottom: 'var(--spacing-md)' }}>
              <a href="https://www.figma.com/proto/JvtVUrTsZxmEGHNnNoiMfI/Milestone-4-Draft?node-id=1-2&t=LjyhIkr0FVXSpf8F-1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 'bold' }}>
                View prototype →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Honors & Awards */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Honors & Awards</h2>
          
          <div style={sectionBoxStyle}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>NHS Award</h3>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>June 2023</p>
            <p>
              Bestowed with an award in recognition of my academic excellence and dedication to maintaining the highest level of performance. This distinction was granted for sustaining a perfect 4.0 GPA throughout the entire academic year.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Experience */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Volunteer Experience</h2>
          
          <div style={sectionBoxStyle}>
            <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Gift Consultant</h3>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-sm)' }}>Newark</p>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>Nov 2022 - Dec 2022</p>
            <p>
              Volunteered at a local gift-buying school in Newark to distribute gifts to students during community events, fostering a positive and supportive environment for children and families.
            </p>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Extracurricular Activities</h2>
          
          <div style={sectionBoxStyle}>
            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Robotic Club</h3>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>Sep 2018 - Jun 2019</p>
            <p style={{ marginBottom: 'var(--spacing-xl)' }}>
              Applied programming and engineering concepts to design, build, and test robots for competitions. Strengthened technical skills in coding, mechanical design, and troubleshooting.
            </p>

            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Choir</h3>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>Sep 2013 - Jun 2022</p>
            <p style={{ marginBottom: 'var(--spacing-xl)' }}>
              Collaborated closely with the alto section during rehearsals and performances to strengthen vocal harmony and cohesion, contributing to the overall success and musical excellence of the ensemble.
            </p>

            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Tennis Club</h3>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-md)' }}>Sep 2022 - Jun 2023</p>
            <p>
              Developed tenacity and perseverance by actively participating in tennis club practices and matches, leading to improved performance, resilience, and a stronger competitive mindset.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
