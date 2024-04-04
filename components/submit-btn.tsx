"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  // i did not use it bz it will ruin my animation
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all duration-300   hover:bg-gray-950 dark:bg-white dark:bg-opacity-10 "
    >
      Submit
      <FaPaperPlane className="text-xs ml-1 opacity-75 transition-all duration-300 group-hover:-translate-x-[4px] group-hover:translate-y-[2px] group-hover:scale-100 group-focus:opacity-0 group-focus:-translate-y-3 group-focus:translate-x-4 group-focus:scale-125" />{" "}
    </button>
  );
}
