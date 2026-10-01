const fs = require('fs');
let c = fs.readFileSync('src/data/projects.js', 'utf-8');

c = c.replace(
  "link: 'https://kalodesweb.vercel.app/',",
  "link: 'https://kalodesweb.vercel.app/',\n    github: 'https://github.com/akbarovhaydarali886-star/kalodes_web',"
);

c = c.replace(
  "link: 'https://t.me/kalodez_zakaz_bot',",
  "link: 'https://t.me/kalodez_zakaz_bot',\n    github: 'https://github.com/akbarovhaydarali886-star/kalodes.telegrambot',"
);

fs.writeFileSync('src/data/projects.js', c);
console.log('done updating github links');
