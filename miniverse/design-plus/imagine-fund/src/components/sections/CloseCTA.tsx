"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"
import { easings } from "@/lib/easings"

const ease = easings.dramatic

export default function CloseCTA() {
  return (
    <section
      id="close"
      className="w-full flex flex-col justify-center items-center text-center section-pad bg-[#121210] text-white relative"
    >
      {/* Decorative corner brackets */}
      <span className="hidden md:block absolute top-[10%] left-[8%] w-[32px] h-[32px] border-t border-l border-white/20 opacity-50 pointer-events-none" />
      <span className="hidden md:block absolute top-[10%] right-[8%] w-[32px] h-[32px] border-t border-r border-white/20 opacity-50 pointer-events-none" />
      <span className="hidden md:block absolute bottom-[10%] left-[8%] w-[32px] h-[32px] border-b border-l border-white/20 opacity-50 pointer-events-none" />
      <span className="hidden md:block absolute bottom-[10%] right-[8%] w-[32px] h-[32px] border-b border-r border-white/20 opacity-50 pointer-events-none" />

      <div className="container-base flex flex-col items-center">

        <Reveal>
          <div className="text-eyebrow text-[var(--color-accent)] mb-12">
            End — Chapter I
          </div>
        </Reveal>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="text-h1 text-white max-w-[800px] mb-8"
        >
          Creative capital as <br /> <em className="italic text-white/50">infrastructure.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="text-body-lg text-white/60 max-w-[500px] mb-16"
        >
          The earliest stage is where the highest-leverage work happens. Before startups exist. Before anyone else would bet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          <a
            href="mailto:p@spacekayak.xyz"
            className="group inline-flex items-center justify-center gap-4 bg-white text-black px-8 py-5 rounded-none hover:bg-white/90 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] pulse-dot" />
            <span className="text-eyebrow text-black">
              p@spacekayak.xyz
            </span>
            <span className="font-[family-name:var(--font-display)] italic text-black/40 group-hover:text-black/60 transition-colors ml-2">&rarr;</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-32 w-full pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 text-mono-sm text-white/40"
        >
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            Imagine Fund &copy; 2026
          </div>
          <div className="flex gap-8">
            <span>Bangalore</span>
            <span>San Francisco</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
