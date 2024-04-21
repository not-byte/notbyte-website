import React from "react";
import { ProjectData } from "@/lib/model/project";
import { Gallery } from "./components/Gallery";
import { FeedbackSec } from "./components/Feedback";
import { Collabarators } from "./components/Collaborators";
import { Milestones } from "./components/Milestones";
import { Banner } from "./components/Banner";

// Assuming the Status enum and other interfaces are in a separate file, import them
// import { Status, ProjectData, Milestone, Collaborator } from './path-to-your-interfaces-file';

interface ProjectDetailsProps {
  project: ProjectData;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className="w-[70vw] mx-auto px-6 py-8 sm:px-8 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{project.title}</h1>
      <Banner description={project.description} bannerUrl={project.bannerUrl} />
      <p className="text-xl text-black dark:text-white mb-6 mt-[5vh]">
        {project.description}
      </p>
      <div className="mb-6">
        <strong className="font-semibold text-black dark:text-white">
          Status:
        </strong>{" "}
        <span className="text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">
          {project.status}
        </span>
      </div>
      <div className="mb-6">
        <strong className="font-semibold text-black dark:text-white">
          Technologies:
        </strong>
        <span className="ml-2 inline-flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-800 text-sm font-semibold px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </span>
      </div>
      <Milestones milestones={project.milestones} />
      <Collabarators collaborators={project.collaborators} />
      <Gallery gallery={project.gallery} />
      {project.feedback && <FeedbackSec feedback={project.feedback} />}
    </div>
  );
};

export default ProjectDetails;
