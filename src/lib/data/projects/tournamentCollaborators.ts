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
    description: "knury.collaborators.pawel.description",
    position: "CEO, Software engineer",
    roles: [
      {
        name: "common.roles.project_manager",
        color: "red",
      },
      {
        name: "common.roles.lead_developer",
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
    description: "knury.collaborators.przemyslaw.description",
    position: "CIO, DevOps Engineer",
    roles: [
      {
        name: "common.roles.project_manager",
        color: "red",
      },
      {
        name: "common.roles.lead_developer",
        color: "blue",
      },
    ],
  },
];
