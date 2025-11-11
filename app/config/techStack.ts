import type { TechStack } from "@/types/tech-stackType";
import { RiNextjsFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { GiPalmTree } from "react-icons/gi";
import { SiExpress } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiPrisma } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-icon-svg-download-png-2945272.png",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
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
    icon: "https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Light.png",
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
  {
    icon: "https://icon.icepanel.io/Technology/svg/FastAPI.svg",
    title: "MobX-State-Tree",
    href: "https://mobx-state-tree.js.org/",
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
    icon: "https://icon.icepanel.io/Technology/svg/Redis.svg",
    title: "Redis",
    href: "https://redis.io/",
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
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/768px-Git_icon.svg.png",
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
