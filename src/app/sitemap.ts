import { MetadataRoute } from "next";
import { profiles } from "@/lib/data/profile/profileData";
import { projects } from "@/lib/data/projects/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://notbyte.com";

  const profilesUrls = profiles.map((profile) => {
    return {
      url: `${baseUrl}/profiles/${profile.id}`,
      lastModified: new Date(),
    };
  });

  const projectsUrls = projects.map((project) => {
    return {
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: new Date(),
    };
  });

  return [
    ...profilesUrls,
    ...projectsUrls,
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
