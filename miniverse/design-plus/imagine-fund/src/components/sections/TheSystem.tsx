"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Reveal from "@/components/animations/Reveal"

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    label: "Structure",
    value: "$9M Pre-seed & Seed Vehicle",
    desc: "Early-stage capital for category-defining founders.",
    image: "/images/card-1.jpg",
    wide: true,
  },
  {
    label: "Check Size",
    value: "$100K — $500K",
    desc: "Right-sized for the earliest conviction.",
    image: "/images/card-2.jpg",
    wide: false,
  },
  {
    label: "Focus Areas",
    value: "Agentic Infrastructure, Developer Tools, Applied AI",
    desc: "Building the foundation of an agentic world.",
    image: "/images/card-3.jpg",
    wide: false,
  },
  {
    label: "Location",
    value: "Bangalore & San Francisco",
    desc: "The India-SF corridor for agentic AI.",
    image: "/images/card-4.jpg",
    wide: false,
  },
]

export default function TheSystem() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const cardEls = track.querySelectorAll<HTMLElement>("[data-card]")

    // Calculate total width with expanded cards to determine full scroll distance
    // heading(340) + gap(180) + card1(780) + 3*gap(10) + 3*cards(480) = 2770
    const expandedTotal = 340 + 180 + 780 + (3 * 10) + (3 * 480)
    const scrollDistance = Math.max(expandedTotal - window.innerWidth, 0)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollDistance + window.innerWidth}`,
        invalidateOnRefresh: true,
      },
    })

    // Horizontal scroll
    tl.to(track, {
      x: () => -scrollDistance,
      ease: "none",
    }, 0)

    // Card width expansion — domino stagger as cards scroll into view
    const START_W = [622, 320, 320, 320]
    const END_W = [780, 480, 480, 480]

    cardEls.forEach((card, i) => {
      const start = 0.05 + i * 0.15
      tl.fromTo(
        card,
        { width: START_W[i] },
        { width: END_W[i], ease: "power2.out" },
        start,
      )
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="system"
      className="relative w-full h-[100svh] bg-[#181818] overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex items-center h-full"
        style={{ gap: 0 }}
      >
        {/* Left: Heading */}
        <div className="flex-shrink-0 flex flex-col justify-center pl-8 pr-0" style={{ width: 340, marginRight: 180 }}>
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-[2rem] leading-[1.15] tracking-tight-editorial text-white">
              Designed for the earliest stages of conviction.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-[family-name:var(--font-body)] text-[0.8125rem] leading-[1.5] tracking-[-0.01em] text-white/40 max-w-[300px] pt-5">
              A focused vehicle backing technical founders at the intersection of infrastructure and intelligence.
            </p>
          </Reveal>
        </div>

        {/* Card rail */}
        {cards.map((card, i) => (
          <div
            key={i}
            data-card
            className="relative flex-shrink-0 overflow-hidden flex flex-col justify-between rounded-lg"
            style={{
              width: card.wide ? 622 : 320,
              height: 599,
              marginRight: i < cards.length - 1 ? 10 : 0,
            }}
          >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.label}
              fill
              className="object-cover"
              sizes="700px"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

            {/* Label top */}
            <div className="relative z-10 p-5">
              <span className="font-[family-name:var(--font-body)] text-[0.6875rem] tracking-[0.06em] uppercase text-white/50">
                {card.label}
              </span>
            </div>

            {/* Value + desc bottom */}
            <div className="relative z-10 p-5 flex flex-col gap-1.5">
              <span className="font-[family-name:var(--font-display)] text-[1.5rem] leading-[1.2] tracking-tight-editorial text-white">
                {card.value}
              </span>
              <span className="font-[family-name:var(--font-body)] text-[0.75rem] leading-[1.4] text-white/45">
                {card.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
