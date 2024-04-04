"use client";
import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import useSectionInView from "@/hooks/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100, x: -100 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: { delay: 0.06 * i },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 1);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>my skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, i) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
            className="bg-white border border-black/10 rounded-lg px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
