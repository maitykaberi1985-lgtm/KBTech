import Link from "next/link"
import { Button } from "../components/ui/button"
import { ArrowRight, Play, ShieldCheck, Fish, Waves } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Decorative animated blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm font-medium">Trusted by 10,000+ Fish Farmers</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6 animate-fade-up delay-100">
              Empowering Aquaculture with Science
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-xl animate-fade-up delay-200">
              Premium fish health solutions, advanced feed management, and a farmer marketplace to buy &amp; sell —
              everything you need to maximize your farm&apos;s productivity and profitability.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link href="/farmer-connect">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Explore Farmer Connect
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/feed-calculator">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Play className="mr-2 w-4 h-4" />
                  Try Feed Calculator
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20 animate-fade-up delay-400">
              <div>
                <div className="font-heading text-3xl font-bold">500+</div>
                <div className="text-sm text-white/70">Products</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold">15+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img
                src="/fish-farm-aerial.png"
                alt="Aerial view of a professional aquaculture fish farm"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center">
                    <Fish className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Seasonal Disease Alert</div>
                    <div className="text-sm text-muted-foreground">Prevention guide available for this season</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2 rounded-2xl bg-card px-4 py-3 shadow-xl animate-float">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <div className="text-sm">
                <div className="font-semibold text-foreground leading-none">Certified</div>
                <div className="text-xs text-muted-foreground">Lab-tested products</div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 hidden sm:flex items-center gap-2 rounded-2xl bg-card px-4 py-3 shadow-xl animate-float-slow">
              <Waves className="h-6 w-6 text-secondary" />
              <div className="text-sm">
                <div className="font-semibold text-foreground leading-none">Water Care</div>
                <div className="text-xs text-muted-foreground">Healthy pond, healthy fish</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
