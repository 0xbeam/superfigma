"use client"

import Reveal from "@/components/animations/Reveal"

interface SectionEyebrowProps {
  number: string
  label: string
  dark?: boolean
}

export default function SectionEyebrow({ number, label, dark = false }: SectionEyebrowProps) {
  return (
    <Reveal>
      <p className={`font-[family-name:var(--font-mono)] text-[0.65rem] font-medium tracking-[0.1em] uppercase mb-5 ${
        dark ? "text-[var(--color-accent)] text-glow-accent" : "text-[var(--color-accent)]"
      }`}>
        {number} — {label}
      </p>
    </Reveal>
  )
}
