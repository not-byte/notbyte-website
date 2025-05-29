import React, { cache } from "react";
import { Education } from "@/lib/model/profile";
import { MdSchool } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { getFormatter, getTranslations } from "next-intl/server";

const getT = cache(async () => {
  return await getTranslations("Profiles");
});

export const EducationSection = async ({
  educations,
}: {
  educations: Education[];
}) => {
  const t = await getT();

  return (
    <div className="container mx-auto px-4 lg:px-8 overflow-hidden">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl wqhd:text-7xl 4k:text-7xl  font-bold text-center text-black dark:text-white mb-10">
        {t("common.education")}
      </h1>
      <div className="flex flex-col md:grid-cols-2 gap-8 items-center">
        {educations.map((item, index) => (
          <EducationItem key={index} education={item} />
        ))}
      </div>
    </div>
  );
};

const EducationItem = async ({ education }: { education: Education }) => {
  const t = await getT();

  const format = await getFormatter();

  const formatDate = (date: Date | null): string =>
    date
      ? format.dateTime(date, {
          year: "numeric",
          month: "short",
        })
      : t("common.present");

  return (
    <div className="w-[80vw] my-4 p-4 md:p-6 lg:p-8 2xl:p-10 wqhd:p-12 4k:p-16 border-l-4 border-grey-dark dark:border-white bg-gradient-to-r  rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out xl:w-[60vw]">
      <div className="flex items-center mb-4">
        <MdSchool className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mr-3 text-gray-800 dark:text-gray-200" />
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl wqhd:text-5xl 4k:text-6xl font-semibold text-gray-800 dark:text-gray-200">
          {t(education.degree)}
        </h3>
      </div>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl wqhd:text-3xl 4k:text-4xl text-gray-600 dark:text-gray-400">
        {t(education.institution)}
      </p>
      <div className="flex items-center mt-2">
        <FaRegCalendarAlt className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-400 mr-2" />
        <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl wqhd:text-3xl 4k:text-4xl text-gray-600 dark:text-gray-400">
          {formatDate(education.startDate)} - {formatDate(education.endDate)}
        </p>
      </div>
      {education.description && (
        <p className="mt-4 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl wqhd:text-3xl 4k:text-4xl text-black dark:text-white">
          {t(education.description)}
        </p>
      )}
    </div>
  );
};
