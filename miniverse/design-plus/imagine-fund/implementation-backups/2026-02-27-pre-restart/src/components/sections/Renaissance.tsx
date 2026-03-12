"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"
import CiteMark from "@/components/ui/CiteMark"

const phases = [
  { month: "Month 1", name: "Clarity", description: "Thesis, prototype, first user calls. The foundational sprint to find the signal in the noise." },
  { month: "Month 2", name: "Product", description: "Core loop, design system, messaging. Hardening the infrastructure for scale." },
  { month: "Month 3", name: "Distribution", description: "Launch assets, video, channel tests. Building the organic wedge." },
  { month: "Month 4", name: "Momentum", description: "Public drop, pilots, GTM sprint. Activating the network and scaling." },
]

export default function Renaissance() {
  return (
    <section id="renaissance" className="relative w-full pt-24 pb-32 px-4 sm:px-8 md:px-16 bg-[var(--color-bg)]">

      <div className="max-w-[1440px] mx-auto relative z-10 border-t hairline-t">

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Header Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 py-8 pr-4">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                04 &mdash; The Program
              </p>
            </Reveal>
          </div>

          {/* Main Content Column */}
          <div className="col-span-1 md:col-span-9 lg:col-span-10 md:border-l hairline-l flex flex-col">

            <div className="p-6 md:p-12 lg:p-16 w-full max-w-[900px]">
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-tight-editorial text-[var(--color-text)] mb-8">
                  120 days from zero to launch.
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="font-[family-name:var(--font-body)] text-[0.95rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[600px]">
                  Structured hours every week. Design, growth, creative direction, introductions. Output, not advice. 24-hour build sprints. Drop Nights for public shipping.
                  <CiteMark cardKey="renaissance-how" number={6} />
                </p>
              </Reveal>
            </div>

            {/* Phases Table */}
            <div className="w-full flex flex-col mt-auto">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.8 }}
                  className="w-full grid grid-cols-1 md:grid-cols-12 border-t hairline-t group transition-colors hover:bg-[var(--color-surface)]"
                >
                  <div className="col-span-1 md:col-span-2 p-6 md:p-8 flex items-baseline">
                    <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                      {phase.month}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-3 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2vw,2rem)] leading-none text-[var(--color-text)]">
                      {phase.name}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-7 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-body)] text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                      {phase.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

