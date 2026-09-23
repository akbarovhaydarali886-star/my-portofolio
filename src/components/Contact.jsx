import Reveal from './Reveal.jsx'

const CONTACTS = [
  {
    label: 'Email',
    value: 'akbarovhaydarali886@gmail.com',
    href: 'mailto:akbarovhaydarali886@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 7 L12 13 L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Telefon',
    value: '+998 88 083 19 88',
    href: 'tel:+998880831988',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
        <path d="M7 3 H11 L12.5 7 L10 8.5 C11 11 13 13 15.5 14 L17 11.5 L21 13 V17 C21 18 20 19 19 19 C11 19 5 13 5 5 C5 4 6 3 7 3 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    value: '@haydaraliakbarov',
    href: 'https://t.me/haydaraliakbarov',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
        <path d="M4 12 L20 5 L16 19 L11 14 L7 17 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'akbarovhaydarali886-star',
    href: 'https://github.com/akbarovhaydarali886-star',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 19 C9 16 10 15 12 15 C14 15 15 16 15 19" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="9" cy="11" r="1" fill="currentColor" />
        <circle cx="15" cy="11" r="1" fill="currentColor" />
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
        @media (max-width: 780px) {
          .contact-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
