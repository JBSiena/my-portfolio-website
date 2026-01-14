import { useEffect, useState } from 'react'

import { BRAND, NAV, SOCIAL } from '../content'
import { IconFacebook, IconGitHub, IconLinkedIn } from '../components/Icons'
import logo from '../assets/logo.png'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/20 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-2">
            <span className="glass grid h-9 w-9 place-items-center overflow-hidden rounded-xl shadow-glow">
              <img src={logo} alt={`${BRAND.name} logo`} className="h-full w-full object-cover" />
            </span>
            <span className="font-semibold tracking-tight text-white">{BRAND.name}</span>
            <span className="hidden text-xs text-white/50 group-hover:text-white/70 sm:inline">{BRAND.tagline}</span>
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15 xl:inline-flex"
            >
              Let’s talk
            </a>

            <div className="hidden items-center gap-2 xl:flex">
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

            <button
              type="button"
              className="glass inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 xl:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <span className="sr-only">Menu</span>
              <span className="h-0.5 w-5 rounded bg-white/80" />
              <span className="ml-1 h-0.5 w-2 rounded bg-white/50" />
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="xl:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div className="glass rounded-2xl p-3">
              <div className="flex flex-col gap-1">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
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
        </div>
      ) : null}
    </header>
  )
}
