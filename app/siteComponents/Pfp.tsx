import React from "react";
import Image from "next/image";
import ProfilePic from "@/public/Pasted image.png";
import ProfilePicDark from "@/public/Pasted image dark.png";

const Pfp = () => {
  return (
    <div className="flex h-fit items-center px-4 sm:px-0">
      <div className="border-t w-screen absolute left-0 h-36 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-56"></div>
      <div className="relative rounded-full overflow-hidden aspect-square h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-56 2xl:w-56 border border-border z-10 shrink-0">
        <Image
          src={ProfilePic}
          alt="Ayush Goyal - Software Engineer"
          className="w-full h-full object-cover dark:hidden"
          priority
          placeholder="blur"
          quality={90}
        />
        <Image
          src={ProfilePicDark}
          alt="Ayush Goyal - Software Engineer"
          className="w-full h-full object-cover hidden dark:block"
          priority
          placeholder="blur"
          quality={90}
        />
      </div>
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
