# Design Patterns & Anti-AI Aesthetics

## Table of Contents
1. [What Makes Sites Look AI-Generated](#what-makes-sites-look-ai-generated)
2. [Typography That Feels Human](#typography-that-feels-human)
3. [Color Systems With Meaning](#color-systems-with-meaning)
4. [Layout Patterns That Break the Mold](#layout-patterns-that-break-the-mold)
5. [Section Design Patterns](#section-design-patterns)
6. [Animation Philosophy](#animation-philosophy)

---

## What Makes Sites Look AI-Generated

### Red Flags to Avoid

**Visual patterns**:
- Purple/blue gradient backgrounds (especially with white cards)
- Perfect 3-column grids with identical cards
- Geometric blob shapes as decorations
- Generic icon sets (Heroicons defaults everywhere)
- Centered everything with uniform spacing

**Typography sins**:
- Inter, Roboto, or system fonts as primary typeface
- Single font family throughout
- No hierarchy variation (everything looks same weight)
- Generic "Lorem ipsum" placeholder text

**Layout clichés**:
- Hero with text-left, image-right (or vice versa)
- Feature grids with icon + heading + paragraph
- Testimonial carousels with circular avatars
- Footer with 4 equal columns

**Animation overuse**:
- Everything fades in on scroll
- Floating/bouncing decorative elements
- Gratuitous hover effects on every element

### The Fix: Intentional Design Decisions

Every design choice should answer: "Why this specific choice for this specific brand?"

---

## Typography That Feels Human

### Font Pairing Strategy

**Principle**: Contrast creates interest. Pair fonts that differ in at least two characteristics:

| Display Font | Body Font | Contrast Type |
|-------------|-----------|---------------|
| Serif (Playfair) | Sans (Geist) | Style + Weight |
| Condensed (Oswald) | Wide (Work Sans) | Width |
| Geometric (Futura) | Humanist (Source Sans) | Construction |
| Script (Cormorant) | Mechanical (IBM Plex) | Personality |

### Recommended Font Pairings

**Editorial/Magazine feel**:
```css
--font-display: 'Playfair Display', serif;
--font-body: 'Source Sans 3', sans-serif;
```

**Modern/Tech feel**:
```css
--font-display: 'Space Grotesk', sans-serif; /* Use sparingly—becoming overused */
--font-body: 'Inter', sans-serif;
```

**Warm/Approachable feel**:
```css
--font-display: 'Fraunces', serif;
--font-body: 'Nunito Sans', sans-serif;
```

**Minimal/Luxury feel**:
```css
--font-display: 'Cormorant Garamond', serif;
--font-body: 'Montserrat', sans-serif;
```

### Typography Scale

Use a purposeful scale, not arbitrary sizes:

```css
/* Based on 1.25 ratio (Major Third) */
--text-xs: 0.64rem;    /* 10.24px */
--text-sm: 0.8rem;     /* 12.8px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.25rem;    /* 20px */
--text-xl: 1.563rem;   /* 25px */
--text-2xl: 1.953rem;  /* 31.25px */
--text-3xl: 2.441rem;  /* 39px */
--text-4xl: 3.052rem;  /* 48.8px */
--text-5xl: 3.815rem;  /* 61px */
```

---

## Color Systems With Meaning

### Beyond the Generic Palette

**Bad**: Random colors that "look nice together"
**Good**: Colors derived from brand meaning or industry context

**Examples of meaningful color choices**:
- Financial services: Deep navy (trust), gold accents (prosperity)
- Health/Wellness: Sage green (natural), warm cream (calm)
- Creative agency: Unexpected combinations (coral + chartreuse)
- SaaS/Tech: Not blue—try warm neutrals with a single bold accent

### Color System Structure

```css
:root {
  /* Semantic colors—not "primary/secondary" */
  --color-surface: 0 0% 99%;        /* Main background */
  --color-surface-raised: 0 0% 100%; /* Cards, modals */
  --color-surface-sunken: 0 0% 96%; /* Subtle backgrounds */

  --color-text: 0 0% 9%;            /* Primary text */
  --color-text-muted: 0 0% 45%;     /* Secondary text */
  --color-text-subtle: 0 0% 64%;    /* Tertiary text */

  --color-border: 0 0% 90%;         /* Default borders */
  --color-border-strong: 0 0% 80%;  /* Emphasized borders */

  --color-action: 24 95% 53%;       /* CTAs, links */
  --color-action-hover: 24 95% 45%; /* Action hover state */

  --color-success: 142 76% 36%;
  --color-warning: 38 92% 50%;
  --color-error: 0 84% 60%;
}
```

### Dark Mode That Works

Don't just invert colors. Adjust contrast and saturation:

```css
.dark {
  --color-surface: 0 0% 7%;
  --color-surface-raised: 0 0% 11%;
  --color-text: 0 0% 93%;
  --color-text-muted: 0 0% 65%;
  /* Reduce saturation of accent colors */
  --color-action: 24 80% 55%;
}
```

---

## Layout Patterns That Break the Mold

### Asymmetric Hero

Instead of 50/50 split:

```tsx
<section className="grid grid-cols-12 gap-8 items-center min-h-[80vh]">
  <div className="col-span-12 lg:col-span-5 lg:col-start-2">
    <h1>Headline that commands attention</h1>
    <p>Supporting copy...</p>
  </div>
  <div className="col-span-12 lg:col-span-5 lg:col-start-8">
    {/* Image or visual */}
  </div>
</section>
```

### Offset Grid

Elements don't align to create visual interest:

```tsx
<div className="grid grid-cols-12 gap-y-16">
  <div className="col-span-8 col-start-1">
    {/* Left-aligned content */}
  </div>
  <div className="col-span-6 col-start-5">
    {/* Overlapping position */}
  </div>
  <div className="col-span-7 col-start-6">
    {/* Right-aligned content */}
  </div>
</div>
```

### Bento Grid (when appropriate)

Use varied cell sizes, not uniform:

```tsx
<div className="grid grid-cols-4 gap-4">
  <div className="col-span-2 row-span-2">{/* Large feature */}</div>
  <div className="col-span-1">{/* Small */}</div>
  <div className="col-span-1">{/* Small */}</div>
  <div className="col-span-2">{/* Wide */}</div>
</div>
```

---

## Section Design Patterns

### Hero Variations

**Type 1: Full-bleed image with overlay**
```tsx
<section className="relative min-h-screen">
  <Image src="..." fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
  <div className="relative z-10 flex items-end min-h-screen pb-24">
    <h1 className="text-white text-5xl">...</h1>
  </div>
</section>
```

**Type 2: Split with vertical text**
```tsx
<section className="grid grid-cols-2 min-h-screen">
  <div className="flex items-center p-16">
    <h1>Content here</h1>
  </div>
  <div className="relative">
    <span className="absolute right-8 top-1/2 -translate-y-1/2 writing-vertical text-8xl font-bold text-gray-100">
      KEYWORD
    </span>
    <Image ... />
  </div>
</section>
```

**Type 3: Minimal with lots of space**
```tsx
<section className="min-h-screen flex flex-col justify-center px-8 max-w-2xl mx-auto">
  <p className="text-sm uppercase tracking-widest mb-4">Tagline</p>
  <h1 className="text-6xl leading-tight mb-8">
    One powerful statement.
  </h1>
  <p className="text-xl text-muted-foreground">Brief supporting text.</p>
</section>
```

### Features Without the Grid

**Stacked with alternating alignment**:
```tsx
{features.map((feature, i) => (
  <div key={i} className={`flex gap-16 ${i % 2 ? 'flex-row-reverse' : ''}`}>
    <div className="flex-1">{/* Content */}</div>
    <div className="flex-1">{/* Visual */}</div>
  </div>
))}
```

**Single column with generous spacing**:
```tsx
<div className="max-w-xl space-y-24">
  {features.map(feature => (
    <div key={feature.id} className="space-y-4">
      <h3 className="text-2xl">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  ))}
</div>
```

---

## Animation Philosophy

### Less Is More

**Use animation for**:
- Drawing attention to important elements
- Providing feedback on interactions
- Guiding users through a flow
- Creating moments of delight (sparingly)

**Avoid animation for**:
- Decoration
- "Making it feel modern"
- Every element on scroll

### Recommended Animation Patterns

**Page load entrance** (use once):
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
```

**Staggered children**:
```tsx
<motion.ul
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>
  {items.map(item => (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
      }}
    >
```

**Scroll-triggered (use sparingly)**:
```tsx
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
>
```

### CSS-Only Micro-interactions

Prefer CSS for simple hover states:

```css
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -8px rgba(0,0,0,0.15);
}
```
