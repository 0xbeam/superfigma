"use client"

import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"
import BattleCardProvider from "@/components/ui/BattleCardProvider"
import Hero from "@/components/sections/Hero"
import Founder from "@/components/sections/Founder"
import TheSystem from "@/components/sections/TheSystem"
import Fund from "@/components/sections/Fund"
import Sanctuary from "@/components/sections/Sanctuary"
import Renaissance from "@/components/sections/Renaissance"
import AttnCo from "@/components/sections/AttnCo"
import Vision from "@/components/sections/Vision"
import FounderRadar from "@/components/sections/FounderRadar"
import Deployment from "@/components/sections/Deployment"
import ReturnModel from "@/components/sections/ReturnModel"
import HonestRisks from "@/components/sections/HonestRisks"
import CloseCTA from "@/components/sections/CloseCTA"

export default function Home() {
  return (
    <BattleCardProvider>
      <Navigation />

      <main className="relative w-full overflow-x-clip selection:bg-[var(--color-text)] selection:text-white noise-overlay">
        <Hero />
        <Founder />
        <TheSystem />
        <Fund />
        <Sanctuary />
        <Renaissance />
        <AttnCo />
        <Vision />
        <FounderRadar />
        <Deployment />
        <ReturnModel />
        <HonestRisks />
        <CloseCTA />
      </main>

      <Footer />
    </BattleCardProvider>
  )
}
