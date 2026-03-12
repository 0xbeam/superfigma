"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { easings } from "@/lib/easings"

const ease = easings.smooth || [0.22, 1, 0.36, 1]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <section ref={sectionRef} className="relative w-full h-[100svh]" style={{ zIndex: 0 }}>
      <motion.div
        style={{ scale }}
        className="fixed top-0 left-0 w-full h-[100svh] overflow-hidden origin-center"
      >
        {/* Background image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.32), rgba(0,0,0,0.32)), url(/images/hero-bg.jpg)" }}
        />

        {/* Bottom-left headline */}
        <div className="relative z-10 h-full flex flex-col justify-end px-20 pb-8 sm:pb-10 md:pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease }}
            className="font-[family-name:var(--font-display)] text-white text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] tracking-tight-editorial max-w-[720px]"
          >
            We are a pre-seed firm anchored in Bangalore and San Francisco. We back technical founders building the foundation of an agentic world.
          </motion.h1>
        </div>
      </motion.div>
    </section>
  )
}
