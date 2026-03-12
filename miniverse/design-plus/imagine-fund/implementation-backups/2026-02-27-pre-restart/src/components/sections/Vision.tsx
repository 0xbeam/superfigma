"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"

const corridorStats = [
  { label: "Cost of Ops", value: "1/5th", description: "India engineering costs vs. US equivalents. True geographic arbitrage." },
  { label: "Runway", value: "7 years", description: "Extended burn rate advantage vs. typical 18-month US runway." },
  { label: "Team Density", value: "15 engineers", description: "At the exact same capital deployment where US gets 3." },
]

export default function Vision() {
  return (
    <section id="vision" className="relative w-full pt-24 pb-32 px-4 sm:px-8 md:px-16 bg-[var(--color-bg)]">

      <div className="max-w-[1440px] mx-auto relative z-10 border-t hairline-t">

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Header Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 py-8 pr-4">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                06 &mdash; The Corridor
              </p>
            </Reveal>
          </div>

          {/* Main Content Column */}
          <div className="col-span-1 md:col-span-9 lg:col-span-10 md:border-l hairline-l flex flex-col">

            <div className="p-6 md:p-12 lg:p-16 w-full max-w-[900px]">
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-tight-editorial text-[var(--color-text)] mb-8">
                  Geography is not <em className="italic text-[var(--color-text-secondary)]">destiny.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="font-[family-name:var(--font-body)] text-[0.95rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[600px]">
                  Only 5–10% of qualified Indian founders get the infrastructure to break out globally. The rest plateau from lack of leverage, not lack of ambition.
                  <CiteMark cardKey="india-corridor" number={9} />
                </p>
                <p className="font-[family-name:var(--font-body)] text-[0.95rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[600px] mt-6">
                  Imagine Fund builds the corridor: engineering density in Bangalore, GTM in San Francisco, distribution everywhere.
                </p>
              </Reveal>
            </div>

            {/* Corridor Stats Table */}
            <div className="w-full flex flex-col mt-auto">
              {corridorStats.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.8 }}
                  className="w-full grid grid-cols-1 md:grid-cols-12 border-t hairline-t group transition-colors hover:bg-[var(--color-surface)]"
                >
                  <div className="col-span-1 md:col-span-3 p-6 md:p-8 flex items-baseline">
                    <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                      {item.label}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-3 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2vw,2rem)] leading-none text-[var(--color-text)]">
                      {item.value}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-6 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-body)] text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                      {item.description}
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
