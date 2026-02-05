import { ProActiveTherapyHero } from "@/components/sections/hero/ProActiveTherapyHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pro-Active Therapy Demo",
  description: "Demo page showcasing the Pro-Active Therapy hero section",
}

export default function ProActiveDemoPage() {
  return (
    <main>
      <ProActiveTherapyHero />
    </main>
  )
}
