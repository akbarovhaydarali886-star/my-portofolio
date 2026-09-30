export default function ProjectCard({ project }) {
  const { title, description, image, link, github, technologies, tools } = project

  return (
    <div className="pcard-wrapper">
      <div className="pcard-inner">
        {/* FRONT SIDE */}
        <div className="pcard-front">
          <div className="pcard-image">
            {image ? (
              <img src={image} alt={title} loading="lazy" />
            ) : (
              <div className="pcard-placeholder" aria-hidden="true" />
            )}
            <div className="pcard-image-overlay">
              <span className="pcard-hint">Batafsil ⟳</span>
            </div>
          </div>
          <div className="pcard-front-body">
            <h3>{title}</h3>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="pcard-back">
          <div className="pcard-back-scroll">
            <h3 className="pcard-back-title">{title}</h3>
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
        </div>
      </div>

      <style>{`
        .pcard-wrapper {
          perspective: 1200px;
          height: 380px;
          width: 100%;
        }
        .pcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: left;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
          border-radius: 12px;
        }
        .pcard-wrapper:hover .pcard-inner {
          transform: rotateY(180deg);
        }
        .pcard-front, .pcard-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          overflow: hidden;
          background: rgba(17, 34, 64, 0.95);
        }
        .pcard-front {
          display: flex;
          flex-direction: column;
        }
        .pcard-back {
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
        }
        .pcard-image {
          position: relative;
          flex-grow: 1;
          background: #000;
          overflow: hidden;
        }
        .pcard-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .pcard-wrapper:hover .pcard-image img {
          transform: scale(1.05);
        }
        .pcard-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,25,47,0.9) 0%, transparent 50%);
          display: flex;
          align-items: flex-end;
          padding: 16px;
        }
        .pcard-hint {
          color: var(--accent);
          font-size: 0.8rem;
          font-weight: 600;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .pcard-front-body {
          padding: 20px;
          background: var(--bg-main);
          border-top: 1px solid var(--border-color);
        }
        .pcard-front-body h3 {
          font-size: 1.2rem;
          color: var(--ink);
          margin: 0;
        }
        .pcard-back-scroll {
          padding: 24px 24px 0 24px;
          flex-grow: 1;
          overflow-y: auto;
        }
        .pcard-back-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .pcard-back-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .pcard-back-title {
          font-size: 1.2rem;
          color: var(--ink);
          margin: 0 0 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
        }
        .pcard-desc {
          color: var(--ink-soft);
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0 0 20px;
        }
        .pcard-stack-group {
          margin-bottom: 16px;
        }
        .pcard-stack-group h4 {
          font-size: 0.8rem;
          color: var(--ink);
          margin: 0 0 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
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
          background: rgba(255, 255, 255, 0.05);
          color: var(--ink);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .pcard-actions {
          padding: 16px 24px;
          background: var(--bg-main);
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
          color: #0a192f;
        }
        .pcard-btn.primary:hover {
          background: #ffea00;
          transform: translateY(-2px);
        }
        .pcard-btn.ghost {
          background: rgba(255,255,255,0.05);
          color: var(--ink);
          border: 1px solid var(--border-color);
        }
        .pcard-btn.ghost:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  )
}