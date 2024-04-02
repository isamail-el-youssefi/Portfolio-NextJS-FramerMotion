import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import useSectionInView from "@/hooks/hooks";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience", 0.25);

  return (
    <section ref={ref} id="experience">
      <SectionHeading>my experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, i) => (
          <div key={i}>
            <VerticalTimelineElement
              position={i % 2 === 0 ? "right" : "left"}
              visible={inView}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                ...(i < 2 && { marginBottom: "2rem" }) 
              }}
              
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "white",
                fontSize: "1rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </div>
        ))}
      </VerticalTimeline>
    </section>
  );
}
