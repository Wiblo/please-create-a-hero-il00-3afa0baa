# Pro-Active Therapy Hero Section

A distinctive hero section designed specifically for Pro-Active Therapy physiotherapy website.

## Features

- **Split-screen layout** with content on the left and image on the right
- **Animated logo** with subtle glow effect using the Pro-Active Therapy logo
- **Feature pills** highlighting key service areas (Recovery, Wellness, Performance)
- **Dual CTAs** for primary booking action and secondary navigation
- **Floating stats card** with key metrics that animates in after the main content
- **Subtle background pattern** using dot grid for visual interest
- **Professional animations** using CSS animations with staggered delays
- **Fully responsive** design that adapts from mobile to desktop

## Usage

### Basic Implementation

```tsx
import { ProActiveTherapyHero } from "@/components/sections/hero/ProActiveTherapyHero"

export default function HomePage() {
  return (
    <main>
      <ProActiveTherapyHero />
    </main>
  )
}
```

### Customization

To customize the content, edit the `heroContent` object at the top of `ProActiveTherapyHero.tsx`:

```tsx
const heroContent = {
  subtitle: "Professional Physiotherapy Services",
  title: "Get Moving. Stay Active. Live Better.",
  description: "Expert care for injury recovery...",
  backgroundImage: "https://images.unsplash.com/...",
  backgroundImageAlt: "Physiotherapist helping patient...",
  ctaText: "Book Your Appointment",
  ctaUrl: "/contact",
  secondaryCtaText: "Learn More",
  secondaryCtaUrl: "/about",
}
```

### Stats Card

To update the floating stats card, locate the "Floating Stats Card" section and modify the values:

```tsx
<div className="grid grid-cols-3 gap-4 text-center">
  <div>
    <div className="text-2xl font-bold text-foreground">15+</div>
    <div className="text-xs text-muted-foreground">Years Experience</div>
  </div>
  {/* Add more stats */}
</div>
```

## Design Decisions

### Color Palette

The component uses the existing brand color tokens from the theme:
- `primary` - Used for accents, buttons, and key elements
- `muted` - Used for subtle backgrounds
- `accent` - Used for hover states

### Animations

All animations use CSS classes for performance:
- `animate-fade-in-up` - Entrance animation for content elements
- Staggered delays using `[animation-delay:Xms]` utility
- Respects `prefers-reduced-motion` for accessibility

### Typography

- Headlines use `text-balance` for better line wrapping
- Body text uses `text-pretty` for optimal readability
- Font weights and sizes follow Tailwind's default scale

## Demo

View the component in action at `/pro-active-demo`

## Files

- Component: `components/sections/hero/ProActiveTherapyHero.tsx`
- Demo page: `app/pro-active-demo/page.tsx`
- Logo: `public/uploads/Pro-Active-Therapy.gif`
