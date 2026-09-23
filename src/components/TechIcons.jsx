function Svg({ children, className = '' }) {
  return (
    <svg
      className={`tech-svg ${className}`}
      viewBox="0 0 48 48"
      width="40"
      height="40"
      fill="none"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function TsIcon() {
  return (
    <Svg className="icon-ts">
      <rect x="8" y="8" width="32" height="32" rx="4" fill="#3178C6" />
      <text x="24" y="30" fill="#FFF" fontSize="18" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">TS</text>
    </Svg>
  )
}

export function TailwindIcon() {
  return (
    <Svg className="icon-tailwind">
      <path d="M14 22 C14 17 18 15 22 15 C26 15 26 19 30 19 C34 19 38 17 38 17 C38 22 34 24 30 24 C26 24 26 20 22 20 C18 20 14 22 14 22 Z" fill="#06B6D4" />
      <path d="M10 29 C10 24 14 22 18 22 C22 22 22 26 26 26 C30 26 34 24 34 24 C34 29 30 31 26 31 C22 31 22 27 18 27 C14 27 10 29 10 29 Z" fill="#06B6D4" />
    </Svg>
  )
}

export function GoIcon() {
  return (
    <Svg className="icon-go">
      <rect x="6" y="12" width="36" height="24" rx="12" fill="#00ADD8" />
      <text x="24" y="29" fill="#FFF" fontSize="16" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">GO</text>
    </Svg>
  )
}

export function JsIcon() {
  return (
    <Svg className="icon-js">
      <rect x="8" y="8" width="32" height="32" rx="4" fill="#F7DF1E" />
      <path d="M20 18 V30 C20 33 17 34 15 33" stroke="#000" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path className="icon-js-s" d="M26 22 C32 20 34 24 28 26 C34 26 34 32 27 32" stroke="#000" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </Svg>
  )
}

export function ReactIcon() {
  return (
    <Svg className="icon-react">
      <g className="orbit o1">
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" />
      </g>
      <g className="orbit o2">
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(60 24 24)" />
      </g>
      <g className="orbit o3">
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(-60 24 24)" />
      </g>
      <circle className="nucleus" cx="24" cy="24" r="3.2" fill="#61DAFB" />
    </Svg>
  )
}

export function VueIcon() {
  return (
    <Svg className="icon-vue">
      <path className="leaf leaf-a" d="M8 14 L24 40 L40 14 H32 L24 28 L16 14 Z" fill="#4FC08D" opacity="0.6" />
      <path className="leaf leaf-b" d="M16 14 L24 28 L32 14 H26 L24 18 L22 14 Z" fill="#35495E" />
    </Svg>
  )
}

export function NextIcon() {
  return (
    <Svg className="icon-next">
      <circle cx="24" cy="24" r="16" fill="#000" stroke="#fff" strokeWidth="1" />
      <path d="M18 16 V32" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <path className="icon-next-slash" d="M18 16 L30 32" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M30 20 V32" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </Svg>
  )
}

export function UxIcon() {
  return (
    <Svg className="icon-ux">
      <rect className="frame f1" x="8" y="12" width="22" height="16" rx="2" stroke="#FF4785" strokeWidth="2" />
      <rect className="frame f2" x="18" y="20" width="22" height="16" rx="2" stroke="#FF4785" strokeWidth="2" />
      <circle cx="19" cy="20" r="2" fill="#FF4785" />
    </Svg>
  )
}

export function ApiIcon() {
  return (
    <Svg className="icon-api">
      <circle className="node n1" cx="12" cy="24" r="4" fill="#00C4CC" />
      <circle className="node n2" cx="36" cy="14" r="4" fill="#00C4CC" />
      <circle className="node n3" cx="36" cy="34" r="4" fill="#00C4CC" />
      <path d="M16 24 L32 16" stroke="#00C4CC" strokeWidth="2" />
      <path d="M16 24 L32 32" stroke="#00C4CC" strokeWidth="2" />
      <path d="M36 18 V30" stroke="#00C4CC" strokeWidth="2" />
    </Svg>
  )
}

export function HtmlIcon() {
  return (
    <Svg className="icon-html">
      <path d="M12 10 L15 36 L24 39 L33 36 L36 10 Z" fill="#E34F26" />
      <path d="M24 13 V36.5 L30.5 34.5 L32.5 13 Z" fill="#EF652A" />
      <path d="M16.5 17 H24 V20.5 H17 L17.5 24 H24 V27.5 H18.5 L19 29 L24 30.5 V34 L16 32 Z" fill="#FFF" />
    </Svg>
  )
}

export function CssIcon() {
  return (
    <Svg className="icon-css">
      <path d="M12 10 L15 36 L24 39 L33 36 L36 10 Z" fill="#1572B6" />
      <path d="M24 13 V36.5 L30.5 34.5 L32.5 13 Z" fill="#33A9DC" />
      <path d="M16.5 17 H24 V20.5 H17.5 L18 24 H24 V27.5 H18.5 L19 29 L24 30.5 V34 L16 32 Z" fill="#FFF" />
    </Svg>
  )
}

export function ScssIcon() {
  return (
    <Svg className="icon-scss">
      <path d="M24 10 C16 10 14 14 14 18 C14 24 24 22 24 26 C24 28 22 30 18 30 C15 30 13 28 12 25 L9 27 C11 31 15 33 19 33 C27 33 29 28 29 25 C29 19 19 21 19 17 C19 15 21 13 24 13 C27 13 29 15 30 18 L33 16 C31 12 28 10 24 10 Z" fill="#CC6699" />
    </Svg>
  )
}

export function BootstrapIcon() {
  return (
    <Svg className="icon-bootstrap">
      <path d="M12 12 Q12 8 16 8 H32 Q36 8 36 12 V36 Q36 40 32 40 H16 Q12 40 12 36 Z" fill="#7952B3" />
      <path d="M18 16 H24 Q28 16 28 20 Q28 23 25 24 Q29 25 29 29 Q29 34 24 34 H18 Z M22 20 V23 H24 Q25 23 25 21 Q25 20 24 20 Z M22 26 V30 H25 Q26 30 26 28 Q26 26 25 26 Z" fill="#FFF" />
    </Svg>
  )
}

const ICONS = {
  html: HtmlIcon,
  css: CssIcon,
  js: JsIcon,
  react: ReactIcon,
  vue: VueIcon,
  next: NextIcon,
  scss: ScssIcon,
  bootstrap: BootstrapIcon,
  ux: UxIcon,
  api: ApiIcon,
}

export default function TechIcon({ id }) {
  const Icon = ICONS[id]
  return Icon ? <Icon /> : null
}

export const TECH_STACK = [
  { id: 'html', name: 'HTML5', group: 'Markup' },
  { id: 'css', name: 'CSS3', group: 'Styling' },
  { id: 'js', name: 'JavaScript', group: 'Language' },
  { id: 'react', name: 'React.js', group: 'Framework' },
  { id: 'vue', name: 'Vue.js', group: 'Framework' },
  { id: 'next', name: 'Next.js', group: 'Framework' },
  { id: 'scss', name: 'SCSS', group: 'Styling' },
  { id: 'bootstrap', name: 'Bootstrap', group: 'Styling' },
  { id: 'ux', name: 'UI/UX Design', group: 'Design' },
  { id: 'api', name: 'REST API', group: 'Backend' },
]
