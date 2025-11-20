import React from "react";

const About = () => {
  return (
    <section id="about" className="mt-8 m-2" aria-labelledby="about-heading">
      <h2 id="about-heading" className="text-2xl font-jura tracking-wide text-gray-600 dark:text-gray-400">
        {" "}
        ABOUT
      </h2>
      <div className="border-b absolute left-0 w-screen" aria-hidden="true"></div>
      <br />
      <div className="font-maven text-lg leading-6 text-black dark:text-white">
        Hi, I&apos;m Ayush, a developer who works a bit like an undercover
        operator. Most people just see me writing code, but behind the scenes,
        I&apos;m someone who quietly solves problems, builds systems, and keeps
        things running without drawing too much attention. I&apos;ve worked
        across the stack and I treat every project like a mission: understand
        the objective, plan the approach, and execute with focus. I contribute
        to open source projects and maintain my own side projects. I enjoy
        diving into new technologies and figuring out how to use them
        effectively. And I am interested in knowing the system architecture and
        design principles that make software robust and scalable. Outside of
        code, I have organized events, led a technical club, and taken on
        projects that push me to learn something new. And I have also got
        acknowledged by{" "}
        <span className="underline">
          Chief Minister of Haryana
        </span>{" "}
        for a technical project I have worked on. I&apos;m looking for
        opportunities where I can contribute my skills and grow as a developer.
      </div>
    </section>
  );
};

export default About;
