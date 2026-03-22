# Personal Portfolio Website Implementation Plan

This document outlines the architecture, design, and implementation steps for a highly polished, gamified personal portfolio website. This plan ensures reproducibility and maintainability.

## 1. Goal
To build a premium, production-ready portfolio website for a Software Engineer, utilizing real-world resume data to create a modern, "WOW factor" experience.

## 2. Technical Stack
- **Framework:** React 18+ (Vite, TypeScript)
- **Styling:** Tailwind CSS (v4 - CSS-first approach)
- **Animations:** Framer Motion (Scroll-based storytelling, microinteractions)
- **Icons:** Lucide React
- **Utilities:** `clsx`, `tailwind-merge`
- **Deployment:** Vercel (recommended)

## 3. Design Philosophy ("English Colors" Palette)
- **Deep Navy:** `#0A192F` (Background)
- **Soft White:** `#F8F9FA` (Text)
- **Muted Gold:** `#C5A880` (Highlights/Accents)
- **Effect:** Glassmorphism (`backdrop-blur-md`, `bg-glass-bg`, `border-glass-border`)

## 4. Data Architecture
- **Single Source of Truth:** `src/data/portfolioData.ts`
- **Interfaces:** `src/types/portfolio.ts` defines structured types for `Experience`, `Project`, `SkillGroup`, and `Achievement`.

## 5. Folder Structure
```text
src/
├── components/
│   ├── gamified/          # XPBar, LevelBadge
│   ├── layout/            # Navbar (Mission Control), Footer
│   ├── ui/                # GlassCard, AnimatedButton
│   └── sections/          # Hero, About, Experience (Quests), Projects (Missions), Skills (Tree), Achievements, Contact
├── data/
│   └── portfolioData.ts   # REAL data from resume
├── types/
│   └── portfolio.ts
├── styles/
│   └── globals.css        # Tailwind directives + theme variables
├── utils/
│   └── cn.ts              # Tailwind class merging utility
```

## 6. Implementation Phases (Reproducible)

1.  **Scaffolding:** `npm create vite@latest <project-name> -- --template react-ts`
2.  **Dependencies:** `npm install framer-motion lucide-react clsx tailwind-merge`
3.  **Config:** Set up Tailwind v4 in `src/index.css` with the custom palette variables.
4.  **Data Layer:** Populate `src/types` and `src/data` with extracted resume content.
5.  **Core Components:** Implement `MissionControl` (navbar with XP bar), `Hero` (animated boot sequence), `Experience` (timeline with impact badges), `Projects` (interactive mission cards), `Skills` (tech tree), `Achievements` (trophy list), and `Contact`.
6.  **Integration:** Assemble all sections in `src/App.tsx` with unified background effects.
7.  **Verification:** Run `npm run lint` and check responsiveness across devices.

## 7. Deployment Instructions
1.  Push repository to GitHub.
2.  Connect repository to Vercel.
3.  Deploy (Vercel automatically detects Vite/React and configures build steps).
