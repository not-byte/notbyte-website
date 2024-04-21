import React from "react";
import { Experience } from "@/lib/model/profile";
import { AnimatedExperience } from "./AnimatedExperience";
import { ExperienceWrapper } from "./ExperienceWrapper";

interface ExperienceProps {
  experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceProps> = ({
  experience,
}) => {
  return (
    <section className="w-full py-8 overflow-hidden mt-[25vh]">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl wqhd:text-7xl 4k:text-7xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Experience
        </h1>
        <AnimatedExperience
          ExperienceWrapper={<ExperienceWrapper experience={experience} />}
        />
      </div>
    </section>
  );
};
