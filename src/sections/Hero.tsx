import { HERO_STATS } from '../content'
import { Reveal } from '../components/Reveal'

export function Hero() {
  return (
    <section id="home" className="relative pt-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/70 ring-1 ring-white/10">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for freelance projects
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Building modern interfaces with{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
                clarity
              </span>{' '}
              and{' '}
              <span className="bg-gradient-to-r from-amber-200 via-cyan-200 to-violet-200 bg-clip-text text-transparent">
                impact
              </span>
              .
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
              I’m a full-stack developer focused on premium web experiences, scalable UI systems, and product-led growth. I help
              teams ship faster without sacrificing design quality.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-emerald-400/20 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:shadow-glow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 transition hover:shadow-glow">
                  <div className="text-2xl font-semibold text-white">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="animate-gradient-x rounded-3xl bg-gradient-to-r from-cyan-500/70 via-violet-500/70 to-emerald-500/70 bg-[length:200%_200%] p-[1px] shadow-glow">
                <div className="glass rounded-3xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/60">Current focus</div>
                      <div className="mt-1 text-lg font-semibold text-white">UI Systems + Performance</div>
                    </div>
                    <div className="h-10 w-10 animate-float-slow rounded-2xl bg-white/10 ring-1 ring-white/10" />
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      { k: 'Design', v: 'Glassmorphism + Bento layouts' },
                      { k: 'Engineering', v: 'React, TypeScript, scalable patterns' },
                      { k: 'Delivery', v: 'Fast builds, tested components' },
                    ].map((row) => (
                      <div key={row.k} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                        <div className="text-xs uppercase tracking-wide text-white/50">{row.k}</div>
                        <div className="mt-1 text-sm text-white/80">{row.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#about" className="mt-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
                <span className="animate-bounce">↓</span>
                Scroll to learn more
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
