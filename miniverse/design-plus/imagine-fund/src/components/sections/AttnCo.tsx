"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { useCountUp } from "@/hooks/useCountUp"

function StatBlock({ numValue, suffix = "", label, delay = 0, isLast = false }: {
  numValue: number
  suffix?: string
  label: string
  delay?: number
  isLast?: boolean
}) {
  const { count, ref } = useCountUp(numValue, 2000)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      ref={ref}
      className={`flex flex-col gap-2 py-8 ${!isLast ? 'border-b border-black/10' : ''}`}
    >
      <div className="text-massive tracking-tighter tabular-nums text-black origin-left">
        {count}<span className="text-[0.6em] tracking-tight">{suffix}</span>
      </div>
      <div className="text-eyebrow text-black/60">
        {label}
      </div>
    </motion.div>
  )
}

const attentionStack = [
  { num: "01", name: "Capture", desc: "IRL & launch films. Founder-led narrative that builds trust.", col: "lg:col-span-4" },
  { num: "02", name: "Explain", desc: "Motion, 3D, product demos. Clarity and conviction.", col: "lg:col-span-4" },
  { num: "03", name: "Multiply", desc: "AI-scaled content & promos. One shoot, dozens of assets.", col: "lg:col-span-4" },
]

export default function AttnCo() {
  return (
    <section id="attn" className="relative w-full bg-[var(--color-bg)] hairline-t">

      <div className="section-pad container-base">

        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-12 flex justify-between items-end border-b border-black/10 pb-6">
            <Reveal>
              <span className="text-eyebrow text-black/40">
                05 — Distribution
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-mono-sm text-black/40">
                ( DISTRIBUTION )
              </span>
            </Reveal>
          </div>
        </div>

        {/* Main Title & Bio Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <h2 className="text-h1 text-black max-w-[600px] mb-8">
                Attention, engineered.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <Reveal delay={0.3}>
              <p className="text-body-lg text-black/80">
                Every portfolio company receives production infrastructure as a core service. We&rsquo;re building the producer-VC model for the earliest stage. Imagine Fund is the world&rsquo;s first creative VC.
                <CiteMark cardKey="attn-thesis" number={7} />
              </p>
            </Reveal>
          </div>
        </div>

        {/* The Stack & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          {/* Methods array */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
              {attentionStack.map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1), duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`${item.col} flex flex-col gap-4 p-8 bg-white border border-black/5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.02)]`}
                >
                  <span className="text-mono-sm text-black/30 block mb-2">
                    {item.num}
                  </span>
                  <span className="text-h3 text-black block mb-1">
                    {item.name}
                  </span>
                  <span className="text-body-base text-black/70">
                    {item.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side pure stats */}
          <div className="lg:col-span-4 flex flex-col lg:pl-12 lg:border-l lg:border-black/10">
            <StatBlock numValue={30} suffix="M+" label="Organic Views" delay={0.4} />
            <StatBlock numValue={55} suffix="+" label="Videos Shipped" delay={0.5} isLast={true} />
          </div>
        </div>

      </div>

    </section>
  )
}
