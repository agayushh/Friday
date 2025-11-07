import React from "react";
import Map from "@/public/map.webp";

const PersonalInfo = () => {
  return (
    <div className="m-2 mt-7">
      <div className="opacity-40 text-lg">
        Personal Information of the Intelligence Personnel
      </div>
      <div>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <span className="">Full Stack Developer & DevOps Engineer</span>
          </li>
          <li>
            <span>
              <a href="mailto:agayush088@gmail.com">agayush088@gmail.com</a>
            </span>
          </li>

          <li>
            <span>+123-456-7890</span>
          </li>
          <li>
            <span>agayush.me </span>
          </li>
          <li>
            <span>he/him</span>
          </li>
          <li className="sm:hidden block">
            <span>New Delhi, India</span>
          </li>

          <div
            className="relative z-20 w-48 border border-neutral-400/60 dark:border-neutral-600 
  col-span-1 row-span-1 shadow-xl rounded-xl sm:h-40 cursor-pointer overflow-hidden hidden sm:block 
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
              <div className="flex justify-between items-center">
                <p className="text-xs">Location</p>
                <p className="text-xs">New Delhi, India</p>
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
