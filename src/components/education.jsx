import React from "react";
import { Title } from "./contents";

const schoolingRecords = [
  {
    name: "中華大學",
    period: "Jan 2018 - Aug 2018",
    major: "Build School跨域黑客軟體開發培訓課程",
  },
  {
    name: "中華大學",
    period: "Sep 2014 - Jun 2018",
    major: "餐旅管理學系",
  },
];

export default function Education() {
  return (
    <div className="border-t-none p-10 border-custom sm:m-0 sm:border-t">
      <Title content="Education" />
      {schoolingRecords.map(({ name, period, major }) => (
        <div className="pt-8 text-left" key={`${name}_${major}`}>
          <p className="dark:text-orange-400">{name}</p>
          <p className="mb-2 text-gray-400">{period}</p>
          <p>{major}</p>
        </div>
      ))}
    </div>
  );
}
