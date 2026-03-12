export interface BattleCard {
  tag: string
  title: string
  body: string
  pills: string[]
}

export const battleCards: Record<string, BattleCard> = {
  "sk-portfolio": {
    tag: "Portfolio · SpaceKayak",
    title: "The Companies We Shaped",
    body: `<p>SpaceKayak has been the early creative partner — brand, narrative, product design, 3D, motion, launch — for over 80 ventures at the minus-one-to-zero stage. These are companies building at the frontier of AI, infrastructure, and consumer technology.</p>
<p><strong>Emergent</strong> — AI infrastructure. Breakout launch video with 1M+ views. <strong>Composio</strong> — agentic tooling. <strong>Sentient AI</strong> — decentralized AI. <strong>Nerve AI</strong> — acquired by OpenAI. <strong>Sarvam AI</strong> — India's foundational model company. <strong>IAIRO</strong> — robotics. <strong>BFI</strong> — Vitalik Buterin and Sandeep Nailwal's blockchain-for-public-health initiative.</p>
<p>The VCs who backed these companies include Sequoia, a16z, Tiger Global, Accel, Lightspeed, Founders Fund, Khosla Ventures, and SoftBank. Over <strong>$1B raised collectively</strong> by companies touched by the SpaceKayak team.</p>`,
    pills: ["80+ Ventures", "$1B+ Raised", "Emergent", "Sentient AI", "Sarvam AI", "Nerve AI", "Composio"],
  },
  "sk-europe": {
    tag: "Europe · Expansion",
    title: "The European Creative Arm",
    body: `<p>In the European deeptech ecosystem, SpaceKayak serves as the creative arm for <strong>Vanagon Ventures</strong> and <strong>Flog Ventures</strong> — two funds backing frontier technology companies across the continent.</p>
<p>This isn't consulting. It's embedded creative infrastructure. The same design system, narrative framework, and launch production that we run for Indian founders, deployed for European deeptech. This cross-geography practice is what makes the India–SF–Europe corridor real.</p>`,
    pills: ["Vanagon Ventures", "Flog Ventures", "European Deeptech", "Cross-Border"],
  },
  "system-why": {
    tag: "Architecture · Why It Works",
    title: "Why Four Pieces, Not One",
    body: `<p>Most venture funds write a cheque and offer introductions. Platform services are bolted on after the fact. Imagine Fund is architected differently: the capital, the building, the program, and the distribution arm are <em>designed as one system</em>.</p>
<p><strong>Imagine Fund</strong> provides capital. <strong>Sanctuary Parc</strong> provides the physical infrastructure and density. <strong>Renaissance</strong> provides the 120-day incubation structure. <strong>Attn Co</strong> provides the video production and distribution engine. Each piece generates deal flow, conviction, and leverage for the others.</p>
<p>The insight: at the earliest stage, the gap isn't capital — it's creative infrastructure. The ability to go from "I have an idea" to "investors are inbound" in 120 days. That requires all four pieces working in concert.</p>`,
    pills: ["Integrated", "Capital + Infra", "Renaissance", "Attn Co", "120 Days"],
  },
  "fund-structure": {
    tag: "Fund Economics",
    title: "One Raise, One Race",
    body: `<p>This is not two separate fundraises. $10M goes into Sanctuary as a single raise. <strong>Imagine Fund</strong> is the investment vehicle inside Sanctuary that deploys capital into portfolio companies.</p>
<p><strong>10% management fee ($1M)</strong> is collected upfront for two years. This covers: Sanctuary building operations, staff, legal and structuring fees, Renaissance program costs, event logistics, SF corridor coordination, and all operational overhead.</p>
<p>The remaining <strong>~$9M</strong> is deployed as cheques into ~20 companies, all incubated through the Renaissance program at Sanctuary Parc. Every company receives the full production stack — brand, narrative, video, distribution — as part of the deal.</p>`,
    pills: ["$10M Total", "10% Mgmt Fee", "$9M Deployable", "~20 Companies", "$100K–$500K Checks"],
  },
  "sanctuary-vision": {
    tag: "10-Year Vision",
    title: "Sanctuary — The Infrastructure Play",
    body: `<p>Sanctuary is not a coworking space. It's a ten-year infrastructure play. The first building is in Koramangala, Bangalore — three floors, ten-year lease, designed as a vertical loop: Build (top), Design (middle), Launch (ground).</p>
<p>The future vision: expand Sanctuary to multiple cities and dedicated verticals — media studios, bio labs, hardware workshops. Each node in the network becomes a density engine for founders building at the frontier.</p>
<p>Named for <strong>Xerox PARC</strong>, where the personal computer, laser printer, Ethernet, and GUI were all invented in a single building because the right people were in the right density. Sanctuary is that bet for India's builder generation.</p>`,
    pills: ["Koramangala", "10-Year Lease", "3 Floors", "Multi-City Vision", "Xerox PARC"],
  },
  "renaissance-how": {
    tag: "Program · 120 Days",
    title: "How Renaissance Works",
    body: `<p>Renaissance is a 120-day structured incubation. Not a lecture series. Not office hours with advisors who don't ship. A schedule built around output.</p>
<p><strong>Month 1 (Clarity):</strong> Thesis sharpening, prototype, first user calls. <strong>Month 2 (Product):</strong> Core loop, design system, messaging. <strong>Month 3 (Distribution):</strong> Launch assets, Attn Co video production, channel testing. <strong>Month 4 (Momentum):</strong> Public drop, pilot customers, GTM sprint.</p>
<p>Woven through: 24-hour build sprints, Drop Nights for public shipping, founder dinners, and the emotional infrastructure of being around others who are already moving.</p>`,
    pills: ["120 Days", "4 Phases", "Build Sprints", "Drop Nights", "Founder Dinners"],
  },
  "attn-thesis": {
    tag: "Distribution · Thesis",
    title: "The Producer-VC Model",
    body: `<p>a16z proved that a VC with a media engine changes the game — their podcasts, editorial, and conference infrastructure became a competitive moat. But that model operates at Series A and beyond.</p>
<p>Imagine Fund is building the producer-VC model for the <em>earliest stage</em>. Every portfolio company gets professional video production, founder-led narrative development, and platform-native distribution as core infrastructure — not a nice-to-have added in month six.</p>
<p>The SpaceKayak team has already shipped 55+ videos generating 30M+ organic views across 8 sectors. Attn Co is the evolution: a dedicated production arm embedded inside the fund, with a 2–3 week concept-to-ship cycle.</p>`,
    pills: ["a16z Model", "Producer-VC", "30M+ Views", "55+ Videos", "2–3 Weeks"],
  },
  "emergent-case": {
    tag: "Case Study",
    title: "Emergent Labs — 1M+ Views",
    body: `<p>Emergent Labs is an AI infrastructure company. SpaceKayak partnered as the early creative team to build their launch presence from scratch.</p>
<p>The approach: combined live-action founder footage with UI animation and product demos. The result: <strong>over 1 million organic views</strong>, significant increases in web traffic and conversion rates, and positive investor feedback that directly influenced their fundraising momentum.</p>
<p><strong>The formula:</strong> founder-led narrative + product clarity + platform-native distribution. This is exactly what every Imagine Fund company will receive through Attn Co.</p>`,
    pills: ["1M+ Views", "Live Action + UI", "Founder-Led", "Investor Signal", "Launch Catalyst"],
  },
  "india-corridor": {
    tag: "Thesis · Geography",
    title: "The India–SF Corridor",
    body: `<p>India produces world-class technical talent. But only 5–10% of qualified founders get the infrastructure to break out globally. The rest plateau — not from lack of ambition, but from lack of leverage: no narrative, no distribution, no GTM infrastructure in the markets that matter.</p>
<p>The cost advantage is real: <strong>1/5th the operational cost</strong> of a US-based startup. That means a team that would survive 18 months in SF gets <strong>7 years of runway</strong> in Bangalore. 3 engineers becomes 15. The math is brutal in their favor.</p>
<p>Emergent, Composio, Sarvam AI — these companies validate the pattern. Imagine Fund packages it as fund infrastructure: engineering density in Bangalore, GTM in San Francisco, Attn Co distribution everywhere.</p>`,
    pills: ["1/5th Cost", "7yr Runway", "15 vs 3 Engineers", "BLR → SF", "Distribution"],
  },
  "founder-1": {
    tag: "Pipeline · Stealth",
    title: "Stealth Founders 1 & 2 — Seasoned Tech",
    body: `<p>Two seasoned technology founders with experience at global-scale companies. Deep systems thinking and a track record of shipping production-grade products. They understand the infrastructure layer and they execute relentlessly.</p>
<p>Currently exploring agentic B2B finance — a space where technical depth and domain knowledge converge. The kind of founders who don't need to be told what to build. They need creative infrastructure to make the world pay attention.</p>`,
    pills: ["Seasoned Founders", "B2B Finance", "Agentic", "Systems Thinkers"],
  },
  "founder-2": {
    tag: "Pipeline · Stealth",
    title: "Stealth Founder 3 — Potential Unicorn",
    body: `<p>Repeat founder who has navigated scale before. The kind of operator who has seen the full lifecycle — building, fundraising, hiring, firing, pivoting, and exiting. Now choosing the right next hill with the benefit of hard-won pattern recognition.</p>
<p>The trajectory suggests potential unicorn-scale ambition. The timing is deliberate. What they need isn't capital — it's the creative and distribution infrastructure to launch with maximum leverage.</p>`,
    pills: ["Repeat Founder", "Scale Experience", "Unicorn Potential", "Deliberate Timing"],
  },
  "founder-3": {
    tag: "Pipeline · Stealth",
    title: "Stealth Founder 4 — Ex-Unicorn Fintech",
    body: `<p>Senior fintech operator from a unicorn-scale company. End-to-end ecosystem knowledge across payments, lending, and financial infrastructure. The rare combination of domain depth and first-principles thinking.</p>
<p>Now rebuilding assumptions from scratch — questioning everything they learned at scale and reconstructing a thesis for what fintech looks like in an agentic, AI-first world.</p>`,
    pills: ["Ex-Unicorn", "Fintech", "End-to-End", "First Principles"],
  },
  "founder-4": {
    tag: "Pipeline · Stealth",
    title: "Stealth Founder 5 — Growth at Unicorn",
    body: `<p>Growth operator from a unicorn. The kind of person who goes from idea to pilots in weeks. Pure velocity. In an agentic era where the cost of building approaches zero, pace becomes the primary moat.</p>
<p>Speed isn't just a personality trait — it's a compounding advantage. Every week of iteration is a week of learning that competitors don't have. Imagine Fund backs founders who ship first and optimize second.</p>`,
    pills: ["Growth", "Unicorn", "Velocity", "Agentic Era", "Ship First"],
  },
}
