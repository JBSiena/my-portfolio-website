import type { NavItem, Project, Service, Skill, Testimonial } from './types'

export const BRAND = {
  name: 'John Benjie Siena',
  tagline: 'Full-Stack Developer',
  location: 'Lucena City, Quezon, Philippines',
  email: 'jbsiena05@gmail.com',
}

export const NAV: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_STATS = [
  { label: 'Years', value: '3+' },
  { label: 'Projects', value: '10+' },
  { label: 'Client', value: '1' },
]

export const TECH_BADGES = ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Express', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'Vite', 'Node.js', 'REST', 'Testing', 'CI/CD']

export const SKILLS: Record<string, Skill[]> = {
  Frontend: [
    { name: 'HTML', level: 85, experience: '3+ yrs', tone: 'amber' },
    { name: 'CSS', level: 80, experience: '3+ yrs', tone: 'cyan' },
    { name: 'JavaScript', level: 82, experience: '3+ yrs', tone: 'violet' },
    { name: 'Next.js', level: 70, experience: '1+ yr', tone: 'emerald' },
    { name: 'React', level: 90, experience: '4+ yrs', tone: 'cyan' },
    { name: 'TypeScript', level: 88, experience: '4+ yrs', tone: 'violet' },
    { name: 'Tailwind CSS', level: 86, experience: '3+ yrs', tone: 'emerald' },
    { name: 'Vite', level: 84, experience: '2+ yrs', tone: 'amber' },
    { name: 'Node.js', level: 82, experience: '2+ yrs', tone: 'emerald' },
    { name: 'REST', level: 78, experience: '2+ yrs', tone: 'cyan' },
    { name: 'Testing', level: 76, experience: '2+ yrs', tone: 'violet' },
    { name: 'CI/CD', level: 74, experience: '2+ yrs', tone: 'emerald' },
  ],
  Backend: [
    { name: 'Python', level: 84, experience: '3+ yrs', tone: 'amber' },
    { name: 'Django', level: 78, experience: '2+ yrs', tone: 'emerald' },
    { name: 'Express', level: 74, experience: '2+ yrs', tone: 'cyan' },
    { name: 'Node.js', level: 82, experience: '4+ yrs', tone: 'emerald' },
    { name: 'REST APIs', level: 85, experience: '5+ yrs', tone: 'cyan' },
    { name: 'SQL', level: 78, experience: '4+ yrs', tone: 'amber' },
    { name: 'Testing', level: 76, experience: '2+ yrs', tone: 'violet' },
    { name: 'CI/CD', level: 74, experience: '2+ yrs', tone: 'emerald' },
  ],
  Product: [
    { name: 'Design Systems', level: 84, experience: '3+ yrs', tone: 'violet' },
    { name: 'Accessibility', level: 80, experience: '3+ yrs', tone: 'cyan' },
    { name: 'Analytics', level: 76, experience: '3+ yrs', tone: 'amber' },
  ],
}

export const PROJECTS: Project[] = [
  {
    title: 'Django Web App',
    description: 'A full-stack Django app with authentication, CRUD modules, and responsive UI.',
    category: 'Web',
    stack: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
    metrics: { impact: 'Auth + CRUD', users: '10+ modules' },
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Express REST API',
    description: 'A Node.js + Express REST API with structured routes, validation, and clean error handling.',
    category: 'Automation',
    stack: ['JavaScript', 'Express', 'REST'],
    metrics: { impact: 'Clean API design' },
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Next.js Website',
    description: 'A modern website built with Next.js focusing on fast load times and clean UI.',
    category: 'Web',
    stack: ['Next.js', 'JavaScript', 'CSS'],
    metrics: { impact: 'Performance-focused' },
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Portfolio Site',
    description: 'A personal portfolio showcasing projects, skills, and contact details with modern UI.',
    category: 'Design',
    stack: ['HTML', 'CSS', 'JavaScript'],
    metrics: { impact: 'Clean presentation' },
    links: { demo: '#', repo: '#' },
  },
]

export const SERVICES: Service[] = [
  {
    title: 'Modern UI Development',
    description: 'Premium interfaces with responsive layouts, accessibility, and great perceived performance.',
    points: ['Component-driven build', 'Responsive + accessible', 'Performance budgets'],
    tone: 'cyan',
    featured: true,
  },
  {
    title: 'Design Systems',
    description: 'Tokens, reusable components, and patterns that help teams ship faster with fewer regressions.',
    points: ['Tokens + theming', 'Documentation', 'Team adoption'],
    tone: 'violet',
  },
  {
    title: 'Product Engineering',
    description: 'From idea to shipping: MVP builds, analytics, and iteration loops tied to business outcomes.',
    points: ['Lean MVPs', 'Experimentation', 'Metric-driven delivery'],
    tone: 'amber',
  },
  {
    title: 'Automation & Tooling',
    description: 'Developer experience improvements that reduce manual work and increase release confidence.',
    points: ['CI/CD', 'Quality checks', 'Release workflows'],
    tone: 'emerald',
  },
]

export const TESTIMONIALS: Testimonial[] = []

export const SOCIAL = {
  github: 'https://github.com/JBSiena',
  linkedin: 'https://www.linkedin.com/in/jbsiena',
  facebook: 'https://www.facebook.com/siena.johnbenjie',
}
