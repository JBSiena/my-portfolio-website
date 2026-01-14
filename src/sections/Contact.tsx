import { useState, type FormEventHandler } from 'react'

import { BRAND, SOCIAL } from '../content'
import { IconFacebook, IconGitHub, IconLinkedIn } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

type FormState = {
  name: string
  email: string
  message: string
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusText, setStatusText] = useState('')

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setStatus('idle')
    setStatusText('')

    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.message.trim()) next.message = 'Please write a short message.'

    setErrors(next)

    if (Object.keys(next).length > 0) {
      setStatus('error')
      setStatusText('Please fix the highlighted fields.')
      return
    }

    setStatus('sending')
    try {
      await new Promise((r) => setTimeout(r, 900))
      setStatus('success')
      setStatusText("Message sent. I'll reply within 24–48 hours.")
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
      setStatusText('Something went wrong. Please try again.')
    }
  }

  const alertCls =
    status === 'success'
      ? 'bg-emerald-500/10 text-emerald-200 ring-emerald-400/20'
      : status === 'error'
        ? 'bg-rose-500/10 text-rose-200 ring-rose-400/20'
        : 'bg-white/5 text-white/70 ring-white/10'

  return (
    <section id="contact" className="mt-24 pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="CONTACT"
            title="Let’s build something together"
            description="Send me a message and let’s get started."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="glass rounded-3xl p-6">
              {statusText ? (
                <div className={`mb-4 rounded-2xl px-4 py-3 text-sm ring-1 ${alertCls}`}>{statusText}</div>
              ) : null}

              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-semibold text-white/80">Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                    className={`mt-2 w-full rounded-2xl bg-white/5 px-4 py-3 text-sm text-white outline-none ring-1 transition placeholder:text-white/40 ${
                      errors.name ? 'ring-rose-400/40' : 'ring-white/10 focus:ring-white/25'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name ? <div className="mt-2 text-xs text-rose-200">{errors.name}</div> : null}
                </div>

                <div>
                  <label className="text-sm font-semibold text-white/80">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                    className={`mt-2 w-full rounded-2xl bg-white/5 px-4 py-3 text-sm text-white outline-none ring-1 transition placeholder:text-white/40 ${
                      errors.email ? 'ring-rose-400/40' : 'ring-white/10 focus:ring-white/25'
                    }`}
                    placeholder="example@domain.com"
                  />
                  {errors.email ? <div className="mt-2 text-xs text-rose-200">{errors.email}</div> : null}
                </div>

                <div>
                  <label className="text-sm font-semibold text-white/80">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                    className={`mt-2 min-h-32 w-full resize-y rounded-2xl bg-white/5 px-4 py-3 text-sm text-white outline-none ring-1 transition placeholder:text-white/40 ${
                      errors.message ? 'ring-rose-400/40' : 'ring-white/10 focus:ring-white/25'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message ? <div className="mt-2 text-xs text-rose-200">{errors.message}</div> : null}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`group relative overflow-hidden rounded-2xl px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition ${
                    status === 'sending'
                      ? 'bg-white/10 opacity-80'
                      : 'bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-emerald-400/20 hover:shadow-glow'
                  }`}
                >
                  <span className="relative z-10">{status === 'sending' ? 'Sending…' : 'Send message'}</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition group-hover:translate-x-full" />
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal className="lg:col-span-5" delayMs={100}>
            <div className="grid gap-4">
              <div className="glass rounded-3xl p-6 transition hover:shadow-glow">
                <div className="text-sm font-semibold text-white">Email</div>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="mt-2 inline-flex text-sm text-white/70 transition hover:text-white"
                >
                  {BRAND.email}
                </a>
              </div>

              <div className="glass rounded-3xl p-6 transition hover:shadow-glow">
                <div className="text-sm font-semibold text-white">Location</div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.location)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-sm text-white/70 transition hover:text-white"
                >
                  {BRAND.location}
                </a>
              </div>

              <div className="glass rounded-3xl p-6">
                <div className="text-sm font-semibold text-white">Social</div>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={SOCIAL.github}
                    target="_blank"
                    rel="noreferrer"
                    className="glass rounded-xl p-2 text-white/70 transition hover:scale-105 hover:text-white"
                    aria-label="GitHub"
                  >
                    <IconGitHub className="h-5 w-5" />
                  </a>
                  <a
                    href={SOCIAL.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="glass rounded-xl p-2 text-white/70 transition hover:scale-105 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <IconLinkedIn className="h-5 w-5" />
                  </a>
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="glass rounded-xl p-2 text-white/70 transition hover:scale-105 hover:text-white"
                    aria-label="Facebook"
                  >
                    <IconFacebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
