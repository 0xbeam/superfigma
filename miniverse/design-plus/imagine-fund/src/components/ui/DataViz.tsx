"use client"

import { motion } from "framer-motion"

const c = "var(--color-text)"
const cm = "var(--color-text-secondary)"
const strokeW = 0.8

/* ── Donut Ring ── */
export function DonutChart({
  segments = [{ value: 90, label: "Deployed" }, { value: 10, label: "Reserve" }],
  size = 120,
  delay = 0
}: {
  segments?: { value: number; label: string }[]
  size?: number
  delay?: number
}) {
  const r = 38
  const circumference = 2 * Math.PI * r
  const total = segments.reduce((s, seg) => s + seg.value, 0)

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1 }}
    >
      {/* Track */}
      <circle cx="50" cy="50" r={r} fill="none" stroke={cm} strokeWidth={strokeW} opacity={0.15} />
      {/* Segments */}
      {segments.map((seg, i) => {
        const dash = (seg.value / total) * circumference
        const gap = circumference - dash
        const currentOffset = segments.slice(0, i).reduce((sum, s) => sum + (s.value / total) * circumference, 0)
        return (
          <motion.circle
            key={i}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={i === 0 ? c : cm}
            strokeWidth={i === 0 ? 1.5 : strokeW}
            opacity={i === 0 ? 0.3 : 0.12}
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={-currentOffset}
            strokeLinecap="butt"
            transform="rotate(-90 50 50)"
            initial={{ strokeDasharray: `0 ${circumference}` }}
            whileInView={{ strokeDasharray: `${dash} ${gap}` }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.2 + i * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        )
      })}
      {/* Center label */}
      <text x="50" y="48" textAnchor="middle" fill={c} opacity={0.25} fontSize="8" fontFamily="var(--font-mono)">
        {segments[0]?.value}%
      </text>
      <text x="50" y="57" textAnchor="middle" fill={cm} opacity={0.2} fontSize="4" fontFamily="var(--font-mono)">
        {segments[0]?.label}
      </text>
    </motion.svg>
  )
}

/* ── Vertical Bar Chart ── */
export function BarChart({
  bars = [{ value: 80, label: "A" }],
  height = 100,
  width = 140,
  delay = 0,
}: {
  bars?: { value: number; label: string }[]
  height?: number
  width?: number
  delay?: number
}) {
  const max = Math.max(...bars.map(b => b.value))
  const barW = Math.min(12, (width - 20) / bars.length - 4)
  const chartH = 60
  const baseY = 75

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1 }}
    >
      {/* Baseline */}
      <line x1="10" y1={baseY} x2={width - 10} y2={baseY} stroke={cm} strokeWidth={strokeW} opacity={0.15} />
      {/* Grid lines */}
      {[0.25, 0.5, 0.75].map((pct, i) => (
        <line key={i} x1="10" y1={baseY - chartH * pct} x2={width - 10} y2={baseY - chartH * pct} stroke={cm} strokeWidth={0.3} opacity={0.1} />
      ))}
      {/* Bars */}
      {bars.map((bar, i) => {
        const barH = (bar.value / max) * chartH
        const x = 20 + i * ((width - 40) / bars.length)
        return (
          <g key={i}>
            <motion.rect
              x={x}
              y={baseY}
              width={barW}
              height={0}
              fill={c}
              opacity={0.15 + (i / bars.length) * 0.15}
              initial={{ height: 0, y: baseY }}
              whileInView={{ height: barH, y: baseY - barH }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <text x={x + barW / 2} y={baseY + 10} textAnchor="middle" fill={cm} opacity={0.2} fontSize="4" fontFamily="var(--font-mono)">
              {bar.label}
            </text>
          </g>
        )
      })}
    </motion.svg>
  )
}

