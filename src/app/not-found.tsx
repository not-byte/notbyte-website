import React from "react";
import {Chakra_Petch} from "next/font/google";
import Link from "next/link";
import {headers} from "next/headers";

const chakra = Chakra_Petch({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default async function NotFound() {
  const headersList = headers();
  const referer = headersList.get("referer") || "awd";
  let customMessage = "The page you are looking for might have been removed or is temporarily unavailable.";

  if (referer.includes("/profiles")) {
    customMessage = "The profile you are looking for might have been removed or is temporarily unavailable.";
  } else if (referer.includes("/projects")) {
    customMessage = "The project you are looking for might have been removed or is temporarily unavailable.";
  }

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className={`${chakra.className} flex flex-col items-center`}>
        <span className="text-gradient-colors text-[20vh]">404.</span>
        <span className={"text-night dark:text-white text-7xl"}>Page not found</span>
      </h1>

      <p className="text-2xl my-7">
        {customMessage}
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
