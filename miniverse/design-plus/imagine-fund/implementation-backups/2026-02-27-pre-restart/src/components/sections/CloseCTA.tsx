"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"
import { easings } from "@/lib/easings"

const ease = easings.dramatic

export default function CloseCTA() {
  return (
    <section
      id="close"
      className="w-full flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 py-32 bg-[var(--color-bg)] relative"
    >
      <div className="max-w-[1440px] mx-auto w-full border-t hairline-t pt-24 flex flex-col items-center">

        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] mb-16">
            Connect
          </p>
        </Reveal>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="font-[family-name:var(--font-display)] font-normal text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] tracking-tight-editorial text-[var(--color-text)] max-w-[800px] mb-8"
        >
          <em className="italic text-[var(--color-accent)]">Imagine Fund</em> — creative capital as infrastructure.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="font-[family-name:var(--font-body)] text-[0.95rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[500px] mb-16"
        >
          The earliest stage is where the highest-leverage work happens. Before startups exist. Before anyone else would bet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          <a
            href="mailto:p@spacekayak.xyz"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-body)] text-[0.9rem] text-[var(--color-text)] border-b border-[var(--color-text)] pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
            p@spacekayak.xyz
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-24 flex gap-8 font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]"
        >
          <span>spacekayak.xyz</span>
          <span>@imaginefund</span>
        </motion.div>

      </div>
    </section>
  )
}
