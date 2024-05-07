"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import useSectionInView from "@/hooks/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.65);
  const { setActiveSelection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-28 mb-28 max-w-[50rem] text-center sm:mb-0 "
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
              delay: 0.2,
            }}
          >
            <Image
              src="/me.jpg"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.25,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <span className="font-bold">Hello, I am Ismail.</span> I am a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold"></span> of experience. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSelection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:shadow-lg hover:shadow-black/[0.23]  transition-all duration-300 "
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-75 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-95 group-focus:opacity-0 group-focus:translate-x-3 group-focus:scale-125 " />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  cursor-pointer bordre hover:shadow-lg hover:shadow-black/[0.12]  transition-all duration-300 border-black/10 dark:bg-white/10"
          href="/ISMAIL-ELYOUSSEFI-RESUME.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className=" opacity-75 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-95 group-focus:opacity-0 group-focus:translate-y-3 group-focus:scale-125 " />
        </a>

        <div className="flex flex-row gap-2 ">
          <a
            className="group bg-white p-[1.31rem] text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full  cursor-pointer border hover:shadow-lg hover:shadow-black/[0.12]  transition-all duration-300 border-black/10 dark:bg-white/10 dark:text-white/60 "
            href="https://www.linkedin.com/in/ismail-el-youssefi/"
            target="_blank"
          >
            <BsLinkedin className="group-hover:text-gray-950 group-hover:scale-[1.18] group-active:scale-105 transition-all duration-300" />
          </a>
          <a
            className="group bg-white p-[1.31rem] text-gray-700 flex items-center gap-2 text-[1.47rem] rounded-full  cursor-pointer border hover:shadow-lg hover:shadow-black/[0.12]  transition-all duration-300 border-black/10 dark:bg-white/10 dark:text-white/60 "
            href="https://github.com/isamail-el-youssefi"
            target="_blank"
          >
            <FaGithubSquare className="group-hover:text-gray-950 group-hover:scale-[1.18] group-active:scale-105 transition-all duration-300" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
