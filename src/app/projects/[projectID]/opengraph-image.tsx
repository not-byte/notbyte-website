//opengraph image creation for dynamic metadata
import { projects } from "@/lib/data/projects/projectsData";
import React from "react";
import { ImageResponse } from "next/og";
import { headers } from "next/headers";

interface PageProps {
  params: {
    projectID: string;
  };
}

const size = {
  width: 1200,
  height: 630,
};

export default function og({ params }: PageProps) {
  const id = params.projectID;
  const project = projects.find((item) => item.id == id);

  const imagePath = project?.bannerUrl ?? "/logo-black.png";

  const host = headers().get("host")!;
  const protocol = host.startsWith("localhost") ? "http" : "https";

  // url has to be absolute
  const imageUrl = `${protocol}://${host}${imagePath}`;

  if (!project) {
    return new ImageResponse(
      (
        <div style={{
          backgroundImage: `linear-gradient(30deg, rgba(240,132,97,1.00) 0%, rgba(129,81,156,1.00) 40%, rgba(234,86,87,1.00) 69%, rgba(240,132,97,1.00) 100%)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}>
          <img src={imageUrl} alt={imageUrl} width={300} height={300}/>
        </div>
      ),
      size
    );
  }
  return new ImageResponse(
    (
      // next.js <Iamge /> component does not work in og image generation
      <div style={{
        backgroundImage: `linear-gradient(30deg, rgba(240,132,97,1.00) 0%, rgba(129,81,156,1.00) 40%, rgba(234,86,87,1.00) 69%, rgba(240,132,97,1.00) 100%)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}>
        {/* src ural has to be absolute */}
        <img src={imageUrl} alt={project?.title} />
      </div>
    ),
    size
  );
}
