import Reveal from './Reveal.jsx'
import TechIcon, { TECH_STACK } from './TechIcons.jsx'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Ko'nikmalar</p>
          <h2 className="skills-title">Ishlatadigan texnologiyalarim</h2>
        </Reveal>

        <div className="skills-grid">
          {TECH_STACK.map((s, i) => (
            <Reveal key={s.id} delay={i * 70} className="skill-chip">
              <span className="skill-icon">
                <TechIcon id={s.id} />
              </span>
              <span className="skill-copy">
                <span className="skill-name">{s.name}</span>
                <span className="skill-group">{s.group}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .skills {
          background: var(--snow-dim);
          overflow: hidden;
        }
        .skills-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin: 0 0 36px;
          max-width: 24ch;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .skill-chip {
          background: var(--snow);
          border: 1px solid rgba(11,33,24,0.08);
          border-radius: var(--radius);
          padding: 18px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: border-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, background 0.3s ease;
        }
        .skill-chip.is-visible:hover {
          border-color: var(--forest);
          transform: translateY(-6px) scale(1.02);
          background: #fff;
          box-shadow: 0 12px 24px rgba(11, 33, 24, 0.06);
        }
        .skill-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: rgba(14, 59, 46, 0.07);
          color: var(--forest);
        }
        .skill-chip:hover .skill-icon {
          background: var(--forest);
          color: var(--mint);
        }
        .skill-copy {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }
        .skill-name {
          font-weight: 700;
          color: var(--ink);
        }
        .skill-group {
          font-size: 0.8rem;
          color: var(--ink-soft);
        }
        @media (max-width: 780px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 460px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
