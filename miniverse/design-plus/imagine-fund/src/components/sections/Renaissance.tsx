"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"
import CiteMark from "@/components/ui/CiteMark"

const phases = [
  {
    month: "Month 1",
    name: "Clarity",
    description: "Thesis, prototype, first user calls. The foundational sprint to find the signal in the noise.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="24" cy="24" r="7" fill="currentColor" />
      </svg>
    ),
  },
  {
    month: "Month 2",
    name: "Product",
    description: "Core loop, design system, messaging. Hardening the infrastructure for scale.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="15" height="15" rx="2.5" fill="currentColor" />
        <rect x="27" y="6" width="15" height="15" rx="2.5" fill="currentColor" />
        <rect x="6" y="27" width="15" height="15" rx="2.5" fill="currentColor" />
        <rect x="27" y="27" width="15" height="15" rx="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    month: "Month 3",
    name: "Distribution",
    description: "Launch assets, video, channel tests. Building the organic wedge.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M6 24h36M42 24L30 14M42 24L30 34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 14h20M6 34h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    month: "Month 4",
    name: "Momentum",
    description: "Public drop, pilots, GTM sprint. Activating the network and scaling.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 4L29 19H44L32 28L36 44L24 34L12 44L16 28L4 19H19L24 4Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
]

export default function Renaissance() {
  return (
    <section id="renaissance" className="relative w-full bg-white hairline-t">

      <div className="w-full px-20">
        <div className="container-base flex flex-col justify-between min-h-screen">

          {/* Header */}
          <div className="pt-16">
            <Reveal>
              <span className="text-eyebrow text-black/40 mb-4 block">
                05 — The Renaissance Program
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-h1 text-black max-w-[560px]">
                120 days from<br />zero to launch.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-body-base text-black/45 max-w-[420px] mt-4">
                A structured incubation designed to compress years of creative infrastructure into four focused months.
                <CiteMark cardKey="renaissance-how" number={6} />
              </p>
            </Reveal>
          </div>

          {/* Phases grid */}
          <div className="pb-16">

            {/* Icons row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 pb-8">
              {phases.map((phase, i) => (
                <motion.div
                  key={`icon-${phase.name}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[var(--color-text)] pr-8"
                >
                  {phase.icon}
                </motion.div>
              ))}
            </div>

            {/* Hairline */}
            <div className="w-full h-px bg-black/[0.12]" />

            {/* Text grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 pt-8">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.05 + 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-2.5 pr-8"
                >
                  <span className="text-mono-sm text-black/35">
                    {phase.month}
                  </span>
                  <span className="font-[var(--font-display)] text-[1.6rem] leading-[1.2] tracking-[-0.01em] text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
                    {phase.name}
                  </span>
                  <p className="text-body-base text-black/45 max-w-[240px]">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
