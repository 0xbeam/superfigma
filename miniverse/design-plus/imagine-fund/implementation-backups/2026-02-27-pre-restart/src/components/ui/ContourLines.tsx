"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ContourLines() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    // Generating some elegant flowing paths mimicking topographic/contour lines
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.85] overflow-hidden mix-blend-multiply">
            <svg
                className="w-full h-full text-[var(--color-border)]"
                viewBox="0 0 1440 3000"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Layer 1 - Deep continuous curve */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="contour-path"
                    d="M-100,200 C300,400 600,0 900,300 C1200,600 1300,1200 1500,1500"
                />

                {/* Layer 2 - Sweeping traverse */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3.5, ease: "easeOut", delay: 0.2 }}
                    className="contour-path"
                    d="M-50,800 C400,600 800,900 1100,600 C1300,400 1400,800 1600,1000"
                />

                {/* Layer 3 - Gentle slope */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 4, ease: "easeOut", delay: 0.4 }}
                    className="contour-path"
                    d="M0,1500 C400,1400 700,1800 1000,1500 C1200,1300 1300,1700 1500,1600"
                />

                {/* Layer 4 - The grand dip */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 4.5, ease: "easeOut", delay: 0.6 }}
                    className="contour-path"
                    d="M-100,2200 C300,2000 600,2500 900,2100 C1200,1800 1400,2400 1600,2200"
                />

                {/* Layer 5 - Subdued line */}
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 5, ease: "easeOut", delay: 0.8 }}
                    className="contour-path"
                    d="M200,3000 C500,2800 800,2900 1100,2700 C1300,2600 1400,2800 1600,2700"
                />
            </svg>
        </div>
    )
}
