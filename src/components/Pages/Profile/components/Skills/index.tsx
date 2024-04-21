import { Award } from "@/lib/model/profile";
import React from "react";
import { AiFillStar } from "react-icons/ai";

interface ProfileSummaryProps {
  awards: Award[];
}

export const SkillsSection = ({ awards }: ProfileSummaryProps) => {
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl wqhd:text-8xl 4k:text-9xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-black dark:text-white">
        Achievements
      </h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full ">
        {awards.map((award, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-colors dark:bg-darkModeColors rounded-lg p-2 sm:p-3 md:p-4 lg:p-5 hover:scale-105 transition-transform ease-in-out duration-300 sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-[48%]   mx-auto"
          >
            <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
              <div className="shrink-0 p-2 bg-purple-300 dark:bg-purple-800 rounded-full">
                <AiFillStar className="text-xl text-white" />
              </div>
              <div className="ml-2 sm:ml-3 md:ml-4">
                <h4 className="text-lg sm:text-xl md:text-2xl text-white dark:text-gray-100 font-semibold">
                  {award.title}
                </h4>
                <p className="text-xs sm:text-sm text-purple-200 dark:text-gray-400">
                  {award.issuer} - {formatDate(award.date)}
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-lg md:text-xl text-purple-100 dark:text-gray-300 mt-1 sm:mt-2">
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
