import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Pfp from "./components/Pfp";

const Page = () => {
  return (
    <div className="flex justify-center size-full my-2">
      <div className="border-x h-full border-gray-900 w-11/12 sm:w-9/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">
        <Navbar />
        <Header />
        <Pfp />
      </div>
    </div>
  );
};

export default Page;
