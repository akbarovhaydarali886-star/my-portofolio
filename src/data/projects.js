export const projects = [
  {
    id: '1',
    title: 'Enterprise Landing Platform',
    description: 'Problem: Needed a high-conversion, sub-second TTFB landing platform.\nArchitecture: Edge-rendered React app using Vercel. Employed aggressive code-splitting and asset optimization.\nImpact: Achieved Core Web Vitals LCP < 1.2s and zero layout shifts (CLS).',
    link: 'https://kalodesweb.vercel.app/',
    image: '/kalodesweb.png',
    tags: ['TypeScript', 'React.js', 'Tailwind CSS', 'Edge Compute', 'Vercel']
  },
  {
    id: '2',
    title: 'Concurrent Automation Gateway',
    description: 'Problem: Operations required a concurrent intake system to process real-time webhooks without blocking.\nArchitecture: Built a concurrent webhook processor in Go. Utilized goroutines for non-blocking I/O during traffic spikes.\nImpact: Handled 10k+ concurrent deliveries with p99 latency <45ms and 0% dropped payloads.',
    link: 'https://t.me/kalodez_zakaz_bot',
    image: '/kalodez-zakaz-bot.jpg',
    tags: ['Go (Golang)', 'Concurrency', 'Webhooks', 'REST API', 'Render']
  }
];
