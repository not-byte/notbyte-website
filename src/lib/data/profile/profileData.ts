import { Profile } from "../../model/profile";

export const profiles: Profile[] = [
  {
    id: "Pawel_Linek",
    name: "Paweł Linek",
    position: "pawel.roles",
    image: "/pawel.png",
    longDescription: "pawel.description",
    shortDescription:
      "Software engineer with a passion for continuous learning and innovation in the world of IT.",
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
    contact: {
      email: "pawel@notbyte.com",
      phone: "797477825",
      address: "Zabrze, Poland",
    },
    education: [
      {
        institution: "pawel.education.0.institution",
        degree: "pawel.education.0.degree",
        fieldOfStudy: "Computer Science", // Editors note: Feels unnecessary?
        description: "pawel.education.0.description",
        startDate: new Date("2023-10-01"),
        endDate: null,
      },
      {
        institution: "pawel.education.1.institution",
        degree: "pawel.education.1.degree",
        fieldOfStudy: "Computer Science", // Field of study not specified for high school
        startDate: new Date("2019-09-01"),
        description: `pawel.education.1.description`,
        endDate: new Date("2023-05-31"),
      },
    ],
    experience: [
      {
        company: "pawel.experience.0.company",
        position: "pawel.experience.0.position",
        startDate: new Date("2023-10-01"),
        endDate: null,
        description: "pawel.experience.0.description",
      },
      {
        company: "pawel.experience.1.company",
        position: "pawel.experience.1.position",
        startDate: new Date("2024-01-01"),
        endDate: null,
        description: "pawel.experience.1.description",
      },
      {
        company: "pawel.experience.2.company",
        position: "pawel.experience.2.position",
        startDate: new Date("2022-05-01"),
        endDate: new Date("2022-06-30"),
        description: "pawel.experience.2.description",
      },
      {
        company: "pawel.experience.3.company",
        position: "pawel.experience.3.position",
        startDate: new Date("2022-04-01"),
        endDate: new Date("2022-05-31"),
        description: "pawel.experience.3.description",
      },
      {
        company: "pawel.experience.4.company",
        position: "pawel.experience.4.position",
        startDate: new Date("2021-05-01"),
        endDate: new Date("2021-06-30"),
        description: "pawel.experience.4.description",
      },
    ],
    awards: [
      {
        title: "pawel.awards.0.title",
        date: new Date("2022-06-01"),
        issuer: "pawel.awards.0.issuer",
        description: "pawel.awards.0.description",
      },
      {
        title: "pawel.awards.1.title",
        date: new Date("2022-01-10"),
        issuer: "pawel.awards.1.issuer",
        description: "pawel.awards.1.description",
      },
      {
        title: "pawel.awards.2.title",
        date: new Date("2022-10-15"),
        issuer: "pawel.awards.2.issuer",
        description: "pawel.awards.2.description",
      },
    ],
  },
  {
    id: "Lukasz_Ganczaryk",
    name: "Łukasz Ganczaryk",
    position: "lukasz.roles",
    image: "/lukasz.png",
    longDescription: "lukasz.description",
    shortDescription:
      "Social media manager and software tester, dedicated to making sure everything runs smoothly.",
    socials: [
      {
        icon: "LinkedIn",
        url: "https://www.linkedin.com/in/łukasz-ganczaryk-977924242/",
      },
      {
        icon: "GitHub",
        url: "https://github.com/nozowymrozon",
      },
    ],
    contact: {
      email: "lukasz@notbyte.com",
      phone: "736814253",
      address: "Knurow, Poland",
    },
    education: [
      {
        institution: "lukasz.education.0.institution",
        degree: "lukasz.education.0.degree",
        fieldOfStudy: "Information and Communication Technology",
        description: "lukasz.education.0.description",
        startDate: new Date("2023-10-01"),
        endDate: null,
      },
      {
        institution: "lukasz.education.1.institution",
        degree: "lukasz.education.1.degree",
        fieldOfStudy: "Computer Science", // Field of study not specified for high school
        startDate: new Date("2019-09-01"),
        description: `lukasz.education.1.description`,
        endDate: new Date("2023-05-31"),
      },
    ],
    experience: [
      {
        company: "lukasz.experience.0.company",
        position: "lukasz.experience.0.position",
        startDate: new Date("2024-01-01"),
        endDate: null,
        description: "lukasz.experience.0.description",
      },
      {
        company: "lukasz.experience.1.company",
        position: "lukasz.experience.1.position",
        startDate: new Date("2022-04-01"),
        endDate: new Date("2022-05-31"),
        description: "lukasz.experience.1.description",
      },
      {
        company: "lukasz.experience.2.company",
        position: "lukasz.experience.2.position",
        startDate: new Date("2021-05-01"),
        endDate: new Date("2021-06-30"),
        description: "lukasz.experience.2.description",
      },
    ],
  },
  {
    id: "Adam_Kolt",
    name: "Adam Kołt",
    position: "adam.roles",
    image: "/adam_temp.jpg",
    longDescription: "adam.description",
    shortDescription:
      "Passionate and skilled software engineer commited to continuously improving my knowledge and understanding of all things IT.",
    socials: [
      {
        icon: "LinkedIn",
        url: "https://www.linkedin.com/in/a-kolt/",
      },
      {
        icon: "GitHub",
        url: "https://github.com/akolt19d",
      },
    ],
    contact: {
      email: "adam@notbyte.com",
      phone: "666725566",
      address: "Zabrze, Poland",
    },
    education: [
      {
        institution: "adam.education.0.institution",
        degree: "adam.education.0.degree",
        fieldOfStudy: "Computer Science",
        description: "adam.education.0.description",
        startDate: new Date("2023-10-01"),
        endDate: null,
      },
      {
        institution: "adam.education.1.institution",
        degree: "adam.education.1.degree",
        fieldOfStudy: "Computer Science",
        startDate: new Date("2019-09-01"),
        description: "adam.education.1.description",
        endDate: new Date("2023-05-31"),
      },
    ],
    experience: [
      {
        company: "adam.experience.0.company",
        position: "adam.experience.0.position",
        startDate: new Date("2024-03-09"),
        endDate: null,
        description: "adam.experience.0.description",
      },
      {
        company: "adam.experience.1.company",
        position: "adam.experience.1.position",
        startDate: new Date("2024-01-01"),
        endDate: null,
        description: "adam.experience.1.description",
      },
      {
        company: "adam.experience.2.company",
        position: "adam.experience.2.position",
        startDate: new Date("2022-05-01"),
        endDate: new Date("2022-06-30"),
        description: "adam.experience.2.description",
      },
      {
        company: "adam.experience.3.company",
        position: "adam.experience.3.position",
        startDate: new Date("2022-04-01"),
        endDate: new Date("2022-05-31"),
        description: "adam.experience.3.description",
      },
      {
        company: "adam.experience.4.company",
        position: "adam.experience.4.position",
        startDate: new Date("2021-05-01"),
        endDate: new Date("2021-06-30"),
        description: "adam.experience.4.description",
      },
    ],
    awards: [
      {
        title: "adam.awards.0.title",
        date: new Date("2022-06-01"),
        issuer: "adam.awards.0.issuer",
        description:
          "National IT competition in Poland showcasing expertise in programming, mathematics, physics, and astronomy. (2021, 2022, 2023)",
      },
      {
        title: "adam.awards.1.title",
        date: new Date("2022-01-10"),
        issuer: "adam.awards.1.issuer",
        description: "adam.awards.1.description",
      },
    ],
  },
  {
    id: "Przemyslaw_Szymanski",
    name: "Przemysław Szymański",
    position: "przemyslaw.roles",
    image: "/przemek.jpg",
    longDescription: "przemyslaw.description",
    shortDescription:
      "A DevOps engineer, responsible for managing our Linux infrastructure using VMWare and Proxmox on Oracle Cloud.",
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
    contact: {
      email: "przemek@notbyte.com",
      address: "Gliwice, Poland",
    },
    education: [
      {
        institution: "przemyslaw.education.0.institution",
        degree: "przemyslaw.education.0.degree",
        fieldOfStudy: "Computer Science",
        description: "przemyslaw.education.0.description",
        startDate: new Date("2023-10-01"),
        endDate: null,
      },
      {
        institution: "przemyslaw.education.1.institution",
        degree: "przemyslaw.education.1.degree",
        fieldOfStudy: "Computer Science",
        startDate: new Date("2019-09-01"),
        description: "przemyslaw.education.1.description",
        endDate: new Date("2023-05-31"),
      },
    ],
    experience: [
      {
        company: "przemyslaw.experience.0.company",
        position: "przemyslaw.experience.0.position",
        startDate: new Date("2024-03-01"),
        endDate: null,
        description: "przemyslaw.experience.0.description",
      },
      {
        company: "pzemyslaw.experience.1.company",
        position: "przemyslaw.experience.1.position",
        startDate: new Date("2024-01-01"),
        endDate: null,
        description: "przemyslaw.experience.1.description",
      },
      {
        company: "przemyslaw.experience.2.company",
        position: "przemyslaw.experience.2.position",
        startDate: new Date("2023-05-01"),
        endDate: new Date("2024-02-30"),
        description: "przemyslaw.experience.2.description",
      },
      {
        company: "przemyslaw.experience.3.company",
        position: "przemyslaw.experience.3.position",
        startDate: new Date("2022-05-01"),
        endDate: new Date("2022-06-30"),
        description: "przemyslaw.experience.3.description",
      },
      {
        company: "przemyslaw.experience.4.company",
        position: "przemyslaw.experience.4.position",
        startDate: new Date("2021-05-01"),
        endDate: new Date("2021-06-30"),
        description: "przemyslaw.experience.4.description",
      },
    ],
    awards: [
      {
        title: "przemyslaw.awards.0.title",
        date: new Date("2022-10-15"),
        issuer: "przemyslaw.awards.0.issuer",
        description: "przemyslaw.awards.0.description",
      },
    ],
  },
];
