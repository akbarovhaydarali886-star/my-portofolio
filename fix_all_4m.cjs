const fs = require('fs');

// 1. Fix Navbar flag (EN -> US)
let navbar = fs.readFileSync('src/components/Navbar.jsx', 'utf-8');
navbar = navbar.replace("en: { label: 'EN', flag: '🇬🇧' }", "en: { label: 'EN', flag: '🇺🇸' }");
fs.writeFileSync('src/components/Navbar.jsx', navbar);

// 2. Fix Projects.jsx translation strings
let projects = fs.readFileSync('src/components/Projects.jsx', 'utf-8');
if (!projects.includes('useLanguage')) {
  projects = projects.replace("import ProjectCard from './ProjectCard.jsx'", "import ProjectCard from './ProjectCard.jsx'\nimport { useLanguage } from '../context/LanguageContext'");
  projects = projects.replace("export default function Projects() {", "export default function Projects() {\n  const { t } = useLanguage();");
  projects = projects.replace("Muhandislik yechimlari", "{t('projects_title')}");
  projects = projects.replace("<p className=\"eyebrow\">Loyihalar</p>", "<p className=\"eyebrow\">{t('projects_eyebrow')}</p>");
  projects = projects.replace("project={p}", "project={{...p, title: t(`proj_${p.id}_title`), description: t(`proj_${p.id}_desc`)}}");
  fs.writeFileSync('src/components/Projects.jsx', projects);
}

// 3. Fix Contact.jsx translation strings
let contact = fs.readFileSync('src/components/Contact.jsx', 'utf-8');
if (!contact.includes('useLanguage')) {
  contact = contact.replace("import Reveal from './Reveal.jsx'", "import Reveal from './Reveal.jsx'\nimport { useLanguage } from '../context/LanguageContext'");
  contact = contact.replace("export default function Contact() {", "export default function Contact() {\n  const { t } = useLanguage();");
  contact = contact.replace("<p className=\"eyebrow\">Aloqa</p>", "<p className=\"eyebrow\">{t('contact_eyebrow')}</p>");
  contact = contact.replace("<h2>Loyihangiz bormi? Yozing.</h2>", "<h2>{t('contact_title')}</h2>");
  contact = contact.replace("<p className=\"contact-desc\">", "<p className=\"contact-desc\">{t('contact_desc')}");
  // remove the static text inside contact-desc
  contact = contact.replace(/Yangi loyihalar va hamkorlik uchun doim ochiqman. Menga elektron pochta orqali yoki Telegramdan yozishingiz mumkin. Tez orada javob berishga harakat qilaman\./g, "");
  contact = contact.replace("Rezyume (CV) yuklab olish ⬇", "{t('contact_btn_cv')}");
  contact = contact.replace("Telegram Bot orqali buyurtma berish", "{t('contact_btn_bot')}");
  fs.writeFileSync('src/components/Contact.jsx', contact);
}

// 4. Remove JS from bot technologies
let data = fs.readFileSync('src/data/projects.js', 'utf-8');
data = data.replace(
  "technologies: ['Go', 'JavaScript', 'REST API'],",
  "technologies: ['Go', 'REST API'],"
);
data = data.replace(
  "technologies: ['Go', 'JavaScript'],",
  "technologies: ['Go'],"
);
fs.writeFileSync('src/data/projects.js', data);

console.log('done fixing all issues');
