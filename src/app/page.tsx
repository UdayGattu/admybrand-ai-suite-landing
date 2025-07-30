"use client"
import { Hero } from "@/sections/hero"
import { Features } from "@/sections/features"
import { Pricing } from "@/sections/pricing"
import { Testimonials } from "@/sections/testimonials"
import { FAQ } from "@/sections/faq"
import { Footer } from "@/sections/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { resources } from "@/data/resources"
import { useState } from "react"

export default function Home() {
  const [showAll, setShowAll] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const visibleResources = showAll ? resources : resources.slice(0, 2)

  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Resources & Insights</h2>
          {expanded ? (
            // Only show the expanded blog
            (() => {
              const r = resources.find(r => r.slug === expanded)
              if (!r) return null
              return (
                <Card className="hover:shadow-2xl transition-shadow duration-300 col-span-2 md:col-span-2 lg:col-span-3 z-10 w-full">
                  <CardHeader>
                    <CardTitle>{r.title}</CardTitle>
                    <CardDescription>{r.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button
                      className="text-blue-600 hover:underline font-medium mb-2"
                      onClick={() => setExpanded(null)}
                      aria-expanded={true}
                    >
                      Show Less
                    </button>
                    <div className="prose prose-lg max-w-none mt-4 animate-fade-in" style={{ width: '100%' }} dangerouslySetInnerHTML={{ __html: r.content }} />
                  </CardContent>
                </Card>
              )
            })()
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {visibleResources.map((r, i) => (
                  <Card key={i} className="hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>{r.title}</CardTitle>
                      <CardDescription>{r.summary}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <button
                        className="text-blue-600 hover:underline font-medium mb-2"
                        onClick={() => setExpanded(r.slug)}
                        aria-expanded={false}
                      >
                        Read More →
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <button
                  className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => setShowAll(v => !v)}
                >
                  {showAll ? "Show Less Resources" : "View All Resources"}
                </button>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
      </main>
  )
}
