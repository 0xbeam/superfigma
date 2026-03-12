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
    <section id="roadmap" className="relative w-full bg-[var(--color-bg)] hairline-t">

      <div className="section-pad container-base">

        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="flex flex-col gap-8 max-w-[600px]">
            <Reveal>
              <div className="text-eyebrow text-[var(--color-accent)]">
                06 — Deployment
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-h2 text-black">
                Start March. Close June. <em className="italic text-black/50">Proof by winter.</em>
              </h2>
            </Reveal>
          </div>

          <div className="hidden lg:block pb-2">
            <span className="text-mono-sm text-[var(--color-accent)] border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 px-4 py-2 rounded-full">
              Actively Deploying
            </span>
          </div>
        </div>

        {/* Wide Panoramic Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-[30vh] md:h-[45vh] relative overflow-hidden mb-24 bg-white border border-black/10"
        >
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
            alt="Linear architectural structure"
            className="editorial-media inset-0 absolute h-full w-full object-cover hover:scale-105 transition-transform duration-1000 ease-out grayscale-[50%] brightness-105"
          />
          <div className="absolute top-4 right-4 z-10 bg-white/60 backdrop-blur-md px-3 py-1 border border-black/10">
            <span className="text-eyebrow text-black">
              Fig 2. Velocity
            </span>
          </div>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 relative">

          <div className="lg:col-span-4 flex flex-col pt-2">
            <Reveal delay={0.2}>
              <p className="text-body-base text-black/80 max-w-[320px]">
                The deployment schedule is aggressive but structured. We back companies when they are just outlines, taking intense, focused, short-term operational roles to accelerate them into the corridor.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 w-full flex flex-col border-t border-black/10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.date}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.7 }}
                className={`grid grid-cols-1 md:grid-cols-12 py-8 row-hover border-b border-black/10 items-baseline`}
              >
                <div className="md:col-span-1 mb-2 md:mb-0">
                  <span className="text-mono-sm text-black/40">
                    0{i + 1}
                  </span>
                </div>
                <div className="md:col-span-4 mb-2 md:mb-0">
                  <span className="text-h3 text-black">
                    {m.date}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <span className="text-body-base text-black/70">
                    {m.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
