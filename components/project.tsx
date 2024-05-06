"use client";

import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export const Project = ({
  title,
  description,
  tags,
  imageUrl,
  icons,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  // useTransform we add it here so that the initial
  // of the usescroll (opacity, scale) starting from 0
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className=" group mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" bg-gray-100 max-w-[43rem] rounded-xl border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem]  hover:bg-gray-200/70 hover:shadow-md transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[21.3rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          {/* we did mt-auto :bz we it append to the flex in the div */}
          <ul className="flex flex-wrap  mt-7 gap-2 ">
            {tags.map((tag, i) => (
              <li
                className="bg-black/[0.65] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full  dark:text-white/70"
                key={i}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex justify-end sm:justify-normal  mt-4 gap-2 sm:mt-auto sm:group-even:ml-[10rem]">
            {icons.map((icon, i) => (
              <>
                <a
                  className=" sm:bg-black/[0.60] sm:mt-0 sm:mr-0 mr-2 mt-4 px-2 py-2 sm:text-[1.1rem] text-[1.4rem]  tracking-wider sm:text-white  text-black/65 rounded-xl   dark:text-white/70 dark:bg-black/[0.3]"
                  href={icon.link}
                  target="_blank"
                  key={i}
                >
                  {icon.iconsLogo}
                </a>
              </>
            ))}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={`Project ${title}`}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl || group-odd:[initial] group-even:-left-40 || group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 || group-even:group-hover:rotate-2 group-even:group-hover:translate-y-3 group-even:group-hover:translate-x-3 transition"
        />
      </section>
    </motion.div>
  );
};
