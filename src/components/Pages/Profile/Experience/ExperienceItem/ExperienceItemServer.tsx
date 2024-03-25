import { Experience } from "@/lib/model/profile";
import { format } from "date-fns";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItemServer: React.FC<ExperienceItemProps> = ({
  experience,
}) => {
  const formatDate = (date: Date | null): string =>
    date ? format(date, "MMM yyyy") : "Present";
  return (
    <div className="my-4 p-4 md:p-6 lg:p-8 2xl:p-10 wqhd:p-12 4k:p-16 border-l-4 border-grey-dark dark:border-white shadow-lg rounded-lg  hover:shadow-2xl">
      <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl wqhd:text-5xl 4k:text-6xl font-semibold text-gray-900 dark:text-gray-100">
        {experience.position} at{" "}
        <span className="text-gradient-colors">{experience.company}</span>
      </h3>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl wqhd:text-3xl 4k:text-4xl text-gray-500 dark:text-gray-400 pt-2 pb-2 flex items-center">
        <FaRegCalendarAlt className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-400 mr-2" />
        {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl wqhd:text-3xl 4k:text-4xl">
        {experience.description}
      </p>
    </div>
  );
};
