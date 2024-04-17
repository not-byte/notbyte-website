import { Collaborator, ProjectData, Status } from "@/lib/model/project";
import { mockProfileData } from "../profile/smallProfileData";

export const projects: ProjectData[] = [
  {
    id: 5,
    title: "Ocean at Dusk",
    description:
      "A serene ocean scene as the sun sets, casting hues of orange and pink across the water.",
    imageUrl: "/knury.jpg",
    bannerUrl: "/knury.jpg",
    tags: ["Photography", "Internal"],
    creationDate: "2023-04-15",
    location: "Malibu, California",
    status: Status.Completed,
    technologies: ["DSLR Camera", "Adobe Photoshop"],
    milestones: [
      { name: "Project Kickoff", date: "2023-03-01" },
      { name: "First Shoot", date: "2023-03-10" },
      { name: "Editing Phase", date: "2023-03-20" },
      { name: "Final Review", date: "2023-04-10" },
    ],
    impact:
      "Featured in 5 international nature magazines; reached an audience of over 1 million viewers.",
    challenges:
      "Overcoming unpredictable weather conditions to capture the perfect shot.",
    futurePlans:
      "A follow-up series focusing on coastal wildlife is in the conceptualization stage.",
    externalLinks: ["https://www.naturemagexample.com/ocean-at-dusk-feature"],
    collaborators: mockProfileData.map((item) => {
      (item as Collaborator).roles = [
        {
          name: "admin",
          color: "purple",
        },
        {
          name: "yoo",
          color: "blue",
        },
      ];
      return item as Collaborator;
    }),
    projectManager: "Jane Smith",
    gallery: ["/knury.jpg", "/knury.jpg", "/knury.jpg"],
    client: "Nature Magazine",
    version: "1.0",
  },
  {
    id: 6,
    title: "Ocean at Dusk",
    description:
      "A serene ocean scene as the sun sets, casting hues of orange and pink across the water.",
    imageUrl: "/knury.jpg",
    bannerUrl: "/knury.jpg",
    tags: ["Photography", "Internal"],
    creationDate: "2023-04-15",
    location: "Malibu, California",
    status: Status.Completed,
    technologies: ["DSLR Camera", "Adobe Photoshop"],
    milestones: [
      { name: "Project Kickoff", date: "2023-03-01" },
      { name: "First Shoot", date: "2023-03-10" },
      { name: "Editing Phase", date: "2023-03-20" },
      { name: "Final Review", date: "2023-04-10" },
    ],
    impact:
      "Featured in 5 international nature magazines; reached an audience of over 1 million viewers.",
    challenges:
      "Overcoming unpredictable weather conditions to capture the perfect shot.",
    futurePlans:
      "A follow-up series focusing on coastal wildlife is in the conceptualization stage.",
    externalLinks: ["https://www.naturemagexample.com/ocean-at-dusk-feature"],
    collaborators: mockProfileData.map((item) => {
      (item as Collaborator).roles = [
        {
          name: "admin",
          color: "purple",
        },
        {
          name: "yoo",
          color: "blue",
        },
      ];
      return item as Collaborator;
    }),
    projectManager: "Jane Smith",
    gallery: ["/knury1.jpg", "/knury2.jpg", "/knury3.jpg"],
    client: "Nature Magazine",
    version: "1.0",
  },
  {
    id: 7,
    title: "Ocean at Dusk",
    description:
      "A serene ocean scene as the sun sets, casting hues of orange and pink across the water.",
    imageUrl: "/knury.jpg",
    bannerUrl: "/knury.jpg",
    tags: ["Photography", "Internal"],
    creationDate: "2023-04-15",
    location: "Malibu, California",
    status: Status.Completed,
    technologies: ["DSLR Camera", "Adobe Photoshop"],
    milestones: [
      { name: "Project Kickoff", date: "2023-03-01" },
      { name: "First Shoot", date: "2023-03-10" },
      { name: "Editing Phase", date: "2023-03-20" },
      { name: "Final Review", date: "2023-04-10" },
    ],
    impact:
      "Featured in 5 international nature magazines; reached an audience of over 1 million viewers.",
    challenges:
      "Overcoming unpredictable weather conditions to capture the perfect shot.",
    futurePlans:
      "A follow-up series focusing on coastal wildlife is in the conceptualization stage.",
    externalLinks: ["https://www.naturemagexample.com/ocean-at-dusk-feature"],
    collaborators: mockProfileData.map((item) => {
      (item as Collaborator).roles = [
        {
          name: "admin",
          color: "purple",
        },
        {
          name: "yoo",
          color: "blue",
        },
      ];
      return item as Collaborator;
    }),
    projectManager: "Jane Smith",
    gallery: ["/knury1.jpg", "/knury2.jpg", "/knury3.jpg"],
    client: "Nature Magazine",
    version: "1.0",
  },
  {
    id: 8,
    title: "Ocean at Dusk",
    description:
      "A serene ocean scene as the sun sets, casting hues of orange and pink across the water.",
    imageUrl: "/knury.jpg",
    bannerUrl: "/knury.jpg",
    tags: ["Photography", "Internal"],
    creationDate: "2023-04-15",
    location: "Malibu, California",
    status: Status.Completed,
    technologies: ["DSLR Camera", "Adobe Photoshop"],
    milestones: [
      { name: "Project Kickoff", date: "2023-03-01" },
      { name: "First Shoot", date: "2023-03-10" },
      { name: "Editing Phase", date: "2023-03-20" },
      { name: "Final Review", date: "2023-04-10" },
    ],
    impact:
      "Featured in 5 international nature magazines; reached an audience of over 1 million viewers.",
    challenges:
      "Overcoming unpredictable weather conditions to capture the perfect shot.",
    futurePlans:
      "A follow-up series focusing on coastal wildlife is in the conceptualization stage.",
    externalLinks: ["https://www.naturemagexample.com/ocean-at-dusk-feature"],
    collaborators: mockProfileData.map((item) => {
      (item as Collaborator).roles = [
        {
          name: "admin",
          color: "blue",
        },
        {
          name: "yoo",
          color: "purple",
        },
      ];
      return item as Collaborator;
    }),
    projectManager: "Jane Smith",
    gallery: ["/knury1.jpg", "/knury2.jpg", "/knury3.jpg"],
    client: "Nature Magazine",
    version: "1.0",
  },
];
