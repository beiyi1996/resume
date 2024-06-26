import React from "react";
import AboutMe from "./about";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";

export const Title = ({ content }) => (
  <div className="relative">
    <h1 className="text-left text-xl font-bold dark:text-blue-300">
      {content}
    </h1>
    <div className="absolute -bottom-3 left-0 w-10 border-b-2 border-gray-400 dark:border-blue-300"></div>
  </div>
);

export default function Contents() {
  return (
    <section className="p-10">
      <AboutMe />
      <div className="mt-10 flex flex-col sm:flex-row">
        <div className="flex-[2] sm:mr-10">
          <Experience />
        </div>
        <div className="flex-1">
          <Education />
          <Skills />
        </div>
      </div>
    </section>
  );
}
