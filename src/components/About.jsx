import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <Reveal>
          <p className="eyebrow">Men haqimda</p>
          <h2 className="about-title text-4xl mb-6">Ta'lim va Tajriba</h2>
          <p className="about-text text-[var(--ink-soft)] text-lg mb-4">
            Men 2 yillik tajribaga ega Frontend dasturchiman. Shu vaqt davomida zamonaviy veb texnologiyalarini chuqur o'rganib, ko'plab real loyihalarda ishtirok etdim. Asosiy maqsadim — foydalanuvchilar uchun qulay, tezkor va chiroyli interfeyslar yaratish.
          </p>
        </Reveal>

        <Reveal delay={120} className="about-edu mt-8">
          <p className="eyebrow">Ta'lim</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-[rgba(17,34,64,0.5)] border border-[var(--border-color)] backdrop-blur-md">
              <h3 className="text-white font-semibold mb-1 text-base">Najot Ta'lim</h3>
              <p className="text-sm text-slate-400">Frontend Dasturlash (Bootcamp)</p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(17,34,64,0.5)] border border-[var(--border-color)] backdrop-blur-md">
              <h3 className="text-white font-semibold mb-1 text-base">IT Live</h3>
              <p className="text-sm text-slate-400">Web Dasturlash Asoslari</p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(17,34,64,0.5)] border border-[var(--border-color)] backdrop-blur-md">
              <h3 className="text-white font-semibold mb-1 text-base">IT Shaharcha</h3>
              <p className="text-sm text-slate-400">Dasturlash va Texnologiyalar</p>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .about-inner {
          display: grid;
          grid-template-columns: 1.4fr 0.9fr;
          gap: 56px;
        }
        .about-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin-bottom: 20px;
          max-width: 20ch;
        }
        .about-text {
          color: var(--ink-soft);
          max-width: 62ch;
          margin-bottom: 16px;
        }
        .edu-card {
          border-left: 3px solid var(--forest);
          padding: 4px 0 4px 20px;
          transition: padding-left 0.25s ease, border-color 0.25s ease;
        }
        .about-edu.is-visible .edu-card:hover {
          padding-left: 26px;
        }
        .edu-card h3 {
          font-size: 1.1rem;
          margin-bottom: 6px;
        }
        .edu-card p {
          color: var(--ink-soft);
          margin: 0;
        }
        @media (max-width: 780px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  )
}