/* ── Sparkline ── */
export function Sparkline({
  points = [10, 25, 20, 45, 35, 60, 55, 80, 75, 90],
  width = 160,
  height = 60,
  delay = 0,
}: {
  points?: number[]
  width?: number
  height?: number
  delay?: number
}) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const pad = 8
  const chartW = width - pad * 2
  const chartH = height - pad * 2

  const pathData = points
    .map((p, i) => {
      const x = pad + (i / (points.length - 1)) * chartW
      const y = pad + chartH - ((p - min) / range) * chartH
      return `${i === 0 ? "M" : "L"}${x},${y}`
    })
    .join(" ")

  const areaPath = pathData + ` L${pad + chartW},${pad + chartH} L${pad},${pad + chartH} Z`

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1 }}
    >
      {/* Fill area */}
      <motion.path
        d={areaPath}
        fill={c}
        opacity={0.04}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.5, duration: 1 }}
      />
      {/* Line */}
      <motion.path
        d={pathData}
        fill="none"
        stroke={c}
        strokeWidth={strokeW}
        opacity={0.2}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* End dot */}
      <motion.circle
        cx={pad + chartW}
        cy={pad + chartH - ((points[points.length - 1] - min) / range) * chartH}
        r={2}
        fill={c}
        opacity={0.25}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 1.5, duration: 0.4 }}
      />
    </motion.svg>
  )
}

/* ── Comparison Bars (horizontal) ── */
export function ComparisonBars({
  items = [{ label: "A", valueA: 80, valueB: 20 }],
  width = 200,
  delay = 0,
}: {
  items?: { label: string; valueA: number; valueB: number }[]
  width?: number
  delay?: number
}) {
  const max = Math.max(...items.flatMap(i => [i.valueA, i.valueB]))
  const barH = 6
  const rowH = 28
  const height = items.length * rowH + 10

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1 }}
    >
      {items.map((item, i) => {
        const y = i * rowH + 5
        const wA = ((item.valueA / max) * (width - 20)) * 0.6
        const wB = ((item.valueB / max) * (width - 20)) * 0.6
        return (
          <g key={i}>
            <motion.rect
              x={10}
              y={y}
              width={0}
              height={barH}
              fill={c}
              opacity={0.2}
              rx={1}
              initial={{ width: 0 }}
              whileInView={{ width: wA }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.rect
              x={10}
              y={y + barH + 3}
              width={0}
              height={barH * 0.6}
              fill={cm}
              opacity={0.1}
              rx={1}
              initial={{ width: 0 }}
              whileInView={{ width: wB }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.4 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <text x={10} y={y + rowH - 3} fill={cm} opacity={0.2} fontSize="4" fontFamily="var(--font-mono)">
              {item.label}
            </text>
          </g>
        )
      })}
    </motion.svg>
  )
}

/* ── Stepped Scale ── */
export function SteppedScale({
  steps = [{ label: "3×", pct: 30 }, { label: "5-8×", pct: 60 }, { label: "15×+", pct: 100 }],
  width = 180,
  height = 80,
  delay = 0,
}: {
  steps?: { label: string; pct: number }[]
  width?: number
  height?: number
  delay?: number
}) {
  const barH = height / steps.length - 4
  const maxW = width - 20

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1 }}
    >
      {steps.map((step, i) => {
        const y = i * (barH + 4) + 2
        const w = (step.pct / 100) * maxW
        return (
          <g key={i}>
            <motion.rect
              x={10}
              y={y}
              width={0}
              height={barH}
              fill={c}
              opacity={0.06 + i * 0.07}
              rx={1}
              initial={{ width: 0 }}
              whileInView={{ width: w }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 + i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.text
              x={w + 14}
              y={y + barH / 2 + 1.5}
              fill={cm}
              opacity={0.25}
              fontSize="5"
              fontFamily="var(--font-mono)"
              dominantBaseline="middle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.25 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.8 + i * 0.15, duration: 0.5 }}
            >
              {step.label}
            </motion.text>
          </g>
        )
      })}
    </motion.svg>
  )
}
