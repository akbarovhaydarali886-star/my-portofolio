import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const LANGS = {
    uz: { label: 'UZ', flag: '🇺🇿' },
    en: { label: 'EN', flag: '🇺🇸' },
    ru: { label: 'RU', flag: '🇷🇺' }
  };

  const LINKS = [
    { href: '#about', label: t('nav_about') },
    { href: '#skills', label: t('nav_skills') },
    { href: '#projects', label: t('nav_projects') },
    { href: '#contact', label: t('nav_contact') },
  ];
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          Haydarali
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <nav className="navbar-links navbar-links-desktop">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          
          <div className="nav-controls">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <div className="custom-lang-select" onClick={() => setLangOpen(!langOpen)}>
              <div className="selected-lang">
                <span>{LANGS[lang]?.flag}</span>
                <span>{LANGS[lang]?.label}</span>
                <span className="chevron" style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
              </div>
              {langOpen && (
                <div className="dropdown-options">
                  {Object.entries(LANGS).filter(([k]) => k !== lang).map(([k, v]) => (
                    <div key={k} className="dropdown-option" onClick={() => { setLang(k); setLangOpen(false); }}>
                      <span>{v.flag}</span>
                      <span>{v.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        <button
          className="navbar-toggle"
          aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        </div>
      </div>

      {open && (
        <nav className="navbar-links navbar-links-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="nav-controls nav-controls-mobile">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <div className="custom-lang-select" onClick={() => setLangOpen(!langOpen)}>
              <div className="selected-lang">
                <span>{LANGS[lang]?.flag}</span>
                <span>{LANGS[lang]?.label}</span>
                <span className="chevron" style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
              </div>
              {langOpen && (
                <div className="dropdown-options">
                  {Object.entries(LANGS).filter(([k]) => k !== lang).map(([k, v]) => (
                    <div key={k} className="dropdown-option" onClick={() => { setLang(k); setLangOpen(false); }}>
                      <span>{v.flag}</span>
                      <span>{v.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      )}

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--bg-main);
          /* backdrop-filter removed for performance */
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.25s ease;
        }
        .navbar-scrolled {
          border-bottom-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .navbar-logo {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--ink);
          position: relative;
        }
        .navbar-logo::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: var(--ink);
          transition: width 0.25s ease;
        }
        .navbar-logo:hover::after {
          width: 100%;
        }
        .navbar-links a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--ink-soft);
          position: relative;
          transition: color 0.15s ease;
        }
        .navbar-links-desktop a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: var(--ink);
          transition: width 0.22s ease;
        }
        .navbar-links-desktop a:hover::after {
          width: 100%;
        }
        .navbar-links-desktop {
          display: flex;
          gap: 32px;
        }
        .navbar-links a:hover {
          color: var(--ink);
        }
        .navbar-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
        }
        .navbar-toggle span {
          width: 22px;
          height: 2px;
          background: var(--ink);
        }
        .navbar-links-mobile {
          display: none;
        }
        @media (max-width: 780px) {
          .navbar-links-desktop {
            display: none;
          }
          .navbar-toggle {
            display: flex;
          }
          .navbar-links-mobile {
            display: flex;
            flex-direction: column;
            padding: 8px 24px 20px;
            background: var(--bg-secondary);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          .navbar-links-mobile a {
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--ink);
            font-weight: 600;
          }
        }
        .nav-controls { display: flex; align-items: center; gap: 16px; }
        .theme-toggle {
          background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--ink);
          transition: transform 0.2s; display: grid; place-items: center;
        }
        .theme-toggle:hover { transform: scale(1.1); }
.custom-lang-select {
          position: relative;
          cursor: pointer;
          user-select: none;
        }
        .selected-lang {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 6px;
          background: rgba(128, 128, 128, 0.1);
          border: 1px solid var(--border-color);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--ink);
          transition: background 0.2s;
        }
        .selected-lang:hover {
          background: rgba(128, 128, 128, 0.15);
        }
        .chevron {
          font-size: 0.6rem;
          transition: transform 0.2s ease;
          margin-left: 4px;
        }
        .dropdown-options {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 100;
          min-width: 80px;
        }
        .dropdown-option {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--ink);
          transition: background 0.2s;
        }
        .dropdown-option:hover {
          background: rgba(128, 128, 128, 0.1);
        }
        .nav-controls-mobile {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(128, 128, 128, 0.1);
          justify-content: center;
        }
        @media (max-width: 780px) {
          .lang-switcher {
            display: none;
          }
          .lang-switcher-mobile {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}