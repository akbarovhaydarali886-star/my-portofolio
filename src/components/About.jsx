import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <Reveal>
          <p className="eyebrow">Engineering Philosophy</p>
          <h2 className="about-title text-4xl mb-6">Systems Thinking & Scalability</h2>
          <p className="about-text text-[var(--ink-soft)] text-lg mb-4">
            I am a Software Engineer focused on building robust, scalable systems that bridge complex backend architectures with seamless frontend experiences. My engineering philosophy centers on type safety, aggressive performance optimization, and distributed system design.
          </p>
          <p className="about-text text-[var(--ink-soft)] text-lg mb-6">
            I take end-to-end ownership of the product lifecycle—from designing concurrent API gateways in Go to engineering accessible, edge-rendered React applications. I believe in data-driven engineering: optimizing bundle sizes, reducing p99 latency, and ensuring fault tolerance in deployments.
          </p>
        </Reveal>

        <Reveal delay={120} className="about-edu mt-8">
          <p className="eyebrow">Core Principles</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-[rgba(15,23,42,0.5)] border border-[var(--border-color)] backdrop-blur-md">
              <h3 className="text-white font-semibold mb-1 text-base">System Design & Modularity</h3>
              <p className="text-sm text-slate-400">Microservices, Event-driven architecture, Scalability</p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(15,23,42,0.5)] border border-[var(--border-color)] backdrop-blur-md">
              <h3 className="text-white font-semibold mb-1 text-base">Performance-First</h3>
              <p className="text-sm text-slate-400">Core Web Vitals, LCP &lt; 0.8s, Edge caching</p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(15,23,42,0.5)] border border-[var(--border-color)] backdrop-blur-md">
              <h3 className="text-white font-semibold mb-1 text-base">CI/CD & DevOps</h3>
              <p className="text-sm text-slate-400">Docker, GitHub Actions, Zero-downtime deployments</p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(15,23,42,0.5)] border border-[var(--border-color)] backdrop-blur-md">
              <h3 className="text-white font-semibold mb-1 text-base">Test-Driven Development</h3>
              <p className="text-sm text-slate-400">Jest, Playwright, High test coverage, E2E</p>
            </div>
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
