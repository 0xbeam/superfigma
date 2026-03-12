"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { useCountUp } from "@/hooks/useCountUp"

function StatColumn({ numValue, prefix = "", suffix = "", label, desc, delay = 0 }: {
  numValue: number
  prefix?: string
  suffix?: string
  label: string
  desc: string
  delay?: number
}) {
  const { count, ref } = useCountUp(numValue, 2000)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      ref={ref}
      className="flex flex-col justify-between h-full p-6 md:p-8 border-l hairline-l border-t md:border-t-0 hairline-t md:hairline-t-none"
    >
      <div className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.1em] uppercase text-[var(--color-text-secondary)] mb-16">
        {label}
      </div>
      <div>
        <div className="font-[family-name:var(--font-display)] text-[clamp(2rem,3vw,3rem)] leading-none tracking-tight tabular-nums mb-4 text-[var(--color-text)]">
          {prefix}{count}{suffix}
        </div>
        <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.6] text-[var(--color-text-secondary)]">
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

const companies = [
  "Emergent", "Composio", "Sentient AI", "Nerve AI", "Sarvam AI",
  "BFI", "IAIRO", "Qbeast", "Echelon AI", "Extend AI", "Anomaly"
]

export default function Founder() {
  return (
    <section id="who" className="relative w-full pt-24 pb-32 px-4 sm:px-8 md:px-16 bg-[var(--color-bg)]">

      <div className="max-w-[1440px] mx-auto relative z-10 border-t hairline-t">

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Header Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 py-8 pr-4">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                01 &mdash; The Founder
              </p>
            </Reveal>
          </div>

          {/* Main Narrative Column */}
          <div className="col-span-1 md:col-span-9 lg:col-span-10 md:border-l hairline-l flex flex-col">

            <div className="p-6 md:p-12 lg:p-16 w-full max-w-[900px]">
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-tight-editorial text-[var(--color-text)] mb-8">
                  A decade of creative infrastructure built <em className="italic text-[var(--color-text-secondary)]">before</em> the cheque.
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="font-[family-name:var(--font-body)] text-[0.95rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[600px] mb-12">
                  We are anchored by Spacekayak, a 20-person creative practice serving as early partners for category definers. We built the brand for BFI and serve as the creative arm for Vanagon Ventures and Flog Ventures in Europe.
                  <CiteMark cardKey="sk-europe" number={2} />
                </p>

                <div className="pt-8 border-t hairline-t w-full max-w-[600px] flex flex-wrap gap-2 items-center">
                  <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.1em] text-[var(--color-text-secondary)] mr-4">Select Partners</span>
                  {companies.slice(0, 5).map(c => (
                    <span key={c} className="text-[0.7rem] font-medium px-3 py-1 bg-white rounded-sm border hairline border-[var(--color-border-light)] text-[var(--color-text)]">{c}</span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t hairline-t w-full mt-auto">
              <StatColumn
                numValue={80}
                suffix="+"
                label="Ventures Shaped"
                desc="Deep operational involvement from day zero to launch and beyond."
                delay={0.3}
              />
              <StatColumn
                numValue={1}
                prefix="$"
                suffix="B+"
                label="Capital Raised"
                desc="Total capital raised collectively by our design and infrastructure partners."
                delay={0.4}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
