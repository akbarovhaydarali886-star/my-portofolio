const fs = require('fs');

let c = fs.readFileSync('src/data/projects.js', 'utf-8');

const newProject = `  {
    id: '8',
    title: 'Sentinel Core',
    description: 'AI algoritmlari orqali himoyalangan va real-time boshqariladigan aktivlar markazi.',
    link: 'https://sentinel-core.vercel.app/',
    github: 'https://github.com/akbarovhaydarali886-star/Sentinel-Core',
    image: '/sentinel-core.png',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
    tools: ['Git', 'GitHub', 'Vercel']
  }
];`;

c = c.replace('];', ',\n' + newProject);
fs.writeFileSync('src/data/projects.js', c);
console.log('done');
