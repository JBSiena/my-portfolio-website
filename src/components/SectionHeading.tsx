export function SectionHeading(props: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-sm font-semibold tracking-wide text-white/60">{props.eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{props.title}</h2>
      {props.description ? <p className="max-w-2xl text-white/70">{props.description}</p> : null}
    </div>
  )
}
