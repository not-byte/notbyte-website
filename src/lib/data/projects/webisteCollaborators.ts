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
    description: "not_byte_website.collaborators.pawel.description",
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
    description: "not_byte_website.collaborators.przemyslaw.description",
    position: "CIO, DevOps Engineer",
    roles: [
      {
        name: "common.roles.designer",
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
    description: "not_byte_website.collaborators.adam.description",
    position: "CTO, Software Developer",
    roles: [
      {
        name: "common.roles.designer",
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
    description: "not_byte_website.collaborators.lukasz.description",
    position: "Social media manager, tester",
    roles: [
      {
        name: "common.roles.tester",
        color: "pink",
      },
    ],
  },
];
