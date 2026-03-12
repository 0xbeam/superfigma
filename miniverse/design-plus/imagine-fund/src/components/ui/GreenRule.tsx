import Reveal from "@/components/animations/Reveal"

export default function GreenRule({ delay = 0, glow = false }: { delay?: number; glow?: boolean }) {
  return (
    <Reveal delay={delay}>
      <div className={`w-8 h-px bg-[var(--color-accent)] mb-7 ${glow ? "glow-accent" : ""}`} />
    </Reveal>
  )
}
