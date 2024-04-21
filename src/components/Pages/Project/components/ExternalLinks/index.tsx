import React from "react";

type Props = {
  externalLinks: string[];
};
export const ExternalLinks = ({ externalLinks }: Props) => {
  return (
    <div className="mt-[25vh] mx-auto max-w-4xl p-5 rounded-lg ">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-black dark:text-white mb-6">
        External Links
      </h2>
      <ul className="list-disc pl-10 space-y-2 text-lg">
        {externalLinks.map((link, index) => (
          <li
            key={index}
            className="hover:bg-blue-100 dark:hover:bg-blue-900 rounded-md"
          >
            <a
              href={link}
              target="_blank" // Open links in new tab
              rel="noopener noreferrer" // Security measure for external links
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 hover:underline"
            >
              Visit Site
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
