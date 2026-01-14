import { SKILLS } from '../content'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { toneClasses } from '../utils'

export function Skills() {
  return (
    <section id="skills" className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="SKILLS"
              title="A toolkit that ships."
              description="Organized by focus area, with clear proficiency levels and experience."
            />
            <div className="hidden rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/60 ring-1 ring-white/10 md:block">
              Expertise badges are color-coded
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(SKILLS).map(([group, items], groupIndex) => (
            <Reveal key={group} className="h-full" delayMs={groupIndex * 90}>
              <div className="glass h-full rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">{group}</div>
                  <div className="text-xs text-white/50">{items.length} skills</div>
                </div>

                <div className="mt-5 grid gap-3 lg:grid-cols-2 xl:grid-cols-1">
                  {items.map((s) => (
                    <div
                      key={s.name}
                      className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10 hover:shadow-glow"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white">{s.name}</div>
                          <div className="mt-1 text-xs text-white/50">{s.experience}</div>
                        </div>
                        <span
                          className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${toneClasses(
                            s.tone,
                          )}`}
                        >
                          {s.level >= 85 ? 'Advanced' : s.level >= 70 ? 'Proficient' : 'Growing'}
                        </span>
                      </div>

                      <div className="mt-3">
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-cyan-400/70 via-violet-400/60 to-emerald-400/60"
                            style={{ width: `${s.level}%` }}
                          />
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs text-white/50">
                          <span>Proficiency</span>
                          <span>{s.level}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
