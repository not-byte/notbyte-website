import { Profile } from "../../model/profile";

export const profiles: Profile[] = [
  {
    id: "Pawel_Linek",
    name: "Paweł Linek",
    position: "Chief Executive Officer, Software Developer",
    image: "/pawel.png",
    longDescription:
      "Ambitious software developer specialized in full-stack web applications, I am deeply passionate about continuous learning and keenly follow industry trends to stay ahead. My skill set spans across various full-stack technologies, underpinned by a strong grasp of data structures and proficiency in lower-level programming languages like C++. I thrive in dynamic environments, eagerly embracing new challenges to push the boundaries of what's possible. My interest doesn't stop at coding; I'm also fascinated by physics and mathematics, aiming to intertwine these disciplines with technology to create innovative solutions. I see immense potential in merging computational physics and mathematical models with software development to tackle complex problems. Eager to contribute to a team that prioritizes innovation, collaboration, and a progressive outlook, I am committed to leveraging my skills and interests to drive impactful projects at the nexus of technology and science.",
    shortDescription:
      "Full-stack software developer with a passion for continuous learning and innovation in web applications.",
    socials: [
      {
        icon: "LinkedIn",
        url: "https://www.linkedin.com/in/paweloslinek/",
      },
      {
        icon: "GitHub",
        url: "https://github.com/pawelos231",
      },
      {
        icon: "facebook",
        url: "https://www.facebook.com/profile.php?id=100010260706946",
      },
      {
        icon: "twitter",
        url: "https://twitter.com/LinekPawe",
      },
    ],
    contact: {
      email: "pawel@notbyte.com",
      phone: "797477825",
      address: "Zabrze, Poland",
    },
    education: [
      {
        institution: "Politechnika Śląska",
        degree: "Bachelor of Computer Science",
        fieldOfStudy: "Computer Science",
        description:
          "Politechnika Śląska (Silesian University of Technology) in Gliwice is a well-regarded institution with a strong focus on engineering, technology, and science. It is known for its innovative research, strong academic programs, and significant contributions to science and industry. The university is involved in various scientific and educational activities, hosting events like conferences and workshops to foster knowledge exchange and development",
        startDate: new Date("2023-10-01"),
        endDate: null,
      },
      {
        institution: "Zespół Szkół Techniczno-Informatycznych w Gliwicach",
        degree: "High School Diploma",
        fieldOfStudy: "Computer Science", // Field of study not specified for high school
        startDate: new Date("2019-09-01"),
        description: `Zespół Szkół Techniczno-Informatycznych in Gliwice (ZSTI Gliwice) is recognized as a "Złota Szkoła 2024" (Golden School 2024), ranking second place in the Silesian Voivodeship. The school prides itself on teaching not just for educational purposes but for life skills. This achievement highlights the school's commitment to providing high-quality education and preparing students for their future careers and life challenges. For more detailed information about the school and its achievements, you can visit their website.`,
        endDate: new Date("2023-05-31"),
      },
    ],
    experience: [
      {
        company: "iO Data AS",
        position: "Software Engineer",
        startDate: new Date("2023-10-01"),
        endDate: null,
        description:
          "Dedicated to all stages of software development cycle with a focus on backend and frontend solutions. Expertise in data analysis and processing for complex project development.",
      },
      {
        company: "notByte",
        position: "Chief Executive Officer",
        startDate: new Date("2024-01-01"),
        endDate: null,
        description:
          "Leading a software development company and managing cross-functional teams to innovate and drive product strategy and business growth.",
      },
      {
        company: "TOLAPTOP.gr (ERASMUS+)",
        position: "Computer hardware service technician",
        startDate: new Date("2022-05-01"),
        endDate: new Date("2022-06-30"),
        description:
          "Performed diagnostic maintenance and troubleshooting during an ERASMUS+ internship. Specialized in laptop disassembly and repair, demonstrating the ability to resolve hardware issues efficiently.",
      },
      {
        company: "Centrum Technologii Informatycznej",
        position: "Software Intern",
        startDate: new Date("2022-04-01"),
        endDate: new Date("2022-05-31"),
        description:
          "Gained practical experience with software development under a team setting. Worked with front-end and back-end technologies, focusing on React.js and Node.js.",
      },
      {
        company: "SPIE Energotest",
        position: "Software Intern",
        startDate: new Date("2021-05-01"),
        endDate: new Date("2021-06-30"),
        description:
          "Contributed to projects in the area of energy efficiency and automation. Developed software solutions tailored for industrial applications and enhanced understanding of PLCs and automation systems.",
      },
    ],
    awards: [
      {
        title: 'Three-time finalist of "Motorola Science Cup" competition',
        date: new Date("2022-06-01"),
        issuer: "Motorola",
        description:
          "National IT competition in Poland showcasing expertise in programming, mathematics, physics, and astronomy. (2021, 2022, 2023)",
      },
      {
        title: "Two-time recipient of “The Laurel of Science”",
        date: new Date("2022-01-10"),
        issuer: "City of Gliwice, Poland",
        description:
          "Recognizing exceptional academic performance, awarded by the mayor of the city of Gliwice. (2021, 2022)",
      },
      {
        title: '2nd place in "THE FIRST NATIONAL IT CHAMPIONSHIP"',
        date: new Date("2022-10-15"),
        issuer: "Poznań game arena",
        description:
          "Reflects comprehensive knowledge of the Linux operating system and its intricate internals.",
      },
    ],
  },
];
