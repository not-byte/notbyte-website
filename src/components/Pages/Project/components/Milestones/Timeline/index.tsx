"use client";

import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaLink } from "react-icons/fa";
import { Milestone } from "@/lib/model/project";
import { useTheme } from "next-themes";

type Props = {
  milestones: Milestone[];
};
export const Timeline = ({ milestones }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  });
  if (!resolvedTheme || !mounted) return <></>;
  return (
    <VerticalTimeline
      animate={false}
      lineColor={resolvedTheme === "dark" ? "white" : "black"}
    >
      {milestones.map((milestone, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            border: "1px solid",
            borderColor:
              resolvedTheme === "dark" ? "rgba(38, 38, 38, 1)" : "black",
          }}
          contentArrowStyle={{ borderRight: "7px solid #2196F3" }}
          date={milestone.date}
          iconStyle={{ background: "#2196F3", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="text-lg font-semibold text-black dark:text-white">
            {milestone.name}
          </h3>
          <p className="text-black dark:text-white font-light">
            Status: {milestone.status}
          </p>
          <p className="text-black dark:text-white mt-2">
            {milestone.description}
          </p>
          <div className="flex flex-wrap mt-2">
            {milestone.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-md font-medium bg-darkModeColors text-white px-3 py-1 rounded-full m-1"
              >
                {tag}
              </span>
            ))}
          </div>
          {milestone.relatedLinks && (
            <div className="mt-3">
              {milestone.relatedLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link}
                  className="text-blue-300 hover:text-blue-500 transition-colors duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink className="inline mr-1" /> Link
                </a>
              ))}
            </div>
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
