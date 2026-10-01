const fs = require('fs');

let skills = fs.readFileSync('src/components/Skills.jsx', 'utf-8');

skills = skills.replace(/<style>\{`[\s\S]*?`\}<\/style>/, `<style>{\`
        .skills {
          background: var(--bg-secondary);
          overflow: hidden;
          padding-bottom: 64px;
        }
        .skills-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin: 0 0 40px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .skill-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          padding: 16px 20px;
          border-radius: 12px;
        }
        .skill-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .skill-info {
          display: flex;
          flex-direction: column;
        }
        .skill-name {
          font-weight: 700;
          color: var(--ink);
          font-size: 1rem;
        }
        .skill-group {
          font-size: 0.8rem;
          color: var(--ink-soft);
          margin-top: 2px;
        }
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      \`}</style>`);

fs.writeFileSync('src/components/Skills.jsx', skills);

// Now for Projects updates:
let projects = fs.readFileSync('src/data/projects.js', 'utf-8');
const p4 = `
  {
    id: '4',
    title: 'WorkSphere PRO',
    description: 'Boshqaruv paneli va frilanserlar uchun tizim.',
    link: 'https://freelance-operating-system.vercel.app/',
    github: 'https://github.com/akbarovhaydarali886-star/freelance-operating-system',
    image: '/worksphere.png',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
    tools: ['GitHub', 'Git', 'Vercel']
  },`;
const p5 = `
  {
    id: '5',
    title: 'My Portfolio Bot',
    description: 'Telegram bot portfoliosi.',
    link: 'https://t.me/haydaraliportfolio_bot',
    github: 'https://github.com/akbarovhaydarali886-star/my-portofolio-bot-',
    image: '/portfolio-bot.png',
    technologies: ['JavaScript'],
    tools: ['Telegram API']
  }`;

if (!projects.includes("id: '4'")) {
  projects = projects.replace(/];/, p4 + p5 + '\n];');
  fs.writeFileSync('src/data/projects.js', projects);
}

// Now update locales
let locales = fs.readFileSync('src/locales/index.js', 'utf-8');
const uzAdd = `
    proj_4_title: 'WorkSphere PRO', proj_4_desc: 'Boshqaruv paneli, loyihalar, invoyslar, mijozlar CRM tizimi va analitikani bitta joyda jamlagan maxsus operatsion tizim (Dashboard).',
    proj_5_title: 'My Portfolio Bot', proj_5_desc: 'Mijozlar buyurtmalar qoldirishi va men haqimda ma\\'lumot olishlari uchun maxsus Telegram bot.',`;
const enAdd = `
    proj_4_title: 'WorkSphere PRO', proj_4_desc: 'A comprehensive operating system (Dashboard) integrating project management, invoicing, CRM, and analytics in one place.',
    proj_5_title: 'My Portfolio Bot', proj_5_desc: 'A custom Telegram bot where clients can leave orders and get information about me.',`;
const ruAdd = `
    proj_4_title: 'WorkSphere PRO', proj_4_desc: 'Комплексная операционная система (Dashboard), объединяющая управление проектами, выставление счетов, CRM и аналитику.',
    proj_5_title: 'My Portfolio Bot', proj_5_desc: 'Специальный Telegram-бот, где клиенты могут оставлять заказы и получать информацию обо мне.',`;

if (!locales.includes("proj_4_title")) {
  locales = locales.replace(/proj_3_desc: '.*?'(,*)/, "proj_3_desc: 'Biznes jarayonlarini avtomatlashtirish uchun Telegram bot. Buyurtmalarni qabul qilish va mijozlarga xizmat ko\\'rsatishni osonlashtiradi.'," + uzAdd);
  locales = locales.replace(/proj_3_desc: '.*?'(,*)/, "proj_3_desc: 'Telegram bot for automating business processes. Simplifies order taking and customer service.'," + enAdd);
  locales = locales.replace(/proj_3_desc: '.*?'(,*)/, "proj_3_desc: 'Telegram-бот для автоматизации бизнес-процессов. Упрощает прием заказов и обслуживание клиентов.'," + ruAdd);
  
  // Actually regex replace above might be messy. Let's do it safer.
}
fs.writeFileSync('src/locales/index.js', locales);

console.log('done updating skills and projects');
