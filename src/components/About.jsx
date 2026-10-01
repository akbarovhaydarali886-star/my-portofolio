import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal.jsx'

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <Reveal>
          <p className="eyebrow">{t("about_eyebrow")}</p>
          <h2 className="about-title">{t("about_title")}</h2>
          <p className="about-text">
            {t("about_p1")}
          </p>
        </Reveal>

        <Reveal delay={120} className="about-edu">
          <p className="eyebrow">Ta'lim</p>
          <div className="edu-grid">
            <div className="edu-card">
              <h3>Najot Ta'lim</h3>
              <p>{t("about_edu_1_desc")}</p>
            </div>
            <div className="edu-card">
              <h3>{t("about_edu_2_title")}</h3>
              <p>{t("about_edu_2_desc")}</p>
            </div>
            <div className="edu-card">
              <h3>{t("about_edu_3_title")}</h3>
              <p>{t("about_edu_3_desc")}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .about-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin: 0 0 24px;
        }
        .about-text {
          color: var(--ink-soft);
          font-size: 1.1rem;
          max-width: 65ch;
          margin: 0 0 16px;
        }
        .about-edu {
          margin-top: 48px;
        }
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 16px;
        }
        .edu-card {
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          
        }
        .edu-card h3 {
          font-size: 1.05rem;
          color: #ffffff;
          margin: 0 0 4px;
        }
        .edu-card p {
          font-size: 0.85rem;
          color: var(--ink-soft);
          margin: 0;
        }
        @media (max-width: 768px) {
          .edu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
