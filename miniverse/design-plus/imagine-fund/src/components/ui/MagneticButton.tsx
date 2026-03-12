"use client"

import { useRef, type ReactNode, type MouseEvent } from "react"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  strength?: number
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) * strength
    const y = (e.clientY - top - height / 2) * strength
    ref.current.style.transform = `translate(${x}px, ${y}px)`
    ref.current.style.transition = "transform 0.1s ease-out"
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = "translate(0, 0)"
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
  }

  const Tag = href ? "a" : "button"
  const props = href ? { href } : { onClick, type: "button" as const }

  return (
    <Tag
      ref={ref as never}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  )
}
