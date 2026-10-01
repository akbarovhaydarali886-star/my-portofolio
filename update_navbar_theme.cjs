const fs = require('fs');
let navbar = fs.readFileSync('src/components/Navbar.jsx', 'utf-8');

// 1. Add useTheme import
if (!navbar.includes('useTheme')) {
  navbar = navbar.replace("import { useLanguage } from '../context/LanguageContext'", "import { useLanguage } from '../context/LanguageContext'\nimport { useTheme } from '../context/ThemeContext'");
}

// 2. Add useTheme hook inside component
navbar = navbar.replace("const { t, lang, setLang } = useLanguage();", "const { t, lang, setLang } = useLanguage();\n  const { theme, toggleTheme } = useTheme();");

// 3. Replace the desktop lang-switcher and add Theme toggle
const desktopControls = `<nav className="navbar-links navbar-links-desktop">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          
          <div className="nav-controls">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <div className="lang-switcher">
              <button className={lang === 'uz' ? 'active' : ''} onClick={() => setLang('uz')}>🇺🇿 UZ</button>
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>🇬🇧 EN</button>
              <button className={lang === 'ru' ? 'active' : ''} onClick={() => setLang('ru')}>🇷🇺 RU</button>
            </div>
          </div>`;

navbar = navbar.replace(/<nav className=\"navbar-links navbar-links-desktop\">[\s\S]*?<\/div>/, desktopControls);

// 4. Replace mobile lang-switcher
const mobileControls = `<div className="lang-switcher lang-switcher-mobile">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className={lang === 'uz' ? 'active' : ''} onClick={() => setLang('uz')}>🇺🇿 UZ</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>🇬🇧 EN</button>
            <button className={lang === 'ru' ? 'active' : ''} onClick={() => setLang('ru')}>🇷🇺 RU</button>
          </div>`;

navbar = navbar.replace(/<div className=\"lang-switcher lang-switcher-mobile\">[\s\S]*?<\/div>/, mobileControls);

// 5. Update CSS for theme-toggle and nav-controls
navbar = navbar.replace('.lang-switcher {', `.nav-controls { display: flex; align-items: center; gap: 16px; }
        .theme-toggle {
          background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--ink);
          transition: transform 0.2s; display: grid; place-items: center;
        }
        .theme-toggle:hover { transform: scale(1.1); }
        .lang-switcher {`);

fs.writeFileSync('src/components/Navbar.jsx', navbar);
console.log('done modifying navbar');
