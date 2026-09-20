import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'

export default function Projects() {

  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Loyihalar</p>
          <h2 className="projects-title">Qilgan ishlarim</h2>
        </Reveal>

        {projects.length === 0 ? (
          <Reveal delay={80}>
            <div className="projects-empty">
              <p>Loyihalar hali qo'shilmagan — tez orada shu yerga joylanadi.</p>
            </div>
          </Reveal>
        ) : (
          <div className="projects-grid">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .projects-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin: 0 0 36px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .projects-empty {
          border: 1px dashed rgba(11,33,24,0.2);
          border-radius: var(--radius);
          padding: 48px 24px;
          text-align: center;
          color: var(--ink-soft);
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 620px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
