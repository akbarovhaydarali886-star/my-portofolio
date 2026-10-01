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
      <div className="container">
        <div className="contact-inner">
          <Reveal>
            <p className="eyebrow contact-eyebrow">Aloqa</p>
            <h2 className="contact-title">Loyihangiz bormi? Yozing.</h2>
            <p className="contact-text">
              Yangi loyihalar va hamkorlik uchun doim ochiqman. Menga elektron pochta orqali yoki Telegramdan yozishingiz mumkin. Tez orada javob berishga harakat qilaman.
            </p>
            <div style={{ marginTop: '24px' }}>
              <a href="/Akbarov_Haydarali_CV.pdf" download="Akbarov_Haydarali_CV.pdf" className="btn btn-primary">
                Rezyume (CV) yuklab olish ⬇
              </a>
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

            <Reveal delay={CONTACTS.length * 80}>
              <a 
                href="https://t.me/haydaraliportfolio_bot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-bot-outline-btn"
              >
                <span className="bot-icon">🤖</span>
                <span>Telegram Bot orqali buyurtma berish</span>
              </a>
            </Reveal>
          </div>
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
        .contact-bot-outline-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 16px;
          padding: 16px;
          border: 1px solid rgba(34, 158, 217, 0.4);
          border-radius: 8px;
          color: #229ED9;
          font-weight: 600;
          font-size: 1rem;
          background: rgba(34, 158, 217, 0.05);
          transition: all 0.25s ease;
        }
        .contact-bot-outline-btn:hover {
          background: rgba(34, 158, 217, 0.15);
          border-color: #229ED9;
          transform: translateY(-2px);
        }
        .bot-icon {
          font-size: 1.2rem;
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
