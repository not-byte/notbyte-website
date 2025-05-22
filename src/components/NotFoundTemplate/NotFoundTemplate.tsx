import React from "react";
import {Chakra_Petch} from "next/font/google";
import { Link } from "@/i18n/navigation";

const chakra = Chakra_Petch({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  message: string;
  title: string;
}

export default function NotFoundTemplate({message, title}: Props) {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center p-20">
      <h1 className={`${chakra.className} flex flex-col items-center`}>
        <span className="text-gradient-colors text-[20vh] leading-[0.8]">404.</span>
        <span className={"text-night dark:text-white text-[6vh] text-center"}>{title}</span>
      </h1>

      <p className="text-2xl my-7">
        {message}
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-colors text-white rounded-md shadow hover:bg-darkModeColors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150"
      >
        Return to Home
      </Link>
    </div>
  );
};
