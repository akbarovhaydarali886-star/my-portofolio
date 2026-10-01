const fs = require('fs');
let c = fs.readFileSync('src/data/projects.js', 'utf-8');

c = c.replace(
  "technologies: ['Go', 'JavaScript', 'REST API'],",
  "technologies: ['Go', 'REST API'],"
);

c = c.replace(
  "technologies: ['Go', 'JavaScript'],",
  "technologies: ['Go'],"
);

fs.writeFileSync('src/data/projects.js', c);
console.log('done removing JavaScript');
