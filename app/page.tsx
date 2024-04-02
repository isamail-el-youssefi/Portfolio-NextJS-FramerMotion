import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectioDevider from "@/components/section-devider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectioDevider />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
