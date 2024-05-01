//opengraph image creation for dynamic metadata
import { projects } from "@/lib/data/projects/projectsData";
import React from "react";
import { ImageResponse } from "next/og";
import Image from "next/image";

interface PageProps {
  params: {
    projectID: string;
  };
}

export const size = {
  width: 500,
  height: 500,
};

export default function og({ params }: PageProps) {
  const id = params.projectID;
  const project = projects.find((item) => item.id == id);

  if (!project) {
    return new ImageResponse(
      (
        <Image
          src={"/logo-black.png"}
          alt={"profile does not exist"}
          width={500}
          height={500}
        />
      ),
      size
    );
  }
  return new ImageResponse(
    (
      <Image
        src={project.bannerUrl}
        alt={project.title}
        width={500}
        height={500}
      />
    ),
    { width: 1024, height: 500 }
  );
}
