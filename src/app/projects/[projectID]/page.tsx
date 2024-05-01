import ProjectDetails from "@/components/Pages/Project";
import { projects } from "@/lib/data/projects/projectsData";
import React from "react";

interface Props {
  params: {
    projectID: number;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectID: String(project.id),
  }));
}

export async function generateMetadata({ params }: Props) {
  const id = params.projectID;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return {
      title: "project not found",
      description: "no description beacuse project was not found",
    };
  }

  return {
    title: {
      default: `project ${project.title}`,
      template: `%s | project ${project.title}`,
    },
    description: project.description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
  };
}

const ProjectPage = ({ params }: Props) => {
  if (!projects[params.projectID - 5]) {
    return <></>;
  }
  return <ProjectDetails project={projects[params.projectID - 5]} />;
};

export default ProjectPage;
