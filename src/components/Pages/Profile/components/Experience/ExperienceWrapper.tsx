import React from "react";
import { ExperienceItem } from "./ExperienceItem/AnimationWrapper";
import { ExperienceItemServer } from "./ExperienceItem/ExperienceItemServer";
import { Experience } from "@/lib/model/profile";

export const ExperienceWrapper = ({
  experience,
}: {
  experience: Experience[];
}) => {
  return (
    <>
      {experience.map((exp, index) => (
        <ExperienceItem
          key={index}
          index={index}
          ExperienceItemServer={<ExperienceItemServer experience={exp} />}
        />
      ))}
    </>
  );
};
