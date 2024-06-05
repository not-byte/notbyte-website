import { SmallProfile } from "../../model/profile";

//data present on the main page
export const smallProfiles: SmallProfile[] = [
  {
    id: "Pawel_Linek",
    name: "Paweł",
    socials: [
      {
        icon: "LinkedIn",
        url: "https://www.linkedin.com/in/paweloslinek/",
      },
      {
        icon: "GitHub",
        url: "https://github.com/pawelos231",
      },
    ],
    image: "/pawel.png",
    description:
      "Software engineer with a passion for continuous learning and innovation in the world of IT.",
    position: "Software engineer, CEO",
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
      "A DevOps engineer, responsible for managing our Linux infrastructure using VMWare and Proxmox on Oracle Cloud.",
    position: "CIO, DevOps Engineer",
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
      "Passionate and skilled web developer commited to continuously improving my knowledge and understanding of all things IT.",
    position: "CTO, Software Developer",
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
      "Social media manager and software tester, dedicated to making sure everything runs smoothly.",
    position: "Social media manager, tester",
  },
];
