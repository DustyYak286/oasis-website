---
name: nextjs-frontend-expert
description: Create professional, production-ready websites using Next.js, Tailwind CSS, and shadcn/ui that look human-designed rather than AI-generated. Use when building marketing sites, landing pages, business websites, portfolios, blogs, or any web project requiring a polished, authentic appearance. Covers the full stack including content management (MDX/headless CMS), forms (Formspree/Resend), analytics (Plausible/GA4), SEO, and Vercel deployment.
---

# Next.js Frontend Expert

Build professional websites that look human-designed, not AI-generated. This skill covers the complete tech stack for modern web development.

## Tech Stack Overview

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Next.js 14+ (App Router) | React framework with SSR/SSG |
| Styling | Tailwind CSS + shadcn/ui | Utility-first CSS + component library |
| Content | MDX in-repo or headless CMS | Structured content management |
| Forms | Formspree or Resend API routes | Lead capture and contact forms |
| Analytics | Plausible or GA4 | Privacy-focused or full-featured analytics |
| Hosting | Vercel | Edge deployment with preview URLs |

## Anti-AI Design Principles

**The AI-generated look comes from**: generic layouts, predictable color schemes (purple gradients), overused fonts (Inter, Roboto), symmetrical grids, cookie-cutter hero sections, and excessive uniformity.

**Human-designed sites have**:
- **Intentional asymmetry** - Elements break the grid purposefully
- **Unique typography** - Custom font pairings that reflect brand personality
- **Specific color choices** - Colors tied to meaning, not random palettes
- **Editorial restraint** - Not every section needs icons, gradients, or animations
- **Content-first hierarchy** - Design serves content, not the reverse
- **Subtle imperfection** - Hand-crafted details, slight variations, organic spacing

## Project Structure

```
project/
├── app/
│   ├── layout.tsx          # Root layout with fonts, analytics
│   ├── page.tsx            # Homepage
│   ├── (marketing)/        # Route group for marketing pages
│   │   ├── about/
│   │   ├── pricing/
│   │   └── contact/
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/page.tsx # Dynamic blog posts
│   └── api/
│       └── contact/route.ts # Form handling
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Header, Footer, Navigation
│   └── sections/           # Page sections (Hero, Features, CTA)
├── content/
│   └── blog/               # MDX blog posts
├── lib/
│   ├── utils.ts            # Utility functions
│   └── mdx.ts              # MDX processing
├── styles/
│   └── globals.css         # Global styles, Tailwind imports
└── public/
    └── images/
```

## Implementation Workflow

1. **Establish visual identity first** - Define typography, colors, spacing scale
2. **Build layout shell** - Header, footer, page containers
3. **Create reusable sections** - Hero, features, testimonials, CTAs
4. **Implement content system** - MDX setup or CMS integration
5. **Add interactivity** - Forms, animations, dynamic elements
6. **Configure infrastructure** - Analytics, SEO, deployment

## Detailed References

- **Design patterns and anti-AI aesthetics**: See [references/design-patterns.md](references/design-patterns.md)
- **Component implementation**: See [references/components.md](references/components.md)
- **Project setup and configuration**: See [references/setup.md](references/setup.md)

## Quick Patterns

### Typography Setup (layout.tsx)

```tsx
import { GeistSans } from 'geist/font/sans'
import { Playfair_Display } from 'next/font/google'

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export default function RootLayout({ children }) {
  return (
    <html className={`${GeistSans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
```

### Color System (globals.css)

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    /* Define semantic colors, not generic ones */
    --accent: 24 95% 53%; /* Intentional orange for CTAs */
  }
}
```

### Contact Form (with Resend)

```tsx
// app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: 'you@yourdomain.com',
    subject: `Contact from ${name}`,
    text: `From: ${name} (${email})\n\n${message}`
  })

  return Response.json({ success: true })
}
```

### Analytics Setup

```tsx
// components/analytics.tsx
import Script from 'next/script'

export function Analytics() {
  return (
    <Script
      defer
      data-domain="yourdomain.com"
      src="https://plausible.io/js/script.js"
    />
  )
}
```

## Key Reminders

- **Never use default shadcn/ui styles unchanged** - Always customize colors, radius, fonts
- **Avoid symmetrical 3-column grids** - Use 2-column, asymmetric layouts, or single-column
- **Typography contrast matters** - Pair a distinctive display font with a neutral body font
- **White space is design** - Generous padding differentiates professional from amateur
- **Real content beats Lorem Ipsum** - Write actual copy or use realistic placeholders
- **Test on real devices** - Responsive design that works, not just shrinks
