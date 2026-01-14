import { SERVICES } from '../content'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { toneClasses } from '../utils'

export function Services() {
  return (
    <section id="services" className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="SERVICES"
            title="How I can help"
            description="Bento-style layout with feature cards, hover glow, and clear deliverables."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {SERVICES.map((s, i) => {
            const colSpan =
              s.title === 'Automation & Tooling'
                ? 'lg:col-span-7'
                : s.featured
                  ? 'lg:col-span-7'
                  : 'lg:col-span-5'

            return (
              <Reveal key={s.title} className={colSpan} delayMs={i * 90}>
                <div
                  className={`group relative overflow-hidden rounded-3xl p-[1px] transition ${
                    s.featured
                      ? 'bg-gradient-to-r from-cyan-500/60 via-violet-500/60 to-emerald-500/60'
                      : 'bg-gradient-to-r from-white/10 via-white/5 to-white/10'
                  }`}
                >
                  <div className="glass rounded-3xl p-6 transition group-hover:shadow-glow">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-lg font-semibold text-white">{s.title}</div>
                        <div className="mt-2 text-sm leading-relaxed text-white/70">{s.description}</div>
                      </div>
                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${toneClasses(s.tone)}`}>
                        {s.featured ? 'Featured' : 'Service'}
                      </span>
                    </div>

                    <div className="mt-5 grid gap-2">
                      {s.points.map((p) => (
                        <div
                          key={p}
                          className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/75 ring-1 ring-white/10"
                        >
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
