# Component Implementation Guide

## Table of Contents
1. [shadcn/ui Setup & Customization](#shadcnui-setup--customization)
2. [Layout Components](#layout-components)
3. [Section Components](#section-components)
4. [Form Components](#form-components)
5. [Navigation Patterns](#navigation-patterns)
6. [Content Components](#content-components)

---

## shadcn/ui Setup & Customization

### Installation

```bash
npx shadcn@latest init
```

Choose options:
- Style: Default or New York (prefer New York for more refined look)
- Base color: Neutral or Zinc (avoid default slate—too blue)
- CSS variables: Yes

### Customizing Theme

Edit `components.json` and `globals.css`:

```json
{
  "style": "new-york",
  "tailwind": {
    "baseColor": "zinc"
  },
  "cssVariables": true,
  "rsc": true
}
```

**Custom radius** (avoid default rounded-lg everywhere):

```css
:root {
  --radius: 0.5rem; /* or 0 for sharp edges */
}
```

### Adding Components

```bash
npx shadcn@latest add button card input textarea
```

**Always customize after adding**. Never use defaults unchanged.

---

## Layout Components

### Header

```tsx
// components/layout/header.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Logo
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Button size="sm">Contact</Button>
        </div>
      </nav>
    </header>
  )
}
```

### Footer

```tsx
// components/layout/footer.tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand column - wider */}
          <div className="md:col-span-5">
            <Link href="/" className="text-xl font-semibold">
              Logo
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Brief company description that communicates value proposition.
            </p>
          </div>

          {/* Link columns - narrower */}
          <div className="md:col-span-2">
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/docs" className="hover:text-foreground">Documentation</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-medium mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Weekly insights delivered to your inbox.
            </p>
            {/* Newsletter form */}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

### Page Container

```tsx
// components/layout/container.tsx
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div className={cn(
      'mx-auto px-6',
      size === 'narrow' && 'max-w-3xl',
      size === 'default' && 'max-w-6xl',
      size === 'wide' && 'max-w-7xl',
      className
    )}>
      {children}
    </div>
  )
}
```

---

## Section Components

### Hero Section

```tsx
// components/sections/hero.tsx
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'

interface HeroProps {
  tagline?: string
  title: string
  description: string
  primaryCTA: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
}

export function Hero({ tagline, title, description, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container size="narrow" className="text-center">
        {tagline && (
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            {tagline}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href={primaryCTA.href}>{primaryCTA.text}</a>
          </Button>
          {secondaryCTA && (
            <Button size="lg" variant="outline" asChild>
              <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
            </Button>
          )}
        </div>
      </Container>
    </section>
  )
}
```

### Features Section (Non-Grid)

```tsx
// components/sections/features.tsx
import { Container } from '@/components/layout/container'

interface Feature {
  title: string
  description: string
  visual?: React.ReactNode
}

interface FeaturesProps {
  title?: string
  subtitle?: string
  features: Feature[]
}

export function Features({ title, subtitle, features }: FeaturesProps) {
  return (
    <section className="py-24">
      <Container>
        {(title || subtitle) && (
          <div className="max-w-2xl mb-20">
            {title && <h2 className="text-3xl md:text-4xl font-serif mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
          </div>
        )}

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              {feature.visual && (
                <div className="flex-1">
                  {feature.visual}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
```

### Testimonials Section

```tsx
// components/sections/testimonials.tsx
import { Container } from '@/components/layout/container'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className="bg-background p-8 md:p-12 border"
            >
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="font-semibold block">{testimonial.author}</span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  )
}
```

### CTA Section

```tsx
// components/sections/cta.tsx
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'

interface CTAProps {
  title: string
  description?: string
  buttonText: string
  buttonHref: string
}

export function CTA({ title, description, buttonText, buttonHref }: CTAProps) {
  return (
    <section className="py-24">
      <Container size="narrow" className="text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-6">{title}</h2>
        {description && (
          <p className="text-lg text-muted-foreground mb-10">{description}</p>
        )}
        <Button size="lg" asChild>
          <a href={buttonHref}>{buttonText}</a>
        </Button>
      </Container>
    </section>
  )
}
```

---

## Form Components

### Contact Form

```tsx
// components/forms/contact-form.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
        <p className="text-muted-foreground">We'll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={6} required />
      </div>

      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>

      {status === 'error' && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
```

### Newsletter Form

```tsx
// components/forms/newsletter-form.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    // Submit to your newsletter service
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus('success')
  }

  if (status === 'success') {
    return <p className="text-sm text-muted-foreground">Thanks for subscribing!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        className="flex-1"
        required
      />
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? '...' : 'Subscribe'}
      </Button>
    </form>
  )
}
```

---

## Navigation Patterns

### Mobile Navigation (Sheet)

```tsx
// components/layout/mobile-nav.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-sm">
        <nav className="flex flex-col gap-6 mt-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-medium hover:text-muted-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
```

---

## Content Components

### Blog Card

```tsx
// components/content/blog-card.tsx
import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  image?: string
}

export function BlogCard({ title, excerpt, date, slug, image }: BlogCardProps) {
  return (
    <article className="group">
      {image && (
        <Link href={`/blog/${slug}`} className="block mb-4 overflow-hidden">
          <Image
            src={image}
            alt=""
            width={600}
            height={400}
            className="object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      )}
      <time className="text-sm text-muted-foreground">{date}</time>
      <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-muted-foreground transition-colors">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
    </article>
  )
}
```

### MDX Components

```tsx
// components/content/mdx-components.tsx
import Image from 'next/image'
import Link from 'next/link'

export const mdxComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-serif mt-12 mb-6">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold mt-10 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 leading-relaxed">{children}</p>
  ),
  a: ({ href, children }) => (
    <Link href={href} className="text-primary underline underline-offset-4 hover:text-primary/80">
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="mb-6 ml-6 list-disc space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2">{children}</ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 pl-6 italic my-8 text-muted-foreground">
      {children}
    </blockquote>
  ),
  img: ({ src, alt }) => (
    <Image
      src={src}
      alt={alt || ''}
      width={800}
      height={500}
      className="my-8 rounded-lg"
    />
  ),
  code: ({ children }) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6 text-sm">
      {children}
    </pre>
  ),
}
```
