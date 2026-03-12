"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

const links = [
  { label: "The Thesis", href: "#system" },
  { label: "The Fund", href: "#fund" },
  { label: "The Corridor", href: "#vision" },
  { label: "Connect", href: "#contact" },
]

export default function Navigation() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setHidden(latest > previous && latest > 200)
    setScrolled(latest > 50)
  })

  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-4 sm:px-8 md:px-16 h-16 transition-all duration-700 ${
          scrolled
            ? "bg-transparent border-b border-transparent"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <a href="#" className={`font-[family-name:var(--font-mono)] font-medium text-[0.65rem] tracking-[0.15em] uppercase no-underline transition-colors duration-700 ${
          scrolled ? "text-[var(--color-text)]" : "text-white"
        }`}>
          Imagine Fund<sup className="text-[0.4rem] ml-1">&copy;</sup>
        </a>

        <div className="flex items-center gap-8 lg:gap-12">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hidden md:inline font-[family-name:var(--font-body)] text-[0.75rem] tracking-tight-editorial transition-colors duration-300 no-underline ${
                scrolled
                  ? "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          <button
            className="md:hidden flex flex-col gap-[3px] cursor-pointer w-6 h-6 justify-center items-end"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[1px] transition-all duration-300 ${scrolled ? "bg-[var(--color-text)]" : "bg-white"} ${mobileOpen ? "w-6 rotate-45 translate-y-[4px]" : "w-6"}`} />
            <span className={`block h-[1px] transition-all duration-300 ${scrolled ? "bg-[var(--color-text)]" : "bg-white"} ${mobileOpen ? "opacity-0" : "w-4"}`} />
            <span className={`block h-[1px] transition-all duration-300 ${scrolled ? "bg-[var(--color-text)]" : "bg-white"} ${mobileOpen ? "w-6 -rotate-45 -translate-y-[4px]" : "w-5"}`} />
          </button>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99] bg-[var(--color-bg)] flex flex-col items-start justify-center px-8 md:hidden"
        >
          <div className="flex flex-col gap-8 w-full">
            <span className="font-[family-name:var(--font-mono)] text-[0.65rem] tracking-[0.1em] uppercase text-[var(--color-text-secondary)] border-b border-[var(--color-border)] pb-4 w-full">
              Index
            </span>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,4rem)] leading-none text-[var(--color-text)] no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}
