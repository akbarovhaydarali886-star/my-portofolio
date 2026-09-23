export const projects = [
  {
    id: '1',
    title: 'Quduq Master Web Platform',
    description: 'Problem: Needed a high-conversion platform with zero layout shifts.\nArchitecture: Next.js App Router, TypeScript, Tailwind CSS.\nOptimization: Implemented aggressive caching and Edge rendering.\nImpact: Core Web Vitals at 99/100, LCP reduced to < 0.7s.',
    link: 'https://kalodesweb.vercel.app/',
    image: '/kalodesweb.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel']
  },
  {
    id: '2',
    title: 'High-Throughput Telegram Bot Service',
    description: 'Problem: Operations required a concurrent intake system to process real-time webhooks without blocking.\nArchitecture: Go (Golang), Webhooks, Redis, Docker.\nSolution: Utilized Goroutines for parallel order streaming and fault tolerance.\nImpact: Handled high traffic with <50ms response latency.',
    link: 'https://t.me/kalodez_zakaz_bot',
    image: '/kalodez-zakaz-bot.jpg',
    tags: ['Go', 'Redis', 'Docker', 'Webhooks']
  }
];
