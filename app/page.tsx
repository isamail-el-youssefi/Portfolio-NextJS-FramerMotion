"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectioDevider from "@/components/section-devider";
import Skills from "@/components/skills";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectioDevider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <SectioDevider />
      <Contact />
      <Toaster position="bottom-right" />
    </main>
  );
}
