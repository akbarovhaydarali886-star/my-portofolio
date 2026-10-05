import { useLanguage } from '../context/LanguageContext'

export default function ProjectCard({ project }) {
  const { title, description, image, link, github, technologies, tools } = project

  return (
    <div className="pcard-wrapper">
      <div className="pcard-image">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <div className="pcard-placeholder" aria-hidden="true" />
        )}
      </div>
      
      <div className="pcard-body">
        <h3 className="pcard-title" title={title}>{title}</h3>
        <p className="pcard-desc">{description}</p>
        
        <div className="pcard-tags-area">
          {technologies && technologies.map((t, idx) => (
            <span key={'tech-' + idx} className="pcard-tag tech-tag">{t}</span>
          ))}
          {tools && tools.map((t, idx) => (
            <span key={'tool-' + idx} className="pcard-tag tool-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="pcard-actions">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="pcard-btn ghost">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="pcard-btn primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Saytga o'tish
          </a>
        )}
      </div>

      <style>{`
        .pcard-wrapper {
          transform-style: preserve-3d;
          transition: border-color 0.25s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          height: 100%;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.4);
        }
        .pcard-wrapper:hover {
          border-color: var(--accent);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.65), 0 0 20px rgba(255, 215, 0, 0.2);
        }
        .pcard-image {
          width: 100%;
          height: 48%;
          min-height: 150px;
          max-height: 180px;
          background: #050b14;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }
        .pcard-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .pcard-wrapper:hover .pcard-image img {
          transform: scale(1.05);
        }
        .pcard-body {
          padding: 8px 10px 4px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          overflow: hidden;
        }
        .pcard-title {
          font-size: 0.92rem;
          color: var(--ink);
          margin: 0 0 3px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pcard-desc {
          color: var(--ink-soft);
          font-size: 0.74rem;
          line-height: 1.32;
          margin: 0 0 6px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pcard-tags-area {
          display: flex;
          flex-wrap: wrap;
          gap: 3px;
          margin-top: auto;
          margin-bottom: 4px;
          max-height: 38px;
          overflow: hidden;
        }
        .pcard-tag {
          font-size: 0.62rem;
          font-weight: 600;
          padding: 1px 5px;
          border-radius: 4px;
          line-height: 1.2;
        }
        .tech-tag {
          background: rgba(255, 215, 0, 0.12);
          color: var(--accent);
          border: 1px solid rgba(255, 215, 0, 0.25);
        }
        .tool-tag {
          background: rgba(128, 128, 128, 0.12);
          color: var(--ink);
          border: 1px solid rgba(128, 128, 128, 0.2);
        }
        .pcard-actions {
          padding: 6px 10px;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          display: flex;
          gap: 6px;
          flex-shrink: 0;
        }
        .pcard-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          text-align: center;
          padding: 5px 6px;
          font-size: 0.72rem;
          font-weight: 600;
          border-radius: 5px;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .pcard-btn svg {
          width: 12px;
          height: 12px;
        }
        .pcard-btn.primary {
          background: var(--accent);
          color: #fff;
        }
        .pcard-btn.primary:hover {
          filter: brightness(1.1);
        }
        .pcard-btn.ghost {
          background: rgba(128, 128, 128, 0.12);
          color: var(--ink);
          border: 1px solid transparent;
        }
        .pcard-btn.ghost:hover {
          background: rgba(128, 128, 128, 0.22);
        }
        [data-theme="light"] .pcard-btn.primary {
          color: #fff;
        }
        [data-theme="dark"] .pcard-btn.primary {
          color: #000;
        }
      `}</style>
    </div>
  )
}
