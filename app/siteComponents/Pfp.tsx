import React from "react";
import ProfilePic from "@/public/Pasted image.png";

const Pfp = () => {
  return (
    <div className="flex h-fit items-center px-4 sm:px-0">
      <div className="border-y w-screen absolute left-0 border-gray-900 h-36 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-56"></div>
      <img
        src={ProfilePic.src}
        alt="Ayush Goyal"
        className="h-36 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-56"
      />
      <div className="flex flex-col font-jura justify-center ml-2 sm:ml-8">
        <p className="text-2xl sm:text-2xl md:text-3xl font-semibold">
          Ayush Goyal
        </p>
        <p className="opacity-40 text-xs sm:text-sm md:text-base mt-1">
          You'll find me struggling with{" "}
          <span className="line-through mx-1">perfection</span> job hunt
        </p>
      </div>
    </div>
  );
};

export default Pfp;
