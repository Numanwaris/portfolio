export const profile = {
  name: "Numan Waris Khan",
  title: "Associate Software Developer",
  tagline: "Full-Stack Developer building warehouse, e-commerce, mobile & POS systems",
  shortTagline: "Full-Stack Developer | Problem Solver | Builder",
  location: "Gachibowli, Hyderabad, India",
  email: "numanwariskhan72@gmail.com",
  phone: "+91-7080196246",
  github: "https://github.com/Numanwaris",
  linkedin: "https://linkedin.com/in/numan-waris-khan-54b989268/",
  summary:
    "Full-stack developer with hands-on professional experience building warehouse, inventory, e-commerce, mobile, desktop, and POS applications. Skilled in Java, Spring Boot, React.js, Angular, Next.js, NestJS, React Native, Electron, PostgreSQL, MySQL, MongoDB, REST APIs, JWT authentication, responsive UI development, and agile collaboration.",
};

export const skillCategories = ["Languages", "Frontend", "Backend", "Mobile/Desktop", "Database", "Tools"] as const;

export type SkillCategory = (typeof skillCategories)[number];

export const skills: { name: string; category: SkillCategory }[] = [
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "React.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "React Native", category: "Mobile/Desktop" },
  { name: "Electron", category: "Mobile/Desktop" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Maven", category: "Tools" },
  { name: "Postman", category: "Tools" },
];

export const additionalSkills = [
  "Spring MVC",
  "REST APIs",
  "JWT Authentication",
  "Hibernate ORM",
  "Responsive UI",
  "API Integration",
  "Agile",
  "OOP",
];

export const experience = [
  {
    role: "Associate Software Developer",
    company: "Alt Switch Software Services LLC",
    location: "Hyderabad",
    period: "Feb 2026 – Present",
    type: "Full-time",
    technologies: ["Angular", "NestJS", "PostgreSQL", "Next.js", "React Native", "Electron"],
    responsibilities: [
      "Developed warehouse, inventory, and e-commerce management modules for ICS UK LTD using Angular, NestJS, and PostgreSQL, improving operational workflows and inventory tracking.",
      "Built CaterChoice e-commerce features across a Next.js web application and React Native mobile application for customer-facing shopping and order-management flows.",
      "Designed React Native warehouse management mobile apps for real-time inventory handling, stock updates, and logistics operations.",
      "Implemented an Electron-based Point of Sale (POS) system for desktop retail billing, order processing, and store operations.",
    ],
    highlights: [
      "Integrated REST APIs, created reusable UI components, debugged production issues, and collaborated with teams across web, mobile, and desktop platforms.",
      "Worked on full-stack tasks covering frontend screens, backend APIs, PostgreSQL database operations, and performance-focused feature improvements.",
    ],
  },
];

export const projects = [
  {
    title: "Optimizing Podcast Applications for Augmented Learning",
    tag: "Full Stack",
    stack: ["React.js", "Node.js", "MongoDB", "Listen Notes API"],
    points: [
      "Developed a responsive podcast learning application with Listen Notes API integration for real-time content discovery and updates.",
      "Built personalized recommendation logic using user interaction data to improve content relevance and engagement.",
      "Implemented playlist management, playback workflows, social sharing, and optimized MongoDB queries for faster retrieval.",
    ],
    link: null,
  },
  {
    title: "Student Library Management System",
    tag: "Backend",
    stack: ["Spring Boot", "MySQL", "Hibernate", "Spring Security", "JWT"],
    points: [
      "Built a scalable backend for book management, user authentication, issue/return transactions, and admin workflows.",
      "Designed RESTful APIs and secured protected routes using Spring Security and JWT authentication.",
      "Used Hibernate ORM with MySQL for reliable persistence and improved backend performance.",
    ],
    link: null,
  },
];

export const education = [
  {
    degree: "B.Tech – Computer Engineering",
    school: "Maulana Azad National Urdu University, Hyderabad",
    period: "2021 – 2025",
    detail: "CGPA: 7.78",
  },
  {
    degree: "Intermediate (PCM)",
    school: "S.B.V Noor Nagar, New Delhi",
    period: "2019 – 2021",
    detail: "61%",
  },
  {
    degree: "Matriculation",
    school: "C.A.V Inter College, Prayagraj, U.P",
    period: "2017 – 2019",
    detail: "75%",
  },
];

export const honors = [
  "Participated in C-DAC Workshop on Advanced Computing (2024).",
  "Presented paper at International Conference on Computational Method, Data Science & Networking (ICCMDN-2025).",
  "Winner – South Zone Volleyball Championship (2022).",
];
