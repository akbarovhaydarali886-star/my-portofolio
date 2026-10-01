import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal.jsx'
import TechIcon, { TECH_STACK } from './TechIcons.jsx'

export default function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="skills">
      <div className="container relative z-10">
        <Reveal>
          <p className="eyebrow">{t("skills_eyebrow")}</p>
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
          padding-bottom: 64px;
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
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          padding: 16px 20px;
          border-radius: 12px;
        }
        .skill-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .skill-info {
          display: flex;
          flex-direction: column;
        }
        .skill-name {
          font-weight: 700;
          color: var(--ink);
          font-size: 1rem;
        }
        .skill-group {
          font-size: 0.8rem;
          color: var(--ink-soft);
          margin-top: 2px;
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
