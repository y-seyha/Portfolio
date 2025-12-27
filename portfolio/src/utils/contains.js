import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
import { Code2, Sparkles, Download } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Yoeun Seyha",
  title: "FullStack Developer",
  email: "yoeunseyha11@gmail.com",
  location: "Phnom Penh, Cambodia",
  tagLine: "Building modern web applications with React & Node.js",
  resume: "",
  bio: [
    "Full-stack developer with hands-on experience building responsive web applications using React, Node.js, Express, and MongoDB. I enjoy creating clean, user-friendly interfaces and writing maintainable, efficient code.",
    "Passionate about performance optimization, scalability, and implementing best practices across frontend and backend development. I thrive on solving challenging problems and learning new technologies along the way.",
    "Comfortable working with modern tools like Vite, Tailwind CSS, and Vitest to deliver high-quality, scalable solutions. Always eager to contribute to collaborative projects and help teams achieve their goals.",
  ],
};

export const SOCIAL_LINKS = {
  github: "https://github.com/y-seyha",
  linkedin: "https://www.linkedin.com/in/yoeun-seyha-742a712ba",
};

export const NAV_LINK = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  {
    label: "Years Experience",
    value: "1+",
  },
  {
    label: "Project Completed",
    value: "6+",
  },
  {
    label: "Technology",
    value: "10+",
  },
];

export const ABOUT_STATS = [
  { label: "Lines of Code", value: "50k+" },
  { label: "Projects Completed", value: "6+" },
  { label: "Hours Coding", value: "1200+" },
];

export const ABOUT_KNOWLEDGE = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and modern UI with React & Tailwind CSS.",
    icon: SiReact,
  },
  {
    title: "Backend & APIs",
    description:
      "Designing scalable and secure RESTful APIs using Node.js and Express.",
    icon: SiNodedotjs,
  },
  {
    title: "Database & Data Modeling",
    description: "Efficient MongoDB schema design for scalable applications.",
    icon: SiMongodb,
  },
  {
    title: "Testing & Debugging",
    description:
      "Writing unit & integration tests with Vitest and fixing bugs efficiently.",
    icon: Code2,
  },
  {
    title: "Performance & Scaling",
    description:
      "Optimizing apps to handle high traffic and maintain fast response time.",
    icon: Sparkles,
  },
  {
    title: "Version Control & Collaboration",
    description: "Using Git/GitHub for team collaboration and code management.",
    icon: Download,
  },
];
