import React from "react";
import { Milestone } from "@/lib/model/project";
import "react-vertical-timeline-component/style.min.css";
import { Timeline } from "./Timeline";
import { useTranslations } from "next-intl";

type Props = {
  milestones: Milestone[];
};
export const Milestones = ({ milestones }: Props) => {
  const t = useTranslations("Projects");

  return (
    <div className="mt-[30vh] sm:w-[100%] flex justify-center flex-col items-center ">
      <h2 className="text-5xl wqhd:text-7xl mb-20 text-black dark:text-white text-center font-semibold">
        {t("common.milestones")}
      </h2>
      <Timeline milestones={milestones} />
    </div>
  );
};
