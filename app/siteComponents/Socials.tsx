import React from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "../config/socials";

const Socials = () => {
  return (
    <div className="mt-10 border overflow-hidden grid grid-cols-1 sm:grid-cols-2">
      {SOCIAL_LINKS.map((social, index) => (
        <div
          key={index}
          className="flex items-center justify-between group p-4 hover:bg-gray-100 dark:hover:bg-[#111] transition-colors border-b last:border-b-0 sm:border-r sm:even:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
        >
          <div className="flex items-center space-x-4">
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.icon}
                alt={social.title}
                className="h-12 rounded-2xl"
                width={48}
                height={48}
                loading="lazy"
              />
            </a>

            <div>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <p className="font-medium text-black dark:text-white group-hover:underline">
                  {social.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-jura">
                  {social.description}
                </p>
              </a>
            </div>
          </div>
          <MoveUpRight className="h-5 text-black dark:text-white" />
        </div>
      ))}
    </div>
  );
};

export default Socials;
