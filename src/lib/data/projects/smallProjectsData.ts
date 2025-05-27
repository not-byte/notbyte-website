//data present on the main page

import { SmallProject, Status } from "@/lib/model/project";

export const smallProjects: SmallProject[] = [
  {
    id: "tournament",
    title: "knury.title",
    description: "knury.description",
    imageUrl: "/knury.jpg",
    tags: [
      "knury.tags.basketball",
      "knury.tags.sport",
      "knury.tags.tournament",
      "knury.tags.management",
      "knury.tags.nuxt",
      "knury.tags.golang",
    ],
    status: Status.OnGoing,
  },
  {
    id: "post_manager",
    title: "post_manager.title",
    description: "post_manager.description",
    imageUrl: "/notbyte_dev.jpg",
    tags: [
      "post_manager.tags.development",
      "post_manager.tags.internal",
      "post_manager.tags.cms",
    ],
    status: Status.Completed,
  },
  {
    id: "notByte_website",
    title: "not_byte_website.title",
    description: "not_byte_website.description",
    imageUrl: "/notByte_website.png",
    tags: [
      "not_byte_website.tags.website",
      "not_byte_website.tags.next_js",
      "not_byte_website.tags.tailwind",
    ],
    status: Status.Completed,
  },
];
