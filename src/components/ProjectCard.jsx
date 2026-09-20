export default function ProjectCard({ project }) {
  const { title, description, image, link } = project

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
        {link && <span className="pcard-link">Ko'rish →</span>}
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
          display: block;
          background: var(--snow);
          border: 1px solid rgba(11,33,24,0.08);
          border-radius: var(--radius);
          overflow: hidden;
          transition: border-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }
        a.pcard:hover {
          border-color: var(--forest);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 16px 32px rgba(11, 33, 24, 0.08);
        }
        .pcard-image {
          aspect-ratio: 16 / 10;
          background: var(--snow-dim);
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
          background: linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 100%);
        }
        .pcard-body {
          padding: 20px 22px 24px;
        }
        .pcard-body h3 {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        .pcard-body p {
          color: var(--ink-soft);
          font-size: 0.92rem;
          margin: 0 0 12px;
        }
        .pcard-link {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--forest);
          transition: transform 0.2s ease;
        }
        a.pcard:hover .pcard-link {
          transform: translateX(4px);
        }
      `}</style>
    </>
  )
}