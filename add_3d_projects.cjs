const fs = require('fs');

let c = fs.readFileSync('src/data/projects.js', 'utf-8');

const newProjects = `  {
    id: '9',
    title: 'PALMO 3D animation project',
    description: '🥥 Palmo Coconut Co. — 3D Web Experience. Skrollga bog\\'langan 4 bosqichli kinematik 3D animatsiya, WebGL kesh tizimi, va Canvas ichida Fruit Slice mini o\\'yini.',
    link: 'https://palmo-3d.vercel.app/',
    github: 'https://github.com/akbarovhaydarali886-star/palmo-3d-',
    image: '/palmo.png',
    technologies: ['React.js', 'Three.js', 'GSAP', 'Tailwind CSS', 'Vite'],
    tools: ['Git', 'GitHub', 'Vercel']
  },
  {
    id: '10',
    title: 'Aerotense 3D project',
    description: 'AeroTense — Antigravitatsiya Mebellari uchun 3D Veb-Platforma. Real vaqtda 60 FPS tezlikda ishlovchi interaktiv 3D tensegrity fizika simulyatori va dinamik konfigurator.',
    link: 'https://aerotense.vercel.app/',
    github: 'https://github.com/akbarovhaydarali886-star/aerotense',
    image: '/aerotense.png',
    technologies: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'WebGL'],
    tools: ['Git', 'GitHub', 'Vercel']
  }
];`;

c = c.replace('];', ',\n' + newProjects);
fs.writeFileSync('src/data/projects.js', c);
console.log('done');
