import React from "react";
import { Milestone } from "@/lib/model/project";
import "react-vertical-timeline-component/style.min.css";
import { Timeline } from "./Timeline";

type Props = {
  milestones: Milestone[];
};
export const Milestones = ({ milestones }: Props) => {
  return (
    <div className="mt-[30vh]">
      <h2 className="text-7xl mb-20 text-black dark:text-white text-center font-semibold">
        Milestones
      </h2>
      <Timeline milestones={milestones} />
    </div>
  );
};
