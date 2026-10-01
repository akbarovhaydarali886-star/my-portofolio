const fs = require('fs');

const pcard = `import { useLanguage } from '../context/LanguageContext'

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
          <a href={github} target="_blank" rel="noopener noreferrer" className="pcard-btn ghost">GitHub</a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="pcard-btn primary">Saytga o'tish ↗</a>
        )}
      </div>

      <style>{\`
        .pcard-wrapper {
          display: flex;
          flex-direction: column;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
          height: 100%;
        }
        .pcard-wrapper:hover {
          border-color: var(--accent);
        }
        .pcard-image {
          width: 100%;
          height: 200px;
          background: #000;
          overflow: hidden;
        }
        .pcard-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .pcard-wrapper:hover .pcard-image img {
          transform: scale(1.03);
        }
        .pcard-body {
          padding: 24px;
          flex-grow: 1;
        }
        .pcard-title {
          font-size: 1.25rem;
          color: var(--ink);
          margin: 0 0 12px;
          font-weight: 700;
        }
        .pcard-desc {
          color: var(--ink-soft);
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0 0 24px;
        }
        .pcard-stack-group {
          margin-bottom: 16px;
        }
        .pcard-stack-group h4 {
          font-size: 0.75rem;
          color: var(--ink);
          margin: 0 0 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 700;
        }
        .pcard-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .pcard-tag {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .tech-tag {
          background: rgba(255, 215, 0, 0.1);
          color: var(--accent);
          border: 1px solid rgba(255, 215, 0, 0.2);
        }
        .tool-tag {
          background: rgba(128, 128, 128, 0.1);
          color: var(--ink);
          border: 1px solid rgba(128, 128, 128, 0.2);
        }
        .pcard-actions {
          padding: 16px 24px;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          display: flex;
          gap: 12px;
        }
        .pcard-btn {
          flex: 1;
          text-align: center;
          padding: 10px 16px;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        .pcard-btn.primary {
          background: var(--accent);
          color: #fff;
        }
        .pcard-btn.primary:hover {
          filter: brightness(1.1);
        }
        .pcard-btn.ghost {
          background: transparent;
          color: var(--ink);
          border: 1px solid var(--border-color);
        }
        .pcard-btn.ghost:hover {
          background: rgba(128, 128, 128, 0.05);
        }
        [data-theme="light"] .pcard-btn.primary {
          color: #fff;
        }
        [data-theme="dark"] .pcard-btn.primary {
          color: #000;
        }
      \`}</style>
    </div>
  )
}
`;

fs.writeFileSync('src/components/ProjectCard.jsx', pcard);
console.log('done updating ProjectCard');
