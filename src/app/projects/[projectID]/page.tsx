import ProjectDetails from "@/components/Pages/Project";
import { projects } from "@/lib/data/projects/projectsData";
import React from "react";

//generowanie metadaty itd itp
interface PageProps {
  params: {
    projectID: number;
  };
}

const ProjectPage = ({ params }: PageProps) => {
  return <ProjectDetails project={projects[params.projectID - 5]} />;
};

export default ProjectPage;
