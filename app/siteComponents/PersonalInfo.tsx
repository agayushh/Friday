import React from "react";
import { PERSONAL_INFO } from "../config/personInfo";

const PersonalInfo = () => {
  return (
    <div className="m-2 mt-7 font-maven">
      <div className="text-gray-600 dark:text-gray-400 text-xl mt-10 ml-3 font-jura">
        Detailed dossier of the Intelligence Personnel
      </div>
      <div className="mt-4 px-5">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PERSONAL_INFO.map((info) => (
            <li key={info.title} className="flex items-center space-x-3">
              <div className="border p-[1px] rounded-lg flex-shrink-0">
                <div className="bg-gray-100 dark:bg-gray-500/30 p-1 rounded-md">
                  <info.icon className="h-5 w-5 text-gray-400 shadow-2xl" />
                </div>
              </div>
              {info.href ? (
                <a
                  href={
                    info.href.startsWith("http")
                      ? info.href
                      : `mailto:${info.information}`
                  }
                  className="hover:underline break-words text-black dark:text-white"
                  target="_blank"
                >
                  {info.information}
                </a>
              ) : (
                <p className="break-words text-black dark:text-white">{info.information}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo;
