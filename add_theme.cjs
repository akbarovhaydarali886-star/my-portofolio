const fs = require('fs');

const themeContext = `import React, { createContext, useContext, useState, useEffect } from 'react';
const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => useContext(ThemeContext);
`;
fs.writeFileSync('src/context/ThemeContext.jsx', themeContext);

let main = fs.readFileSync('src/main.jsx', 'utf-8');
if (!main.includes('ThemeProvider')) {
  main = main.replace("import { LanguageProvider } from './context/LanguageContext'", "import { LanguageProvider } from './context/LanguageContext'\nimport { ThemeProvider } from './context/ThemeContext'");
  main = main.replace("<LanguageProvider>", "<ThemeProvider>\n        <LanguageProvider>");
  main = main.replace("</LanguageProvider>", "</LanguageProvider>\n      </ThemeProvider>");
  fs.writeFileSync('src/main.jsx', main);
}

let css = fs.readFileSync('src/index.css', 'utf-8');
if (!css.includes('[data-theme="light"]')) {
  css = css.replace(':root {', `:root {
  --bg-main: #070b19;
  --bg-secondary: #0b132b;
  --ink: #ffffff;
  --ink-soft: #94a3b8;
  --border-color: #1e293b;
  --accent: #38bdf8;
  --accent-neon: #0ea5e9;
}

[data-theme="light"] {
  --bg-main: #f1f5f9;
  --bg-secondary: #ffffff;
  --ink: #0f172a;
  --ink-soft: #475569;
  --border-color: #cbd5e1;
  --accent: #0284c7;
  --accent-neon: #0369a1;
}

/* dummy to replace original */
.dummy-root {`);
  css = css.replace('body {', 'body {\n  transition: background 0.3s ease, color 0.3s ease;');
  fs.writeFileSync('src/index.css', css);
}

console.log('done');
