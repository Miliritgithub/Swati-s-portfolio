import type { NavLink, Project, Skill } from "@/types/portfolio";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const MARQUEE_ITEMS = [
  "FULL STACK DEVELOPER",
  "REACT & NEXT.JS",
  "NODE.JS & POSTGRESQL",
  "TYPESCRIPT",
  "APACHE KAFKA & DOCKER",
];

export const ABOUT_PARAGRAPHS = [
  "I'm a full-stack developer and Information Technology undergraduate based in Kharagpur, West Bengal, building scalable web applications with the MERN stack, TypeScript, Next.js and PostgreSQL.",
  "I've interned as an AI Intern at Codtech IT Solutions and a Software Development Intern at Oaksol Technology, and I ship personal and team projects covering REST API design, JWT authentication, event-driven architecture with Apache Kafka, Docker containerization and AI-powered feature integration.",
];

export const PRIMARY_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Apache Kafka",
  "Docker",
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", category: "Frontend", level: "Advanced" },
  { name: "JavaScript / TS", category: "Languages", level: "Advanced" },
  { name: "HTML / CSS", category: "Frontend", level: "Advanced" },
  { name: "Node.js & Express", category: "Backend", level: "Advanced" },
  { name: "REST API Design", category: "Backend", level: "Advanced" },
  { name: "Apache Kafka", category: "Backend", level: "Proficient" },
  { name: "PostgreSQL & Prisma", category: "Backend", level: "Proficient" },
  { name: "MongoDB & Mongoose", category: "Backend", level: "Proficient" },
  { name: "Docker", category: "Tools", level: "Proficient" },
  { name: "Git & GitHub", category: "Tools", level: "Advanced" },
];

export const PROJECTS: Project[] = [
  {
    title: "Bus Service Booking System",
    description:
      "A full-stack bus booking platform with bus search, route management and real-time seat booking, JWT-based authentication, Razorpay payment integration and automated email notifications for bookings.",
    tags: ["React.js", "Node.js", "MongoDB", "JWT", "Docker"],
    link: "https://github.com/Miliritgithub",
    repo: "https://github.com/Miliritgithub",
  },
  {
    title: "ZapFlow",
    description:
      "An event-driven workflow automation platform (Zapier clone) — a microservices-based system with custom trigger-action pipelines, using Apache Kafka and the Transactional Outbox Pattern for reliable, scalable async processing.",
    tags: ["Node.js", "Next.js", "Prisma", "PostgreSQL", "Apache Kafka", "Docker"],
    link: "https://github.com/Miliritgithub/Zapflow",
    repo: "https://github.com/Miliritgithub/Zapflow",
  },
  {
    title: "AI Interviewer",
    description:
      "An AI-powered mock interview platform that generates role-based questions, evaluates responses, and delivers instant feedback.",
    tags: ["React.js", "Node.js", "Express.js", "AI Integration"],
    link: "https://github.com/Miliritgithub/AI-Interviewer",
    repo: "https://github.com/Miliritgithub/AI-Interviewer",
  },
  {
    title: "Spotlight App",
    description:
      "A full-stack web application featuring dynamic content discovery, RESTful API integration, and a responsive user interface.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/Miliritgithub/spotlight-app",
    repo: "https://github.com/Miliritgithub/spotlight-app",
  },
];

export const CONTACT = {
  email: "swati.mukherjee139@gmail.com",
  phone: "+91 92336 75495",
  location: "Kharagpur, West Bengal / India",
  github: "https://github.com/Miliritgithub",
  linkedin: "https://linkedin.com/in/swati-mukherjee",
  website: "https://github.com/Miliritgithub",
  resume: "/Swati_Mukherjee_FullStack.pdf",
};
