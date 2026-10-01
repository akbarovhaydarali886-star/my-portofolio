const fs = require('fs');

// 1. Rewrite locales/index.js
const localesContent = `export const translations = {
  uz: {
    nav_about: 'Men haqimda', nav_skills: 'Ko\\'nikmalar', nav_projects: 'Loyihalar', nav_contact: 'Aloqa', nav_resume: 'Rezyume / CV',
    hero_role: 'Frontend Web Dasturchi',
    hero_tagline: "Zamonaviy va qulay veb-saytlar hamda web-ilovalarni yaratish bo'yicha mutaxassis. HTML, CSS, JavaScript, React, va Next.js orqali interaktiv va sifatli UI/UX dizaynlarni kodga o'g'iraman.",
    hero_status: '2 yillik tajribaga ega dasturchi',
    hero_btn_projects: 'Loyihalarni ko\\'rish', hero_btn_cv: 'CV yuklab olish ⬇',
    
    about_eyebrow: 'Men haqimda', about_title: "Ta'lim va Tajriba",
    about_p1: "Men 2 yillik tajribaga ega Frontend dasturchiman. Shu vaqt davomida zamonaviy veb texnologiyalarini chuqur o'rganib, ko'plab real loyihalarda ishtirok etdim. Asosiy maqsadim — foydalanuvchilar uchun qulay, tezkor va chiroyli interfeyslar yaratish.",
    about_edu_title: "Ta'lim",
    about_edu_1_title: "Najot Ta'lim", about_edu_1_desc: "Frontend Dasturlash (Bootcamp)",
    about_edu_2_title: "IT Live", about_edu_2_desc: "Web Dasturlash Asoslari",
    about_edu_3_title: "IT Shaharcha", about_edu_3_desc: "Dasturlash va Texnologiyalar",
    
    skills_eyebrow: 'Ko\\'nikmalar', skills_title: 'Texnologiyalar & Asboblar', skills_core: 'Core & Tillar', skills_frontend: 'Frontend Ekosistemasi', skills_backend: 'Backend & Ma\\'lumotlar', skills_devops: 'DevOps & Tezlik',
    projects_eyebrow: 'Loyihalar', projects_title: 'Muhandislik yechimlari',
    proj_1_title: 'FleetFlow Logistics SaaS', proj_1_desc: 'Logistika va yuk tashish kompaniyalari uchun zamonaviy SaaS platformasi. Real vaqt rejimida yuklarni kuzatish va biznes jarayonlarini boshqarish tizimi.',
    proj_2_title: 'Kalodez Web Platform', proj_2_desc: 'Landing page va biznes uchun veb-sayt. Zamonaviy dizayn va yuqori tezlikka ega. Responsive va animatsiyalarga boy interfeys yaratilgan.',
    proj_3_title: 'Kalodez Bot', proj_3_desc: 'Biznes jarayonlarini avtomatlashtirish uchun Telegram bot. Buyurtmalarni qabul qilish va mijozlarga xizmat ko\\'rsatishni osonlashtiradi.',
    contact_eyebrow: 'Aloqa', contact_title: 'Loyihangiz bormi? Yozing.', contact_desc: 'Yangi loyihalar va hamkorlik uchun doim ochiqman. Menga elektron pochta orqali yoki Telegramdan yozishingiz mumkin. Tez orada javob berishga harakat qilaman.', contact_btn_cv: 'Rezyume (CV) yuklab olish ⬇', contact_btn_bot: 'Telegram Bot orqali buyurtma berish',
    footer_text: 'Barcha huquqlar himoyalangan.'
  },
  en: {
    nav_about: 'About', nav_skills: 'Skills', nav_projects: 'Projects', nav_contact: 'Contact', nav_resume: 'Resume / CV',
    hero_role: 'Frontend Web Developer',
    hero_tagline: "Expert in creating modern and user-friendly websites and web applications. I convert interactive and high-quality UI/UX designs into code using HTML, CSS, JavaScript, React, and Next.js.",
    hero_status: 'Developer with 2 years of experience',
    hero_btn_projects: 'View Projects', hero_btn_cv: 'Download CV ⬇',
    
    about_eyebrow: 'About Me', about_title: "Education and Experience",
    about_p1: "I am a Frontend developer with 2 years of experience. During this time, I have deeply studied modern web technologies and participated in many real projects. My main goal is to create convenient, fast, and beautiful interfaces for users.",
    about_edu_title: "Education",
    about_edu_1_title: "Najot Ta'lim", about_edu_1_desc: "Frontend Development (Bootcamp)",
    about_edu_2_title: "IT Live", about_edu_2_desc: "Web Development Basics",
    about_edu_3_title: "IT Shaharcha", about_edu_3_desc: "Programming and Technologies",
    
    skills_eyebrow: 'Skills', skills_title: 'Technologies & Tools', skills_core: 'Core & Languages', skills_frontend: 'Frontend Ecosystem', skills_backend: 'Backend & Data', skills_devops: 'DevOps & Performance',
    projects_eyebrow: 'Projects', projects_title: 'Engineering Solutions',
    proj_1_title: 'FleetFlow Logistics SaaS', proj_1_desc: 'Modern SaaS platform for logistics and freight companies. Real-time cargo tracking and business process management system.',
    proj_2_title: 'Kalodez Web Platform', proj_2_desc: 'Landing page and business website. Features modern design and high performance with a responsive, animation-rich interface.',
    proj_3_title: 'Kalodez Bot', proj_3_desc: 'Telegram bot for automating business processes. Simplifies order taking and customer service.',
    contact_eyebrow: 'Contact', contact_title: 'Have a project? Let\\'s talk.', contact_desc: 'I\\'m always open to new projects and collaborations. You can reach out via email or Telegram. I\\'ll get back to you as soon as possible.', contact_btn_cv: 'Download Resume (CV) ⬇', contact_btn_bot: 'Order via Telegram Bot',
    footer_text: 'All rights reserved.'
  },
  ru: {
    nav_about: 'Обо мне', nav_skills: 'Навыки', nav_projects: 'Проекты', nav_contact: 'Контакты', nav_resume: 'Резюме / CV',
    hero_role: 'Фронтенд Веб-Разработчик',
    hero_tagline: "Специалист по созданию современных и удобных веб-сайтов и веб-приложений. Я превращаю интерактивные и качественные UI/UX дизайны в код с помощью HTML, CSS, JavaScript, React и Next.js.",
    hero_status: 'Разработчик с 2-летним опытом',
    hero_btn_projects: 'Смотреть проекты', hero_btn_cv: 'Скачать CV ⬇',
    
    about_eyebrow: 'Обо мне', about_title: "Образование и Опыт",
    about_p1: "Я фронтенд-разработчик с 2-летним опытом. За это время я глубоко изучил современные веб-технологии и участвовал во многих реальных проектах. Моя главная цель — создание удобных, быстрых и красивых интерфейсов для пользователей.",
    about_edu_title: "Образование",
    about_edu_1_title: "Najot Ta'lim", about_edu_1_desc: "Фронтенд разработка (Bootcamp)",
    about_edu_2_title: "IT Live", about_edu_2_desc: "Основы веб-разработки",
    about_edu_3_title: "IT Shaharcha", about_edu_3_desc: "Программирование и Технологии",
    
    skills_eyebrow: 'Навыки', skills_title: 'Технологии и Инструменты', skills_core: 'Основы и Языки', skills_frontend: 'Экосистема Frontend', skills_backend: 'Backend и Данные', skills_devops: 'DevOps и Производительность',
    projects_eyebrow: 'Проекты', projects_title: 'Инженерные решения',
    proj_1_title: 'FleetFlow Logistics SaaS', proj_1_desc: 'Современная SaaS-платформа для логистических компаний. Система отслеживания грузов в реальном времени и управления бизнес-процессами.',
    proj_2_title: 'Kalodez Web Platform', proj_2_desc: 'Landing page и бизнес-сайт. Современный дизайн, высокая скорость и адаптивный интерфейс с анимациями.',
    proj_3_title: 'Kalodez Bot', proj_3_desc: 'Telegram-бот для автоматизации бизнес-процессов. Упрощает прием заказов и обслуживание клиентов.',
    contact_eyebrow: 'Контакты', contact_title: 'Есть проект? Напишите мне.', contact_desc: 'Я всегда открыт для новых проектов и сотрудничества. Вы можете написать мне на почту или в Telegram. Постараюсь ответить в ближайшее время.', contact_btn_cv: 'Скачать Резюме (CV) ⬇', contact_btn_bot: 'Заказать через Telegram Bot',
    footer_text: 'Все права защищены.'
  }
};
`;
fs.writeFileSync('src/locales/index.js', localesContent);

