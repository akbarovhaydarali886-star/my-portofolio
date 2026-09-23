import Reveal from './Reveal.jsx'

const SKILL_GROUPS = [
  {
    title: 'Core & Languages',
    items: ['TypeScript', 'ESNext', 'Go (Golang)']
  },
  {
    title: 'Frontend Ecosystem',
    items: ['React 19', 'Next.js (App Router)', 'Vue.js', 'State Machines', 'Tailwind CSS']
  },
  {
    title: 'Backend & Data',
    items: ['RESTful APIs', 'Webhooks', 'Goroutines/Concurrency', 'PostgreSQL', 'Redis']
  },
  {
    title: 'DevOps & Performance',
    items: ['Docker', 'CI/CD Actions', 'Web Vitals', 'Vercel Edge', 'Render']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[var(--bg-secondary)]">
      <div className="container relative z-10">
        <Reveal>
          <p className="eyebrow text-[var(--accent)] tracking-widest text-sm font-semibold uppercase mb-2">Technical Matrix</p>
          <h2 className="skills-title text-3xl md:text-5xl font-bold text-white mb-16">Tech Stack & Infrastructure</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 100} className="flex flex-col">
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-[var(--border-color)] pb-3">{group.title}</h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
