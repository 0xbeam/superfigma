export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] py-8 px-6 sm:px-8 md:px-12 border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="font-[family-name:var(--font-mono)] text-[0.55rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
          Imagine Fund &copy; 2026
        </div>
        <div className="flex gap-6 items-center font-[family-name:var(--font-mono)] text-[0.55rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
          <span>Confidential</span>
          <span>Not an offer to sell securities</span>
        </div>
      </div>
    </footer>
  )
}
