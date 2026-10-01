import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Akbarov Haydarali. {t('footer_text')}
        </p>
      </div>

      <style>{`
        .footer {
          padding: 32px 0;
          background: var(--bg-main);
          border-top: 1px solid var(--border-color);
          text-align: center;
        }
        .footer-copyright {
          color: var(--ink-soft);
          font-size: 0.95rem;
          margin: 0;
        }
      `}</style>
    </footer>
  )
}