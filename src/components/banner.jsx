import React from "react";
import Winni from "../images/remove_background_winni.png";

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

const Link = ({ href, content }) => (
  <a href={href} className="text-xs btn-custom">
    {content}
  </a>
);

export default function Banner() {
  return (
    <section className="banner-section sm:flex-row">
      <div className="sm:border-r-none flex justify-center border-custom sm:flex-[20%] sm:flex-grow-0">
        <img className="w-4/6 sm:w-full" src={Winni} alt="Winni Huang" />
      </div>
      <div className="border-t-none flex flex-1 flex-col items-start justify-start p-5 border-custom sm:border-t">
        <h1 className="text-2xl font-bold dark:text-orange-400">
          黃汶鈞 Winni Huang
        </h1>
        <h3 className="mt-2 text-lg dark:text-stone-300">前端工程師</h3>
        <div className="mt-3 flex flex-col sm:flex-row">
          {info.map(({ href, content }, index, array) => (
            <div
              key={href}
              className={`mt-3 ${index < array.length - 1 ? "sm:mr-2" : ""}`}
            >
              <Link href={href} content={content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
