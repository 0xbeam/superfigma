"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"

const milestones = [
  { date: "March 2026", text: "Fundraise opens. Incubation underway." },
  { date: "June 2026", text: "Fund closes. First cheques deployed." },
  { date: "Summer 2026", text: "3–4 investments. Production live." },
  { date: "Winter 2026", text: "~6 investments. SF corridor pilot." },
  { date: "24 Months", text: "~20 investments complete. Fund I proof documented." },
]

export default function Deployment() {
  return (
    <section id="roadmap" className="relative w-full pt-24 pb-32 px-4 sm:px-8 md:px-16 bg-[var(--color-bg)]">

      <div className="max-w-[1440px] mx-auto relative z-10 border-t hairline-t">

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Header Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 py-8 pr-4">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                08 &mdash; Deployment
              </p>
            </Reveal>
          </div>

          {/* Main Content Column */}
          <div className="col-span-1 md:col-span-9 lg:col-span-10 md:border-l hairline-l flex flex-col">

            <div className="p-6 md:p-12 lg:p-16 w-full max-w-[900px]">
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-tight-editorial text-[var(--color-text)] mb-8">
                  Start March. Close June. <br className="hidden md:block" />
                  <em className="italic text-[var(--color-text-secondary)]">Proof by winter.</em>
                </h2>
              </Reveal>
            </div>

            {/* Timeline Table */}
            <div className="w-full flex flex-col mt-auto">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.date}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.8 }}
                  className="w-full grid grid-cols-1 md:grid-cols-12 border-t hairline-t group transition-colors hover:bg-[var(--color-surface)]"
                >
                  <div className="col-span-1 md:col-span-1 p-6 md:p-8 flex items-baseline">
                    <span className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--color-text-secondary)] tracking-[0.1em]">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-4 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-display)] text-[clamp(1.3rem,2vw,1.75rem)] leading-none text-[var(--color-text)]">
                      {m.date}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-7 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-body)] text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                      {m.text}
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
