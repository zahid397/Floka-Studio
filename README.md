<div align="center">

# Floka Studio

### Creative Digital Agency — One Page Website

> *"No cookie-cutter websites. No fluff. Just real tools and smart strategies to grow your business and elevate your brand."*

<br />

[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

<br />

**[🌐 Live Demo](https://floka-studio.vercel.app)** · **[📂 GitHub](https://github.com/zahid397/floka-studio-agency-website)**

</div>

---

<br />

## ✨ Overview

**Floka Studio** is a premium one-page creative agency website built with modern web technologies. Featuring cinematic animations, a custom cursor, smooth scroll interactions, Google authentication, and a fully working contact form — all without a traditional backend.

<br />

## 🖼️ Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport with floating particles and animated entrance |
| **About** | Rotating badge, skill bars, social links, stats counter |
| **Services** | Accordion-style with expand/collapse and image previews |
| **Portfolio** | Full-width stacked project cards with overlay on hover |
| **Awards** | Scrolling text reveal + award table with hover effects |
| **Team** | Tab-switched Design / Development teams |
| **Testimonials** | Auto-advancing carousel with star ratings |
| **Stats** | Count-up numbers triggered on scroll |
| **Clients** | Client logo grid |
| **Banner** | Bird Marketing-inspired animated CTA with rotating text |
| **Contact** | Full form with Supabase + Formspree dual delivery |
| **Footer** | Large nav links with magnetic hover + social icons |

<br />

---

## 🛠️ Tech Stack

```
React 18          — UI framework
TypeScript        — Type safety
Vite              — Lightning fast build tool
Tailwind CSS      — Utility-first styling
Framer Motion     — Smooth animations
Supabase          — Auth + Database
Formspree         — Email delivery (no backend needed)
Lucide React      — Icon library
Sonner            — Toast notifications
shadcn/ui         — Base UI components
```

<br />

---

## 📁 Project Structure

```
floka-studio/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/                  # shadcn base components
│   │   ├── Navbar.tsx           # Sticky nav + auth button
│   │   ├── Hero.tsx             # Full-viewport hero
│   │   ├── About.tsx            # About + skills + stats
│   │   ├── Services.tsx         # Accordion services
│   │   ├── Portfolio.tsx        # Project showcase
│   │   ├── Awards.tsx           # Awards table
│   │   ├── Team.tsx             # Team tabs
│   │   ├── Testimonials.tsx     # Review carousel
│   │   ├── Stats.tsx            # Count-up stats
│   │   ├── Clients.tsx          # Client logos
│   │   ├── Banner.tsx           # Animated CTA banner
│   │   ├── Contact.tsx          # Contact form
│   │   ├── Footer.tsx           # Footer
│   │   ├── AuthModal.tsx        # Google + Email auth
│   │   ├── CustomCursor.tsx     # Custom cursor
│   │   ├── ScrollToTop.tsx      # Back to top button
│   │   ├── FloatingParticles.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── ParallaxSection.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx      # Auth state management
│   ├── hooks/
│   │   ├── useActiveSection.ts  # IntersectionObserver nav
│   │   ├── useCountUp.ts        # Animated counters
│   │   ├── useMagnetic.ts       # Magnetic hover effect
│   │   └── useMousePosition.ts  # Cursor tracking
│   ├── integrations/
│   │   └── supabase/            # Supabase client + types
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── supabase/
│   └── migrations/              # Database schema
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

<br />

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zahid397/floka-studio-agency-website.git
cd floka-studio-agency-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_FORMSPREE_ID=maqldojp
```

### 4. Set up Supabase

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE contact_submissions (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  budget text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE newsletter_subscribers (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);
```

Enable Google OAuth:
> Supabase Dashboard → Authentication → Providers → Google → Enable

### 5. Start development server

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) ✅

<br />

---

## 🚀 Deployment

### Deploy on Vercel

```bash
npx vercel --prod
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new)

**Add environment variables in Vercel:**

```
VITE_SUPABASE_URL      → your supabase url
VITE_SUPABASE_ANON_KEY → your supabase anon key
VITE_FORMSPREE_ID      → maqldojp
```

<br />

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary BG | `#ffffff` |
| Dark BG | `#0a0a0a` |
| Card BG | `#111111` |
| Text | `#0a0a0a` |
| Muted | `#888888` |
| Border Dark | `#222222` |
| Font Heading | DM Sans |
| Font Body | Inter |

**Animations included:**
- Custom cursor with spring physics
- Scroll-triggered fade-up on all sections
- Word-by-word text reveals
- Magnetic hover on buttons and links
- Floating particles in hero
- Rotating circular text badge
- Parallax depth effects
- Count-up number animations

<br />

---

## 📬 Contact Form Setup

Uses **Formspree** for email delivery — zero backend required.

1. Sign up free at [formspree.io](https://formspree.io)
2. Go to form `maqldojp` → **Settings → Notifications**
3. Add your email and click the verify link
4. Submit the form — emails arrive in inbox ✅

<br />

---

## 🔐 Authentication

Powered by **Supabase Auth** — supports:

- ✅ Google OAuth (one-click sign in)
- ✅ Email + Password
- ✅ Session persistence
- ✅ Secure sign out

<br />

---

## 📜 Scripts

```bash
npm run dev        # Start dev server (port 8080)
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

<br />

---

## 👨‍💻 Author

<div align="center">

**Zahid Hasan**
Frontend Developer

[![GitHub](https://img.shields.io/badge/GitHub-zahid397-181717?style=flat&logo=github)](https://github.com/zahid397)

</div>

<br />

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

<br />

---

<div align="center">

**Built with ❤️ by Zahid Hasan**

*Floka Studio — Where creativity meets strategy.*

</div>
