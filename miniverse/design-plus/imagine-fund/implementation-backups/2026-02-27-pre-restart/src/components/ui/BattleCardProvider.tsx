"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { battleCards } from "@/lib/battleCards"
import { easings } from "@/lib/easings"

interface BattleCardContextType {
  openCard: (key: string) => void
  closeCard: () => void
}

const BattleCardContext = createContext<BattleCardContextType>({
  openCard: () => {},
  closeCard: () => {},
})

export const useBattleCard = () => useContext(BattleCardContext)

export default function BattleCardProvider({ children }: { children: ReactNode }) {
  const [activeKey, setActiveKey] = useState<string | null>(null)

  const openCard = useCallback((key: string) => {
    setActiveKey(key)
    document.body.style.overflow = "hidden"
  }, [])

  const closeCard = useCallback(() => {
    setActiveKey(null)
    document.body.style.overflow = ""
  }, [])

  const card = activeKey ? battleCards[activeKey] : null

  return (
    <BattleCardContext.Provider value={{ openCard, closeCard }}>
      {children}

      <AnimatePresence>
        {card && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-5"
            onClick={closeCard}
            onKeyDown={(e) => e.key === "Escape" && closeCard()}
          >
            <motion.div
              initial={{ y: 20, scale: 0.97, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.35, ease: easings.smooth }}
              className="relative bg-[var(--color-bg)] rounded-lg max-w-[520px] w-full max-h-[80vh] overflow-y-auto p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeCard}
                className="absolute top-4 right-4 w-7 h-7 bg-[var(--color-surface)] rounded-full flex items-center justify-center text-[var(--color-text-secondary)] text-sm hover:bg-[var(--color-border)] transition-colors cursor-pointer"
                aria-label="Close"
              >
                &times;
              </button>

              <p className="font-[family-name:var(--font-mono)] text-[0.55rem] font-medium tracking-[0.08em] uppercase text-[var(--color-accent)] mb-2">
                {card.tag}
              </p>
              <h3 className="font-[family-name:var(--font-mono)] text-base font-medium leading-tight mb-4">
                {card.title}
              </h3>
              <div
                className="font-[family-name:var(--font-body)] text-[0.88rem] leading-[1.7] text-[var(--color-text-secondary)] [&_p]:mb-3 [&_p:last-child]:mb-0 [&_em]:italic [&_em]:text-[var(--color-text)] [&_strong]:font-semibold [&_strong]:text-[var(--color-text)]"
                dangerouslySetInnerHTML={{ __html: card.body }}
              />

              {card.pills.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-4">
                  {card.pills.map((pill) => (
                    <span
                      key={pill}
                      className="font-[family-name:var(--font-body)] text-[0.5rem] tracking-wide px-2 py-0.5 border border-[var(--color-border)] rounded-sm text-[var(--color-text-secondary)] uppercase"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BattleCardContext.Provider>
  )
}
