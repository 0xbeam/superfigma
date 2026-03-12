"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { useCountUp } from "@/hooks/useCountUp"

function MinimalStat({ numValue, prefix = "", suffix = "", label, sublabel, delay = 0 }: {
  numValue: number
  prefix?: string
  suffix?: string
  label: string
  sublabel: string
  delay?: number
}) {
  const { count, ref } = useCountUp(numValue, 2200)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="p-6 md:p-8 flex flex-col justify-between h-full border-t border-[var(--color-border)] hairline-t w-full"
    >
      <div className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.15em] uppercase text-[var(--color-text-secondary)] mb-12">
        {label}
      </div>
      <div>
        <div className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,4vw,4rem)] leading-[0.9] tracking-tight tabular-nums text-[var(--color-text)] mb-4">
          {prefix}{count}{suffix}
        </div>
        <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.6] text-[var(--color-text-secondary)] max-w-[250px]">
          {sublabel}
        </p>
      </div>
    </motion.div>
  )
}

const fundTerms = [
  { label: "Total Raise", value: "$10,000,000" },
  { label: "Vehicle", value: "Imagine Fund" },
  { label: "Deployment", value: "~$9M across ~20 co." },
  { label: "Check Range", value: "$100K – $500K" },
  { label: "Min LP", value: "$100,000" },
]

export default function Fund() {
  return (
    <section id="fund" className="relative w-full pt-24 pb-32 px-4 sm:px-8 md:px-16 bg-[var(--color-bg)]">

      <div className="max-w-[1440px] mx-auto relative z-10 border-t hairline-t">

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Header Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 py-8 pr-4">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                03 &mdash; The Capital
              </p>
            </Reveal>
          </div>

          {/* Main Content Column */}
          <div className="col-span-1 md:col-span-9 lg:col-span-10 md:border-l hairline-l flex flex-col">

            <div className="p-6 md:p-12 lg:p-16 w-full max-w-[900px]">
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(2rem,3vw,3.5rem)] leading-[1.05] tracking-tight-editorial text-[var(--color-text)] mb-8">
                  One raise. One race. <br className="hidden md:block" />
                  <em className="italic text-[var(--color-text-secondary)]">Creative capital.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="font-[family-name:var(--font-body)] text-[0.95rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[600px] mb-12">
                  Imagine Fund operates as a highly concentrated pool of capital. We don't spray and pray. We take concentrated positions and build alongside our founders.
                  <CiteMark cardKey="fund-structure" number={4} />
                </p>
              </Reveal>
            </div>

            {/* Structured Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-auto">

              <div className="col-span-1">
                <MinimalStat
                  numValue={9}
                  prefix="$"
                  suffix="M"
                  label="Deployable Capital"
                  sublabel="Directed to ~20 investments."
                  delay={0.3}
                />
              </div>

              <div className="col-span-1 md:border-l hairline-l">
                <MinimalStat
                  numValue={1}
                  prefix="$"
                  suffix="M"
                  label="Mgmt Fee"
                  sublabel="Funds operations, programs, and team."
                  delay={0.4}
                />
              </div>

              {/* Minimal Terms List */}
              <div className="col-span-1 md:col-span-2 lg:col-span-1 border-t md:border-t lg:border-t hairline-t lg:border-l lg:hairline-l p-6 md:p-8 flex flex-col h-full bg-[var(--color-surface)]">
                <Reveal delay={0.5}>
                  <div className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.15em] uppercase text-[var(--color-text-secondary)] mb-8">
                    Terms Overview
                  </div>

                  <div className="flex flex-col gap-4">
                    {fundTerms.map((item, i) => (
                      <div key={item.label} className="flex justify-between items-center py-2 border-b hairline-b border-[var(--color-border-light)] last:border-0">
                        <span className="font-[family-name:var(--font-body)] text-[0.75rem] tracking-tight-editorial text-[var(--color-text-secondary)]">{item.label}</span>
                        <span className="font-[family-name:var(--font-mono)] text-[0.7rem] text-[var(--color-text)]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
