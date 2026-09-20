import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <Reveal>
          <p className="eyebrow">Men haqimda</p>
          <p className="about-text">
            Men Akbarov Haydarali, 2010-yil 31-oktabrda Qashqadaryo viloyati
            Qarshi shahrida tug'ilganman. Frontend sohasida 2 yildan beri
            o'rganib kelaman va hozirda shu yo'nalishda amaliy tajribaga
            egaman. Har bir loyihani foydalanuvchi nuqtai nazaridan ko'rib
            chiqishga, toza va tushunarli kod yozishga harakat qilaman.
          </p>
          <p className="about-text">
            Keyingi maqsadim — backend yo'nalishini ham chuqur o'rganib,
            to'liq full-stack dasturchi sifatida loyihalarni boshidan
            oxirigacha mustaqil qura olish.
          </p>
        </Reveal>

        <Reveal delay={120} className="about-edu">
          <p className="eyebrow">Ta'lim</p>
          <div className="edu-card">
            <h3>Sirdaryo pedagogika kolleji</h3>
            <p>Sirdaryo viloyati, Sirdaryo tumani</p>
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
