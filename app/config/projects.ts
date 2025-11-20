import { ProjectType } from "@/types/project-details";
import chess from "@/public/chessproj.png";
import chat from "@/public/chatapp.png";
import pptChat from "@/public/pptchat.png";
import weavr from "@/public/weavr.png";

export const Projects_List: ProjectType[] = [
  {
    banner: weavr, // Changed from URL string to imported image
    title: "Weavr",
    stack: ["Next Js", "tRPC", "BetterAuth", "Prisma"],
    description: "This will help you automate your workflows just like n8n",
    deployedLink: "https://github.com/agayushh/weavr1",
    githubLink: "https://github.com/agayushh/weavr1",
    period: "Oct 2025",
  },
  {
    banner: pptChat, // Changed from URL string to imported image
    title: "PPT Chat",
    stack: ["Next Js", "Clerk", "Mongoose", "Mem0AI"],
    description: "Cloned Chat GPT",
    deployedLink: "https://ppt-chat.vercel.app/",
    githubLink: "https://github.com/agayushh/pptchat",
    period: "Oct 2025",
  },
  {
    banner: chess,
    title: "Chess",
    stack: ["Next Js", "Typescript", "Tailwind"],
    description: "Challenge AI for a chess game.",
    deployedLink: "https://ai-shat-ranj.vercel.app/",
    githubLink: "https://github.com/agayushh/AI-ShatRanj",
    period: "Sept 2025",
  },
  {
    banner: chat, // Changed from URL string to imported image
    title: "ChatFish",
    stack: ["ReactJs", "Websockets", "Hono JS"],
    description: "A Chat application ",
    deployedLink: "https://chatfish.agayush.me/",
    githubLink: "https://github.com/agayushh/chatfish",
    period: "Aug 2025",
  },
];
