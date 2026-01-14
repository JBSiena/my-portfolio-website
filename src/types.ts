export type NavItem = {
  label: string
  href: string
}

export type BadgeTone = 'cyan' | 'violet' | 'emerald' | 'amber'

export type Skill = {
  name: string
  level: number
  experience: string
  tone: BadgeTone
}

export type ProjectCategory = 'Web' | 'Mobile' | 'Design' | 'Automation'

export type Project = {
  title: string
  description: string
  category: ProjectCategory
  stack: string[]
  metrics: {
    stars?: string
    users?: string
    impact?: string
  }
  links: {
    demo?: string
    repo?: string
  }
}

export type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
  rating: number
  metrics: {
    timeline: string
    uplift: string
  }
  photoUrl: string
}

export type Service = {
  title: string
  description: string
  points: string[]
  tone: BadgeTone
  featured?: boolean
}
