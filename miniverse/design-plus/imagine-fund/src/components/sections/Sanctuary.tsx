"use client"

import { useRef } from "react"
import Image from "next/image"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { motion, useScroll, useTransform } from "framer-motion"

const pillars = [
  {
    word: "Build",
    desc: "Ventures shaped. Deep operational involvement from day zero to launch.",
  },
  {
    word: "Design",
    desc: "Total capital raised collectively by our design and infrastructure partners.",
  },
  {
    word: "Launch",
    desc: "Total capital raised collectively by our design and infrastructure partners.",
  },
]

export default function Sanctuary() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Pillars stay still until section is in viewport, then scroll right-to-left
  const pillarsX = useTransform(scrollYProgress, [0, 1], [0, -400])

  return (
    <section
      ref={sectionRef}
      id="parc"
      className="relative z-10 w-full h-[100svh] overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/sanctuary-bg.jpg"
        alt="Misty hillside with two figures walking through wildflowers"
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-between h-full px-20 py-8">

        {/* Top: Heading + body */}
        <div className="flex flex-col gap-4 pt-2">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-[32px] leading-[1.2] tracking-[-0.02em] text-white max-w-[495px]">
              A Building in Kormangala
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-[family-name:var(--font-body)] text-[14px] leading-[1.4] tracking-[-0.02em] text-white max-w-[495px]">
              Ten-year lease. Three floors structured as a single continuous loop: build, design, launch. We exist to provide creative infrastructure to category-defining companies from day zero.
              <CiteMark cardKey="sanctuary-vision" number={5} />
            </p>
          </Reveal>
        </div>

        {/* Bottom: Build / Design / Launch — scrolls right to left */}
        <motion.div
          className="flex items-end gap-[192px]"
          style={{ x: pillarsX }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col flex-shrink-0"
            >
              <span className="font-[family-name:var(--font-display)] text-[clamp(80px,10vw,144px)] leading-[1.2] tracking-[-0.02em] text-white">
                {pillar.word}
              </span>
              <span className="font-[family-name:var(--font-body)] text-[14px] leading-[1.4] tracking-[-0.02em] text-white max-w-[277px]">
                {pillar.desc}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
