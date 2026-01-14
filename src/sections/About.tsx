import { BRAND, TECH_BADGES } from '../content'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <section id="about" className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="ABOUT"
            title="A product-minded builder."
            description="I build and ship full-stack web and mobile applications focused on clean architecture, performance, and scalability. My work covers backend APIs, frontend development, and secure data management, with an emphasis on writing maintainable, production-ready code."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Client-first process', text: 'Weekly updates, clear milestones, and proactive risk management.' },
                { title: 'Performance obsessed', text: 'Core Web Vitals, accessibility, and perceived speed by design.' },
                { title: 'Scalable UI systems', text: 'Reusable components, tokens, and predictable patterns.' },
                { title: 'Clean handoff', text: 'Readable code, sensible naming, and developer-friendly structure.' },
              ].map((c) => (
                <div key={c.title} className="glass group rounded-2xl p-5 transition hover:shadow-glow">
                  <div className="text-base font-semibold text-white">{c.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/70">{c.text}</div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="glass rounded-3xl p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">Tech stack</div>
                  <div className="mt-1 text-sm text-white/60">Currently based in {BRAND.location}</div>
                </div>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex w-full shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-white/5 px-4 py-2 text-center text-xs font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 sm:w-auto"
                >
                  Email me
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {TECH_BADGES.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10 transition hover:bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'Experience', value: '3+ yrs' },
                  { label: 'Projects', value: '10+' },
                  { label: 'Client', value: '1' },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-lg font-semibold text-white">{s.value}</div>
                    <div className="mt-1 text-xs text-white/50">{s.label}</div>
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
