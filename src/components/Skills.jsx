import Reveal from './Reveal.jsx'
import TechIcon, { TECH_STACK } from './TechIcons.jsx'

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[var(--bg-secondary)]">
      <div className="container relative z-10">
        <Reveal>
          <p className="eyebrow text-[var(--accent)] tracking-widest text-sm font-semibold uppercase mb-2">Ko'nikmalar</p>
          <h2 className="skills-title text-3xl md:text-5xl font-bold text-white mb-16">Texnologiyalar & Vositalar</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECH_STACK.map((s, i) => (
            <Reveal key={s.id} delay={i * 70} className="flex items-center gap-4 bg-[rgba(255,255,255,0.02)] border border-[var(--border-color)] p-4 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-[var(--border-hover)] hover:bg-[rgba(255,255,255,0.06)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] group">
              <span className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-[rgba(255,255,255,0.05)] text-white group-hover:bg-white group-hover:text-black transition-colors">
                <TechIcon id={s.id} />
              </span>
              <span className="flex flex-col min-w-0">
                <span className="font-bold text-white group-hover:text-[var(--accent)] transition-colors">{s.name}</span>
                <span className="text-xs text-[var(--ink-soft)]">{s.group}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
