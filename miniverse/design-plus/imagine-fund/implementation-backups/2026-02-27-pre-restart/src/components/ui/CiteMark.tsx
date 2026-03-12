"use client"

import { useBattleCard } from "@/components/ui/BattleCardProvider"

interface CiteMarkProps {
  cardKey: string
  number: number
}

export default function CiteMark({ cardKey, number }: CiteMarkProps) {
  const { openCard } = useBattleCard()

  return (
    <button
      onClick={() => openCard(cardKey)}
      className="inline-flex font-[family-name:var(--font-mono)] text-[0.5rem] font-medium text-[var(--color-accent)] bg-[var(--color-accent-light)] px-1.5 py-px rounded-sm ml-0.5 align-super cursor-pointer transition-colors hover:bg-[var(--color-accent)] hover:text-white"
    >
      {number}
    </button>
  )
}
