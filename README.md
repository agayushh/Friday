# ⚡ Ayush Goyal — Software Engineer Portfolio

> A cutting-edge, high-performance developer portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS 4**. Features an elegant borderless dark-mode aesthetic, advanced SEO optimization, and live development statistics.

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🚀 Key Features

* 🎨 **Borderless Premium Aesthetic:** Modern minimalism with smooth responsive transitions across all viewport sizes.
* ⚡ **Ultra-Optimized Performance:** Fully optimized Largest Contentful Paint (LCP), WebP dynamic asset loading, and Next.js image quality mapping.
* 🔍 **Advanced SEO & Rich Snippets:** Automated `sitemap.ts`, customized `robots.ts`, and full JSON-LD structured schema (`Person` & `hasOccupation`) for flawless Google Search indexing.
* 📊 **Live Analytics & Reports:** Real-time GitHub contribution graphs and WakaTime coding statistics powered by Next.js Incremental Static Regeneration (ISR).
* 🛡️ **Robust Security:** Server-side API route proxying with zero exposed client-side API keys.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
* **Visualization:** [ECharts](https://echarts.apache.org/) for interactive data reporting
* **Icons:** [Lucide React](https://lucide.dev/) & custom SVG vectors
* **APIs:** GitHub Contributions API & WakaTime API
* **Package Manager:** `pnpm`

---

## 📂 Project Structure

```
Friday/
├── app/                      # Next.js App Router directory
│   ├── api/                  # Server-side API routes (WakaTime proxy)
│   ├── config/               # Easy-to-edit portfolio data configurations
│   │   ├── achievement.ts    # Achievements data
│   │   ├── experience.ts     # Work experience data
│   │   ├── projects.ts       # Project portfolio data
│   │   ├── techStack.ts      # Technology stack data
│   │   └── socials.ts        # Social links & contact info
│   ├── siteComponents/       # Layout & UI structural components
│   └── Statistics/           # Live GitHub & WakaTime reporting modules
├── components/               # Reusable base UI elements
├── public/                   # Static assets, WebP avatars, and Open Graph previews
└── types/                    # TypeScript strict definitions
```

---

## 🏎️ Getting Started

### Prerequisites

* **Node.js** 18+ (or Bun)
* **pnpm** (recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/agayushh/Friday.git
   cd Friday
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**
   ```bash
   cp .env.example .env
   ```
   Add your keys in `.env`:
   ```env
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   WAKATIME_API_KEY=your_wakatime_api_key_here
   ```

4. **Start the Development Server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view your live portfolio.

---

## ⚙️ Easy Customization

You can fully customize the portfolio content by editing the clean data files in `app/config/`:

* **`info.ts`** — Primary headers and GitHub handles
* **`personInfo.ts`** — Dossier data, email, and location
* **`experience.ts`** — Career history and responsibilities
* **`projects.ts`** — Featured projects and tech tags
* **`techStack.ts`** — Grid icons and technology expertise
* **`achievement.ts`** — Honors, awards, and recognition
* **`socials.ts`** — Social media outreach URLs

---

## 🌐 Building & Deployment

### Production Build
To test the fully minified, 100-Lighthouse-score production bundle:
```bash
pnpm build
pnpm start
```

### One-Click Vercel Deployment
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/agayushh/Friday)

1. Push your customized repository to GitHub.
2. Import the repository into your [Vercel](https://vercel.com) dashboard.
3. Supply the `WAKATIME_API_KEY` environment variable.
4. Deploy instantly with built-in ISR caching support.

---

## 👤 Author

**Ayush Goyal**

* **Website:** [ayushg.live](https://ayushg.live)
* **Email:** [agayush088@gmail.com](mailto:agayush088@gmail.com)
* **GitHub:** [@agayushh](https://github.com/agayushh)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">
  <b>⭐ Star this repository if you find it elegant and helpful!</b>
</div>
