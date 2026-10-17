# Urunk Hospitality Digital Agency Website

Official web application for **Urunk** (https://urunk.com), a specialized web design, conversion optimization, and paid advertising agency built exclusively for hotels, riads, tour operators, and luxury hospitality businesses across Morocco and internationally.

---

## 🌟 Key Features

- **High-Performance Architecture**: Built with React 19, Vite 6, TypeScript, and Tailwind CSS v4.
- **Full Multilingual Capabilities (EN / FR)**: Dedicated English and French localized routing (`/` and `/fr/*`), meta tags, blog posts, case studies, and smooth language switching with top-of-page auto-scroll.
- **Dynamic XML Sitemap Suite**: Automated sitemap generator producing `sitemap.xml`, `pages-sitemap.xml`, `posts-sitemap.xml`, `images-sitemap.xml`, and French localized sitemaps (`sitemap-fr.xml`, `pages-sitemap-fr.xml`, `posts-sitemap-fr.xml`, `images-sitemap-fr.xml`).
- **Complete Schema.org Structured Data**: Integrated JSON-LD for `Organization`, `LocalBusiness` (Marrakech & Casablanca), `Service`, `FAQPage`, `BreadcrumbList`, and `BlogPosting`.
- **Core Web Vitals & Image Optimization**: DNS prefetching, responsive webp images with lazy-loading and skeleton states, optimized typography (`geo-wf, Helvetica, Arial`), and layout shift prevention.
- **High-Converting Lead Funnel**: Built-in interactive ROI calculators, direct WhatsApp click-to-chat integration, instant booking engine audit forms, and clear CTAs.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **SEO & Meta Management**: [React Helmet Async](https://github.com/stayunbroken/react-helmet-async)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)

---

## 📁 Repository Structure

```
├── .env.example            # Environment variables template
├── .gitignore              # Production gitignore rules
├── generate-sitemaps.ts    # Build script for generating XML sitemaps
├── index.html              # HTML entry point with preconnect tags
├── metadata.json           # Platform applet configuration
├── package.json            # Project dependencies and scripts
├── public/                 # Static assets, XML sitemaps, robots.txt, icons
│   ├── favicon.svg
│   ├── images-sitemap.xml
│   ├── pages-sitemap.xml
│   ├── posts-sitemap.xml
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.tsx             # Main router & page component definitions
│   ├── components/         # Reusable UI components (SEO, Layout, LanguageSwitcher, etc.)
│   ├── data/               # Structured data, case studies, EN/FR blog posts & slug maps
│   ├── index.css           # Global Tailwind CSS definitions & custom styling
│   ├── pages/              # English & French page routes (Home, Services, Work, Blog, FAQ)
│   └── utils/              # Helper utilities
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/urunk-agency.git
   cd urunk-agency
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will run locally at `http://localhost:3000`.

---

## 🏗️ Build & Deployment

To build the production application and update all dynamic sitemaps:

```bash
npm run build
```

This command will:
1. Execute `generate-sitemaps.ts` using `tsx` to refresh all XML sitemaps in `/public`.
2. Bundle the application assets into the `/dist` directory for Cloud Run / Vercel / Netlify / Nginx hosting.

### Other Commands

- **Type Check & Linting**:
  ```bash
  npm run lint
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## 🛡️ Security & Environment Guidelines

- Never commit real secret keys or database passwords to version control.
- Use `.env.example` as a safe reference for required environment keys.
- All client-side API requests should proxy sensitive external APIs through server endpoints.

---

## 📄 License

This project is proprietary software for **Urunk Digital Agency**. All rights reserved.
