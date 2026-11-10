import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'

export default function Projects() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState('3d'); // '3d' or 'grid'
  const [isPaused, setIsPaused] = useState(false);

  const total = projects.length;
  const angleStep = 360 / total;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header-row">
          <Reveal>
            <p className="eyebrow">{t("projects_eyebrow")}</p>
            <h2 className="projects-title">So'nggi Ishlarim</h2>
          </Reveal>

          <div className="projects-controls-bar">
            <div className="view-toggle-group">
              <button
                type="button"
                className={`view-btn ${viewMode === '3d' ? 'active' : ''}`}
                onClick={() => setViewMode('3d')}
                title="3D Charxpalak ko'rinishi"
              >
                <span>🎡</span> 3D Charxpalak
              </button>
              <button
                type="button"
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Oddiy kataklar ko'rinishi"
              >
                <span>⊞</span> Kataklar
              </button>
            </div>

            {viewMode === '3d' && (
              <div className="carousel-nav-buttons">
                <button
                  type="button"
                  className={`carousel-nav-btn pause-btn ${isPaused ? 'paused' : ''}`}
                  onClick={() => setIsPaused((p) => !p)}
                  aria-label={isPaused ? "Aylantirish" : "To'xtatish"}
                  title={isPaused ? "Aylantirish" : "To'xtatish"}
                >
                  {isPaused ? '▶' : '⏸'}
                </button>
              </div>
            )}
          </div>
        </div>

        {projects.length === 0 ? (
          <Reveal delay={80}>
            <div className="projects-empty">
              <p>Loyihalar hali qo'shilmagan — tez orada shu yerga joylanadi.</p>
            </div>
          </Reveal>
        ) : viewMode === '3d' ? (
          <div className="carousel-viewport-wrapper">
            <div className="carousel-stage">
              <div className={`carousel-track ${isPaused ? 'is-paused' : ''}`}>
                {projects.map((p, i) => (
                  <div
                    key={p.id}
                    className="carousel-slot"
                    style={{ '--angle': i * angleStep }}
                  >
                    <ProjectCard project={p} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .projects {
          background: var(--bg-main);
          padding-top: 80px;
          padding-bottom: 90px;
          position: relative;
        }
        .projects-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
        }
        .projects-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin: 0;
          color: var(--ink);
        }
        .projects-controls-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .view-toggle-group {
          display: inline-flex;
          background: rgba(128, 128, 128, 0.12);
          padding: 3px;
          border-radius: 9px;
          border: 1px solid var(--border-color);
        }
        .view-btn {
          background: transparent;
          border: none;
          color: var(--ink-soft);
          font-size: 0.82rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        .view-btn.active {
          background: var(--accent);
          color: #000;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        [data-theme="dark"] .view-btn.active {
          color: #000;
        }
        [data-theme="light"] .view-btn.active {
          color: #fff;
        }
        .carousel-nav-buttons {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .carousel-nav-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(128, 128, 128, 0.12);
          border: 1px solid var(--border-color);
          color: var(--ink);
          font-size: 0.95rem;
          font-weight: bold;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .carousel-nav-btn:hover {
          background: var(--accent);
          color: #000;
          border-color: var(--accent);
          transform: scale(1.08);
        }

        /* 3D Carousel Stage (Ramka) */
        :root {
          --card-w: 230px;
          --card-h: 330px;
          --radius: 460px;
          --track-z: -250px;
        }
        .carousel-viewport-wrapper {
          position: relative;
          width: 100%;
          padding: 10px 0 20px;
        }
        .carousel-stage {
          position: relative;
          width: 100%;
          height: 520px;
          perspective: 1400px;
          perspective-origin: 50% 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          background: radial-gradient(ellipse at center, rgba(255, 215, 0, 0.04) 0%, rgba(10, 25, 47, 0.3) 60%, transparent 100%);
          overflow: hidden;
          box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.35);
        }
        @keyframes spinCharxpalak {
          0% {
            transform: translateZ(var(--track-z)) rotateX(-2deg) rotateY(0deg);
          }
          100% {
            transform: translateZ(var(--track-z)) rotateX(-2deg) rotateY(360deg);
          }
        }
        .carousel-track {
          width: var(--card-w);
          height: var(--card-h);
          position: relative;
          transform-style: preserve-3d;
          animation: spinCharxpalak 50s linear infinite;
        }
        .carousel-track.is-paused {
          animation-play-state: paused;
        }
        .carousel-slot {
          position: absolute;
          top: 0;
          left: 0;
          width: var(--card-w);
          height: var(--card-h);
          transform: rotateY(calc(var(--angle) * 1deg)) translateZ(var(--radius));
          transform-style: preserve-3d;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Grid Mode */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .projects-empty {
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          padding: 48px 24px;
          text-align: center;
          color: var(--ink-soft);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          :root {
            --card-w: 210px;
            --card-h: 320px;
            --radius: 410px;
            --track-z: -220px;
          }
          .carousel-stage {
            height: 490px;
            perspective: 1250px;
          }
        }
        @media (max-width: 768px) {
          :root {
            --card-w: 190px;
            --card-h: 300px;
            --radius: 360px;
            --track-z: -190px;
          }
          .carousel-stage {
            height: 460px;
            perspective: 1100px;
          }
          .projects-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        @media (max-width: 480px) {
          :root {
            --card-w: 165px;
            --card-h: 280px;
            --radius: 310px;
            --track-z: -160px;
          }
          .carousel-stage {
            height: 430px;
            perspective: 950px;
          }
        }
      `}</style>
    </section>
  );
}
