export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] pt-24 pb-12 px-4 sm:px-8 md:px-16 border-t hairline-t relative">

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0 mb-20">

          <div className="col-span-1 md:col-span-5 lg:col-span-4">
            <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2vw,2rem)] leading-[1.1] text-[var(--color-text)] mb-4">
              Imagine Fund
            </h3>
            <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.6] text-[var(--color-text-secondary)] max-w-[300px]">
              Pre-seed capital for technical founders building the foundation of an agentic world. Bangalore &amp; San Francisco.
            </p>
          </div>

          <div className="col-span-1 md:col-span-7 lg:col-span-8 flex gap-16 md:gap-24 md:justify-end">
            <div className="flex flex-col gap-3">
              <span className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] mb-2">Navigate</span>
              <a href="#who" className="font-[family-name:var(--font-body)] text-[0.8rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">The Founder</a>
              <a href="#system" className="font-[family-name:var(--font-body)] text-[0.8rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">The Fund</a>
              <a href="#renaissance" className="font-[family-name:var(--font-body)] text-[0.8rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">The Program</a>
              <a href="#vision" className="font-[family-name:var(--font-body)] text-[0.8rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">The Corridor</a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] mb-2">Connect</span>
              <a href="#" className="font-[family-name:var(--font-body)] text-[0.8rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Apply</a>
              <a href="#" className="font-[family-name:var(--font-body)] text-[0.8rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Twitter (X)</a>
              <a href="#" className="font-[family-name:var(--font-body)] text-[0.8rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex max-md:flex-col justify-between items-center gap-4 pt-6 border-t hairline-t">
          <div className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
            Imagine Fund &copy; 2026
          </div>
          <div className="flex gap-6 items-center">
            <div className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
              Confidential
            </div>
            <div className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-30" />
            <div className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
              Not an offer to sell securities
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
