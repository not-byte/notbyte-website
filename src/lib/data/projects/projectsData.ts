import { Collaborator, ProjectData, Status } from "@/lib/model/project";
import { smallProfiles } from "../profile/smallProfileData";

export const projects: ProjectData[] = [
  {
    id: 5,
    title: "Ocean at Dusk",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices augue ut imperdiet aliquam. Mauris enim velit, sollicitudin id magna laoreet, accumsan interdum velit. Proin iaculis posuere luctus. Duis dignissim eros turpis, in gravida turpis condimentum nec. Cras fermentum libero quis arcu tempor semper. Nulla porttitor velit vel libero egestas ullamcorper. Integer faucibus in risus nec porta. Ut at placerat odio, at interdum mauris. Fusce ullamcorper ornare est sed placerat. Proin quis aliquam arcu. Cras in condimentum orci, id auctor dui. Phasellus dignissim laoreet tellus, et suscipit neque auctor non. Sed ut iaculis nisi. Nullam convallis sem vel nulla cursus, at venenatis nulla laoreet Vestibulum imperdiet ligula ut risus aliquam, in malesuada tortor mollis. Pellentesque ac arcu sed ex porttitor hendrerit. Pellentesque justo nisi, blandit vitae vestibulum sed, venenatis in nisl. Cras egestas justo eu interdum facilisis. Aenean maximus sodales enim ac suscipit. Nam facilisis lobortis arcu. Vivamus quis odio lacus. Maecenas tellus odio, bibendum sit amet cursus non, condimentum eget metus. Duis ac lectus ac urna mollis feugiat quis quis sapien. Fusce euismod, nunc eu porta elementum, eros mi placerat lectus, vitae tempor nibh nulla et lacus. Donec eget sollicitudin sem. In et libero aliquet, sodales tellus quis, faucibus dolor. Vestibulum euismod accumsan tellus eu euismod.",
    imageUrl: "/knury.jpg",
    bannerUrl: "/knury.jpg",
    tags: ["Photography", "Internal"],
    creationDate: "2023-04-15",
    location: "Malibu, California",
    status: Status.Completed,
    technologies: ["DSLR Camera", "Adobe Photoshop"],
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
