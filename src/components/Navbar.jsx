import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Philosophy' },
  { href: '#skills', label: 'Stack' },
  { href: '#projects', label: 'Case Studies' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          <span className="text-[var(--accent)]">HA</span> <span className="text-[var(--border-color)]">//</span> Software Engineer
        </a>

        <nav className="navbar-links navbar-links-desktop">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

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

      {open && (
        <nav className="navbar-links navbar-links-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: saturate(180%) blur(10px);
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
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .navbar-logo::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #ffffff;
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
          background: #ffffff;
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
          color: #ffffff;
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
          background: #ffffff;
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
            color: #ffffff;
            font-weight: 600;
          }
        }
      `}</style>
    </header>
  )
}