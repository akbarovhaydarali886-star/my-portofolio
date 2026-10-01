const fs = require('fs');

// update locales properly
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
  locales = locales.replace("proj_3_desc: 'Biznes jarayonlarini avtomatlashtirish uchun Telegram bot. Buyurtmalarni qabul qilish va mijozlarga xizmat ko\\'rsatishni osonlashtiradi.',", "proj_3_desc: 'Biznes jarayonlarini avtomatlashtirish uchun Telegram bot. Buyurtmalarni qabul qilish va mijozlarga xizmat ko\\'rsatishni osonlashtiradi.'," + uzAdd);
  locales = locales.replace("proj_3_desc: 'Telegram bot for automating business processes. Simplifies order taking and customer service.',", "proj_3_desc: 'Telegram bot for automating business processes. Simplifies order taking and customer service.'," + enAdd);
  locales = locales.replace("proj_3_desc: 'Telegram-бот для автоматизации бизнес-процессов. Упрощает прием заказов и обслуживание клиентов.',", "proj_3_desc: 'Telegram-бот для автоматизации бизнес-процессов. Упрощает прием заказов и обслуживание клиентов.'," + ruAdd);
  fs.writeFileSync('src/locales/index.js', locales);
}
console.log('done fixing locales');
