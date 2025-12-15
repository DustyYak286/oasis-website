# Oasis Website - Product Requirements Document (PRD)

**Date:** 14 December 2025  
**Author:** David
**Purpose:** This PRD outlines the detailed specifications for the Oasis marketing and contact website, which will serve as the primary web presence for the platform. The website is primarily a **frontend marketing and contact point**; no complex backend functionality is required beyond basic form submission.  

---

## 1. Overview

**Vision:**  
Oasis is a sustainable, offline-first educational platform that brings quality education to schools lacking internet connectivity and stable electricity. The website will communicate this mission clearly, inspire potential partners, donors, and schools, and provide an easy point of contact for engagement.

**Objectives:**  
- Communicate the Oasis mission and impact clearly and memorably  
- Inspire visitors to partner, support, or engage with Oasis  
- Showcase credibility via partnerships, recognition, and pilot results  
- Collect visitor information through forms for engagement and partnership  
- Ensure a modern, professional, and inspirational web presence

**Target Audience:**  
- Educational institutions and NGOs  
- Potential donors, partners, and sponsors  
- Teachers and local school administrators  
- Press and media outlets  
- Investors and stakeholders interested in sustainable education solutions

---

## 2. Technical Stack

**Frontend Framework:** Next.js (React)  
**Styling:** Tailwind CSS + shadcn/ui components  
**Content Management:** MDX in-repo for simplicity; optional future integration with a headless CMS (Sanity, Contentful, or Strapi)  
**Hosting & Deployment:** Vercel  
**Forms / Lead Capture:** Formspree or Next.js serverless API route using Resend for email  
**Analytics:** Plausible or GA4  
**SEO & Meta:** Next.js built-in SEO features; Open Graph for social sharing  

---

## 3. Site Structure & Content

### **3.1 Main Page (Home / Product Focus)**

**Purpose:** Introduce the product, explain its value, and capture interest.  

**Sections:**  

#### Hero / Landing Section
- Headline: *“Bringing Quality Education Anywhere”*  
- Subheadline: *“A self-contained educational platform for schools without stable internet or electricity.”*  
- CTA Buttons:  
  - *“Learn More”* → scrolls to Problem/Solution  
  - *“Get Involved”* → scrolls to contact/lead form  
- Visuals: Hero illustration or animation showing students interacting with Oasis devices in classrooms  

#### Problem / Why It Matters
- Statistics highlighting the educational access gap  
- Short, impactful text emphasizing low-connectivity and low-power challenges  
- Credibility: cite UNESCO/NGO stats  
- Optional graphic contrasting connected vs. unconnected classrooms  

#### The Solution – Oasis Platform
- Key points in card/icon format:  
  1. Offline-first  
  2. Low-power  
  3. Local content access  
  4. AI Learning Assistant  
  5. Easy deployment via Raspberry Pi mini-server  
- Visuals/icons or optional GIF/video  

#### How It Works / System Overview
- Flow diagram: Teacher uploads content → Raspberry Pi → Students connect wirelessly → AI assistant support  
- Short bullet points explaining setup, networking, and AI assistance  
- Tagline: *“No internet? No problem.”*  

#### Impact / Pilot Results
- Key metrics: schools reached, students impacted, feedback from teachers  
- Before/after visuals or infographic comparisons  
- Optional testimonial video  

#### Call to Action / Get Involved
- Form fields: Name, Email, Interest (Pilot / Partner / Donation / Newsletter)  
- Strong inspirational copy: *“Join us in bridging the education gap worldwide.”*  
- Buttons per interest type  
- Highlighted, attention-grabbing section  

---

### **3.2 About Us Page**

**Purpose:** Build credibility and tell the story of the team behind Oasis.  

**Content:**  
- **Our Story:** How the team started, vision, and motivation  
- **Mission & Values:** Emphasize offline-first education, sustainability, innovation  
- **Team Profiles:** Photos, names, roles, short bios (include awards/recognitions)  
- **Partners & Recognition:** Logos of UNESCO, Nestlé GYGS, hackathon awards, pilot schools (DO NOT INCLUDE YET)
- Optional callout for press mentions or media features  

**Design Notes:**  
- Human-centered visuals: team photos, candid shots, or illustrations  
- Inspirational tone with a professional layout  
- Grid or card-based layout for team profiles  

---

### **3.3 Blog Page**

**Purpose:** Share stories, updates, pilot results, news, and educational insights.  

**Content:**  
- Blog listing with titles, short excerpt, author, and publish date  
- Individual blog post pages with header image, article body, optional images/graphics  
- Categories or tags for easier navigation (optional)  
- CTA at the end: *“Want to get involved or learn more? Contact us.”*  

**Design Notes:**  
- Clean, readable typography  
- Easy navigation between posts  
- Responsive layout for mobile and tablet  

---

### **3.4 Footer (Site-wide)**

**Purpose:** Provide navigation and contact info.  

**Content:**  
- Links: Home, About Us, Blog, Contact, Privacy Policy, Social Media  
- Copyright text  

---

## 4. UX & Design Guidelines

- Modern, professional, and inspirational tone  
- Clean typography, generous whitespace  
- Mobile-first responsive design  
- Accessibility: alt text, semantic HTML, screen reader-friendly  
- Interactive micro-animations for engagement (hover, scroll-triggered)  
- Color palette: aligned with Oasis branding (earth tones + tech-inspired accent colors)  

---

## 5. SEO & Analytics

- Page-level SEO: descriptive titles, meta descriptions, Open Graph, Twitter cards  
- Structured data (FAQ, organization, partnership recognition)  
- Track CTA engagement, form submissions, downloads  
- Analytics: Plausible or GA4 integration   

---

## 6. Notes / Recommendations

- **Content-first approach:** prioritize clear, inspirational copy and visuals over technical features  
- **Scalable:** the site should support future features like multilingual support, resources downloads, and expanded blog functionality  
- **Fast & lightweight:** improves credibility, SEO, and engagement even if performance is not restricted  

---

**End of PRD**