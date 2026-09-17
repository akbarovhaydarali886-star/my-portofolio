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

export function HtmlIcon() {
  return (
    <Svg className="icon-html">
      <path d="M14 10 L8 24 L14 38" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 10 L40 24 L34 38" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path className="icon-draw" d="M20 30 L28 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </Svg>
  )
}

export function CssIcon() {
  return (
    <Svg className="icon-css">
      <rect x="10" y="10" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
      <path className="icon-hash-v" d="M20 16 V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path className="icon-hash-v" d="M28 16 V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path className="icon-hash-h" d="M15 21 H33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path className="icon-hash-h" d="M15 27 H33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  )
}

export function BootstrapIcon() {
  return (
    <Svg className="icon-bootstrap">
      <rect className="col col-a" x="10" y="12" width="7" height="24" rx="1.5" fill="currentColor" opacity="0.35" />
      <rect className="col col-b" x="20.5" y="8" width="7" height="32" rx="1.5" fill="currentColor" />
      <rect className="col col-c" x="31" y="16" width="7" height="20" rx="1.5" fill="currentColor" opacity="0.55" />
    </Svg>
  )
}

export function JsIcon() {
  return (
    <Svg className="icon-js">
      <rect x="8" y="8" width="32" height="32" rx="6" stroke="currentColor" strokeWidth="2" />
      <path d="M20 18 V30 C20 33 17 34 15 33" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path className="icon-js-s" d="M26 22 C32 20 34 24 28 26 C34 26 34 32 27 32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </Svg>
  )
}

export function ReactIcon() {
  return (
    <Svg className="icon-react">
      <g className="orbit o1">
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="currentColor" strokeWidth="1.8" />
      </g>
      <g className="orbit o2">
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="currentColor" strokeWidth="1.8" transform="rotate(60 24 24)" />
      </g>
      <g className="orbit o3">
        <ellipse cx="24" cy="24" rx="16" ry="6.5" stroke="currentColor" strokeWidth="1.8" transform="rotate(-60 24 24)" />
      </g>
      <circle className="nucleus" cx="24" cy="24" r="3.2" fill="currentColor" />
    </Svg>
  )
}

export function VueIcon() {
  return (
    <Svg className="icon-vue">
      <path className="leaf leaf-a" d="M8 14 L24 40 L40 14 H32 L24 28 L16 14 Z" fill="currentColor" opacity="0.28" />
      <path className="leaf leaf-b" d="M16 14 L24 28 L32 14 H26 L24 18 L22 14 Z" fill="currentColor" />
    </Svg>
  )
}

export function NextIcon() {
  return (
    <Svg className="icon-next">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <path d="M18 16 V32" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path className="icon-next-slash" d="M18 16 L30 32" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M30 20 V32" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </Svg>
  )
}

export function UxIcon() {
  return (
    <Svg className="icon-ux">
      <rect className="frame f1" x="8" y="12" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect className="frame f2" x="18" y="20" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="19" cy="20" r="2" fill="currentColor" />
    </Svg>
  )
}

export function ApiIcon() {
  return (
    <Svg className="icon-api">
      <circle className="node n1" cx="12" cy="24" r="4" fill="currentColor" />
      <circle className="node n2" cx="36" cy="14" r="4" fill="currentColor" />
      <circle className="node n3" cx="36" cy="34" r="4" fill="currentColor" />
      <path d="M16 24 L32 16" stroke="currentColor" strokeWidth="2" />
      <path d="M16 24 L32 32" stroke="currentColor" strokeWidth="2" />
      <path d="M36 18 V30" stroke="currentColor" strokeWidth="2" />
    </Svg>
  )
}

const ICONS = {
  html: HtmlIcon,
  css: CssIcon,
  bootstrap: BootstrapIcon,
  js: JsIcon,
  react: ReactIcon,
  vue: VueIcon,
  next: NextIcon,
  ux: UxIcon,
  api: ApiIcon,
}

export default function TechIcon({ id }) {
  const Icon = ICONS[id]
  return Icon ? <Icon /> : null
}

export const TECH_STACK = [
  { id: 'html', name: 'HTML', group: "Bo'linma" },
  { id: 'css', name: 'CSS / SCSS', group: "Bo'linma" },
  { id: 'bootstrap', name: 'Bootstrap', group: "Bo'linma" },
  { id: 'js', name: 'JavaScript', group: 'Tillar' },
  { id: 'react', name: 'React.js', group: 'Freymvorklar' },
  { id: 'vue', name: 'Vue.js', group: 'Freymvorklar' },
  { id: 'next', name: 'Next.js', group: 'Freymvorklar' },
  { id: 'ux', name: 'UI / UX dizayn', group: 'Dizayn' },
  { id: 'api', name: 'API / REST API', group: 'Integratsiya' },
]
