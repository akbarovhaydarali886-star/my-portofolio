const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements, prependImport = true) {
  let content = fs.readFileSync(filePath, 'utf-8');
  if (prependImport && !content.includes('useLanguage')) {
    content = "import { useLanguage } from '../context/LanguageContext'\n" + content;
  }
  
  if (prependImport && !content.includes('const { t } = useLanguage()')) {
    // find the component definition
    content = content.replace(/export default function (\w+)\(\) {/, 'export default function $1() {\n  const { t } = useLanguage();');
    content = content.replace(/export default function (\w+)\(\{([^}]*)\}\) {/, 'export default function $1({$2}) {\n  const { t } = useLanguage();');
  }

  for (const [search, replace] of replacements) {
    content = content.split(search).join(replace);
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Replaced in ${filePath}`);
}

// 1. Navbar
replaceInFile('src/components/Navbar.jsx', [
  ['"Men haqimda"', '{t("nav_about")}'],
  ['"Ko\'nikmalar"', '{t("nav_skills")}'],
  ['"Loyihalar"', '{t("nav_projects")}'],
  ['"Aloqa"', '{t("nav_contact")}'],
  ['>Rezyume / CV<', '>{t("nav_resume")}<']
]);

// 2. Hero
replaceInFile('src/components/Hero.jsx', [
  ['>Senior Frontend / Full-Stack Software Engineer<', '>{t("hero_role")}<'],
  ['>Bardoshli, xatolarga chidamli veb ilovalar va yuqori yuklamali tizimlar arxitektori. TypeScript, React/Next.js va Go tillariga ixtisoslashgan.<', '>{t("hero_tagline")}<'],
  ['>Katta loyihalar uchun ochiq<', '>{t("hero_status")}<'],
  ['>Loyihalarni ko\'rish<', '>{t("hero_btn_projects")}<'],
  ['>CV yuklab olish ⬇<', '>{t("hero_btn_cv")}<']
]);

// 3. About
replaceInFile('src/components/About.jsx', [
  ['>Men haqimda<', '>{t("about_eyebrow")}<'],
  ['>Muhandislik Falsafasi<', '>{t("about_title")}<'],
  ['>Men uchun dasturlash shunchaki kod yozish emas, balki murakkab muammolarga optimal arxitektura yechimlarini topishdir.<', '>{t("about_p1")}<'],
  ['>Asosiy e\'tiborimni System Design, modullik, va xavfsizlikka qarataman. Har bir yozilgan kod qatori kengayishga (scalability) tayyor bo\'lishi va foydalanuvchiga yuqori tezlik (Core Web Vitals LCP < 0.8s) taqdim etishi shart.<', '>{t("about_p2")}<'],
  ['>Ish faoliyatim davomida Test-driven development (TDD) hamda uzluksiz CI/CD jarayonlarini qo\'llab, ishonchli va barqaror tizimlar yaratishni o\'z oldimga maqsad qilib qo\'yganman.<', '>{t("about_p3")}<'],
  ['>Ta\'lim & Tajriba<', '>{t("about_edu_title")}<'],
  ['>Full-Stack Dasturlash<', '>{t("about_edu_1_title")}<'],
  ['>Najot Ta\'lim & IT Live<', '>{t("about_edu_1_desc")}<'],
  ['>Amaliy Tajriba<', '>{t("about_edu_2_title")}<'],
  ['>2 yildan ortiq real loyihalar<', '>{t("about_edu_2_desc")}<']
]);

// 4. Skills
replaceInFile('src/components/Skills.jsx', [
  ['>Ko\'nikmalar<', '>{t("skills_eyebrow")}<'],
  ['>Texnologiyalar & Asboblar<', '>{t("skills_title")}<'],
  ['>Core & Tillar<', '>{t("skills_core")}<'],
  ['>Frontend Ekosistemasi<', '>{t("skills_frontend")}<'],
  ['>Backend & Ma\'lumotlar<', '>{t("skills_backend")}<'],
  ['>DevOps & Tezlik<', '>{t("skills_devops")}<']
]);

// 5. Projects
replaceInFile('src/components/Projects.jsx', [
  ['>Loyihalar<', '>{t("projects_eyebrow")}<'],
  ['>Muhandislik yechimlari<', '>{t("projects_title")}<'],
  ['title: p.title', 'title: t(`proj_${p.id}_title`)'],
  ['description: p.description', 'description: t(`proj_${p.id}_desc`)']
]);

// 6. Contact
replaceInFile('src/components/Contact.jsx', [
  ['>Aloqa<', '>{t("contact_eyebrow")}<'],
  ['>Loyihangiz bormi? Yozing.<', '>{t("contact_title")}<'],
  ['>Yangi loyihalar va hamkorlik uchun doim ochiqman. Menga elektron pochta orqali yoki Telegramdan yozishingiz mumkin. Tez orada javob berishga harakat qilaman.<', '>{t("contact_desc")}<'],
  ['>Rezyume (CV) yuklab olish ⬇<', '>{t("contact_btn_cv")}<'],
  ['>Telegram Bot orqali buyurtma berish<', '>{t("contact_btn_bot")}<']
]);

// 7. Footer
replaceInFile('src/components/Footer.jsx', [
  ['>Barcha huquqlar himoyalangan.<', '>{t("footer_text")}<']
]);
