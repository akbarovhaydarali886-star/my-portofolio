const fs = require('fs');
let c = fs.readFileSync('src/data/projects.js', 'utf-8');

c = c.replace(
  "technologies: ['JavaScript', 'REST API'],",
  "technologies: ['Go', 'JavaScript', 'REST API'],"
);

c = c.replace(
  "technologies: ['JavaScript'],",
  "technologies: ['Go', 'JavaScript'],"
);

fs.writeFileSync('src/data/projects.js', c);
console.log('done adding Go');
