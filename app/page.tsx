import React from "react";
import Navbar from "./siteComponents/Navbar";
import Header from "./siteComponents/Header";
import Pfp from "./siteComponents/Pfp";
import PersonalInfo from "./siteComponents/PersonalInfo";
import BorderSpacing from "./siteComponents/BorderSpacing";
import Socials from "./siteComponents/Socials";
import About from "./siteComponents/About";
import Stats from "./siteComponents/Stats";
import Stack from "./siteComponents/Stack";
import Experience from "./siteComponents/Experience";

const Page = () => {
  return (
    <div className="flex justify-center size-full">
      <div className="border-x h-fit border-gray-900 w-11/12 sm:w-9/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">
        <Navbar />
        <Header />
        <Pfp />
        <BorderSpacing />
        <PersonalInfo />
        <BorderSpacing />
        <Socials />
        <BorderSpacing />
        <About />
        <BorderSpacing />
        <Stats />
        <BorderSpacing />
        <Stack />
        <BorderSpacing />
        <Experience />
      </div>
    </div>
  );
};

export default Page;
