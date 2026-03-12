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
    <section id="returns" className="relative w-full bg-[var(--color-bg)] text-black hairline-t">

      <div className="section-pad container-base">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">

          {/* Left Column Text */}
          <div className="lg:col-span-5 flex flex-col justify-between mb-8 lg:mb-0">
            <div>
              <Reveal>
                <div className="text-eyebrow text-[var(--color-accent)] mb-8">
                  07 — Return Model
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-h2 text-black mb-8 max-w-[400px]">
                  Fund I proves the system. <em className="italic text-black/60">Fund II scales it.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-body-base text-black/80 max-w-[480px] mb-16">
                  Fund II target: $50M. After proof, after breakouts, after the corridor is real enough that LPs can walk through it.
                </p>
              </Reveal>
            </div>

            {/* ROI Table */}
            <div className="w-full flex flex-col border-t border-black/10">
              {returns.map((r, i) => (
                <motion.div
                  key={r.tier}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.7 }}
                  className={`grid grid-cols-12 py-8 row-hover hover:bg-black/[0.02] border-b border-black/10 items-baseline`}
                >
                  <div className="col-span-4 lg:col-span-3">
                    <span className="text-eyebrow text-black/50">
                      {r.tier}
                    </span>
                  </div>
                  <div className="col-span-4 lg:col-span-3">
                    <span className="text-h3 text-black">
                      {r.multiple}
                    </span>
                  </div>
                  <div className="col-span-4 lg:col-span-6">
                    <span className="text-body-sm text-black/70">
                      {r.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-7 h-[50vh] lg:h-auto min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full relative overflow-hidden bg-[#EAE8E3] rounded-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop"
                alt="Abstract structural glass and metal representing scale"
                className="editorial-media inset-0 absolute h-full w-full object-cover hover:scale-105 transition-transform duration-1000 ease-out grayscale-[80%] contrast-125 mix-blend-multiply opacity-80"
              />
              <div className="absolute bottom-6 left-6 z-10 text-mono-sm text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-white/80 px-3 py-1.5 backdrop-blur-md rounded-full">
                Scaling the Corridor
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}
