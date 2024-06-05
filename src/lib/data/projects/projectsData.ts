import { ProjectData, Status } from "@/lib/model/project";
import { smallProfiles } from "../profile/smallProfileData";
import { Collaborator } from "@/lib/model/profile";
import { tournamentCollaborators } from "./tournamentCollaborators";
import { websiteCollaborators } from "./webisteCollaborators";

export const projects: ProjectData[] = [
  {
    id: "tournament",
    title: "Tournament",
    description:
      "Tournament is a robust application developed with Nuxt and Golang, designed to enable users to create and manage basketball team tournaments, monitor their progress, and view match results. The application boasts a user-friendly and intuitive interface, featuring a clean and modern design that ensures easy navigation and use. Future plans for the application include expanding it to a SaaS model, offering enhanced features and scalability for a broader audience.",
    imageUrl: "/knury.jpg",
    bannerUrl: "/knury.jpg",
    tags: ["Photography", "Internal"],
    creationDate: "2023-04-15",
    location: "Malibu, California",
    status: Status.OnGoing,
    milestones: [
      {
        name: "Project Kickoff",
        date: "2024-03-01",
        description:
          "We began our journey with 'Knury Knurów' in March 2024, marking the moment when the first line of code for the project was written.",
        tags: ["Intialization"],
        status: Status.Completed,
      },
      {
        name: "Project Development",
        date: "2024-03-10",
        description:
          "As time went on, we found ourselves writing more and more code, gradually beginning to see the first results of our efforts. It was an exciting and rewarding period for us, filled with a sense of accomplishment and progress.",
        tags: ["Nuxt", "Golang", "development"],
        status: Status.Completed,
      },
      {
        name: "Project delivery",
        date: "2024-05-25",
        description:
          "After a challenging yet rewarding journey, we successfully delivered the project to the client. It was a great success, with everything proceeding smoothly and the client being extremely satisfied with the results. We are immensely proud of our achievements. However, we do not plan to stop here.",
        tags: ["Delivery"],
        status: Status.Completed,
      },
      {
        name: "Plans of expanding",
        date: "2024-06-01",
        description:
          "We are excited to announce our plans to expand the project into a SaaS model, aiming to offer enhanced features and greater scalability to reach a broader audience. Additionally, we plan to extend our platform's capabilities to include a variety of sports beyond just basketball. We are enthusiastic about the future of this project and the new opportunities it will bring!",
        tags: ["Future", "Saas"],
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
      i.description =
        "Developed both frontend and backend of the project. Responsible for managing the project's development process and ensuring the timely delivery of milestones.";
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
      "A website you are reading right now. It is a modern, responsive, and user-friendly website that showcases the projects, team members, and other information about notByte. The website is built using Next.js and Tailwind CSS, ensuring optimal performance and a seamless user experience. The website is continuously updated with new features and content to provide visitors with the latest information about notByte and its projects. The website is also optimized for search engines, making it easy for users to find the information they need.",
    imageUrl: "/notByte_website.png",
    bannerUrl: "/notByte_website.png",
    tags: ["Photography", "Internal"],
    creationDate: "2023-04-15",
    location: "Malibu, California",
    status: Status.Completed,
    milestones: [
      {
        name: "Project Kickoff",
        date: "2024-01-01",
        description:
          "Our efforts to create a modern, responsive, and user-friendly website for notByte began on January 1, 2024. The project's development process was initiated, and the team started working on the website's design and functionality.",
        tags: ["initialization"],
        status: Status.Completed,
      },
      {
        name: "Project Development",
        date: "2023-02-01",
        description:
          "Project development was quite a protracted process due to little amounts of time and a lot of work. All of our team still studies and works full-time, so we had to find time for the project in our free time. Despite this, we managed to finish the project on time and with a great result. We are proud of our work and we hope that you like our website.",
        tags: ["tailwindcss", "Next.js", "development"],
        status: Status.Completed,
      },
      {
        name: "Project delivery",
        date: "2023-03-01",
        description:
          "We are happy to announce that the project has been successfully delivered to the client. The website is live and available to the public, providing visitors with information about notByte, its projects, and team members. The website is continuously updated with new features and content to ensure a seamless user experience.",
        tags: ["delivery"],
        status: Status.Completed,
      },
      {
        name: "future plans",
        date: "2023-03-01",
        description:
          "Plans for the future include expanding the website's features and content to provide visitors with more information about notByte and its projects. The website will be continuously updated with new features and content to ensure a seamless user experience. We are excited about the future of the website and the new opportunities it will bring.",
        tags: ["Future"],
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
