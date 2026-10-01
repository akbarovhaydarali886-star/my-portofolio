const fs = require('fs');

let c = fs.readFileSync('src/data/projects.js', 'utf-8');

const newProjects = `  {
    id: '6',
    title: 'Qora ko\\'l study',
    description: 'Bu qora ko\\'l o\\'quv markaz loyihasi ko\\'plab shunga o\\'xshagan xususiy o\\'quv markazlar uchun avtomatlashtirilgan hisob tahlil qiluvchi CRM veb-sayti.',
    link: 'https://qora-ko-l-study.vercel.app/',
    github: 'https://github.com/akbarovhaydarali886-star/qora-ko-l-study-',
    image: '/qorakol.png',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST API'],
    tools: ['Git', 'GitHub', 'Vercel']
  },
  {
    id: '7',
    title: 'NexusAPI',
    description: 'NexusAPI — AI kompaniyalar uchun API kalitlarni boshqarish, foydalanishga asoslangan billing va CRM platformasi.',
    link: 'https://nexusapi-one.vercel.app/',
    github: 'https://github.com/akbarovhaydarali886-star/nexusapi',
    image: '/nexusapi.png',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST API'],
    tools: ['Git', 'GitHub', 'Vercel']
  }
];`;

c = c.replace('];', ',\n' + newProjects);
fs.writeFileSync('src/data/projects.js', c);
console.log('done');
