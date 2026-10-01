const fs = require('fs');

let navbar = fs.readFileSync('src/components/Navbar.jsx', 'utf-8');

// 1. Remove backdrop-filter and adjust background for performance
navbar = navbar.replace('backdrop-filter: saturate(180%) blur(10px);', '/* backdrop-filter removed for performance */');

// 2. Replace the lang switcher with a custom Dropdown
// We need to add state for the dropdown
if (!navbar.includes('langOpen')) {
  navbar = navbar.replace(
    'const [scrolled, setScrolled] = useState(false)', 
    'const [scrolled, setScrolled] = useState(false);\n  const [langOpen, setLangOpen] = useState(false);'
  );
}

// 3. Define the language list inside Navbar
const langList = `const LANGS = {
    uz: { label: 'UZ', flag: '🇺🇿' },
    en: { label: 'EN', flag: '🇬🇧' },
    ru: { label: 'RU', flag: '🇷🇺' }
  };`;

if (!navbar.includes('const LANGS =')) {
  navbar = navbar.replace(
    'const LINKS = [', 
    `${langList}\n\n  const LINKS = [`
  );
}

// 4. Replace Desktop Dropdown UI
const desktopLangHtml = `<div className="nav-controls">
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
          </div>`;

navbar = navbar.replace(/<div className=\"nav-controls\">[\s\S]*?<\/div>\s*<\/div>/, desktopLangHtml);

// 5. Replace Mobile Dropdown UI
const mobileLangHtml = `<div className="nav-controls nav-controls-mobile">
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
          </div>`;

navbar = navbar.replace(/<div className=\"lang-switcher lang-switcher-mobile\">[\s\S]*?<\/div>/, mobileLangHtml);

// 6. Update CSS
const cssReplace = `.custom-lang-select {
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
        }`;

navbar = navbar.replace(/        \.lang-switcher {[\s\S]*?justify-content: center;\n        }/, cssReplace);

// also fix background color since we removed backdrop-filter
navbar = navbar.replace('background: rgba(10, 25, 47, 0.85);', 'background: var(--bg-main);');

fs.writeFileSync('src/components/Navbar.jsx', navbar);
console.log('done updating navbar UI');
