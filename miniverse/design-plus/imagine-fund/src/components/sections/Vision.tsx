"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import Image from "next/image"

const corridorStats = [
  { label: "Cost of Ops", india: "1/5th", us: "1×", description: "India engineering costs vs. US equivalents." },
  { label: "Runway", india: "7 years", us: "18 months", description: "Extended burn rate advantage vs. typical US runway." },
  { label: "Team Density", india: "15 engineers", us: "3 engineers", description: "At the exact same capital deployment." },
]

export default function Vision() {
  return (
    <section id="vision" className="relative w-full bg-[var(--color-bg)] hairline-t">

      <div className="section-pad container-base">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">

          {/* Left Column: Text and Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal>
              <div className="text-eyebrow text-[var(--color-accent)] mb-12">
                04 — The Corridor
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-h2 text-black mb-8">
                Geography is not <em className="italic text-black/60">destiny.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-body-base text-black/80 max-w-[480px] mb-6">
                Only 5–10% of qualified Indian founders get the infrastructure to break out globally. The rest plateau from lack of leverage, not lack of ambition.
                <CiteMark cardKey="india-corridor" number={9} />
              </p>
              <p className="text-body-base text-black/80 max-w-[480px] mb-16">
                Imagine Fund builds the corridor: engineering density in Bangalore, GTM in San Francisco, distribution everywhere.
              </p>
            </Reveal>

            {/* Stats Table */}
            <div className="w-full flex flex-col border-t border-black/10">
              {corridorStats.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.7 }}
                  className={`grid grid-cols-12 py-6 items-center row-hover border-b border-black/10`}
                >
                  <div className="col-span-4 lg:col-span-3">
                    <span className="text-eyebrow text-black/50">
                      {item.label}
                    </span>
                  </div>
                  <div className="col-span-4 lg:col-span-3">
                    <span className="text-h3 text-black">
                      {item.india}
                    </span>
                  </div>
                  <div className="col-span-4 lg:col-span-6">
                    <span className="text-body-sm text-black/60 block md:inline">
                      <span className="opacity-40 line-through mr-2 text-mono-sm">{item.us}</span> {item.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Image */}
          <div className="lg:col-span-6 relative h-[60vh] lg:h-auto min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full relative overflow-hidden bg-[#F3F2EE]"
            >
              {/* Crop marks for aesthetic */}
              <span className="absolute top-0 left-0 w-8 h-[1px] bg-black/20 z-10" />
              <span className="absolute top-0 left-0 w-[1px] h-8 bg-black/20 z-10" />
              <span className="absolute bottom-0 right-0 w-8 h-[1px] bg-black/20 z-10" />
              <span className="absolute bottom-0 right-0 w-[1px] h-8 bg-black/20 z-10" />

              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                alt="Abstract architectural topology"
                className="editorial-media inset-0 absolute h-full w-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
              />

              <div className="absolute bottom-6 left-6 z-10 bg-white/80 backdrop-blur-sm px-3 py-1.5 border border-black/10">
                <span className="text-eyebrow text-black">
                  Fig 1. Topology
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
