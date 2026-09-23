import TechIcon, { TECH_STACK } from './TechIcons.jsx'

const ORBIT = [
  { id: 'react', x: '8%', y: '6%' },
  { id: 'ts', x: '78%', y: '12%' },
  { id: 'tailwind', x: '-6%', y: '48%' },
  { id: 'go', x: '86%', y: '58%' },
  { id: 'next', x: '18%', y: '86%' },
  { id: 'vue', x: '70%', y: '88%' },
]

export default function Hero() {
  return (
    <section id="home" className="hero on-dark">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow hero-eyebrow">Senior Software Engineer</p>
          <h1 className="hero-name">Akbarov Haydarali</h1>
          <p className="hero-desc">
            Architecting resilient, high-performance web applications and distributed backend systems. 
            Specializing in React ecosystem performance, type-safe architectures, and scalable Go microservices. 
            I build systems that bridge complex backend architectures with seamless, accessible frontend experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Case Studies</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </div>
          <div className="hero-stack" aria-label="Asosiy texnologiyalar">
            {TECH_STACK.slice(0, 6).map((t) => (
              <span className="hero-stack-item" key={t.id} title={t.name}>
                <TechIcon id={t.id} />
              </span>
            ))}
          </div>
        </div>

        <div className="hero-grid" aria-hidden="true">
          {ORBIT.map((item, i) => (
            <span
              key={item.id}
              className="hero-orbit-icon"
              style={{ left: item.x, top: item.y, animationDelay: `${i * 0.35}s` }}
            >
              <TechIcon id={item.id} />
            </span>
          ))}
          <svg viewBox="0 0 320 320" width="100%" height="100%">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#8fd9b6" stopOpacity="0.9" />
                <stop offset="1" stopColor="#8fd9b6" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 80} y1="0" x2={i * 80} y2="320" stroke="rgba(247,251,249,0.12)" strokeWidth="1" />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 80} x2="320" y2={i * 80} stroke="rgba(247,251,249,0.12)" strokeWidth="1" />
            ))}
            <rect className="hero-box" x="80" y="80" width="160" height="160" fill="none" stroke="url(#g1)" strokeWidth="2" />
            <circle cx="80" cy="80" r="5" fill="#8fd9b6" />
            <circle cx="240" cy="240" r="5" fill="#8fd9b6" />
            <rect x="120" y="120" width="80" height="80" fill="rgba(143,217,182,0.12)" stroke="#8fd9b6" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      <style>{`
        .hero {
          background: var(--forest-deep);
          color: var(--snow);
          padding: 72px 0 88px;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 48px;
        }
        .hero-eyebrow {
          color: var(--mint);
          font-weight: 600;
          animation: fade-in-up 0.7s both;
        }
        .hero-name {
          font-size: clamp(2.4rem, 5vw, 4rem);
          line-height: 1.05;
          color: var(--snow);
          margin-bottom: 20px;
          animation: fade-in-up 0.8s 0.08s both;
        }
        .hero-desc {
          max-width: 62ch;
          color: var(--snow-dim);
          font-size: 1.05rem;
          animation: fade-in-up 0.8s 0.16s both;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 32px;
          flex-wrap: wrap;
          animation: fade-in-up 0.8s 0.24s both;
        }
        .hero-stack {
          display: flex;
          gap: 10px;
          margin-top: 36px;
          flex-wrap: wrap;
          animation: fade-in-up 0.8s 0.32s both;
        }
        .hero-stack-item {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(143, 217, 182, 0.28);
          border-radius: 10px;
          color: var(--mint);
          background: rgba(143, 217, 182, 0.08);
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .hero-stack-item .tech-svg {
          width: 28px;
          height: 28px;
          color: var(--mint);
        }
        .hero-stack-item:hover {
          transform: translateY(-4px) scale(1.06);
          background: rgba(143, 217, 182, 0.18);
        }
        .hero-grid {
          max-width: 320px;
          justify-self: end;
          position: relative;
          animation: fade-in-up 1s 0.2s both;
        }
        .hero-orbit-icon {
          position: absolute;
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(12, 51, 39, 0.85);
          border: 1px solid rgba(143, 217, 182, 0.4);
          color: var(--mint);
          animation: float-y 3.4s ease-in-out infinite;
          z-index: 1;
        }
        .hero-orbit-icon .tech-svg {
          width: 22px;
          height: 22px;
          color: var(--mint);
        }
        .hero-box {
          transform-origin: 160px 160px;
          animation: spin 28s linear infinite;
        }
        @media (max-width: 860px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }
          .hero-grid {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
