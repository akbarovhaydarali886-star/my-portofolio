import Reveal from './Reveal.jsx'

const CONTACTS = [
  {
    label: 'Email',
    value: 'akbarovhaydarali886@gmail.com',
    href: 'mailto:akbarovhaydarali886@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  },
  {
    label: 'Telefon',
    value: '+998 88 083 19 88',
    href: 'tel:+998880831988',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    value: '@haydaraliakbarov',
    href: 'https://t.me/haydaraliakbarov',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>
    ),
  },
  {
    label: 'Telegram Bot',
    value: '@haydaraliportfolio_bot',
    href: 'https://t.me/haydaraliportfolio_bot',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="12" rx="2"></rect>
        <path d="M12 8V4"></path>
        <circle cx="12" cy="3" r="1"></circle>
        <path d="M8 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M10 18h4"></path>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'akbarovhaydarali886-star',
    href: 'https://github.com/akbarovhaydarali886-star',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact on-dark">
      <div className="container contact-inner">
        <Reveal>
          <p className="eyebrow contact-eyebrow">Aloqa</p>
          <h2 className="contact-title">Loyihangiz bormi? Yozing.</h2>
          <p className="contact-text">
            Yangi loyihalar va hamkorlik uchun doim ochiqman. Menga elektron pochta orqali yoki Telegramdan yozishingiz mumkin. Tez orada javob berishga harakat qilaman.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="/Akbarov_Haydarali_CV.pdf" download="Akbarov_Haydarali_CV.pdf" className="btn btn-primary">
              Rezyume (CV) yuklab olish ⬇
            </a>
            <a 
              href="https://t.me/haydaraliportfolio_bot" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ghost tg-bot-btn"
            >
              🤖 Telegram Bot orqali buyurtma berish
            </a>
          </div>

          <div className="bot-card-preview">
            <div className="bot-card-badge">
              <span className="dot-pulse"></span> @haydaraliportfolio_bot
            </div>
            <p className="bot-card-title">Loyihangiz uchun tezkor buyurtma bering</p>
            <p className="bot-card-desc">Botga kiring, o'zingiz va loyihangiz haqida ma'lumot bering va mos texnologiyani tanlang:</p>
            <div className="bot-tech-pills">
              <span className="bot-tech-pill react-pill">⚛️ React.js <small>(Qiyin ishlar uchun)</small></span>
              <span className="bot-tech-pill next-pill">▲ Next.js <small>(Oson ishlar uchun)</small></span>
              <span className="bot-tech-pill vue-pill">🟢 Vue.js <small>(Oson ishlar uchun)</small></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', flexWrap: 'wrap', gap: '8px' }}>
              <p className="bot-card-footer">📢 Barcha arizalar zudlik bilan Telegram kanalga yuboriladi</p>
              <a 
                href="https://t.me/haydaraliportfolio_bot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ fontSize: '0.85rem', padding: '6px 14px' }}
              >
                Botni ochish ↗
              </a>
            </div>
          </div>
        </Reveal>

        <div className="contact-list">
          {CONTACTS.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 80}
              as="a"
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-meta">
                <span className="contact-icon">{c.icon}</span>
                <span className="contact-label">{c.label}</span>
              </span>
              <span className="contact-value">{c.value}</span>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .contact {
          background: var(--bg-main);
          color: var(--ink);
        }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        .contact-eyebrow {
          color: var(--accent);
        }
        .contact-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          color: var(--ink);
          margin: 0 0 16px;
          max-width: 16ch;
        }
        .contact-text {
          color: var(--ink-soft);
          max-width: 46ch;
        }
        .contact-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border-color);
        }
        a.contact-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 18px 4px;
          border-bottom: 1px solid var(--border-color);
          transition: background 0.2s ease, padding-left 0.25s ease;
        }
        a.contact-item.is-visible:hover {
          padding-left: 8px;
        }
        .contact-meta {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .contact-icon {
          color: var(--accent);
          display: grid;
          place-items: center;
        }
        .contact-label {
          color: var(--accent);
          font-size: 0.85rem;
          font-weight: 700;
        }
        .contact-value {
          color: var(--ink);
          font-weight: 600;
          text-align: right;
        }
        .tg-bot-btn {
          border-color: #229ED9;
          color: #229ED9;
          background: rgba(34, 158, 217, 0.08);
          transition: all 0.25s ease;
        }
        .tg-bot-btn:hover {
          background: rgba(34, 158, 217, 0.2);
          border-color: #229ED9;
          transform: translateY(-2px);
        }
        .bot-card-preview {
          margin-top: 28px;
          padding: 20px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }
        .bot-card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #229ED9;
          background: rgba(34, 158, 217, 0.12);
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 12px;
        }
        .dot-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #229ED9;
          box-shadow: 0 0 8px #229ED9;
        }
        .bot-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 6px;
        }
        .bot-card-desc {
          font-size: 0.88rem;
          color: var(--ink-soft);
          margin: 0 0 14px;
        }
        .bot-tech-pills {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 14px;
        }
        .bot-tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 12px;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--ink);
        }
        .bot-tech-pill small {
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--ink-soft);
        }
        .react-pill {
          border-color: rgba(97, 218, 251, 0.3);
        }
        .next-pill {
          border-color: rgba(255, 255, 255, 0.25);
        }
        .vue-pill {
          border-color: rgba(66, 184, 131, 0.35);
        }
        .bot-card-footer {
          font-size: 0.8rem;
          color: var(--accent);
          margin: 0;
          font-weight: 500;
        }
        @media (max-width: 780px) {
          .contact-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
