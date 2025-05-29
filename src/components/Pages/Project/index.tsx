import React from "react";
import { ProjectData } from "@/lib/model/project";
import { Gallery } from "./components/Gallery";
import { Collabarators } from "./components/Collaborators";
import { Milestones } from "./components/Milestones";
import { Banner } from "./components/Banner";
import { useTranslations } from "next-intl";

interface ProjectDetailsProps {
  project: ProjectData;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const t = useTranslations("Projects");

  Object.keys(project.collaborators).forEach((key: any) => {
    const collaborator = project.collaborators[key];
    collaborator.description = t(collaborator.description);
  });

  return (
    <div className="sm:w-[90vw] md:w-[70vw] mx-auto px-6 py-8 sm:px-8 font-sans ">
      <Banner
        description={t(project.description)}
        bannerUrl={project.bannerUrl}
      />
      <h1 className="text-5xl wqhd:text-7xl font-semibold text-gray-800 dark:text-gray-200 mt-[5vh]">
        {t(project.title)}
      </h1>

      <p className="text-xl text-black dark:text-white mb-6 mt-[5vh]">
        {t(project.description)}
      </p>
      <div className="mb-6">
        <strong className="font-semibold text-black dark:text-white">
          Status:
        </strong>{" "}
        <span className="text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">
          {t("common.status." + project.status)}
        </span>
      </div>

      <Milestones milestones={project.milestones} />
      <Collabarators collaborators={project.collaborators} />
      {project.gallery.length > 0 && <Gallery gallery={project.gallery} />}
    </div>
  );
};

export default ProjectDetails;
