export default function ProjectCard({ project }) {
  const { title, description, image, link, tags } = project

  const CardInner = (
    <>
      <div className="aspect-[16/10] bg-black overflow-hidden relative">
        {image ? (
          <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0f172a] to-[#020617]" aria-hidden="true" />
        )}
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow bg-[rgba(15,23,42,0.5)] backdrop-blur-md">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        {description && <p className="text-[var(--ink-soft)] text-sm mb-6 whitespace-pre-wrap leading-relaxed">{description}</p>}
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {tags.map((t, idx) => (
              <span key={idx} className="text-xs font-semibold bg-[rgba(56,189,248,0.1)] text-[var(--accent)] px-3 py-1 rounded-full border border-[rgba(56,189,248,0.2)]">
                {t}
              </span>
            ))}
          </div>
        )}

        {link && (
          <span className="inline-flex items-center text-sm font-bold text-white group-hover:text-[var(--accent)] transition-colors">
            View Project <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </span>
        )}
      </div>
    </>
  )

  return (
    <>
      {link ? (
        <a className="group flex flex-col h-full rounded-2xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--border-hover)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-300" href={link} target="_blank" rel="noopener noreferrer">
          {CardInner}
        </a>
      ) : (
        <div className="group flex flex-col h-full rounded-2xl overflow-hidden border border-[var(--border-color)]">{CardInner}</div>
      )}
    </>
  )
}