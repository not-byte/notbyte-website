//opengraph image creation for dynamic metadata
import { projects } from "@/lib/data/projects/projectsData";

import { headers } from "next/headers";
import { defaultOgImage, projectOgImage} from "@/UI/og";

interface PageProps {
  params: {
    projectID: string;
  };
}

export default function og({ params }: PageProps) {
  const id = params.projectID;
  const project = projects.find((item) => item.id == id);

  const imagePath = project?.bannerUrl ?? "/logo-black.png";

  const host = headers().get("host")!;
  const protocol = host.startsWith("localhost") ? "http" : "https";

  // url has to be absolute
  const imageUrl = `${protocol}://${host}${imagePath}`;

  const altString = project?.title ?? "Project Logo";

  if (!project) {
    return defaultOgImage();
  }

  return projectOgImage({imageUrl, altString});
}
