import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLink, FaReact } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import travel from "@/public/travel.png";
import petcare from "@/public/petcare.png";
import evento from "@/public/evento.png";
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
    title: "Petcare Organizer",
    description:
      "Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte",
    tags: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Prisma",
      "NextAuth",
      "Jwt",
      "Zod",
      "Shadcn UI",
    ],
    icons: [
      {
        iconsLogo: React.createElement(BsGithub),
        link: "https://github.com/isamail-el-youssefi/petorganizer",
      },
      {
        iconsLogo: React.createElement(FaLink),
        link: "https://petorganizer-liard.vercel.app",
      },
    ],
    imageUrl: petcare,
  },
  {
    title: "Word Stats",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Css"],
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
  {
    title: "Evento",
    description:
      "Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Prisma"],
    icons: [
      {
        iconsLogo: React.createElement(BsGithub),
        link: "https://github.com/isamail-el-youssefi/Events-Around-You",
      },
      {
        iconsLogo: React.createElement(FaLink),
        link: "https://events-around-you.vercel.app/",
      },
    ],
    imageUrl: evento,
  },
  {
    title: "Travel Bag",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Css"],
    icons: [
      {
        iconsLogo: React.createElement(BsGithub),
        link: "https://github.com/isamail-el-youssefi/Travel-Bag",
      },
      {
        iconsLogo: React.createElement(FaLink),
        link: "https://holiday-bag.vercel.app/",
      },
    ],
    imageUrl: travel,
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
  "Express",
  "Framer Motion",
  "Adobe Apps",
] as const;
