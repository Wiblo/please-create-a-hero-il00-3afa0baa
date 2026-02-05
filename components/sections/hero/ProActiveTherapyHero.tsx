import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight, Activity, Heart, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

// =============================================================================
// CONFIGURATION
// =============================================================================

const heroContent = {
  subtitle: "Professional Physiotherapy Services",
  title: "Get Moving. Stay Active. Live Better.",
  description:
    "Expert care for injury recovery, pain management, and movement optimization. Your journey to better health starts here.",
  backgroundImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=1080&fit=crop",
  backgroundImageAlt: "Physiotherapist helping patient with rehabilitation exercises",
  ctaText: "Book Your Appointment",
  ctaUrl: "/contact",
  secondaryCtaText: "Learn More",
  secondaryCtaUrl: "/about",
}

// =============================================================================
// COMPONENT
// =============================================================================

export interface ProActiveTherapyHeroProps {
  className?: string
}

/**
 * Hero section for Pro-Active Therapy physiotherapy website.
 * Features the logo prominently with a split-screen layout.
 */
export function ProActiveTherapyHero({ className }: ProActiveTherapyHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Logo */}
            <div className="animate-fade-in-up">
              <div className="relative inline-block">
                <Image
                  src="/uploads/Pro-Active-Therapy.gif"
                  alt="Pro-Active Therapy Logo"
                  width={120}
                  height={120}
                  className="h-24 w-24 md:h-32 md:w-32"
                  priority
                />
                <div className="absolute -inset-2 -z-10 animate-pulse rounded-full bg-primary/10 blur-xl" />
              </div>
            </div>

            {/* Subtitle */}
            <div className="animate-fade-in-up space-y-2 [animation-delay:100ms]">
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-primary">
                <div className="h-px w-8 bg-primary" />
                <span>{heroContent.subtitle}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="animate-fade-in-up space-y-4 [animation-delay:200ms]">
              <h1 className="text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {heroContent.title}
              </h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                {heroContent.description}
              </p>
            </div>

            {/* Feature Pills */}
            <div className="animate-fade-in-up flex flex-wrap gap-3 [animation-delay:300ms]">
              <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm">
                <Activity className="h-4 w-4 text-primary" />
                <span>Recovery</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm">
                <Heart className="h-4 w-4 text-primary" />
                <span>Wellness</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm">
                <Zap className="h-4 w-4 text-primary" />
                <span>Performance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up flex flex-col gap-4 sm:flex-row [animation-delay:400ms]">
              {/* Primary CTA */}
              <Link
                href={heroContent.ctaUrl}
                className="group relative flex min-h-12 items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                <span className="flex items-center gap-2">
                  {heroContent.ctaText}
                  <span className="relative inline-block h-4 w-4">
                    <ChevronRight
                      className="absolute left-0 top-0 h-4 w-4 transition-[transform,opacity] duration-200 group-hover:translate-x-1 group-hover:opacity-0"
                      aria-hidden="true"
                    />
                    <ArrowRight
                      className="absolute left-0 top-0 h-4 w-4 -translate-x-1 opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href={heroContent.secondaryCtaUrl}
                className="flex min-h-12 items-center justify-center rounded-lg border-2 border-primary bg-background px-8 py-3 font-semibold text-primary transition-all duration-200 ease-out hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                {heroContent.secondaryCtaText}
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="animate-fade-in-up relative lg:order-last [animation-delay:200ms]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl bg-muted shadow-2xl lg:aspect-square">
              {/* Image */}
              <Image
                src={heroContent.backgroundImage}
                alt={heroContent.backgroundImageAlt}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay gradient for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

              {/* Decorative corner accent */}
              <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 left-4 right-4 animate-fade-in-up rounded-2xl border border-border bg-background p-4 shadow-xl [animation-delay:500ms] sm:left-8 sm:right-auto sm:w-72">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
                <div className="border-l border-r border-border">
                  <div className="text-2xl font-bold text-foreground">5000+</div>
                  <div className="text-xs text-muted-foreground">Patients Treated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
