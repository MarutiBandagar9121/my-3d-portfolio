import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  linkedIn,
  github,
  spring,
  laravel,
  AnimeflixHome,
  MilkMart,
  VaidikBhramanti,
  estatehubLogo,
  bootstrap,
  postman
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Angular Developer",
    icon: angular,
  },
  {
    title: "Springboot Developer",
    icon: spring,
  },
  {
    title: "Laravel Developer",
    icon: laravel,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Estatehub",
    company_website: "https://estatehub.co.in/",
    icon: estatehubLogo,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Present",
    points: [
      "Promoted to Software Developer based on performance during the internship.",
      "Continued working with Angular (frontend) and Spring Boot (backend) to enhance the property search and comparison web application.",
      "Collaborated on implementing new features such as property comparison, shortlisting, saving properties, and generating custom PDFs for property comparisons.",
      "Focused on ensuring the web application's readiness for launch, contributing to the company's goal of bringing the product to market as soon as possible.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Estatehub",
    company_website: "https://estatehub.co.in/",
    icon: estatehubLogo,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Worked as a Web Developer Intern at Estate Hub, a B2B real estate company.",
      "Contributed to their property search and compare web application, along with a back-office management tool.",
      "Set up and ran four interconnected applications locally: two Angular apps (customer and back-office) and two Spring Boot backend services.",
      "Upgraded the web application's Angular framework from version 13 to version 18, ensuring compatibility with the latest Node.js version.",
      "Designed and developed static pages within the web application based on company requirements.",
      "Assisted in reviving and improving an older, non-production application for potential relaunch."
    ],
  },
];

const projects = [
  {
    name: "AnimeFlix",
    description:
      "Developed a video streaming application using React and Tailwind CSS for the front end, leveraging PHP for REST API development, and Postgre SQL as the data base management system.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: AnimeflixHome,
    hosted_link: "https://github.com/MarutiBandagar9121/AnimeFlix",
  },
  {
    name: "Milk Mart",
    description:
          "Designed and developed a full-stack PHP application, providing an end-to-end solution for dairy shops. Utilised Postgre SQL as the database management system and deployed on Server. Implemented Role-Based Access Control (RBAC) with distinct roles for Admin, Consumer and Store Manager. Stream lined dairy shop operations, enhancing efficiency and productivity. Comprehensive managment of dairy products inventory, sales and consumer data.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "apache server",
        color: "pink-text-gradient",
      },
    ],
    image: MilkMart,
    hosted_link: "https://github.com/MarutiBandagar9121/MilkMart",
  },
  {
    name: "Vaidik Bhramanti",
    description:
      "Designed and developed an engaging landing page for Vaidik Bhramanti, a leading tours and travels enterprise. Utilised HTML, CSS, and Java Script for a seamless user experience, and PHP for implementing a brochure download feature. Responsive design ensuring accessibility across various devices. Interactive brochure download functionality. Successfully deployed on GoDaddy, ensuring high up time and reliability.",
    tags: [
      {
        name: "html, css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "go daddy",
        color: "pink-text-gradient",
      },
    ],
    image: VaidikBhramanti,
    hosted_link: "https://github.com/MarutiBandagar9121/vaidikBrahmanti",
  },
];

const personalInfo = {
  name: "Maruti",
  fullName: "Maruti Bandagar",
  email: "maruti.bandagar9121@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in TypeScript,
  JavaScript, php, java, python, C and expertise in frameworks like React.Js, Angular,
  Express.js, laravel and spring boot etc. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/14oNpGmq3SRANnrW4mqN0spuqaOF3BwwK/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://linkedin.com/in/maruti-bandagar-800788281",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/MarutiBandagar9121",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
