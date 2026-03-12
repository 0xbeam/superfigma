"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { useCountUp } from "@/hooks/useCountUp"

function InlineStat({ numValue, label, prefix = "", suffix = "", delay = 0 }: {
  numValue: number
  label: string
  prefix?: string
  suffix?: string
  delay?: number
}) {
  const { count, ref } = useCountUp(numValue, 2000)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      ref={ref}
      className="p-6 md:p-8 border-t hairline-t"
    >
      <div className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,4vw,4rem)] leading-[0.9] tracking-tight tabular-nums text-[var(--color-text)] mb-3">
        {prefix}{count}{suffix}
      </div>
      <div className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
        {label}
      </div>
    </motion.div>
  )
}

const attentionStack = [
  { num: "01", name: "Capture", desc: "IRL & launch films. Founder-led narrative that builds trust." },
  { num: "02", name: "Explain", desc: "Motion, 3D, product demos. Clarity and conviction." },
  { num: "03", name: "Multiply", desc: "AI-scaled content & promos. One shoot, dozens of assets." },
]

export default function AttnCo() {
  return (
    <section id="attn" className="relative w-full pt-24 pb-32 px-4 sm:px-8 md:px-16 bg-[var(--color-bg)]">

      <div className="max-w-[1440px] mx-auto relative z-10 border-t hairline-t">

        <div className="grid grid-cols-1 md:grid-cols-12 w-full">

          {/* Header Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 py-8 pr-4">
            <Reveal>
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                05 &mdash; Distribution
              </p>
            </Reveal>
          </div>

          {/* Main Content Column */}
          <div className="col-span-1 md:col-span-9 lg:col-span-10 md:border-l hairline-l flex flex-col">

            <div className="p-6 md:p-12 lg:p-16 w-full max-w-[900px]">
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-tight-editorial text-[var(--color-text)] mb-8">
                  Attention, <em className="italic text-[var(--color-text-secondary)]">engineered.</em>
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="font-[family-name:var(--font-body)] text-[0.95rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[600px] mb-12">
                  Every Imagine Fund company gets professional video, founder-led narrative, and platform-native distribution as core infrastructure. We&rsquo;re building the producer-VC model for the earliest stage.
                  <CiteMark cardKey="attn-thesis" number={7} />
                </p>
              </Reveal>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              <InlineStat numValue={30} suffix="M+" label="Organic Views" delay={0.3} />
              <div className="md:border-l hairline-l">
                <InlineStat numValue={55} suffix="+" label="Videos Shipped" delay={0.4} />
              </div>
            </div>

            {/* Production Stack Table */}
            <div className="w-full flex flex-col">
              {attentionStack.map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.8 }}
                  className="w-full grid grid-cols-1 md:grid-cols-12 border-t hairline-t group transition-colors hover:bg-[var(--color-surface)]"
                >
                  <div className="col-span-1 md:col-span-1 p-6 md:p-8 flex items-baseline">
                    <span className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--color-text-secondary)] tracking-[0.1em]">
                      {item.num}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-3 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2vw,2rem)] leading-none text-[var(--color-text)]">
                      {item.name}
                    </span>
                  </div>
                  <div className="col-span-1 md:col-span-8 p-6 md:p-8 md:border-l hairline-l flex items-baseline">
                    <span className="font-[family-name:var(--font-body)] text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                      {item.desc}
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
