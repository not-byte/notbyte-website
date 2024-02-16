import { MetadataRoute } from "next";

//for now static later when we have dynamic content dynamic
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://notbyte.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
