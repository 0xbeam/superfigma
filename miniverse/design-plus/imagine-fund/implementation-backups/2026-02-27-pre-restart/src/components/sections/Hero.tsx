"use client"

import { motion } from "framer-motion"
import { easings } from "@/lib/easings"

const ease = easings.dramatic || [0.76, 0, 0.24, 1]

export default function Hero() {
  return (
    <section className="min-h-[100svh] w-full flex flex-col relative overflow-hidden bg-[var(--color-bg)] pt-32 pb-16">

      {/* Structured Grid Container */}
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col justify-end relative z-10">

        {/* Main whitespace area */}
        <div className="flex-1 min-h-[40vh]" />

        {/* Minimal Swiss Hero Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-12 border-b hairline-b">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease }}
            className="md:col-span-8 lg:col-span-9"
          >
            <h1 className="font-[family-name:var(--font-display)] font-normal text-[var(--color-text)] text-[clamp(2rem,3vw,3.5rem)] leading-[1.05] tracking-tight-editorial m-0 p-0 max-w-[800px]">
              We are a pre-seed firm anchored in Bangalore and San Francisco. We back technical founders building the foundation of an agentic world.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease }}
            className="md:col-span-4 lg:col-span-3 flex flex-col md:items-end justify-end text-left md:text-right"
          >
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-secondary)] text-[0.8rem] leading-[1.6] max-w-[200px]">
              Imagine Fund operates with extreme conviction at the earliest stages of category-defining companies.
            </p>
          </motion.div>

        </div>

        {/* Bottom Metadata Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.5, ease }}
          className="flex flex-wrap justify-between items-start gap-8 pt-6 font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.15em] uppercase text-[var(--color-text-secondary)]"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[var(--color-text)]">Status</span>
            <span>Deploying Fund I</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[var(--color-text)]">Stage</span>
            <span>Pre-seed & Seed</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[var(--color-text)]">Locations</span>
            <span>Bangalore <br /> San Francisco</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[var(--color-text)]">Focus</span>
            <span>Infrastructure <br /> Agentic AI</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
