import React from "react";
import { Title } from "./contents";

const mySkills = [
  {
    category: "Front-end",
    panel: ["HTML5", "JavaScript", "TypeScript"],
  },
  {
    category: "Styling",
    panel: ["CSS", "TailwindCSS", "styled-components", "Emotion"],
  },
  {
    category: "Dev Tools",
    panel: ["npm", "Git", "ESLint", "Storybook", "Jest"],
  },
  {
    category: "Back-end",
    panel: ["Node.js", "MongoDB"],
  },
  {
    category: "Library / Framework",
    panel: ["React", "React Native", "Next.js", "react-hook-form", "GraphQL"],
  },
];

export default function Skills() {
  return (
    <div className="mt-10">
      <Title content="Skills" />
      <div className="flex flex-col">
        {mySkills.map(({ category, panel }, index) => (
          <div key={index} className="mt-10 flex-1 flex-col text-left">
            <p className="font-bold dark:text-orange-400">{category}</p>
            <ul className="pl-4 pt-4">
              {panel.map((item) => (
                <li key={item} className="list-disc dark:text-stone-50">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
