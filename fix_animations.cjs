const fs = require('fs');
let c = fs.readFileSync('src/components/ProjectCard.jsx', 'utf-8');

// Cleanup the broken keyframes and wrapper css
c = c.replace(/@keyframes[\s\S]*?\.pcard-wrapper\s*\{[\s\S]*?height:\s*100%;\s*\}/, 
`@keyframes cardSpinAndReturn {
  0% { transform: perspective(1000px) rotateY(0deg); }
  50% { transform: perspective(1000px) rotateY(360deg); }
  100% { transform: perspective(1000px) rotateY(0deg); }
}
.pcard-wrapper {
  animation: cardSpinAndReturn 2s ease-in-out forwards;
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.2s, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;
  background: var(--bg-main);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
}`);

c = c.replace(/\.pcard-wrapper:hover\s*\{[\s\S]*?\}/,
`.pcard-wrapper:hover {
  border-color: var(--accent);
  transform: perspective(1000px) translateZ(40px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  z-index: 10;
  position: relative;
}`);

fs.writeFileSync('src/components/ProjectCard.jsx', c);
console.log('done');
