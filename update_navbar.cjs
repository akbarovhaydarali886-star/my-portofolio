const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.jsx', 'utf-8');

// replace LINKS and navbar definition
content = content.replace(/const LINKS = \[[\s\S]*?\]\s*export default function Navbar\(\) {\s*const \{ t \} = useLanguage\(\);/,
`export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const LINKS = [
    { href: '#about', label: t('nav_about') },
    { href: '#skills', label: t('nav_skills') },
    { href: '#projects', label: t('nav_projects') },
    { href: '#contact', label: t('nav_contact') },
  ];`);

// replace desktop nav
content = content.replace(/<nav className="navbar-links navbar-links-desktop">[\s\S]*?<\/nav>/,
`<div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <nav className="navbar-links navbar-links-desktop">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          
          <div className="lang-switcher">
            <button className={lang === 'uz' ? 'active' : ''} onClick={() => setLang('uz')}>UZ</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'ru' ? 'active' : ''} onClick={() => setLang('ru')}>RU</button>
          </div>`);

// close the div after the button
content = content.replace(/<\/button>\s*<\/div>\s*\{open/g, `<\/button>\n        <\/div>\n      <\/div>\n\n      {open`);

// replace mobile nav
content = content.replace(/<\/nav>\s*\)}/g, 
`  <div className="lang-switcher lang-switcher-mobile">
            <button className={lang === 'uz' ? 'active' : ''} onClick={() => setLang('uz')}>UZ</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'ru' ? 'active' : ''} onClick={() => setLang('ru')}>RU</button>
          </div>
        </nav>
      )}`);

// inject css
content = content.replace(/<\/style>/, `
        .lang-switcher {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .lang-switcher button {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.6);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .lang-switcher button:hover {
          border-color: #38bdf8;
          color: #38bdf8;
        }
        .lang-switcher button.active {
          background: rgba(56, 189, 248, 0.15);
          border-color: #38bdf8;
          color: #38bdf8;
        }
        .lang-switcher-mobile {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
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
      </style>`);

fs.writeFileSync('src/components/Navbar.jsx', content);
console.log('done');
