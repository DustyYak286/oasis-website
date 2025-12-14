# Oasis Website - Product Requirements Document (PRD)

**Date:** 14 December 2025  
**Author:** David Bratu  
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

### **3.1 Hero / Landing Section**

**Purpose:** Make an immediate impact and communicate the mission.  

**Content:**  
- Headline: *“Bringing Quality Education Anywhere”*  
- Subheadline: *“A self-contained educational platform for schools without stable internet or electricity.”*  
- CTA Buttons:
  - *“Learn More”* → scrolls to Problem/Solution section  
  - *“Get Involved”* → scrolls to contact/lead form  
- Visuals: Hero illustration or animation showing students interacting with Oasis devices in classrooms  

**Design Notes:**  
- Full-width hero with immersive visuals  
- Animated subtle micro-interactions for CTA buttons  
- Mobile-optimized layout with readable typography  

---

### **3.2 Problem / Why It Matters**

**Purpose:** Highlight the global educational access gap and the challenges schools face.  

**Content:**  
- Statistics:  
  - *“Over 250 million children worldwide lack access to digital education.”*  
  - Highlight issues like low connectivity and unstable power  
- Credibility: Cite UNESCO or relevant sources  
- Optional graphic contrasting connected vs. unconnected classrooms  

**Design Notes:**  
- Use card or split-section layout  
- Minimal text with impactful visuals  
- Maintain inspirational yet professional tone  

---

### **3.3 The Solution – Oasis Platform**

**Purpose:** Explain how Oasis directly addresses the identified problems.  

**Content:**  
- Key Points (cards/icons format):  
  1. **Offline-first:** Works without internet  
  2. **Low-power:** Optimized for unstable electricity environments  
  3. **Local content access:** Lessons, quizzes, presentations stored locally  
  4. **AI Learning Assistant:** Supports teachers and students  
  5. **Easy deployment:** Raspberry Pi mini-server setup  

**Design Notes:**  
- Interactive cards or hover animations  
- Consistent iconography and color palette matching brand  
- Optional animated GIF or short explainer video  

---

### **3.4 How It Works / System Overview**

**Purpose:** Provide an intuitive understanding of the platform’s workflow without technical complexity.  

**Content:**  
- Flow diagram: Teacher uploads content → Raspberry Pi mini-server → Students connect wirelessly → AI assistant support  
- Short bullet points explaining setup, local networking, and AI assistance  
- Tagline: *“No internet? No problem.”*  

**Design Notes:**  
- Visual-first layout  
- Use modern infographic style with clean lines  
- Ensure accessibility (screen readers, alt text for diagrams)  

---

### **3.5 Impact / Pilot Results**

**Purpose:** Build trust and credibility via measurable impact and social proof.  

**Content:**  
- Key metrics:
  - Number of schools reached  
  - Number of students impacted  
  - Feedback or quotes from teachers  
- Before/after visuals or infographic comparisons  
- Optional video testimonial  

**Design Notes:**  
- Sectioned layout with statistics highlighted  
- Minimal text, large numbers for emphasis  
- Use animation to draw attention to key metrics  

---

### **3.6 Partners & Recognition**

**Purpose:** Highlight credibility, recognition, and partnerships.  

**Content:**  
- Logos: UNESCO, Nestlé GYGS, pilot schools, hackathon awards  
- Short description: *“Recognized globally for innovation in education access.”*  

**Design Notes:**  
- Grid layout for logos, hover animations to show details if needed  
- Maintain uniform sizing and spacing  

---

### **3.7 Call to Action / Get Involved**

**Purpose:** Convert visitors into leads or partners.  

**Content:**  
- Form fields: Name, Email, Organization, Interest (Pilot / Partner / Donation / Newsletter)  
- CTA buttons per interest type  
- Inspirational copy: *“Join us in bridging the education gap worldwide.”*  

**Design Notes:**  
- Highlighted section with strong visual contrast  
- Inline form validation and accessible error messages  
- Responsive design for mobile and tablet  

---

### **3.8 Footer**

**Purpose:** Provide essential navigation and contact information.  

**Content:**  
- Links: About, How It Works, Impact, Contact, Privacy Policy, Social Media  
- Copyright statement  
- Optional small note: “Open-source components available on GitHub”  

**Design Notes:**  
- Clean, minimal design  
- Include micro-interactions for social media links  

---

## 4. Future Sections (do not implement yet)

- **Blog / Updates:** Share pilot progress, news, and press mentions  
- **FAQ:** Address common questions about deployment, setup, and impact  
- **Resource Downloads:** PDFs for teachers, pilot guides, or partner decks  
- **Multilingual Support:** English, optionally French or Spanish for target regions  

---

## 5. UX & Design Guidelines

- Modern, professional, and inspirational tone  
- Clean typography, generous whitespace  
- Mobile-first responsive design  
- Accessible: alt text, semantic HTML, screen reader-friendly  
- Interactive micro-animations for engagement (hover, scroll-triggered)  
- Color palette: aligned with Oasis branding; earth tones + clean tech-inspired accent colors  

---

## 6. SEO & Analytics

- Page-level SEO: descriptive titles, meta descriptions, Open Graph, and Twitter cards  
- Structured data (FAQ, organization, partnership recognition)  
- Track CTA engagement, form submissions, downloads  
- Analytics: Plausible or GA4 integration  

---

## 7. Notes / Recommendations

- **Content-first approach:** prioritize clear, inspirational copy and visuals over technical features  
- **Scalable:** the site should support future features like blog, resource downloads, multilingual support  
- **Lightweight and fast:** even though no performance restrictions exist, a fast and responsive site improves credibility  
