"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"
import { easings } from "@/lib/easings"

interface StaggerGroupProps {
  children: ReactNode
  className?: string
  stagger?: number
  y?: number
}

export default function StaggerGroup({ children, className, stagger = 0.08, y = 20 }: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: easings.smooth },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
