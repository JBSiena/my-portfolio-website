import type { BadgeTone } from './types'

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export function toneClasses(tone: BadgeTone) {
  switch (tone) {
    case 'cyan':
      return 'bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-400/20'
    case 'violet':
      return 'bg-violet-500/10 text-violet-200 ring-1 ring-violet-400/20'
    case 'emerald':
      return 'bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/20'
    case 'amber':
      return 'bg-amber-500/10 text-amber-200 ring-1 ring-amber-400/20'
  }
}
