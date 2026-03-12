import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import Script from "next/script"
import LenisProvider from "@/components/layout/LenisProvider"
import "./globals.css"

const daVinci = localFont({
  src: [
    { path: "../fonts/TRJNDaVinci-Thin-Trial.otf", weight: "100", style: "normal" },
    { path: "../fonts/TRJNDaVinci-Thin-Italic-Trial.otf", weight: "100", style: "italic" },
    { path: "../fonts/TRJNDaVinci-Light-Trial.otf", weight: "300", style: "normal" },
    { path: "../fonts/TRJNDaVinci-Light-Italic-Trial.otf", weight: "300", style: "italic" },
    { path: "../fonts/TRJNDaVinci-Regular-Trial.otf", weight: "400", style: "normal" },
    { path: "../fonts/TRJNDaVinci-Italic-Trial.otf", weight: "400", style: "italic" },
    { path: "../fonts/TRJNDaVinci-Medium-Trial.otf", weight: "500", style: "normal" },
    { path: "../fonts/TRJNDaVinci-Medium-Italic-Trial.otf", weight: "500", style: "italic" },
    { path: "../fonts/TRJNDaVinci-Semibold-Trial.otf", weight: "600", style: "normal" },
    { path: "../fonts/TRJNDaVinci-Semibold-Italic-Trial.otf", weight: "600", style: "italic" },
    { path: "../fonts/TRJNDaVinci-Bold-Trial.otf", weight: "700", style: "normal" },
    { path: "../fonts/TRJNDaVinci-Bold-Italic-Trial.otf", weight: "700", style: "italic" },
    { path: "../fonts/TRJNDaVinci-Heavy-Trial.otf", weight: "900", style: "normal" },
    { path: "../fonts/TRJNDaVinci-Heavy-Italic-Trial.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-davinci",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Imagine Fund — Sanctuary Parc",
  description:
    "The world's first creative VC. We pair capital with a full production stack — brand, narrative, launch, distribution — so founders ship faster and raise stronger.",
  openGraph: {
    title: "Imagine Fund — Sanctuary Parc",
    description: "Creative capital as infrastructure. $10M. ~20 companies. 24 months.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${daVinci.variable} ${plusJakartaSans.variable} ${geistMono.variable}`}
      >
        <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
