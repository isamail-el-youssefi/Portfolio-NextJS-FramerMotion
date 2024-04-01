import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import Image from "next/image";

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

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  return (
    <section className="group bg-gray-100 max-w-[43rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200/70 hover:shadow-md transition">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[21.3rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap  mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, i) => (
            <li
              className="bg-black/[0.65] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={i}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={`Project ${title}`}
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl || group-odd:[initial] group-even:-left-40"
      />
    </section>
  );
};
