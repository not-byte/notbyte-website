import { calculateProjectWidth } from "@/lib/utils/calculateLengthOfProject";
import React from "react";
import { timelineData } from "./data";
import Image from "next/image";
import { shimmer, toBase64 } from "@/UI/shimmer";

interface TimelineItemData {
  date: string;
  title: string;
  subTitle: string; // Smaller title or subheading
  description: string;
  imageUrl: string;
}

interface TimelineItemProps {
  data: TimelineItemData;
  index: number;
}
const TimelineItem: React.FC<TimelineItemProps> = ({ data, index }) => (
  <div className="flex flex-col  sm:w-[100%] wqhd:w-[80%] items-center ">
    <div
      className={
        index % 2 === 0
          ? "md:flex sm:w-[90%] md:w-[100%] xl:w-[80%]  md:justify-end lg:pr-10"
          : "md:flex sm:w-[90%]   md:w-[100%] xl:w-[80%]   md:justify-start lg:pl-10"
      }
    >
      <div
        className={
          "bg-white sm:w-[90%]  md:w-[45%] lg:w-[40%]  dark:bg-transparent border border-black dark:border-grey-darkest p-8 shadow-xl mb-8 md:mb-0 transform transition-transform duration-500 " +
          (index % 2 === 0
            ? "sm:hover:scale-95 lg:hover:translate-x-[2rem]"
            : "sm:hover:scale-95 lg:hover:translate-x-[-2rem]")
        }
      >
        <div className="relative mb-20 max-h-48 w-full">
          <Image
            src={data.imageUrl}
            alt={data.title}
            width={50}
            height={50}
            quality={50}
            layout="responsive"
            objectFit="cover"
            className="grayscale"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(20, 20)
            )}`}
            loading="lazy"
          />
        </div>
        <h2 className="text-2xl font-bold text-gradient-colors">
          {data.title}
        </h2>
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {data.subTitle}
        </h3>
        <p className="text-gray-600 dark:text-gray-200 mt-4">
          {data.description}
        </p>
        <p className="text-gray-400 dark:text-grey-dark text-sm mt-6">
          {data.date}
        </p>
      </div>
    </div>
  </div>
);

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = () => {
  return (
    <div className="relative container mx-auto px-4 py-8 overflow-hidden mt-[30vh] ">
      <h1 className="text-5xl wqhd:text-7xl pb-20 text-center dark:text-white text-black font-semibold">
        Future development plans
      </h1>
      <div className="absolute sm:opacity-0 md:opacity-100 md:left-[50%] transform -translate-x-[50%] w-[1px] bg-black dark:bg-grey-darkest h-full z-0"></div>

      <div className="space-y-8 flex flex-col items-center py-8 ">
        {timelineData.map((data, idx) => (
          <TimelineItem key={idx} data={data} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
