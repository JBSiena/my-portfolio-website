import { useEffect, useRef, useState, type ReactNode } from 'react'

function useReveal<T extends HTMLElement>(options?: { once?: boolean; rootMargin?: string }) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    if (visible && options?.once) return

    const el = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setVisible(true)
          else if (!options?.once) setVisible(false)
        }
      },
      {
        threshold: 0.15,
        rootMargin: options?.rootMargin ?? '0px 0px -10% 0px',
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options?.once, options?.rootMargin, visible])

  return { ref, visible }
}

export function Reveal(props: {
  children: ReactNode
  className?: string
  once?: boolean
  delayMs?: number
}) {
  const { ref, visible } = useReveal<HTMLDivElement>({ once: props.once ?? true })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 will-change-transform ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 md:translate-y-0 motion-reduce:translate-y-0'
      } ${props.className ?? ''}`}
      style={props.delayMs ? { transitionDelay: `${props.delayMs}ms` } : undefined}
    >
      {props.children}
    </div>
  )
}
