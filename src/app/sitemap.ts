import { MetadataRoute } from "next";
import { profiles } from "@/lib/data/profile/profileData";
//for now static later when we have dynamic content dynamic
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://notbyte.com";

  const profilesUrls = profiles.map((profile) => {
    return {
      url: `${baseUrl}/profiles/${profile.id}`,
      lastModified: new Date(),
    };
  });

  return [
    ...profilesUrls,
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
