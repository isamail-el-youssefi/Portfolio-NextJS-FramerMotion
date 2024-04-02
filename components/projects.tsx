"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React, { useEffect } from "react";
import { Project } from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  //  const { ref } = useSectionInView("Projects", 0.5);
  // i can just do custome hook above but i want to leave this like that 
  // sp that i remember why i did the refactoring
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSelection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSelection("Projects");
    }
  }, [inView, setActiveSelection, timeOfLastClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>my projects</SectionHeading>
      <div>
        {projectsData.map((projects, i) => (
          <React.Fragment key={i}>
            <Project {...projects} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
