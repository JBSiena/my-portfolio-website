import { BRAND, NAV, SOCIAL } from '../content'
import { IconFacebook, IconGitHub, IconLinkedIn } from '../components/Icons'
import logo from '../assets/logo.png'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/10">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="glass grid h-9 w-9 place-items-center overflow-hidden rounded-xl shadow-glow">
                <img src={logo} alt={`${BRAND.name} logo`} className="h-full w-full object-cover" />
              </span>
              <div className="text-base font-semibold text-white">{BRAND.name}</div>
            </div>
            <div className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Clean, modern interfaces with strong engineering foundations.
            </div>

            <div className="mt-4 flex items-center gap-2">
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

          <div className="md:col-span-3">
            <div className="text-sm font-semibold text-white">Quick links</div>
            <div className="mt-3 grid gap-2">
              {NAV.map((i) => (
                <a key={i.href} href={i.href} className="text-sm text-white/60 transition hover:text-white">
                  {i.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-semibold text-white">Contact</div>
            <div className="mt-3 grid gap-2 text-sm text-white/60">
              <a href={`mailto:${BRAND.email}`} className="transition hover:text-white">
                {BRAND.email}
              </a>
              <div>{BRAND.location}</div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
