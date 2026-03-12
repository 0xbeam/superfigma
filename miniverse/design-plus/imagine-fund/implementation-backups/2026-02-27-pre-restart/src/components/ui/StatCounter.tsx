"use client"

import { useCountUp } from "@/hooks/useCountUp"

interface StatCounterProps {
  value: string
  label: string
  numericValue?: number
  prefix?: string
  suffix?: string
  dark?: boolean
}

export default function StatCounter({ value, label, numericValue, prefix = "", suffix = "", dark = false }: StatCounterProps) {
  const { count, ref } = useCountUp(numericValue ?? 0, 2000)

  return (
    <div ref={ref} className={`pt-5 border-t ${
      dark ? "border-white/[0.08]" : "border-[var(--color-border)]"
    }`}>
      <div className={`font-[family-name:var(--font-display)] text-[2.2rem] font-light leading-none mb-1 tracking-tight ${
        dark ? "text-[var(--color-dark-text)]" : ""
      }`}>
        {numericValue !== undefined ? `${prefix}${count}${suffix}` : value}
      </div>
      <div className={`font-[family-name:var(--font-body)] text-[0.62rem] tracking-wide uppercase ${
        dark ? "text-[var(--color-dark-text-secondary)]" : "text-[var(--color-text-secondary)]"
      }`}>
        {label}
      </div>
    </div>
  )
}
