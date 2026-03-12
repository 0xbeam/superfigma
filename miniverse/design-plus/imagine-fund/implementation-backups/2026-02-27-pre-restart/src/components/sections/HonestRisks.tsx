"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"

const risks = [
  { title: "First-time fund manager", desc: "A decade of creative capital, but no prior fund track record. You're betting on the operator, not a spreadsheet." },
  { title: "VC cycles are compressing", desc: "The traditional 10-year cycle may not apply. Markets move in ~2-year windows now." },
  { title: "The agentic future is uncharted", desc: "Nobody has a playbook. The companies we back may be building for a world that hasn't fully arrived." },
  { title: "Traditional building may not work", desc: "If AI collapses software costs to near-zero, distribution and taste become the moats." },
  { title: "Geography thesis is early", desc: "The India–SF corridor exists as a pattern. But nobody has packaged it as fund infrastructure before." },
]

export default function HonestRisks() {
  return (
    <section id="risks" className="relative w-full pt-24 pb-32 px-4 sm:px-8 md:px-16 bg-[var(--color-bg)]">

      <div className="max-w-[1440px] mx-auto relative z-10 border-t hairline-t">

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Header Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 py-8 pr-4">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                10 &mdash; Honest Risks
              </p>
            </Reveal>
          </div>

          {/* Main Content Column */}
          <div className="col-span-1 md:col-span-9 lg:col-span-10 md:border-l hairline-l flex flex-col">

            <div className="p-6 md:p-12 lg:p-16 w-full max-w-[900px]">
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-tight-editorial text-[var(--color-text)] mb-8">
                  Why you should <em className="italic text-[var(--color-accent)]">not</em> invest.
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="font-[family-name:var(--font-body)] text-[0.95rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[600px]">
                  If these feel like dealbreakers, I respect that. If they feel like the kind of risk worth taking early — we should talk.
                </p>
              </Reveal>
            </div>

            {/* Risks Table */}
            <div className="w-full flex flex-col mt-auto">
              {risks.map((risk, i) => (
                <motion.div
                  key={risk.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.8 }}
                  className="w-full grid grid-cols-1 md:grid-cols-12 border-t hairline-t group transition-colors hover:bg-[var(--color-surface)]"
                >
                  <div className="col-span-1 md:col-span-1 p-6 md:p-8 flex items-baseline">
                    <span className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--color-accent)] tracking-[0.1em]">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-4 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-display)] text-[clamp(1.2rem,2vw,1.5rem)] leading-[1.1] text-[var(--color-text)]">
                      {risk.title}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-7 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-body)] text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                      {risk.desc}
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
