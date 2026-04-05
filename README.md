<div align="center">

# Floka Studio

### SM Technology — Frontend Developer Hiring Task Submission

> Pixel-perfect recreation of [floka.casethemes.net](https://floka.casethemes.net/home-1-onepage/) with premium Bird Marketing banner animation

<br />

[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

<br />

| 🌐 Live Demo | 📂 GitHub | 🎨 Reference Design | ✨ Bonus Reference |
|:---:|:---:|:---:|:---:|
| [floka-studio-ten.vercel.app](https://floka-studio-ten.vercel.app/) | [zahid397/Floka-Studio](https://github.com/zahid397/Floka-Studio) | [floka.casethemes.net](https://floka.casethemes.net/home-1-onepage/) | [bird.marketing](https://bird.marketing/) |

</div>

---

<br />

## 📋 Task Overview

This project is a **pixel-perfect, fully animated** recreation of the Floka one-page design, completed as part of the SM Technology Frontend Developer hiring task.

### ✅ Requirements Fulfilled

| Requirement | Status |
|---|---|
| Replicate reference design (floka.casethemes.net) | ✅ Complete |
| Use any modern framework | ✅ React + Vite + TypeScript |
| All kinds of animations implemented | ✅ 10+ animation types |
| Bonus: Bird Marketing banner animation | ✅ Integrated |
| Clean, responsive, pixel-perfect | ✅ Mobile + Tablet + Desktop |
| Public GitHub repository | ✅ Live |
| Live hosted link | ✅ Vercel |

<br />

---

## 🎬 Animations Implemented

Inspired by [bird.marketing](https://bird.marketing/) and [floka.casethemes.net](https://floka.casethemes.net/home-1-onepage/):

| Animation | Implementation |
|-----------|---------------|
| **Custom Cursor** | Spring-physics dot + ring, scales on hover |
| **Hero Entrance** | Word-by-word staggered text reveal |
| **Floating Particles** | Organic floating elements in hero |
| **Scroll Fade-Up** | Every section fades + slides up on scroll |
| **Parallax** | Depth layers move at different speeds |
| **Magnetic Buttons** | Cursor-following button movement |
| **Rotating Badge** | Circular spinning text (SVG textPath) |
| **Count-Up Stats** | Numbers animate from 0 on scroll into view |
| **Skill Bars** | Width animates from 0% to target on scroll |
| **Accordion** | Smooth height expand/collapse with icon flip |
| **Testimonial Carousel** | Auto-advance with slide transition |
| **Banner (Bird Marketing)** | Animated gradient orbs + "Let's talk now" reveal + rotating CTA circle |
| **Portfolio Overlay** | Scale + fade overlay on project hover |
| **Loading Screen** | Animated intro before page renders |
| **Scroll To Top** | Smooth return button with rotation |

<br />

---

## 🖼️ Sections — Pixel Match

| Section | Matches Reference |
|---------|:-----------------:|
| Navbar (sticky + auth) | ✅ |
| Hero (full-viewport + card) | ✅ |
| About (rotating badge + stats) | ✅ |
| Services (accordion expand) | ✅ |
| Portfolio (stacked cards) | ✅ |
| Awards (table + text reveal) | ✅ |
| Team (tab-switched) | ✅ |
| Testimonials (carousel) | ✅ |
| Stats (count-up) | ✅ |
| Clients (logo grid) | ✅ |
| Banner (**Bird Marketing bonus**) | ✅ |
| Contact (working form) | ✅ |
| Footer (magnetic links) | ✅ |

<br />

---

## 🛠️ Tech Stack

```
React 18 + Vite      — Fast, modern build
TypeScript           — Type-safe code
Tailwind CSS         — Utility-first styling
Framer Motion        — All animations
Supabase             — Auth + Database (contact submissions)
Formspree            — Email delivery (no backend needed)
Lucide React         — Icon library
Sonner               — Toast notifications
shadcn/ui            — Accessible base components
```

<br />

---

## 📁 Project Structure

```
Floka-Studio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky + active section tracking
│   │   ├── Hero.tsx             # Full-viewport + floating card
│   │   ├── About.tsx            # Rotating badge + skill bars
│   │   ├── Services.tsx         # Accordion with images
│   │   ├── Portfolio.tsx        # Stacked project cards
│   │   ├── Awards.tsx           # Text reveal + awards table
│   │   ├── Team.tsx             # Design/Dev tab switch
│   │   ├── Testimonials.tsx     # Auto carousel
│   │   ├── Stats.tsx            # Count-up on scroll
│   │   ├── Clients.tsx          # Client logos
│   │   ├── Banner.tsx           # 🔥 Bird Marketing animation
│   │   ├── Contact.tsx          # Form with dual email delivery
│   │   ├── Footer.tsx           # Magnetic nav links
│   │   ├── AuthModal.tsx        # Google + Email auth
│   │   ├── CustomCursor.tsx     # Spring cursor
│   │   ├── ScrollToTop.tsx      # Back to top
│   │   ├── LoadingScreen.tsx    # Intro animation
│   │   └── FloatingParticles.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── hooks/
│   │   ├── useActiveSection.ts
│   │   ├── useCountUp.ts
│   │   ├── useMagnetic.ts
│   │   └── useMousePosition.ts
│   ├── integrations/
│   │   └── supabase/
│   └── pages/
│       └── Index.tsx
├── supabase/
│   └── migrations/
├── vercel.json
├── index.html
└── package.json
```

<br />

---

## ⚙️ Run Locally

```bash
# 1. Clone
git clone https://github.com/zahid397/Floka-Studio.git
cd Floka-Studio

# 2. Install
npm install

# 3. Add environment variables
cp .env.example .env
# Fill in your Supabase URL + anon key

# 4. Run
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) ✅

<br />

---

## 🔑 Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_FORMSPREE_ID=maqldojp
```

<br />

---

## 🚀 Deployment

Deployed on **Vercel** with automatic GitHub integration.

```bash
npx vercel --prod
```

<br />

---

## 👨‍💻 Submitted By

<div align="center">

**Zahid Hasan**
Frontend Developer

[![GitHub](https://img.shields.io/badge/GitHub-zahid397-181717?style=flat&logo=github)](https://github.com/zahid397)

</div>

<br />

---

<div align="center">

*Submitted for the **SM Technology Frontend Developer** position*
*Deadline: 6th April 2026, 2:00 PM BST*

**Built with ❤️ by Zahid Hasan**

</div>
