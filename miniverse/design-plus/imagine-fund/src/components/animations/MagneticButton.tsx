"use client"

import { useRef, ReactNode } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
    children: ReactNode
    className?: string
    strength?: number
}

export default function MagneticButton({
    children,
    className = "",
    strength = 0.3,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const { left, top, width, height } = ref.current.getBoundingClientRect()
        const x = (e.clientX - left - width / 2) * strength
        const y = (e.clientY - top - height / 2) * strength
        ref.current.style.transform = `translate(${x}px, ${y}px)`
    }

    const handleMouseLeave = () => {
        if (!ref.current) return
        ref.current.style.transform = "translate(0, 0)"
        ref.current.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
    }

    const handleMouseEnter = () => {
        if (!ref.current) return
        ref.current.style.transition = "transform 0.1s ease-out"
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className={`inline-block ${className}`}
        >
            {children}
        </div>
    )
}
