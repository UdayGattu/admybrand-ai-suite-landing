import { Hero } from "@/sections/hero"
import { Features } from "@/sections/features"
import { Pricing } from "@/sections/pricing"
import { Testimonials } from "@/sections/testimonials"
import { FAQ } from "@/sections/faq"
import { Footer } from "@/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      </main>
  )
}
