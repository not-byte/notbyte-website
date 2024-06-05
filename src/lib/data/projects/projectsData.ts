import { ProjectData, Status } from "@/lib/model/project";
import { smallProfiles } from "../profile/smallProfileData";
import { Collaborator } from "@/lib/model/profile";

export const projects: ProjectData[] = [
  {
    id: "tournament",
    title: "Tournament",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices augue ut imperdiet aliquam. Mauris enim velit, sollicitudin id magna laoreet, accumsan interdum velit. Proin iaculis posuere luctus. Duis dignissim eros turpis, in gravida turpis condimentum nec. Cras fermentum libero quis arcu tempor semper. Nulla porttitor velit vel libero egestas ullamcorper. Integer faucibus in risus nec porta. Ut at placerat odio, at interdum mauris. Fusce ullamcorper ornare est sed placerat. Proin quis aliquam arcu. Cras in condimentum orci, id auctor dui. Phasellus dignissim laoreet tellus, et suscipit neque auctor non. Sed ut iaculis nisi. Nullam convallis sem vel nulla cursus, at venenatis nulla laoreet Vestibulum imperdiet ligula ut risus aliquam, in malesuada tortor mollis. Pellentesque ac arcu sed ex porttitor hendrerit. Pellentesque justo nisi, blandit vitae vestibulum sed, venenatis in nisl. Cras egestas justo eu interdum facilisis. Aenean maximus sodales enim ac suscipit. Nam facilisis lobortis arcu. Vivamus quis odio lacus. Maecenas tellus odio, bibendum sit amet cursus non, condimentum eget metus. Duis ac lectus ac urna mollis feugiat quis quis sapien. Fusce euismod, nunc eu porta elementum, eros mi placerat lectus, vitae tempor nibh nulla et lacus. Donec eget sollicitudin sem. In et libero aliquet, sodales tellus quis, faucibus dolor. Vestibulum euismod accumsan tellus eu euismod.",
    imageUrl: "/knury.jpg",
    bannerUrl: "/knury.jpg",
    tags: ["Photography", "Internal"],
    creationDate: "2023-04-15",
    location: "Malibu, California",
    status: Status.Completed,
    milestones: [
      {
        name: "Project Kickoff",
        date: "2023-03-01",
        description:
          "Maecenas tellus odio, bibendum sit amet cursus non, condimentum eget metus. Duis ac lectus ac urna mollis feugiat quis quis sapien. Fusce euismod, nunc eu porta elementum, eros mi placerat lectus, vitae tempor nibh nulla et lacus. Donec eget sollicitudin sem. In et libero aliquet, sodales tellus quis, faucibus dolor. Vestibulum euismod accumsan tellus eu euismod.",
        tags: ["siema", "siema", "sieam"],
        status: Status.Completed,
      },
      {
        name: "Project Kickoff",
        date: "2023-03-01",
        description:
          "Maecenas tellus odio, bibendum sit amet cursus non, condimentum eget metus. Duis ac lectus ac urna mollis feugiat quis quis sapien. Fusce euismod, nunc eu porta elementum, eros mi placerat lectus, vitae tempor nibh nulla et lacus. Donec eget sollicitudin sem. In et libero aliquet, sodales tellus quis, faucibus dolor. Vestibulum euismod accumsan tellus eu euismod.",
        tags: ["siema", "siema", "sieam"],
        status: Status.Completed,
      },
      {
        name: "Project Kickoff",
        date: "2023-03-01",
        description:
          "Maecenas tellus odio, bibendum sit amet cursus non, condimentum eget metus. Duis ac lectus ac urna mollis feugiat quis quis sapien. Fusce euismod, nunc eu porta elementum, eros mi placerat lectus, vitae tempor nibh nulla et lacus. Donec eget sollicitudin sem. In et libero aliquet, sodales tellus quis, faucibus dolor. Vestibulum euismod accumsan tellus eu euismod.",
        tags: ["siema", "siema", "sieam"],
        status: Status.Completed,
      },
      {
        name: "Project Kickoff",
        date: "2023-03-01",
        description:
          "Maecenas tellus odio, bibendum sit amet cursus non, condimentum eget metus. Duis ac lectus ac urna mollis feugiat quis quis sapien. Fusce euismod, nunc eu porta elementum, eros mi placerat lectus, vitae tempor nibh nulla et lacus. Donec eget sollicitudin sem. In et libero aliquet, sodales tellus quis, faucibus dolor. Vestibulum euismod accumsan tellus eu euismod.",
        tags: ["siema", "siema", "sieam"],
        status: Status.Completed,
      },
    ],
    impact:
      "Featured in 5 international nature magazines; reached an audience of over 1 million viewers.",
    challenges:
      "Overcoming unpredictable weather conditions to capture the perfect shot.",
    futurePlans:
      "A follow-up series focusing on coastal wildlife is in the conceptualization stage.",
    externalLinks: ["https://www.naturemagexample.com/ocean-at-dusk-feature"],
    collaborators: smallProfiles.map((item) => {
      (item as Collaborator).roles = [
        {
          name: "admin",
          color: "red",
        },
        {
          name: "yoo",
          color: "purple",
        },
      ];
      return item as Collaborator;
    }),
    projectManager: "Jane Smith",
    gallery: ["/knury.jpg", "/pawel.png", "/knury.jpg"],
    client: "Nature Magazine",
    version: "1.0",
  },
  {
    id: "post_manager",
    title: "Post Manager",
    description:
      "An internal tool which allows the user to manage social media posts across all connected platforms from the application. The user can create a post using the built-in creator and post it on the platforms of their choosing.",
    imageUrl: "/notbyte_dev.jpg",
    bannerUrl: "/notbyte_dev.jpg",
    tags: ["Developer Panel", "CMS", "Internal"],
    creationDate: "2024-04-10",
    status: Status.InDevelopment,
    milestones: [
      {
        name: "Project Kickoff",
        date: "2024-04-10",
        description:
          "After a thorough evaluation process to determine the most suitable technologies for the project, the development team selected a robust stack that would ensure optimal performance and scalability. With the technologies chosen and confirmed, the initial setup phase commenced, leading to the successful initialization of the application.",
        tags: ["Initialization"],
        status: Status.Completed,
      },
      {
        name: "Project Development",
        date: "2024-04-11",
        description:
          "The development period will last until a stable version of the post manager is released.",
        tags: ["Development"],
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
            name: "Project Manager",
            color: "green",
          },
          {
            name: "Lead Developer",
            color: "red",
          },
        ],
      },
    ].map((i) => {
      return i as Collaborator;
    }),
    projectManager: "Adam Kołt",
    gallery: [],
    version: "0.1",
  },
  {
    id: "notByte_website",
    title: "notByte website",
    description:
      "A serene ocean scene as the sun sets, casting hues of orange and pink across the water.",
    imageUrl: "/notByte_website.png",
    bannerUrl: "/notByte_website.png",
    tags: ["Photography", "Internal"],
    creationDate: "2023-04-15",
    location: "Malibu, California",
    status: Status.Completed,
    milestones: [
      {
        name: "Project Kickoff",
        date: "2023-03-01",
        description:
          "Maecenas tellus odio, bibendum sit amet cursus non, condimentum eget metus. Duis ac lectus ac urna mollis feugiat quis quis sapien. Fusce euismod, nunc eu porta elementum, eros mi placerat lectus, vitae tempor nibh nulla et lacus. Donec eget sollicitudin sem. In et libero aliquet, sodales tellus quis, faucibus dolor. Vestibulum euismod accumsan tellus eu euismod.",
        tags: ["siema", "siema", "sieam"],
        status: Status.Completed,
      },
      {
        name: "Project Kickoff",
        date: "2023-03-01",
        description:
          "Maecenas tellus odio, bibendum sit amet cursus non, condimentum eget metus. Duis ac lectus ac urna mollis feugiat quis quis sapien. Fusce euismod, nunc eu porta elementum, eros mi placerat lectus, vitae tempor nibh nulla et lacus. Donec eget sollicitudin sem. In et libero aliquet, sodales tellus quis, faucibus dolor. Vestibulum euismod accumsan tellus eu euismod.",
        tags: ["siema", "siema", "sieam"],
        status: Status.Completed,
      },
      {
        name: "Project Kickoff",
        date: "2023-03-01",
        description:
          "Maecenas tellus odio, bibendum sit amet cursus non, condimentum eget metus. Duis ac lectus ac urna mollis feugiat quis quis sapien. Fusce euismod, nunc eu porta elementum, eros mi placerat lectus, vitae tempor nibh nulla et lacus. Donec eget sollicitudin sem. In et libero aliquet, sodales tellus quis, faucibus dolor. Vestibulum euismod accumsan tellus eu euismod.",
        tags: ["siema", "siema", "sieam"],
        status: Status.Completed,
      },
      {
        name: "Project Kickoff",
        date: "2023-03-01",
        description:
          "Maecenas tellus odio, bibendum sit amet cursus non, condimentum eget metus. Duis ac lectus ac urna mollis feugiat quis quis sapien. Fusce euismod, nunc eu porta elementum, eros mi placerat lectus, vitae tempor nibh nulla et lacus. Donec eget sollicitudin sem. In et libero aliquet, sodales tellus quis, faucibus dolor. Vestibulum euismod accumsan tellus eu euismod.",
        tags: ["siema", "siema", "sieam"],
        status: Status.Completed,
      },
    ],
    impact:
      "Featured in 5 international nature magazines; reached an audience of over 1 million viewers.",
    challenges:
      "Overcoming unpredictable weather conditions to capture the perfect shot.",
    futurePlans:
      "A follow-up series focusing on coastal wildlife is in the conceptualization stage.",
    externalLinks: ["https://www.naturemagexample.com/ocean-at-dusk-feature"],
    collaborators: smallProfiles.map((item) => {
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
];
