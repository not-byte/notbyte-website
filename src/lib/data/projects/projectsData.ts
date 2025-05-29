import { ProjectData, Status } from "@/lib/model/project";
import { smallProfiles } from "../profile/smallProfileData";
import { Collaborator } from "@/lib/model/profile";
import { tournamentCollaborators } from "./tournamentCollaborators";
import { websiteCollaborators } from "./webisteCollaborators";

export const projects: ProjectData[] = [
  {
    id: "tournament",
    title: "knury.title",
    description: "knury.description",
    imageUrl: "/knury.jpg",
    bannerUrl: "/knury.jpg",
    tags: ["Photography", "Internal"],
    creationDate: "2023-04-15",
    location: "Malibu, California",
    status: Status.OnGoing,
    milestones: [
      {
        name: "knury.milestones.0.name",
        date: "2024-03-01",
        description: "knury.milestones.0.description",
        tags: ["common.tags.initialization"],
        status: Status.Completed,
      },
      {
        name: "knury.milestones.1.name",
        date: "2024-03-10",
        description: "knury.milestones.1.description",
        tags: [
          "common.tags.nuxt",
          "common.tags.golang",
          "common.tags.development",
        ],
        status: Status.Completed,
      },
      {
        name: "knury.milestones.2.name",
        date: "2024-05-25",
        description: "knury.milestones.2.description",
        tags: ["common.tags.delivery"],
        status: Status.Completed,
      },
      {
        name: "knury.milestones.3.name",
        date: "2024-06-01",
        description: "knury.milestones.3.description",
        tags: ["common.tags.future", "common.tags.saas"],
        status: Status.OnGoing,
      },
    ],
    impact:
      "Featured in local magazines and newspapers, reaching large audiences",
    challenges:
      "Overcoming unpredictable problems with the API and ensuring the application's scalability and performance under heavy loads.",
    futurePlans: "Going saas",
    externalLinks: ["https://www.naturemagexample.com/ocean-at-dusk-feature"],
    collaborators: tournamentCollaborators,
    projectManager: "Jane Smith",
    gallery: [
      "/knury.jpg",
      "/dziekujemy_tournament.png",
      "/knury_z_gory.jpg",
      "/knury_z_gory_2.jpg",
    ],
    version: "1.0",
  },
  {
    id: "post_manager",
    title: "post_manager.title",
    description: "post_manager.description",
    imageUrl: "/notbyte_dev.jpg",
    bannerUrl: "/notbyte_dev.jpg",
    tags: ["Developer Panel", "CMS", "Internal"],
    creationDate: "2024-04-10",
    status: Status.InDevelopment,
    milestones: [
      {
        name: "post_manager.milestones.0.name",
        date: "2024-04-10",
        description: "post_manager.milestones.0.description",
        tags: ["common.tags.initialization"],
        status: Status.Completed,
      },
      {
        name: "post_manager.milestones.1.name",
        date: "2024-04-11",
        description: "post_manager.milestones.1.description",
        tags: ["common.tags.development"],
        status: Status.InDevelopment,
      },
    ],
    challenges:
      "Utilizing the Facebook and Linkedin API's simultaneously in order to make posting on social media quick and universal.",
    futurePlans:
      "Expanding on already implemented functionalities in order to create a fully-fledged developer panel.",
    collaborators: [
      {
        ...smallProfiles.find((p) => p.id === "Adam_Kolt"),
        roles: [
          {
            name: "common.roles.project_manager",
            color: "blue",
          },
          {
            name: "common.roles.lead_developer",
            color: "red",
          },
        ],
      },
    ].map((i) => {
      i.description = "post_manager.collaborators.adam.description";
      return i as Collaborator;
    }),
    projectManager: "Adam Kołt",
    gallery: [],
    version: "0.1",
  },
  {
    id: "notByte_website",
    title: "not_byte_website.title",
    description: "not_byte_website.description",
    imageUrl: "/notByte_website.png",
    bannerUrl: "/notByte_website.png",
    tags: ["common.tags.photography", "common.tags.internal"],
    creationDate: "2023-04-15",
    location: "Malibu, California",
    status: Status.Completed,
    milestones: [
      {
        name: "not_byte_website.milestones.0.name",
        date: "2024-01-01",
        description: "not_byte_website.milestones.0.description",
        tags: ["common.tags.initialization"],
        status: Status.Completed,
      },
      {
        name: "not_byte_website.milestones.1.name",
        date: "2023-02-01",
        description: "not_byte_website.milestones.1.description",
        tags: [
          "common.tags.tailwind",
          "common.tags.next_js",
          "common.tags.development",
        ],
        status: Status.Completed,
      },
      {
        name: "not_byte_website.milestones.2.name",
        date: "2023-03-01",
        description: "not_byte_website.milestones.2.description",
        tags: ["common.tags.delivery"],
        status: Status.Completed,
      },
      {
        name: "not_byte_website.milestones.3.name",
        date: "2023-03-01",
        description: "not_byte_website.milestones.3.description",
        tags: ["common.tags.future"],
        status: Status.OnGoing,
      },
    ],
    challenges:
      "Overcoming challenges related to time constraints and balancing project development with other commitments. Ensuring the website's design and functionality meet the client's requirements and expectations.",
    futurePlans:
      "Creating more features and content to provide visitors with the latest information about notByte and its projects. Continuously updating the website to ensure a seamless user experience. Optimizing the website for search engines to make it easy for users to find the information they need.",
    externalLinks: ["https://www.naturemagexample.com/ocean-at-dusk-feature"],
    collaborators: websiteCollaborators,
    projectManager: "Jane Smith",
    gallery: [],
    version: "1.0",
  },
];
