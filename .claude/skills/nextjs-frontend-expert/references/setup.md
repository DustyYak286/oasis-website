# Project Setup & Configuration

## Table of Contents
1. [Project Initialization](#project-initialization)
2. [Tailwind & shadcn/ui Configuration](#tailwind--shadcnui-configuration)
3. [MDX Content Setup](#mdx-content-setup)
4. [Headless CMS Integration](#headless-cms-integration)
5. [Forms & Lead Capture](#forms--lead-capture)
6. [Analytics Integration](#analytics-integration)
7. [SEO Configuration](#seo-configuration)
8. [Vercel Deployment](#vercel-deployment)

---

## Project Initialization

### Create Next.js Project

```bash
npx create-next-app@latest project-name --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Install Core Dependencies

```bash
# shadcn/ui
npx shadcn@latest init

# Common shadcn components
npx shadcn@latest add button card input textarea label sheet

# Fonts (if using Geist)
npm install geist

# Animation (if needed)
npm install framer-motion

# MDX
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter

# Forms (choose one)
npm install resend # For API routes
# OR use Formspree (no install needed)
```

### Project Configuration

**next.config.ts:**

```typescript
import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      // Add domains for external images
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

const withMDX = createMDX({
  // Add remark/rehype plugins here if needed
})

export default withMDX(nextConfig)
```

---

## Tailwind & shadcn/ui Configuration

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
```

### globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## MDX Content Setup

### Directory Structure

```
content/
└── blog/
    ├── first-post.mdx
    └── second-post.mdx
```

### MDX File Format

```mdx
---
title: "Your Post Title"
description: "Meta description for SEO"
date: "2024-01-15"
author: "Author Name"
image: "/images/blog/post-image.jpg"
---

Post content in Markdown with JSX support.
```

### MDX Utilities (lib/mdx.ts)

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  title: string
  description: string
  date: string
  author: string
  image?: string
  slug: string
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(contentDirectory)

  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const filePath = path.join(contentDirectory, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        image: data.image,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    meta: { ...data, slug } as PostMeta,
    content,
  }
}
```

### Blog Page (app/blog/page.tsx)

```tsx
import { getAllPosts } from '@/lib/mdx'
import { BlogCard } from '@/components/content/blog-card'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-serif mb-12">Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}
```

---

## Headless CMS Integration

### Sanity Setup (Optional)

```bash
npm install next-sanity @sanity/image-url
npx sanity@latest init --env
```

### Contentful Setup (Optional)

```bash
npm install contentful
```

```typescript
// lib/contentful.ts
import { createClient } from 'contentful'

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export async function getPosts() {
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: ['-sys.createdAt'],
  })
  return entries.items
}
```

---

## Forms & Lead Capture

### Option 1: Resend (Recommended)

**Setup:**
```bash
npm install resend
```

**API Route (app/api/contact/route.ts):**

```typescript
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    await resend.emails.send({
      from: 'Website <contact@yourdomain.com>',
      to: ['you@yourdomain.com'],
      subject: `New contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
```

### Option 2: Formspree

No backend code needed. Submit directly:

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required />
  <button type="submit">Send</button>
</form>
```

---

## Analytics Integration

### Option 1: Plausible (Privacy-Focused)

```tsx
// components/analytics.tsx
import Script from 'next/script'

export function PlausibleAnalytics() {
  return (
    <Script
      defer
      data-domain="yourdomain.com"
      src="https://plausible.io/js/script.js"
    />
  )
}
```

Add to layout:
```tsx
// app/layout.tsx
import { PlausibleAnalytics } from '@/components/analytics'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <PlausibleAnalytics />
      </body>
    </html>
  )
}
```

### Option 2: Google Analytics 4

```tsx
// components/analytics.tsx
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export function GoogleAnalytics() {
  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
```

---

## SEO Configuration

### Metadata API (app/layout.tsx)

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: 'Site Name',
    template: '%s | Site Name',
  },
  description: 'Default site description',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Site Name',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Site Name',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### Page-Level Metadata

```tsx
// app/about/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our company and mission.',
  openGraph: {
    title: 'About Us | Site Name',
    description: 'Learn more about our company and mission.',
  },
}
```

### Dynamic Metadata (Blog Posts)

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'
import { getPostBySlug } from '@/lib/mdx'

export async function generateMetadata({ params }): Promise<Metadata> {
  const { meta } = getPostBySlug(params.slug)

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'article',
      publishedTime: meta.date,
      images: meta.image ? [{ url: meta.image }] : [],
    },
  }
}
```

### Sitemap (app/sitemap.ts)

```typescript
import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com'
  const posts = getAllPosts()

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogUrls,
  ]
}
```

### robots.txt (app/robots.ts)

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

---

## Vercel Deployment

### Environment Variables

Required in Vercel dashboard:
- `RESEND_API_KEY` (if using Resend)
- `NEXT_PUBLIC_GA_ID` (if using GA4)
- `CONTENTFUL_SPACE_ID` / `CONTENTFUL_ACCESS_TOKEN` (if using Contentful)

### vercel.json (Optional)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

Or connect your Git repository in Vercel dashboard for automatic deployments.
