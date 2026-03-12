"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"

const returns = [
  { tier: "Base", multiple: "3×", desc: "1–2 modest exits from 20." },
  { tier: "Target", multiple: "5–8×", desc: "One breakout. Several solid outcomes." },
  { tier: "Outlier", multiple: "15×+", desc: "Category-defining company." },
]

export default function ReturnModel() {
  return (
    <section id="returns" className="relative w-full pt-24 pb-32 px-4 sm:px-8 md:px-16 bg-[var(--color-bg)]">

      <div className="max-w-[1440px] mx-auto relative z-10 border-t hairline-t">

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Header Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 py-8 pr-4">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                09 &mdash; Returns
              </p>
            </Reveal>
          </div>

          {/* Main Content Column */}
          <div className="col-span-1 md:col-span-9 lg:col-span-10 md:border-l hairline-l flex flex-col">

            <div className="p-6 md:p-12 lg:p-16 w-full max-w-[900px]">
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-tight-editorial text-[var(--color-text)] mb-8">
                  Fund I proves the system. <br className="hidden md:block" />
                  <em className="italic text-[var(--color-text-secondary)]">Fund II scales it.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="font-[family-name:var(--font-body)] text-[0.95rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[600px]">
                  Fund II target: $50M. After proof, after breakouts, after the corridor is real enough that LPs can walk through it.
                </p>
              </Reveal>
            </div>

            {/* Returns Table */}
            <div className="w-full flex flex-col mt-auto">
              {returns.map((r, i) => (
                <motion.div
                  key={r.tier}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.8 }}
                  className="w-full grid grid-cols-1 md:grid-cols-12 border-t hairline-t group transition-colors hover:bg-[var(--color-surface)]"
                >
                  <div className="col-span-1 md:col-span-2 p-6 md:p-8 flex items-baseline">
                    <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                      {r.tier}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-3 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-display)] text-[clamp(2rem,3vw,3rem)] leading-none text-[var(--color-text)]">
                      {r.multiple}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-7 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-body)] text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                      {r.desc}
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
