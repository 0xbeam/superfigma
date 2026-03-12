"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import Reveal from "@/components/animations/Reveal"
import { useCountUp } from "@/hooks/useCountUp"

function MassiveStat({ numValue, prefix = "", suffix = "", label, delay = 0 }: {
  numValue: number
  prefix?: string
  suffix?: string
  label: string
  delay?: number
}) {
  const { count, ref } = useCountUp(numValue, 2000)
  return (
    <Reveal delay={delay}>
      <div ref={ref} className="flex flex-col">
        <div className="font-[family-name:var(--font-display)] text-[clamp(5rem,10vw,9rem)] leading-[1.2] tracking-tight-editorial text-[var(--color-text)]">
          {prefix}{count}{suffix}
        </div>
        <p className="font-[family-name:var(--font-body)] text-[0.875rem] leading-[1.4] tracking-tight-editorial text-[var(--color-text)] max-w-[277px]">
          {label}
        </p>
      </div>
    </Reveal>
  )
}

const logos = [
  "Emergent", "Composio", "Sentient AI", "Nerve AI", "Sarvam AI",
  "BFI", "Vanagon Ventures", "Flog Ventures", "Spacekayak",
]

// Base width in px, each successive image grows by this step
const BASE_PX = 180
const STEP_PX = 40 // each image grows 40px wider than the previous

function ScrollExpandImage({ img, index, scrollYProgress }: {
  img: { src: string | null; alt: string }
  index: number
  scrollYProgress: MotionValue<number>
}) {
  const targetWidth = BASE_PX + index * STEP_PX

  // Domino: each image starts expanding slightly after the previous
  const start = 0.05 + index * 0.08
  const end = Math.min(start + 0.25, 0.85)

  const width = useTransform(scrollYProgress, [start, end], [BASE_PX, targetWidth])

  return (
    <motion.div
      className="relative overflow-hidden h-[260px]"
      style={{ width, marginLeft: "auto" }}
    >
      {img.src ? (
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover"
          sizes="400px"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-[#DDDDDD]" />
      )}
    </motion.div>
  )
}

const gridImages = [
  { src: "/images/grid-1.jpg", alt: "People walking in field" },
  { src: "/images/grid-2.jpg", alt: "People in a field" },
  { src: "/images/grid-3.jpg", alt: "Person walks up hill" },
  { src: "/images/grid-4.jpg", alt: "Blue stone with tree design" },
  { src: null, alt: "Placeholder" },
]

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -300])

  return (
    <section ref={sectionRef} id="who" className="relative z-10 w-full min-h-[100svh] bg-white overflow-hidden">
      <div className="flex flex-col justify-between min-h-[100svh] px-20 py-10">

        {/* Top — heading + body */}
        <div className="flex flex-col gap-4 max-w-[495px] pt-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] tracking-tight-editorial text-[var(--color-text)]">
              A decade of creative infrastructure built before the cheque
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-[family-name:var(--font-body)] text-[0.875rem] leading-[1.4] tracking-tight-editorial text-[var(--color-text)]">
              We are anchored by Spacekayak, a 20-person creative practice serving as early partners for category definers. We built the brand for BFI and serve as the creative arm for Vanagon Ventures and Flog Ventures in Europe
            </p>
          </Reveal>
        </div>

        {/* Bottom — massive stats */}
        <div className="flex flex-col gap-16 pb-8">
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 md:gap-36">
            <MassiveStat
              numValue={80}
              suffix="+"
              label="Ventures shaped. Deep operational involvement from day zero to launch."
              delay={0.2}
            />
            <MassiveStat
              numValue={1}
              prefix="$"
              suffix="B"
              label="Total capital raised collectively by our design and infrastructure partners."
              delay={0.3}
            />
          </div>

          {/* Logo marquee */}
          <div className="relative overflow-hidden md:mr-[280px] lg:mr-[320px] border-t border-[var(--color-border)] pt-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />
            <div className="flex marquee-track whitespace-nowrap gap-16 items-center">
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={i}
                  className="font-[family-name:var(--font-body)] text-[0.8rem] tracking-tight-editorial text-[var(--color-text-secondary)]/40 uppercase shrink-0"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Scrolling image strip — right edge */}
      <motion.div
        style={{ y: imageY }}
        className="absolute right-0 top-0 hidden md:flex flex-col items-end"
      >
        <div className="flex flex-col items-end animate-scroll-y">
          {[...gridImages, ...gridImages].map((img, i) => (
            <ScrollExpandImage
              key={i}
              img={img}
              index={i % gridImages.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
