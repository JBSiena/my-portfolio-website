import { useMemo, useState } from 'react'

import { PROJECTS } from '../content'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { clamp } from '../utils'
import type { Project, ProjectCategory } from '../types'

const CATEGORIES = ['All', 'Web', 'Mobile', 'Design', 'Automation'] as const

type Category = (typeof CATEGORIES)[number]

function Metric(props: { label: string; value?: string }) {
  if (!props.value) return null
  return (
    <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
      <div className="text-sm font-semibold text-white">{props.value}</div>
      <div className="mt-0.5 text-xs text-white/50">{props.label}</div>
    </div>
  )
}

function CategoryBadge(props: { category: ProjectCategory }) {
  const label = props.category
  const cls =
    label === 'Web'
      ? 'bg-cyan-500/10 text-cyan-200 ring-cyan-400/20'
      : label === 'Mobile'
        ? 'bg-emerald-500/10 text-emerald-200 ring-emerald-400/20'
        : label === 'Design'
          ? 'bg-violet-500/10 text-violet-200 ring-violet-400/20'
          : 'bg-amber-500/10 text-amber-200 ring-amber-400/20'

  return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${cls}`}>{label}</span>
}

function ProjectCard(props: { project: Project }) {
  const p = props.project
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <CategoryBadge category={p.category} />
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">{p.description}</p>
        </div>

        <div className="flex items-center gap-2">
          {p.links.demo ? (
            <a
              href={p.links.demo}
              className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              Live
            </a>
          ) : null}
          {p.links.repo ? (
            <a
              href={p.links.repo}
              className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
            >
              Code
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <Metric label="Users" value={p.metrics.users} />
        <Metric label="Impact" value={p.metrics.impact} />
        <Metric label="Stars" value={p.metrics.stars} />
      </div>
    </div>
  )
}

export function Projects() {
  const [category, setCategory] = useState<Category>('All')
  const [index, setIndex] = useState(0)

  const filtered = useMemo(() => {
    if (category === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.category === category)
  }, [category])

  const maxIndex = Math.max(0, filtered.length - 1)
  const safeIndex = clamp(index, 0, maxIndex)
  const active = filtered[safeIndex]

  return (
    <section id="projects" className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="PROJECTS"
              title="Selected work"
              description="A collection of my projects showcasing clean architecture, scalable APIs, and thoughtful user interfaces."
            />

            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCategory(c)
                    setIndex(0)
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ring-1 transition ${
                    category === c
                      ? 'bg-white/15 text-white ring-white/20'
                      : 'bg-white/5 text-white/70 ring-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            {active ? <ProjectCard project={active} /> : null}

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIndex((v) => clamp(v - 1, 0, maxIndex))}
                  className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-white/10"
                  aria-label="Previous project"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((v) => clamp(v + 1, 0, maxIndex))}
                  className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
                  aria-label="Next project"
                >
                  Next
                </button>
              </div>

              <div className="text-sm text-white/60">
                {filtered.length === 0 ? 'No projects in this category.' : `Project ${safeIndex + 1} of ${filtered.length}`}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              {filtered.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition ${i === safeIndex ? 'w-8 bg-white/70' : 'w-2.5 bg-white/20 hover:bg-white/35'}`}
                  aria-label={`Go to ${p.title}`}
                />
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4" delayMs={100}>
            <div className="glass rounded-3xl p-6">
              <div className="text-sm font-semibold text-white">Highlights</div>
              <div className="mt-4 grid gap-3">
                {[
                  { k: 'Category', v: category === 'All' ? 'All projects' : category },
                  { k: 'Focus', v: 'UX, performance, scalability' },
                  { k: 'Delivery', v: 'Clean code + clear outcomes' },
                ].map((row) => (
                  <div key={row.k} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-xs uppercase tracking-wide text-white/50">{row.k}</div>
                    <div className="mt-1 text-sm text-white/80">{row.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
