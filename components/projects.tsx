import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import Image from "next/image";
import { Project } from "./project";

export default function Projects() {
  return (
    <section>
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



