import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Pfp from "./components/Pfp";

const Page = () => {
  return (
    <div className="flex justify-center w-screen my-2">
      <div className="border-x h-screen border-gray-900 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-[42%]">
        <Navbar />
        <Header />
        <Pfp />
      </div>
    </div>
  );
};

export default Page;
