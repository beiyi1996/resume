import React from "react";
import Winni from "../images/winni2024.png";

const info = [
  {
    href: "https://www.linkedin.com/in/winni-huang-099a781b6/",
    content: "LinkedIn",
  },
  {
    href: "https://github.com/beiyi1996",
    content: "github",
  },
  {
    href: "mail: usj0326@gmail.com",
    content: "usj0326@gmail.com",
  },
];

const Link: React.FC<{ href: string; content: string }> = ({
  href,
  content,
}) => (
  <a href={href} className="btn-custom">
    {content}
  </a>
);

export default function Banner() {
  return (
    <section className="p-3 border-custom banner-section sm:flex-row">
      <div className="flex justify-center sm:flex-[0_0_20%] lg:flex-[0_0_15%]">
        <img
          className="h-1/3 w-1/3 rounded-full sm:h-full sm:w-full"
          src={Winni}
          alt="Winni Huang"
        />
      </div>
      <div className="flex flex-1 flex-col items-start justify-start p-5 pb-2">
        <h1 className="text-xl font-bold sm:text-2xl dark:text-orange-400">
          黃汶鈞 Winni Huang :)
        </h1>
        <h3 className="mt-1 text-base sm:text-lg dark:text-stone-300">
          前端工程師
        </h3>
        <div className="flex flex-col sm:flex-row">
          {info.map(({ href, content }, index, array) => (
            <div
              key={href}
              className={`mt-2 ${index < array.length - 1 ? "sm:mr-2" : ""}`}
            >
              <Link href={href} content={content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
