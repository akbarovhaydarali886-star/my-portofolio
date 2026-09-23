export default function ProjectCard({ project }) {
  const { title, description, image, link, tags } = project

  const CardInner = (
    <>
      <div className="pcard-image">
        {image ? (
          <img src={image} alt={title} loading="lazy" />
        ) : (
          <div className="pcard-placeholder" aria-hidden="true" />
        )}
      </div>
      <div className="pcard-body">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        
        {tags && tags.length > 0 && (
          <div className="pcard-tags">
            {tags.map((t, idx) => (
              <span key={idx} className="pcard-tag">{t}</span>
            ))}
          </div>
        )}

        {link && <span className="pcard-link">View Project →</span>}
      </div>
    </>
  )

  return (
    <>
      {link ? (
        <a className="pcard" href={link} target="_blank" rel="noopener noreferrer">
          {CardInner}
        </a>
      ) : (
        <div className="pcard">{CardInner}</div>
      )}

      <style>{`
        .pcard {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius);
          overflow: hidden;
          transition: border-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }
        a.pcard:hover {
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5);
        }
        .pcard-image {
          aspect-ratio: 16 / 10;
          background: rgba(0, 0, 0, 1);
          overflow: hidden;
        }
        .pcard-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }
        a.pcard:hover .pcard-image img {
          transform: scale(1.06);
        }
        .pcard-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #111, #222);
        }
        .pcard-body {
          padding: 20px 22px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .pcard-body h3 {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        .pcard-body p {
          color: var(--ink-soft);
          font-size: 0.92rem;
          margin: 0 0 16px;
          white-space: pre-wrap;
          line-height: 1.6;
        }
        .pcard-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
          margin-top: auto;
        }
        .pcard-tag {
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 4px 10px;
          border-radius: 40px;
        }
        .pcard-link {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
          transition: transform 0.2s ease;
        }
        a.pcard:hover .pcard-link {
          transform: translateX(4px);
        }
      `}</style>
    </>
  )
}