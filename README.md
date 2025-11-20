# Friday - Personal Portfolio

A modern, feature-rich portfolio website built with Next.js 15, showcasing projects, skills, and real-time development statistics from GitHub and WakaTime.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS 4](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
- **Charts:** [ECharts](https://echarts.apache.org/) for data visualization
- **Icons:** [Lucide Icons](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)
- **API Integration:** GitHub Contributions API + WakaTime API
- **Package Manager:** pnpm

## Project Structure

```
friday/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   └── wakatime/         # WakaTime integration endpoints
│   ├── config/               # Configuration files
│   │   ├── achievement.ts    # Achievements data
│   │   ├── experience.ts     # Work experience data
│   │   ├── projects.ts       # Project portfolio data
│   │   ├── techStack.ts      # Technology stack data
│   │   └── socials.ts        # Social links
│   ├── siteComponents/       # Main site components
│   └── Statistics/           # Statistics components (GitHub & WakaTime)
├── components/               # Reusable UI components
│   ├── kibo-ui/             # Custom UI components
│   └── ui/                   # shadcn/ui components
├── types/                    # TypeScript type definitions
└── public/                   # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/agayushh/Friday.git
cd Friday
```

2. **Install dependencies:**

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Update the `.env` file with your credentials:

```env
# Base URL for API calls
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# WakaTime API Key (get from https://wakatime.com/settings/api-key)
WAKATIME_API_KEY=your_wakatime_api_key_here
```

4. **Run the development server:**

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

5. **Open your browser:**

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## Customization

### Update Personal Information

Edit the configuration files in `app/config/`:

- **`info.ts`** - GitHub username and basic info
- **`personInfo.ts`** - Personal details, email, contact
- **`experience.ts`** - Work experience and education
- **`projects.ts`** - Project showcase
- **`techStack.ts`** - Skills and technologies
- **`achievement.ts`** - Awards and achievements
- **`socials.ts`** - Social media links

### Modify Styling

- Update `app/globals.css` for global styles
- Customize Tailwind config in `postcss.config.mjs`
- Modify component styles directly in TSX files

## API Endpoints

### WakaTime Stats
- `GET /api/wakatime/stats` - Fetch coding statistics
- `GET /api/wakatime/summaries` - Fetch daily summaries

*Note: Data is cached for 1 hour (3600 seconds) using Next.js ISR*

## Building for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/agayushh/Friday)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to:
- **Netlify** - [Guide](https://docs.netlify.com/frameworks/next-js/)
- **AWS Amplify** - [Guide](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html)
- **Docker** - Build your own container
- **Self-hosted** - Using `pnpm start` after building

## Security

- ✅ All API keys stored in environment variables
- ✅ `.env` files excluded from git
- ✅ Server-side API routes for sensitive operations
- ✅ No hardcoded credentials

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ayush Agarwal**

- Website: [agayush.me](https://agayush.me)
- Email: agayush088@gmail.com
- GitHub: [@agayushh](https://github.com/agayushh)
- Currently: Building [Oclea](https://oclea.app)

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment platform
- [WakaTime](https://wakatime.com/) - Coding statistics
- [GitHub](https://github.com/) - Contribution tracking
- [shadcn/ui](https://ui.shadcn.com/) - UI components

---

⭐ Star this repo if you find it helpful!
