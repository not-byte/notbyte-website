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
  {
    id: "Lukasz_Ganczaryk",
    name: "Łukasz Ganczaryk",
    position: "Social Media Manager, Software Tester",
    image: "/lukasz.png",
    longDescription:
      "As a dedicated social media manager and software tester, I blend creativity with analytical precision. My expertise spans social media platforms, where I craft engaging campaigns, and software testing environments, ensuring top-notch user experiences. Beyond my professional pursuits, I am a music enthusiast and guitar player, harmonizing creativity with discipline. My love for cinema and literature fuels innovative approaches to both social media and software testing. I believe in the power of storytelling, whether through compelling social media content or well-crafted test scenarios, to connect with audiences and deliver impactful results. Eager to join a forward-thinking team that values innovation and collaboration, I aim to leverage my diverse skills and interests to contribute to projects at the intersection of technology, creativity, and culture.",
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
        institution: "Politechnika Śląska",
        degree: "Bachelor of Computer Science",
        fieldOfStudy: "Information and Communication Technology",
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
        company: "notByte",
        position: "Social Media Manager",
        startDate: new Date("2024-01-01"),
        endDate: null,
        description:
          "Crafting engaging content to make sure our brands' voice is heard and developing solutions to drive brand awareness and engagement",
      },
      {
        company: "Alfa-System",
        position: "Intern",
        startDate: new Date("2022-04-01"),
        endDate: new Date("2022-05-31"),
        description:
          "Gained practical experience working with computer networks, Linux operating system and networking hardware.",
      },
      {
        company: "PC-Store",
        position: "Intern",
        startDate: new Date("2021-05-01"),
        endDate: new Date("2021-06-30"),
        description:
          "Troubleshooted hardware issues and performed repairs and upgrades, along with building PCs from scratch",
      },
    ],
  },
  {
    id: "Adam_Kolt",
    name: "Adam Kołt",
    position: "Chief Technology Officer, Software Engineer",
    image: "/adam.png",
    longDescription:
      "20-year-old IT student and freelance web developer from Zabrze, Poland. I've always been passionate about IT. As a kid, I was fascinated by the things people could create using the ability to code, such as games or applications. I adored the concept of expressing creativity and bringing ideas to life through programming. That's why I decided to attend ZSTI, a technical high school located in Gliwice, renowned for its high-level IT education. It was during my time at the school when I truly fell in love with programming, specifically web development. I studied thoroughly and worked on my skillset to the point where I could take on freelance projects. As a full-stack developer, my job is to oversee both the front-end and the back-end. I connect the two branches together in a synergistic manner, creating a fully functioning project for the client. I use a wide range of technologies that allow me to elevate my work and give the customer the best possible experience. In addition to programming, I am also proficient in computer graphics, utilizing software such as Adobe Photoshop or Adobe Illustrator to create and edit images. Besides my technical skills, I pride myself on the ability to learn quickly and adapt to various situations. I am always open to learning new technologies, frameworks, or libraries. I also excel at problem-solving; I often look for creative ways to avoid or fix issues that might interfere with my work. Outside of work, I am a huge fan of sports, primarily football, basketball, and combat sports. I also enjoy playing video games in my spare time.",
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
        institution: "WSB Merito Chorzów",
        degree: "Bachelor of Computer Science",
        fieldOfStudy: "Computer Science",
        description:
          "WSB Merito is a private university in Chorzów, Poland, offering a wide range of courses in various fields. The university is known for its modern approach to education, focusing on practical skills and preparing students for the job market. The Computer Science program covers a broad spectrum of topics, including software development, data analysis, and computer networks. The curriculum is designed to provide students with a solid foundation in computer science and equip them with the necessary skills to succeed in the IT industry.",
        startDate: new Date("2023-10-01"),
        endDate: null,
      },
      {
        institution: "Zespół Szkół Techniczno-Informatycznych w Gliwicach",
        degree: "High School Diploma",
        fieldOfStudy: "Computer Science",
        startDate: new Date("2019-09-01"),
        description: `Zespół Szkół Techniczno-Informatycznych in Gliwice (ZSTI Gliwice) is recognized as a "Złota Szkoła 2024" (Golden School 2024), ranking second place in the Silesian Voivodeship. The school prides itself on teaching not just for educational purposes but for life skills. This achievement highlights the school's commitment to providing high-quality education and preparing students for their future careers and life challenges. For more detailed information about the school and its achievements, you can visit their website.`,
        endDate: new Date("2023-05-31"),
      },
    ],
    experience: [
      {
        company: "Giganci Programowania",
        position: "Programming Trainer",
        startDate: new Date("2024-03-09"),
        endDate: null,
        description:
          "Providing programming training for future developers in a wide range of technologies and coding languages.",
      },
      {
        company: "notByte",
        position: "Chief Technology Officer",
        startDate: new Date("2024-01-01"),
        endDate: null,
        description:
          "Working on and overseeing all technical aspects of the company, from web development to IT infrastructure.",
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
          "Gained practical experience with software development under a team setting. Worked with front-end and back-end technologies, focusing on Svelte, Express.js and Node.js.",
      },
      {
        company: "S4D",
        position: "Software Tester Intern",
        startDate: new Date("2021-05-01"),
        endDate: new Date("2021-06-30"),
        description:
          "Worked in a Scrum/Agile environment, testing software applications and ensuring they met quality standards. Developed test cases, executed tests, and reported bugs to the development team. Acquired knowledge of software testing methodologies and tools, including Jira and Cypress.",
      },
    ],
    awards: [
      {
        title: 'Two-time finalist of "Motorola Science Cup" competition',
        date: new Date("2022-06-01"),
        issuer: "Motorola",
        description:
          "National IT competition in Poland showcasing expertise in programming, mathematics, physics, and astronomy. (2021, 2022, 2023)",
      },
      {
        title: "Recipient of “The Laurel of Science”",
        date: new Date("2022-01-10"),
        issuer: "City of Gliwice, Poland",
        description:
          "Recognizing exceptional academic performance, awarded by the mayor of the city of Gliwice. (2022)",
      },
    ],
  },
  {
    id: "Przemyslaw_Szymanski",
    name: "Przemysław Szymański",
    position: "CIO, DevOps Engineer",
    image: "/przemek.jpg",
    longDescription:
      "A DevOps engineer, responsible for managing our Linux infrastructure using VMWare and Proxmox on Oracle Cloud. I work with Git, Docker, Nginx, and PostgreSQL databases like CockroachDB. I also have a keen interest in development with programming languages such as TypeScript, Go, Java, and C.",
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
        institution: "University of Information Technology in Katowice (WSTI)",
        degree: "Bachelor of Computer Science",
        fieldOfStudy: "Computer Science",
        description:
          "University of Information Technology (WSTI) in Katowice with highly qualified academic staff consists of esteemed researchers and practitioners with significant industry experience and a supportive attitude towards students. Many lecturers at WSTI are actively working graphic designers and IT professionals, allowing students to collaborate with their future employers even during their studies.",
        startDate: new Date("2023-10-01"),
        endDate: null,
      },
      {
        institution: "Zespół Szkół Techniczno-Informatycznych w Gliwicach",
        degree: "High School Diploma",
        fieldOfStudy: "Computer Science",
        startDate: new Date("2019-09-01"),
        description: `My IT journey began here. I learnt a lot new skills, including Linux systems, networking, database management, frontend and backend development. During my time here, I participated in various tournaments like Motorola Science Cup and Mistrzostwa IT, these events gave me invaluable experience.`,
        endDate: new Date("2023-05-31"),
      },
    ],
    experience: [
      {
        company: "Flytronic",
        position: "Software Tester",
        startDate: new Date("2024-03-01"),
        endDate: null,
        description:
          "I am responsible for testing and programming various electronic circuits using our company software, participating in the construction of testing stations, and contributing to the development of testing procedures. Additionally, I conduct test measurements of unmanned aerial vehicle subsystems, calibrate IMU circuits, and participate in modular and pre-flight tests of UAVs.",
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
        company: "JEST Gliwice",
        position: "System & Network Administator",
        startDate: new Date("2023-05-01"),
        endDate: new Date("2024-02-30"),
        description:
          "Managing a Windows Server with a local Active Directory and Azure infrastructure for office device synchronization, overseeing the local network including routers, switches, and computer hardware maintenance in the company, and documenting tasks performed by technicians through protocols and reports using Excel and Word.",
      },
      {
        company: "alfa-system.pl",
        position: "System & Network Intern",
        startDate: new Date("2022-05-01"),
        endDate: new Date("2022-06-30"),
        description:
          "Managing Ubuntu Linux servers including port management and service diagnostics, configuring TP-LINK and CISCO routers and switches for client installations, servicing and diagnosing network devices and Ethernet/fiber optic connections on-site as a technician, and preparing reports and documentation detailing issues and workflow from diagnosis to problem resolution.",
      },
      {
        company: "alfa-system.pl",
        position: "System & Network Administator Intern",
        startDate: new Date("2021-05-01"),
        endDate: new Date("2021-06-30"),
        description:
          "Managing Ubuntu Linux servers including port management and service diagnostics, configuring TP-LINK and CISCO routers and switches for client installations, servicing and diagnosing network devices and Ethernet/fiber optic connections on-site as a technician, and preparing reports and documentation detailing issues and workflow from diagnosis to problem resolution.",
      },
    ],
    awards: [
      {
        title: 'Semi-finalist place in "THE FIRST NATIONAL IT CHAMPIONSHIP"',
        date: new Date("2022-10-15"),
        issuer: "Poznań Game Arena",
        description:
          "'Mistrzostwa IT' is a national computer-related championship. My partner and I were participating as a team in cybersecurity and systems categories. We’ve reached semi-finals with leading scores, sadly it wasn’t enough for the finals. I experienced so much fun and gained new perspectives.",
      },
    ],
  },
];
