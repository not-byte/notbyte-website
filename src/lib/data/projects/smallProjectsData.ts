//data present on the main page

import { SmallProject, Status } from "@/lib/model/project";

export const smallProjects: SmallProject[] = [
  {
    id: "tournament",
    title: "Tournament",
    description:
      "A serene ocean scene as the sun sets, casting hues of orange and pink across the water.",
    imageUrl: "/knury.jpg",
    tags: ["Photography", "Internal"],
    status: Status.Completed,
  },
  {
    id: "post_manager",
    title: "Post Manager",
    description:
      "Capturing the breathtaking beauty of sand dunes through artistic lensmanship.",
    imageUrl: "/knury.jpg",
    tags: ["Photography", "Art Direction"],
    status: Status.Completed,
  },
  {
    id: "notByte_website",
    title: "notByte website",
    description:
      "Capturing the breathtaking beauty of sand dunes through artistic lensmanship.",
    imageUrl: "/knury.jpg",
    tags: ["Photography", "Art Direction"],
    status: Status.Completed,
  },
  {
    id: "Ocean_at_Dusk",
    title: "Ocean at Dusk",
    description:
      "Capturing the breathtaking beauty of sand dunes through artistic lensmanship.",
    imageUrl: "/knury.jpg",
    tags: ["Photography", "Art Direction"],
    status: Status.Completed,
  },
];