// 2. Fix Hero.jsx
let hero = fs.readFileSync('src/components/Hero.jsx', 'utf-8');
hero = hero.replace('2 yillik tajribaga ega dasturchi', '{t("hero_status")}');
hero = hero.replace('Frontend Web Dasturchi', '{t("hero_role")}');
hero = hero.replace(/Zamonaviy va qulay veb-saytlar hamda web-ilovalarni yaratish bo'yicha mutaxassis\. HTML, CSS, JavaScript, React, va Next\.js orqali interaktiv va sifatli UI\/UX dizaynlarni kodga o'g'iraman\./g, '{t("hero_tagline")}');
fs.writeFileSync('src/components/Hero.jsx', hero);

// 3. Fix About.jsx
let about = fs.readFileSync('src/components/About.jsx', 'utf-8');
about = about.replace("Ta'lim va Tajriba", '{t("about_title")}');
about = about.replace(/Men 2 yillik tajribaga ega Frontend dasturchiman\. Shu vaqt davomida zamonaviy veb texnologiyalarini chuqur o'rganib, ko'plab real loyihalarda ishtirok etdim\. Asosiy maqsadim [—\-] foydalanuvchilar uchun qulay, tezkor va chiroyli interfeyslar yaratish\./g, '{t("about_p1")}');
about = about.replace('<p className="eyebrow">Ta\\\'lim</p>', '<p className="eyebrow">{t("about_edu_title")}</p>');
about = about.replace('<h3>Najot Ta\\\'lim</h3>', '<h3>{t("about_edu_1_title")}</h3>');
about = about.replace('<p>Frontend Dasturlash (Bootcamp)</p>', '<p>{t("about_edu_1_desc")}</p>');
about = about.replace('<h3>IT Live</h3>', '<h3>{t("about_edu_2_title")}</h3>');
about = about.replace('<p>Web Dasturlash Asoslari</p>', '<p>{t("about_edu_2_desc")}</p>');
about = about.replace('<h3>IT Shaharcha</h3>', '<h3>{t("about_edu_3_title")}</h3>');
about = about.replace('<p>Dasturlash va Texnologiyalar</p>', '<p>{t("about_edu_3_desc")}</p>');
fs.writeFileSync('src/components/About.jsx', about);

console.log('done fixing translations');
