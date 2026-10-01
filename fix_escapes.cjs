const fs = require('fs');
let c = fs.readFileSync('src/locales/index.js', 'utf-8');
c = c.replace(/\\\\'/g, "\\'");
fs.writeFileSync('src/locales/index.js', c);
