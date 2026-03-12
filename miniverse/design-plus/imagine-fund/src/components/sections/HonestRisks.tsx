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
    <section id="risks" className="relative w-full bg-[var(--color-bg)] text-black hairline-t">

      <div className="section-pad container-base">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">

          {/* Left Column: Image and Intro */}
          <div className="lg:col-span-5 flex flex-col pt-2">
            <Reveal>
              <div className="text-eyebrow text-[var(--color-accent)] mb-12">
                08 — Honest Risks
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-h2 text-black mb-8 max-w-[500px]">
                Why you should <em className="italic text-black/40">not</em> invest.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-body-base text-black/70 max-w-[520px] mb-12">
                If these feel like dealbreakers, I respect that. If they feel like the kind of risk worth taking early — we should talk.
              </p>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="w-full aspect-[4/3] lg:aspect-square relative overflow-hidden bg-[#EAE8E3] hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?q=80&w=2089&auto=format&fit=crop"
                alt="Moody abstract fog representing uncertainty"
                className="editorial-media inset-0 absolute h-full w-full object-cover hover:scale-105 transition-transform duration-1000 ease-out grayscale-[100%] contrast-150 brightness-75 mix-blend-multiply"
              />
              <div className="absolute top-0 left-0 w-4 h-[1px] bg-black/20 z-10" />
              <div className="absolute top-0 left-0 w-[1px] h-4 bg-black/20 z-10" />
            </motion.div>
          </div>

          {/* Right Column: The Risks */}
          <div className="lg:col-span-7 w-full flex flex-col lg:pt-32">
            <div className="border-t border-black/10">
              {risks.map((risk, i) => (
                <motion.div
                  key={risk.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.7 }}
                  className={`w-full flex flex-col border-b border-black/10 py-10 row-hover hover:bg-black/[0.01]`}
                >
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-mono-sm text-black/30">
                      RISK_0{i + 1}
                    </span>
                    <span className="text-h3 text-black pr-8">
                      {risk.title}
                    </span>
                  </div>

                  <span className="text-body-base text-black/70 max-w-[480px]">
                    {risk.desc}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Mobile Image Fallback */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="w-full aspect-[4/3] relative overflow-hidden bg-[#EAE8E3] mt-12 block lg:hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?q=80&w=2089&auto=format&fit=crop"
                alt="Moody abstract fog representing uncertainty"
                className="editorial-media inset-0 absolute h-full w-full object-cover grayscale-[100%] contrast-150 brightness-75 mix-blend-multiply"
              />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}
