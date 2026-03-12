"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"

const founders = [
  {
    name: "Stealth Founder 1 & 2",
    desc: "Seasoned tech founders. Deep systems thinking and relentless execution.",
    cardKey: "founder-1",
    citeNum: 10,
  },
  {
    name: "Stealth Founder 3",
    desc: "Repeat founder. Potential unicorn trajectory. Navigated scale before.",
    cardKey: "founder-2",
    citeNum: 11,
  },
  {
    name: "Stealth Founder 4",
    desc: "Ex-unicorn. End-to-end fintech ecosystem knowledge. First principles.",
    cardKey: "founder-3",
    citeNum: 12,
  },
  {
    name: "Stealth Founder 5",
    desc: "Growth at unicorn. Idea to pilots in weeks. Pure velocity.",
    cardKey: "founder-4",
    citeNum: 13,
  },
]

export default function FounderRadar() {
  return (
    <section id="founders" className="relative w-full pt-24 pb-32 px-4 sm:px-8 md:px-16 bg-[var(--color-bg)]">

      <div className="max-w-[1440px] mx-auto relative z-10 border-t hairline-t">

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Header Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 py-8 pr-4">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                07 &mdash; Founder Radar
              </p>
            </Reveal>
          </div>

          {/* Main Content Column */}
          <div className="col-span-1 md:col-span-9 lg:col-span-10 md:border-l hairline-l flex flex-col">

            <div className="p-6 md:p-12 lg:p-16 w-full max-w-[900px]">
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-tight-editorial text-[var(--color-text)] mb-8">
                  We optimise for <em className="italic text-[var(--color-text-secondary)]">founders</em>, not ideas.
                </h2>
              </Reveal>
            </div>

            {/* Founders Table */}
            <div className="w-full flex flex-col mt-auto">
              {founders.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.8 }}
                  className="w-full grid grid-cols-1 md:grid-cols-12 border-t hairline-t group transition-colors hover:bg-[var(--color-surface)]"
                >
                  <div className="col-span-1 md:col-span-1 p-6 md:p-8 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-60" />
                  </div>
                  <div className="col-span-1 md:col-span-4 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-display)] text-[clamp(1.2rem,2vw,1.5rem)] leading-none text-[var(--color-text)]">
                      {f.name}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-5 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-body)] text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                      {f.desc}
                      <CiteMark cardKey={f.cardKey} number={f.citeNum} />
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-2 p-6 md:p-8 md:border-l hairline-l flex items-center">
                    <span className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
                      Stealth
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
