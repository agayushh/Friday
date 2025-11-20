import React from "react";
import Image from "next/image";
import ProfilePic from "@/public/Pasted image.png";

const Pfp = () => {
  return (
    <div className="flex h-fit items-center px-4 sm:px-0">
      <div className="border-t w-screen absolute left-0 h-36 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-56"></div>
      <Image
        src={ProfilePic}
        alt="Ayush Goyal - Software Engineer"
        className="h-36 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-56"
        width={194}
        height={224}
        priority
        placeholder="blur"
        sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 192px, (max-width: 1280px) 208px, 224px"
        quality={90}
      />
      <div className="flex flex-col font-jura justify-center ml-2 sm:ml-8">
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-black dark:text-white">
          Ayush Goyal
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base mt-1">
          You&apos;ll find me struggling with{" "}
          <span className="line-through mx-1">perfection</span> job hunt
        </p>
      </div>
    </div>
  );
};

export default Pfp;
