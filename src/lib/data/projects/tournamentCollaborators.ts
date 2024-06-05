import { Collaborator } from "@/lib/model/profile";

export const tournamentCollaborators: Collaborator[] = [
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
      "Developed backend solutions for the project, ensuring optimal performance and scalability. Responsible for managing the project's development process and ensuring the timely delivery of milestones.",
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
      "Developed the frontend of the project, ensuring a user-friendly and intuitive interface. Responsible for managing the project's development process and ensuring the timely delivery of milestones.",
    position: "CIO, DevOps Engineer",
    roles: [
      {
        name: "Project Manager",
        color: "red",
      },
      {
        name: "Frontend dev",
        color: "blue",
      },
    ],
  },
];
