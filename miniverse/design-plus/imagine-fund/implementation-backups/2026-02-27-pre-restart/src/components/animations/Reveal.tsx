"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"
import { easings } from "@/lib/easings"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}

export default function Reveal({ children, delay = 0, className, y = 30 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: easings.smooth }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
