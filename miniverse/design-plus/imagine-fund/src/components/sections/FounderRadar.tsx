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
    <section id="founders" className="relative w-full bg-[var(--color-bg)] text-black hairline-t">

      <div className="section-pad container-base">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left: Sticky Abstract Portrait / Radar Image */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <Reveal>
                <div className="text-eyebrow text-[var(--color-accent)] mb-8">
                  06 — Founder Radar
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-h2 text-black mb-12">
                  We optimise for <em className="italic text-black/60">founders</em>, not ideas.
                </h2>
              </Reveal>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full aspect-square relative overflow-hidden bg-black/5"
              >
                <img
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
                  alt="Abstract human subject representing stealth founders"
                  className="editorial-media hover:scale-105 transition-transform duration-1000 ease-out grayscale contrast-125 mix-blend-multiply opacity-90"
                />
                {/* Hairline framing */}
                <span className="absolute inset-0 border border-black/10 pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <span className="text-mono-sm text-black/60 bg-white/80 px-2 py-1 backdrop-blur-md">
                    Target Profiles
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Founder List */}
          <div className="lg:col-span-7 flex flex-col pt-12 lg:pt-32">
            <div className="w-full flex flex-col border-t border-black/10">
              {founders.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.7 }}
                  className={`w-full flex flex-col border-b border-black/10 py-10 row-hover hover:bg-black/[0.02]`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-h3 text-black">
                      {f.name}
                    </span>
                    <span className="text-mono-sm text-[var(--color-accent)] flex items-center gap-2 mt-2 bg-[var(--color-accent)]/10 px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] pulse-dot" />
                      Stealth
                    </span>
                  </div>

                  <span className="text-body-base text-black/70 max-w-[480px]">
                    {f.desc}
                    <span className="ml-1"><CiteMark cardKey={f.cardKey} number={f.citeNum} /></span>
                  </span>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-16 flex items-start gap-4 p-6 bg-black/[0.02] border border-black/5">
                <span className="text-mono-sm text-black/40 mt-1 shrink-0">Note</span>
                <p className="text-body-sm text-black/70">
                  Our founders are repeat builders or key early operators from category defining companies. We back them before the idea is fully formed, providing the infrastructure to shape it.
                </p>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  )
}
