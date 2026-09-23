import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <Reveal>
          <p className="eyebrow">Engineering Philosophy</p>
          <h2 className="about-title">Systems Thinking & Scalability</h2>
          <p className="about-text">
            I am a Software Engineer focused on building robust, scalable systems that bridge complex backend architectures with seamless frontend experiences. My engineering philosophy centers on type safety, aggressive performance optimization (Core Web Vitals), and distributed system design.
          </p>
          <p className="about-text">
            I take end-to-end ownership of the product lifecycle—from designing concurrent API gateways in Go to engineering accessible, edge-rendered React applications. I believe in data-driven engineering: optimizing bundle sizes, reducing p99 latency, and ensuring fault tolerance in deployments.
          </p>
        </Reveal>

        <Reveal delay={120} className="about-edu">
          <p className="eyebrow">Core Competencies</p>
          <div className="edu-card">
            <h3>Architecture & Design</h3>
            <p>Microservices, REST APIs, Edge Computing, CI/CD</p>
          </div>
          <div className="edu-card" style={{ marginTop: '16px' }}>
            <h3>Frontend Performance</h3>
            <p>Server-Side Rendering, Web Vitals, State Management</p>
          </div>
        </Reveal>
      </div>

      <style>{`
        .about-inner {
          display: grid;
          grid-template-columns: 1.4fr 0.9fr;
          gap: 56px;
        }
        .about-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin-bottom: 20px;
          max-width: 20ch;
        }
        .about-text {
          color: var(--ink-soft);
          max-width: 62ch;
          margin-bottom: 16px;
        }
        .edu-card {
          border-left: 3px solid var(--forest);
          padding: 4px 0 4px 20px;
          transition: padding-left 0.25s ease, border-color 0.25s ease;
        }
        .about-edu.is-visible .edu-card:hover {
          padding-left: 26px;
        }
        .edu-card h3 {
          font-size: 1.1rem;
          margin-bottom: 6px;
        }
        .edu-card p {
          color: var(--ink-soft);
          margin: 0;
        }
        @media (max-width: 780px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  )
}
