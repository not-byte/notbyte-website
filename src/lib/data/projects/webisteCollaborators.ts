import { Collaborator } from "@/lib/model/profile";

export const websiteCollaborators: Collaborator[] = [
  {
    id: "Pawel_Linek",
    name: "Paweł",
    socials: [
      {
        icon: "GitHub",
        url: "https://github.com/pawelos231",
      },
      {
        icon: "LinkedIn",
        url: "https://www.linkedin.com/in/paweloslinek/",
      },
    ],
    image: "/pawel.png",
    description:
      "Developed both the frontend and backend of the project, ensuring optimal performance and scalability. Responsible for managing the project's development process and ensuring the timely delivery of milestones.",
    position: "CEO, Software engineer",
    roles: [
      {
        name: "Project Manager",
        color: "red",
      },
      {
        name: "Lead Developer",
        color: "blue",
      },
    ],
  },
  {
    id: "Przemyslaw_Szymanski",
    name: "Przemysław",
    socials: [
      {
        icon: "GitHub",
        url: "https://github.com/botprzemek",
      },
      {
        icon: "LinkedIn",
        url: "https://www.linkedin.com/in/botprzemek",
      },
    ],
    image: "/przemek.jpg",
    description:
      "Deisgner of the project, ensuring a user-friendly and intuitive interface. Responsible for managing the project's development process and ensuring the timely delivery of milestones.",
    position: "CIO, DevOps Engineer",
    roles: [
      {
        name: "Designer",
        color: "purple",
      },
    ],
  },
  {
    id: "Adam_Kolt",
    name: "Adam",
    socials: [
      {
        icon: "GitHub",
        url: "https://github.com/akolt19d",
      },
      {
        icon: "LinkedIn",
        url: "https://www.linkedin.com/in/a-kolt/",
      },
    ],
    image: "/adam_temp.jpg",
    description:
      "Designed the project's frontend, ensuring a user-friendly and intuitive interface. Responsible for managing the project's development process and ensuring the timely delivery of milestones.",
    position: "CTO, Software Developer",
    roles: [
      {
        name: "Deisgner",
        color: "purple",
      },
    ],
  },
  {
    id: "Lukasz_Ganczaryk",
    name: "Łukasz",
    socials: [
      {
        icon: "GitHub",
        url: "https://github.com/nozowymrozon",
      },
      {
        icon: "LinkedIn",
        url: "https://www.linkedin.com/in/łukasz-ganczaryk-977924242/",
      },
    ],
    image: "/lukasz.png",
    description:
      "tester of the project, ensuring a user-friendly and intuitive interface. Responsible for managing the project's development process and ensuring the timely delivery of milestones.",
    position: "Social media manager, tester",
    roles: [
      {
        name: "Tester",
        color: "pink",
      },
    ],
  },
];
