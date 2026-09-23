import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--bg-main)]">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Loyihalar</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">So'nggi Ishlarim</h2>
        </Reveal>

        {projects.length === 0 ? (
          <Reveal delay={80}>
            <div className="border border-dashed border-[var(--border-color)] rounded-xl p-12 text-center text-[var(--ink-soft)]">
              <p>Loyihalar hali qo'shilmagan — tez orada shu yerga joylanadi.</p>
            </div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 90} className="flex flex-col h-full">
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
