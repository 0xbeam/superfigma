"use client"

import { motion } from "framer-motion"

const strokeColor = "var(--color-text)"
const baseOpacity = 0.08

// Wireframe cube — isometric view
export function WireframeCube({ size = 60, className = "" }: { size?: number; className?: string }) {
  const s = size
  const h = s * 0.5
  const d = s * 0.3
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      width={s + d}
      height={s + d}
      viewBox={`0 0 ${s + d} ${s + d}`}
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      {/* Front face */}
      <rect x={0} y={d} width={s} height={s} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity} />
      {/* Back face */}
      <rect x={d} y={0} width={s} height={s} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.6} />
      {/* Connecting lines */}
      <line x1={0} y1={d} x2={d} y2={0} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.6} />
      <line x1={s} y1={d} x2={s + d} y2={0} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.6} />
      <line x1={0} y1={s + d} x2={d} y2={s} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.6} />
      <line x1={s} y1={s + d} x2={s + d} y2={s} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.6} />
    </motion.svg>
  )
}

// Wireframe diamond/octahedron — front view
export function WireframeDiamond({ size = 50, className = "" }: { size?: number; className?: string }) {
  const s = size
  const cx = s / 2
  const cy = s / 2
  const r = s * 0.45
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <polygon
        points={`${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}`}
        stroke={strokeColor}
        strokeWidth={0.5}
        opacity={baseOpacity}
      />
      {/* Inner cross lines */}
      <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.5} />
      <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.5} />
    </motion.svg>
  )
}

// Wireframe triangle/pyramid — front view
export function WireframePyramid({ size = 55, className = "" }: { size?: number; className?: string }) {
  const s = size
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      {/* Outer triangle */}
      <polygon
        points={`${s / 2},${s * 0.08} ${s * 0.92},${s * 0.88} ${s * 0.08},${s * 0.88}`}
        stroke={strokeColor}
        strokeWidth={0.5}
        opacity={baseOpacity}
      />
      {/* Inner triangle — slightly offset for depth */}
      <polygon
        points={`${s / 2},${s * 0.22} ${s * 0.78},${s * 0.78} ${s * 0.22},${s * 0.78}`}
        stroke={strokeColor}
        strokeWidth={0.5}
        opacity={baseOpacity * 0.5}
      />
      {/* Connecting lines for 3D feel */}
      <line x1={s / 2} y1={s * 0.08} x2={s / 2} y2={s * 0.22} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.4} />
      <line x1={s * 0.92} y1={s * 0.88} x2={s * 0.78} y2={s * 0.78} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.4} />
      <line x1={s * 0.08} y1={s * 0.88} x2={s * 0.22} y2={s * 0.78} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.4} />
    </motion.svg>
  )
}

// Concentric circles — like a target/radar
export function WireframeCircles({ size = 60, className = "" }: { size?: number; className?: string }) {
  const s = size
  const cx = s / 2
  const cy = s / 2
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <circle cx={cx} cy={cy} r={s * 0.44} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity} />
      <circle cx={cx} cy={cy} r={s * 0.3} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.7} />
      <circle cx={cx} cy={cy} r={s * 0.16} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.5} />
      {/* Cross hairs */}
      <line x1={cx} y1={cy - s * 0.44} x2={cx} y2={cy + s * 0.44} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.3} />
      <line x1={cx - s * 0.44} y1={cy} x2={cx + s * 0.44} y2={cy} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.3} />
    </motion.svg>
  )
}

// Dot grid constellation — connected dots
export function WireframeConstellation({ size = 70, className = "" }: { size?: number; className?: string }) {
  const s = size
  const points = [
    [0.15, 0.2], [0.45, 0.1], [0.8, 0.25],
    [0.3, 0.55], [0.65, 0.5],
    [0.2, 0.85], [0.55, 0.8], [0.85, 0.7],
  ]
  const connections = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 4],
    [3, 5], [3, 4], [4, 6], [4, 7], [5, 6], [6, 7],
  ]
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      {connections.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a][0] * s} y1={points[a][1] * s}
          x2={points[b][0] * s} y2={points[b][1] * s}
          stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.6}
        />
      ))}
      {points.map(([x, y], i) => (
        <circle key={i} cx={x * s} cy={y * s} r={1.5} fill={strokeColor} opacity={baseOpacity} />
      ))}
    </motion.svg>
  )
}

// Wireframe hexagon
export function WireframeHexagon({ size = 50, className = "" }: { size?: number; className?: string }) {
  const s = size
  const cx = s / 2
  const cy = s / 2
  const r = s * 0.44
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
  }).join(" ")
  const innerR = r * 0.55
  const innerPts = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2
    return `${cx + innerR * Math.cos(angle)},${cy + innerR * Math.sin(angle)}`
  }).join(" ")
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <polygon points={pts} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity} />
      <polygon points={innerPts} stroke={strokeColor} strokeWidth={0.5} opacity={baseOpacity * 0.5} />
    </motion.svg>
  )
}
