import React from "react";
import Map from "@/public/map.webp";
import { PERSONAL_INFO } from "../config/personInfo";
import { FaLocationArrow } from "react-icons/fa6";

const PersonalInfo = () => {
  return (
    <div className="m-2 mt-7 font-maven">
      <div className="opacity-40 text-xl mt-10 ml-3 font-jura">
        Data of the Intelligence Personnel
      </div>
      <div>
        <ul className=" mt-2 px-5 space-y-2 flex justify-between sm:flex-row flex-col sm:space-x-4 sm:space-y-0">
          <div className="flex flex-col">
            {PERSONAL_INFO.map((info) => (
              <li key={info.title}>
                <div className="flex items-center space-x-2 space-y-1">
                  <div className="border p-[1px] rounded-lg">
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
                      className="hover:underline break-all"
                      target="_blank"
                    >
                      {info.information}
                    </a>
                  ) : (
                    <p className="break-all">{info.information}</p>
                  )}
                </div>
              </li>
            ))}
            <li className="flex md:hidden">
              <div className="border p-[1px] rounded-lg">
                <div className="bg-gray-500/30 p-1 rounded-md">
                  <FaLocationArrow className="  h-5 w-5 text-gray-400 shadow-2xl" />
                </div>
              </div>
              <span className="ml-2">Delhi, India</span>
            </li>
          </div>
          {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div
            className="relative z-20 w-48 border border-neutral-400/60 dark:border-neutral-600 
  col-span-1 row-span-1 shadow-xl rounded-xl sm:h-40 cursor-pointer overflow-hidden hidden md:block 
  group"
            draggable="false"
            style={{
              touchAction: "none",
              WebkitUserSelect: "none",
              userSelect: "none",
              WebkitTouchCallout: "none",
            }}
          >
            {/* Text overlay */}
            <div className="absolute z-10 p-2 w-full">
              <div className="flex justify-between items-centertext-white">
                <p className="text-xs text-white">Location</p>
                <p className="text-xs text-white">
                  New Delhi, India
                  <span className="relative flex h-0 w-0">
                    <span className="animate-ping absolute inline-flex h-1 w-1 rounded-full mt-10 bg-green-400 opacity-75"></span>
                  </span>
                </p>
              </div>
              <div className="top-7 bg-neutral-400/60 dark:bg-neutral-600 h-[0.9px] w-full mt-1"></div>
            </div>

            {/* Image with smooth zoom effect */}
            <img
              src={Map.src}
              alt="Map"
              className="h-full w-full object-cover rounded-xl transition-all duration-500 ease-in-out 
               group-hover:scale-250 group-hover:brightness-110 group-hover:saturate-150"
            />

            {/* Optional overlay effect */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
            ></div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo;
