import React from "react";

//generowanie metadaty itd itp
interface PageProps {
  params: {
    projectID: number;
  };
}

const ProjectPage = ({ params }: PageProps) => {
  return <div className="mt-20 w-full">{params.projectID}</div>;
};

export default ProjectPage;
