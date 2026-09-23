import Reveal from './Reveal.jsx'
import TechIcon, { TECH_STACK } from './TechIcons.jsx'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container relative z-10">
        <Reveal>
          <p className="eyebrow">Ko'nikmalar</p>
          <h2 className="skills-title">Texnologiyalar & Vositalar</h2>
        </Reveal>

        <div className="skills-grid">
          {TECH_STACK.map((s, i) => (
            <Reveal key={s.id} delay={i * 70} className="skill-card">
              <span className="skill-icon">
                <TechIcon id={s.id} />
              </span>
              <span className="skill-info">
                <span className="skill-name">{s.name}</span>
                <span className="skill-group">{s.group}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .skills {
          background: var(--bg-secondary);
          overflow: hidden;
        }
        .skills-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin: 0 0 40px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .skill-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 16px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        .skill-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
        }
        .skill-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          transition: all 0.3s ease;
        }
        .skill-card:hover .skill-icon {
          background: #ffffff;
          color: #000000;
        }
        .skill-info {
          display: flex;
          flex-direction: column;
        }
        .skill-name {
          font-weight: 700;
          color: #ffffff;
          transition: color 0.3s ease;
        }
        .skill-card:hover .skill-name {
          color: var(--accent);
        }
        .skill-group {
          font-size: 0.75rem;
          color: var(--ink-soft);
        }
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
