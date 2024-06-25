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
  {
    href: "tel:0955822647",
    content: "0955822647",
  },
];

const Link = ({ href, content }) => (
  <a href={href} className="text-xs hover:bg-gray-600 hover:text-gray-50">
    {content}
  </a>
);

export default function Banner() {
  return (
    <section className="flex flex-col sm:flex-row">
      <div className="bg-slate-600 text-left sm:flex-[20%] sm:flex-grow-0">
        <img className="w-full" src={Winni} alt="Winni Huang" />
      </div>
      <div className="flex-1 flex-col items-start justify-start bg-stone-200 p-5">
        <h1 className="text-2xl font-bold">黃汶鈞 Winni Huang</h1>
        <h3 className="mt-2 text-lg">前端工程師</h3>
        <div className="mt-2 flex flex-col sm:flex-row">
          {info.map(({ href, content }, index, array) => (
            <div
              key={href}
              className={`${index < array.length - 1 ? "mr-3 pr-3 sm:border-r sm:border-gray-500" : ""}`}
            >
              <Link href={href} content={content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
