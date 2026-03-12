"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"

const fundDetails = [
  {
    label: "Structure",
    value: "$9M Pre-seed & Seed Vehicle",
  },
  {
    label: "Check Size",
    value: "$100K — $500K",
  },
  {
    label: "Focus Areas",
    value: "Agentic Infrastructure, Developer Tools, Applied AI",
  },
  {
    label: "Geography",
    value: "Bangalore & San Francisco",
  },
  {
    label: "Target Portfolio",
    value: "~20 Category-defining companies",
  }
]

export default function TheSystem() {
  return (
    <section id="system" className="relative w-full pt-24 pb-32 px-4 sm:px-8 md:px-16 bg-[var(--color-bg)]">

      <div className="max-w-[1440px] mx-auto relative z-10 border-t hairline-t">

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Header Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 py-8 pr-4">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                02 &mdash; The Fund
              </p>
            </Reveal>
          </div>

          {/* Main Content Column */}
          <div className="col-span-1 md:col-span-9 lg:col-span-10 md:border-l hairline-l flex flex-col">

            <div className="p-6 md:p-12 lg:p-16 w-full max-w-[900px]">
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(2.5rem,3vw,3.5rem)] leading-[1.05] tracking-tight-editorial text-[var(--color-text)] mb-8">
                  Designed for the <br className="hidden md:block" />earliest stages of conviction.
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="font-[family-name:var(--font-body)] text-[0.95rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[600px] mb-16">
                  Imagine Fund is structured to be the first institutional capital for technical founders. We lead or co-lead pre-seed rounds, bringing deep operational support and creative infrastructure to the table from day zero.
                </p>
              </Reveal>
            </div>

            {/* Elegant Typographic Table */}
            <div className="w-full flex flex-col mt-auto">
              {fundDetails.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.8 }}
                  className="w-full grid grid-cols-1 md:grid-cols-12 border-t hairline-t group transition-colors hover:bg-[var(--color-surface)]"
                >
                  <div className="col-span-1 md:col-span-4 lg:col-span-3 p-6 md:p-8 flex items-center">
                    <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-8 lg:col-span-9 p-6 md:p-8 md:border-l hairline-l flex items-center">
                    <span className="font-[family-name:var(--font-body)] text-[1.1rem] md:text-[1.25rem] text-[var(--color-text)]">
                      {item.value}
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
