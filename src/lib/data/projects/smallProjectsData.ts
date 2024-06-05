//data present on the main page

import { SmallProject, Status } from "@/lib/model/project";

export const smallProjects: SmallProject[] = [
  {
    id: "tournament",
    title: "Tournament",
    description:
      "Tournament is app for managing basketball tournaments, monitoring progress, and viewing results. It has a user-friendly, modern interface with plans to expand to a SaaS model for more features and scalability.",
    imageUrl: "/knury.jpg",
    tags: [
      "Basketball",
      "Sports",
      "Tournament",
      "Management",
      "Nuxt",
      "Golang",
    ],
    status: Status.OnGoing,
  },
  {
    id: "post_manager",
    title: "Post Manager",
    description:
      "An internal tool for managing social media posts across all connected platforms. Users can create and publish posts using the built-in creator, selecting the platforms they prefer.",
    imageUrl: "/notbyte_dev.jpg",
    tags: ["Development", "Internal", "CMS"],
    status: Status.Completed,
  },
  {
    id: "notByte_website",
    title: "notByte website",
    description:
      "This modern, responsive website showcases notByte's projects and team, built with Next.js and Tailwind CSS for optimal performance and user experience. Continuously updated and SEO optimized.",
    imageUrl: "/notByte_website.png",
    tags: ["Website", "Next.js", "Tailwind CSS"],
    status: Status.Completed,
  },
];
