import React, { Suspense } from "react";
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
import { Project } from "./siteComponents/Projects";
import Achievements  from "./siteComponents/Achievements";
import Footer from "./siteComponents/Footer";

// Remove duplicate metadata - it's already in layout.tsx

const Page = () => {
  return (
    <main className="flex justify-center size-full">
      <div className="border-x h-fit w-11/12 sm:w-9/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">
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
        <Suspense fallback={<div className="p-4 text-center" role="status" aria-live="polite">Loading statistics...</div>}>
          <Stats />
        </Suspense>
        <BorderSpacing />
        <Stack />
        <BorderSpacing />
        <Experience />
        <BorderSpacing />
        <Project />
        <BorderSpacing />
        <Achievements />
        <BorderSpacing />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
