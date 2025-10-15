import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Pfp from "./components/Pfp";
import PersonalInfo from "./components/PersonalInfo";

const Page = () => {
  return (
    <div className="flex justify-center size-full">
      <div className="border-x h-fit border-gray-900 w-11/12 sm:w-9/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">
        <Navbar />
        <Header />
        <Pfp />
        <PersonalInfo />
      </div>
    </div>
  );
};

export default Page;
