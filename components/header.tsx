"use client";

import {
  activeSectionContext,
  useActiveSectionContext,
} from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";

export default function Header() {
  const { setActiveSelection, activeSelection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.6rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08 }}
              className="h-3/4 flex justify-center items-center relative"
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 sm:px-2 py-3 hover:text-gray-950 transition",
                  { "text-gray-950": activeSelection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSelection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSelection && (
                  <motion.span
                    layoutId="activeSelection"
                    transition={{ type: "spring", stiffness: 480, damping: 30 }}
                    className="bg-[#dbd7fb]/50   blur-sm rounded-full absolute inset-0 -z-10"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
