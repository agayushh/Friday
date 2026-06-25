import type { TechStack } from "@/types/tech-stackType";
import { RiNextjsFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { GiPalmTree } from "react-icons/gi";
import { SiExpress } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiPrisma } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiHono } from "react-icons/si";
import { RiVercelFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    title: "C++",
    href: "https://devdocs.io/cpp/",
    categories: ["Language"],
  },

  // Runtime Environment
  {
    icon: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  {
    icon: "https://bun.com/logo.svg",
    title: "Bun",
    href: "https://bun.sh/",
    categories: ["Runtime Environment"],
  },

  // Frameworks & Libraries
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    icon: RiNextjsFill,
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
  },
  {
    icon: SiExpress,
    title: "Express.js",
    href: "https://expressjs.com/",
    categories: ["Framework"],
  },
  {
    icon: SiHono,
    title: "Hono JS",
    href: "https://hono.dev/",
    categories: ["Framework"],
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    icon: SiShadcnui,
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Language"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Language"],
  },
  {
    icon: GiPalmTree,
    title: "TanStack",
    href: "https://tanstack.com/",
    categories: ["Library"],
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
    title: "React Router",
    href: "https://reactrouter.com/",
    categories: ["Library", "Navigation"],
  },
  {
    icon: "https://reactnavigation.org/img/spiro.svg",
    title: "React Navigation",
    href: "https://reactnavigation.org/",
    categories: ["Library", "Navigation"],
  },
  {
    icon: SiSocketdotio,
    title: "Socket.io",
    href: "https://socket.io/",
    categories: ["Library"],
  },

  // State Management
  {
    icon: "https://icon.icepanel.io/Technology/svg/Redux.svg",
    title: "Redux",
    href: "https://redux.js.org/",
    categories: ["State Management"],
  },

  // Databases & ORMs
  {
    icon: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },
  {
    icon: SiPrisma,
    title: "Prisma",
    href: "https://www.prisma.io/",
    categories: ["ORM"],
  },

  // Tools
  {
    icon: FaGitAlt,
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/Docker.svg",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
  },
  {
    icon: RiVercelFill,
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Database"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/NPM.svg",
    title: "NPM",
    href: "https://www.npmjs.com/",
    categories: ["Tools", "Package Manager"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/Postman.svg",
    title: "Postman",
    href: "https://www.postman.com/",
    categories: ["Tools", "API Testing"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/Vite.js.svg",
    title: "Vite",
    href: "https://vitejs.dev/",
    categories: ["Tools", "Build Tool"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/Nodemon.svg",
    title: "Nodemon",
    href: "https://nodemon.io/",
    categories: ["Tools"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg",
    title: "VS Code",
    href: "https://code.visualstudio.com/",
    categories: ["Tools", "IDE"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/NGINX.svg",
    title: "NGINX",
    href: "https://www.nginx.com/",
    categories: ["Tools", "Web Server"],
  },

  // Cloud Services
  {
    icon: FaAws,
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Cloud Service"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/Azure.svg",
    title: "Azure",
    href: "https://azure.microsoft.com/",
    categories: ["Cloud Service"],
  },
  {
    icon: "https://icon.icepanel.io/Technology/svg/Cloudflare.svg",
    title: "Cloudflare",
    href: "https://www.cloudflare.com/",
    categories: ["Cloud Service"],
  },

  // Platform/OS
  {
    icon: "https://icon.icepanel.io/Technology/svg/Ubuntu.svg",
    title: "Ubuntu",
    href: "https://ubuntu.com/",
    categories: ["Platform", "OS"],
  },
];
//digital ocean
// trpc
//webrtc
//neovim
//grafana
//k8s
//apache
//vercel
//kafka
// prometheus
//hono
//nest
//go
