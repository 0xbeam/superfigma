"use client"

import { useRef, useState, useEffect } from "react"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { useCountUp } from "@/hooks/useCountUp"
import { motion } from "framer-motion"

const stats = [
  {
    numValue: 9,
    prefix: "$",
    suffix: "M",
    desc: "Pre-seed & seed vehicle. Deployable capital for category-defining founders.",
  },
  {
    numValue: 100,
    prefix: "",
    suffix: "%",
    desc: "Creative infrastructure committed to every portfolio company from day zero.",
  },
  {
    numValue: 20,
    prefix: "~",
    suffix: "",
    desc: "Target companies at the earliest stage of conviction in our network.",
  },
]

function StatRow({ numValue, prefix, suffix, desc, delay = 0, isFirst = false, isLast = false }: {
  numValue: number
  prefix: string
  suffix: string
  desc: string
  delay?: number
  isFirst?: boolean
  isLast?: boolean
}) {
  const { count, ref } = useCountUp(numValue, 1500)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={`flex items-baseline justify-between py-9 ${!isFirst ? 'border-t border-black/[0.12]' : ''} ${isLast ? 'border-b border-black/[0.12]' : ''}`}
    >
      <div className="font-[family-name:var(--font-display)] text-[clamp(56px,7vw,88px)] leading-[1.2] tracking-[-0.02em] text-black tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <p className="font-[family-name:var(--font-body)] text-[14px] leading-[1.5] text-[#1C1C1973] max-w-[260px] text-right">
        {desc}
      </p>
    </motion.div>
  )
}

export default function Fund() {
  const sectionRef = useRef<HTMLElement>(null)
  const [stickyTop, setStickyTop] = useState(0)

  useEffect(() => {
    const calc = () => {
      if (!sectionRef.current) return
      const sectionH = sectionRef.current.offsetHeight
      const viewportH = window.innerHeight
      // Negative top so it scrolls fully before sticking
      setStickyTop(sectionH > viewportH ? -(sectionH - viewportH) : 0)
    }
    calc()
    window.addEventListener("resize", calc)
    return () => window.removeEventListener("resize", calc)
  }, [])

  return (
    <section ref={sectionRef} id="fund" className="sticky w-full bg-[var(--color-bg)] z-0" style={{ top: stickyTop }}>
      <div className="w-full px-20 pt-16 pb-32 flex flex-col gap-10">

        {/* Eyebrow */}
        <Reveal>
          <div className="font-[family-name:var(--font-body)] text-[11px] font-medium tracking-[0.08em] uppercase text-[#8D8D8D]">
            03 — The Capital
          </div>
        </Reveal>

        {/* Editorial prose — two columns */}
        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-10 md:gap-[104px]">
            <div className="flex-shrink-0 md:w-[495px]">
              <p className="font-[family-name:var(--font-body)] text-[14px] leading-[1.4] tracking-[-0.02em] text-black">
                Imagine Fund operates as a highly concentrated pool of capital. We see it in saturated markets, crowded pitches, and in limited runway for founders. To address the urgency of building and its impact on the market, IF is committed to innovating and partnering to find solutions that help protect the founder&apos;s vision, and with it, the future of the product.
                <CiteMark cardKey="fund-structure" number={4} />
              </p>
              <p className="font-[family-name:var(--font-body)] text-[14px] leading-[1.4] tracking-[-0.02em] text-black mt-6">
                Our goal is to reduce the operational friction, and — to do this — we focus on our areas of greatest impact. We don&apos;t spray and pray. We take concentrated positions and build alongside our founders. We are prioritizing better design and making products that are easier to launch or scale.
              </p>
            </div>
            <div className="flex-shrink-0 md:w-[495px]">
              <p className="font-[family-name:var(--font-body)] text-[14px] leading-[1.4] tracking-[-0.02em] text-black">
                Every dollar deployed comes with creative infrastructure: brand, narrative, launch assets, and distribution. IF takes the same innovative approach to reducing friction across our entire value chain. From the way we operate our own facilities to how we use our influence to improve the footprint of the places where our product is manufactured.
              </p>
              <p className="font-[family-name:var(--font-body)] text-[14px] leading-[1.4] tracking-[-0.02em] text-black mt-6">
                This is not advisory. This is hands-on production work that compounds the value of every check we write. While we increase our impact, we also work to create positive change through efforts such as video production and by bringing builders around the world along with us on our journey.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Stats rows */}
        <div className="flex flex-col">
          {stats.map((stat, i) => (
            <StatRow
              key={i}
              numValue={stat.numValue}
              prefix={stat.prefix}
              suffix={stat.suffix}
              desc={stat.desc}
              delay={0.1 + i * 0.1}
              isFirst={i === 0}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
