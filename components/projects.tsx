"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React, { useEffect } from "react";
import { Project } from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.50,
  });
  const { setActiveSelection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSelection("Projects");
    }
  }, [inView, setActiveSelection]);

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
