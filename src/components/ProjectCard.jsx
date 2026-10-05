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
        <h3 className="pcard-title">{title}</h3>
        <p className="pcard-desc">{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="pcard-stack-group">
            <h4>Texnologiyalar:</h4>
            <div className="pcard-tags">
              {technologies.map((t, idx) => (
                <span key={idx} className="pcard-tag tech-tag">{t}</span>
              ))}
            </div>
          </div>
        )}

        {tools && tools.length > 0 && (
          <div className="pcard-stack-group">
            <h4>Vositalar (Tools):</h4>
            <div className="pcard-tags">
              {tools.map((t, idx) => (
                <span key={idx} className="pcard-tag tool-tag">{t}</span>
              ))}
            </div>
          </div>
        )}
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
          border-radius: 14px;
          overflow: hidden;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        .pcard-wrapper:hover {
          border-color: var(--accent);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.65), 0 0 25px rgba(255, 215, 0, 0.2);
        }
        .pcard-image {
          width: 100%;
          height: 160px;
          background: #000;
          overflow: hidden;
          position: relative;
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
          padding: 16px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .pcard-title {
          font-size: 1.1rem;
          color: var(--ink);
          margin: 0 0 8px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pcard-desc {
          color: var(--ink-soft);
          font-size: 0.84rem;
          line-height: 1.48;
          margin: 0 0 14px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-grow: 1;
        }
        .pcard-stack-group {
          margin-bottom: 10px;
        }
        .pcard-stack-group h4 {
          font-size: 0.68rem;
          color: var(--ink);
          margin: 0 0 5px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 700;
        }
        .pcard-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .pcard-tag {
          font-size: 0.68rem;
          font-weight: 600;
          padding: 2px 7px;
          border-radius: 6px;
        }
        .tech-tag {
          background: rgba(255, 215, 0, 0.1);
          color: var(--accent);
          border: 1px solid rgba(255, 215, 0, 0.25);
        }
        .tool-tag {
          background: rgba(128, 128, 128, 0.1);
          color: var(--ink);
          border: 1px solid rgba(128, 128, 128, 0.2);
        }
        .pcard-actions {
          padding: 12px 16px;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          display: flex;
          gap: 10px;
        }
        .pcard-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-align: center;
          padding: 8px 10px;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 6px;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .pcard-btn svg {
          width: 15px;
          height: 15px;
        }
        .pcard-btn.primary {
          background: var(--accent);
          color: #fff;
        }
        .pcard-btn.primary:hover {
          filter: brightness(1.1);
        }
        .pcard-btn.ghost {
          background: rgba(128, 128, 128, 0.1);
          color: var(--ink);
          border: 1px solid transparent;
        }
        .pcard-btn.ghost:hover {
          background: rgba(128, 128, 128, 0.2);
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
