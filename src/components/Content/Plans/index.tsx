import { calculateProjectWidth } from "@/lib/utils/calculateLengthOfProject";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: any;
  date: string;
  alignment?: "top" | "bottom";
  width: number;
  position: number;
};

const TimelineNode = ({
  title,
  description,
  date,
  alignment,
  width,
  position,
}: Props) => {
  const nodeStyle = {
    width: `${Math.ceil(width / 10) * 10}vw`,
    marginLeft: `${Math.ceil(position / 10) * 10}vw`,
  };

  return (
    <div
      style={nodeStyle}
      className={`flex  ${
        alignment === "bottom" ? "flex-col" : "flex-col-reverse"
      } items-center`}
    >
      <div
        className={`flex justify-center items-center ${
          alignment === "bottom" ? "mb-4" : "mt-4"
        }`}
      >
        <span className="text-gray-500 text-xs">{date}</span>
      </div>
      <div className="flex flex-col items-center relative ">
        <div className="bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-800 dark:to-indigo-800 shadow-xl rounded-lg px-6 py-4 transform transition duration-500 hover:scale-105  w-[12vw]">
          <h4 className="font-bold text-xl text-indigo-900 dark:text-indigo-100">
            {title}
          </h4>
          <p className="text-gray-500 dark:text-gray-400 text-md mt-2">
            {description}
          </p>
        </div>
      </div>
      <div className={alignment === "top" ? "flex justify-center " : ""}>
        {alignment === "top" ? (
          <div className="w-0.5 h-[5vh]  bg-darkModeColors ">
            <div
              className={`w-[${nodeStyle.width}]  h-0.5 bg-darkModeColors absolute top-0`}
            ></div>
          </div>
        ) : (
          <>
            <div className="w-0.5 h-[5vh] bg-darkModeColors relative">
              <div
                className={`w-[${nodeStyle.width}] h-0.5 bg-darkModeColors absolute bottom-0`}
              ></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

type Plan = {
  title: string;
  description: string;
  icon: any;
  date: string;
  alignment: "top" | "bottom";
  startDate: Date;
  endDate: Date;
  positionInTimeline?: number;
  widthOfLineInTimeline?: number;
};

const FuturePlans = () => {
  const plans: Plan[] = [
    {
      title: "Tournament Project",
      description: "Manage competitive events",
      icon: "<i className='fa fa-trophy' />",
      date: "2024 Q1",
      alignment: "bottom",
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-02-05"),
    },
    {
      title: "Website Redesign",
      description: "Enhance online presence",
      icon: '<i className="fa fa-globe" />',
      date: "2024 Q2",
      alignment: "top",
      startDate: new Date("2024-03-01"),
      endDate: new Date("2024-04-01"),
    },
    {
      title: "Software Development",
      description: "In-house software solutions",
      icon: '<i className="fa fa-cogs" />',
      date: "2024 Q3",
      alignment: "bottom",
      startDate: new Date("2024-05-01"),
      endDate: new Date("2024-07-01"),
    },
    {
      title: "Software Development",
      description: "In-house software solutions",
      icon: '<i className="fa fa-cogs" />',
      date: "2024 Q4",
      alignment: "top",
      startDate: new Date("2024-08-01"),
      endDate: new Date("2024-10-01"),
    },
  ];

  let accumulatedWidth = 0;

  plans.forEach((plan, index) => {
    const width = calculateProjectWidth(plan.startDate, plan.endDate, 365);
    plan.widthOfLineInTimeline = Number(width);

    if (index === 0) {
      plan.positionInTimeline = 0;
    } else {
      plan.positionInTimeline = accumulatedWidth;
    }

    accumulatedWidth += plan.widthOfLineInTimeline;
  });

  //staticaly updated, did not want to make it too complicated for some reason...
  plans[2].positionInTimeline =
    plans[2].positionInTimeline! - plans[0].widthOfLineInTimeline!;

  plans[3].positionInTimeline =
    plans[3].positionInTimeline! - plans[2].widthOfLineInTimeline!;

  return (
    <div className=" text-white py-12 w-full mt-[20vh]">
      <h2 className="text-6xl font-semibold text-center mb-24 ">
        Our Future Plans
      </h2>
      <div className="flex justify-center">
        <div className="relative w-[80vw] ">
          <div className="flex mx-8 w-full">
            {plans
              .filter((plan) => plan.alignment === "bottom")
              .map((p, key) => {
                return (
                  <TimelineNode
                    key={key}
                    title={p.title}
                    description={p.description}
                    icon={p.icon}
                    date={p.date}
                    alignment={p.alignment}
                    width={p.widthOfLineInTimeline!}
                    position={p.positionInTimeline!}
                  />
                );
              })}
          </div>
          <div className="flex">
            <div className="w-10 h-10 rounded-full bg-green-50 z-10"></div>
            <div className=" w-full h-1 bg-colors  mt-[20px]"></div>
            <div className="w-10 h-10 rounded-full bg-green-50 z-10"></div>
          </div>
          <div className="flex w-full mx-8 relative">
            {plans
              .filter((plan) => plan.alignment === "top")
              .map((p, key) => {
                return (
                  <TimelineNode
                    key={key}
                    title={p.title}
                    description={p.description}
                    icon={p.icon}
                    date={p.date}
                    alignment={p.alignment}
                    width={p.widthOfLineInTimeline!}
                    position={p.positionInTimeline!}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePlans;
