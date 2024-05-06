import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLink, FaReact } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { BsGithub } from "react-icons/bs";
import { Link2 } from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "JobInTech, Casablanca",
    description:
      "I graduated after 6 months of studying. I learned about the full stack, React, Next.js, TypeScript, Tailwind, and MongoDB. I also learned about Git and GitHub.",
    icon: React.createElement(FaGithubSquare),
    date: "July 2023 - Dec 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Ark-X Talent Factory, Casablanca",
    description:
      "Created and completed development of an e-commerce website using MERN technologies. The website features a responsive design, user authentication, and a secure payment system.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - Dec 2023",
  },
  {
    title: "Freelancer",
    location: "",
    description:
      "As a full-stack developer working as a freelancer, I have constructed a front-end, responsive touristic guide website using Next.js 14, Tailwind CSS, and Chadcn UI, FramerMotion, incorporating multilingual support via i18next and i18nexus, and I am currently open to full-time opportunities..",
    icon: React.createElement(FaReact),
    date: "February 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    icons: [
      {
        iconsLogo: React.createElement(BsGithub),
        link: "https://github.com/juan-gutierrez-dev/word-analytics",
      },
      {
        iconsLogo: React.createElement(FaLink),
        link: "https://word-analytics.vercel.app/",
      },
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    icons: [
      {
        iconsLogo: React.createElement(BsGithub),
        link: "https://github.com/juan-gutierrez-dev/word-analytics",
      },
      {
        iconsLogo: React.createElement(FaLink),
        link: "https://word-analytics.vercel.app/",
      },
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    icons: [
      {
        iconsLogo: React.createElement(BsGithub),
        link: "https://github.com/juan-gutierrez-dev/word-analytics",
      },
      {
        iconsLogo: React.createElement(FaLink),
        link: "https://word-analytics.vercel.app/",
      },
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
