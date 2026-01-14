import { useState } from 'react'

import { TESTIMONIALS } from '../content'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { clamp } from '../utils'

function Star(props: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${props.filled ? 'text-amber-300' : 'text-white/15'}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 15.27l-5.18 2.73 1-5.82L1.64 7.99l5.84-.85L10 1.85l2.52 5.29 5.84.85-4.18 4.19 1 5.82z" />
    </svg>
  )
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, TESTIMONIALS.length - 1)
  const safeIndex = clamp(index, 0, maxIndex)
  const t = TESTIMONIALS[safeIndex]
  const hasTestimonials = TESTIMONIALS.length > 0

  return (
    <section id="testimonials" className="mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="TESTIMONIALS"
            title="Testimonials"
            description="Feedback from clients and collaborators highlighting code quality, communication, and reliable delivery across web and mobile projects."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            {t ? (
              <div className="glass group rounded-3xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={t.photoUrl}
                        alt={t.name}
                        className="h-14 w-14 rounded-2xl object-cover grayscale transition duration-500 group-hover:grayscale-0"
                      />
                      <div className="absolute -bottom-2 -right-2 rounded-xl bg-black/40 px-2 py-1 text-[10px] text-white/80 ring-1 ring-white/10">
                        {t.metrics.uplift}
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-semibold text-white">{t.name}</div>
                      <div className="mt-1 text-sm text-white/60">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} filled={i < t.rating} />
                    ))}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-white/75">“{t.quote}”</p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-semibold text-white">{t.metrics.timeline}</div>
                    <div className="mt-1 text-xs text-white/50">Timeline</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-sm font-semibold text-white">{t.metrics.uplift}</div>
                    <div className="mt-1 text-xs text-white/50">Outcome</div>
                  </div>
                  <div className="hidden rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 sm:block">
                    <div className="text-sm font-semibold text-white">Weekly</div>
                    <div className="mt-1 text-xs text-white/50">Updates</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass rounded-3xl p-6">
                <div className="text-base font-semibold text-white">No testimonials yet</div>
                <div className="mt-2 text-sm text-white/70">
                  I’m currently building my client portfolio. In the meantime, you can check out my projects and code on GitHub.
                </div>
              </div>
            )}

            {hasTestimonials ? (
              <>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIndex((v) => clamp(v - 1, 0, maxIndex))}
                      className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-white/10"
                      aria-label="Previous testimonial"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={() => setIndex((v) => clamp(v + 1, 0, maxIndex))}
                      className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
                      aria-label="Next testimonial"
                    >
                      Next
                    </button>
                  </div>

                  <div className="text-sm text-white/60">{`Testimonial ${safeIndex + 1} of ${TESTIMONIALS.length}`}</div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  {TESTIMONIALS.map((it, i) => (
                    <button
                      key={it.name}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`h-2.5 rounded-full transition ${i === safeIndex ? 'w-8 bg-white/70' : 'w-2.5 bg-white/20 hover:bg-white/35'}`}
                      aria-label={`Go to testimonial by ${it.name}`}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </Reveal>

          <Reveal className="lg:col-span-4" delayMs={100}>
            <div className="glass rounded-3xl p-6">
              <div className="text-sm font-semibold text-white">What I focus on</div>
              <div className="mt-4 grid gap-3">
                {[
                  { k: 'Clarity', v: 'Clear scope, structured delivery' },
                  { k: 'Quality', v: 'Clean systems and thoughtful UI' },
                  { k: 'Outcomes', v: 'Results tied to real usage and metrics' },
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
