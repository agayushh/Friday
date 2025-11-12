import React from "react";
import LinkedIn from "@/public/linkedin.webp";
import { MoveUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "../config/socials";

const Socials = () => {
  return (
    <div className="mt-10 border-y  border-gray-900 grid grid-cols-1 sm:grid-cols-2 divide-x divide-y divide-gray-900">
      {SOCIAL_LINKS.map((social, index) => (
        <div
          key={index}
          className="flex items-center justify-between group p-4 hover:bg-[#111] transition-colors"
        >
          <div className="flex items-center space-x-4">
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              <img
                src={social.icon}
                alt={social.title}
                className="h-12 rounded-2xl"
              />
            </a>

            <div>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <p className="font-medium group-hover:underline">
                  {social.title}
                </p>
                <p className="text-sm opacity-50 font-jura">
                  {social.description}
                </p>
              </a>
            </div>
          </div>
          <MoveUpRight className="h-5" />
        </div>
      ))}
    </div>
  );
};

export default Socials;
