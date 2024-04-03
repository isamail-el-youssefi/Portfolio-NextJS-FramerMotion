"use client";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/hooks";
import { sendEmail } from "@/actions/sendEmial";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 1);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-28 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>contact me</SectionHeading>
      <p className="text-gray-700 -mt-5">
        Please contact me at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formData) => await sendEmail(formData)}
        className="mt-10 flex flex-col"
      >
        <input
          type="email"
          name="email"
          required
          maxLength={50}
          className="px-4 h-14 rounded-lg border border-black/10"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rlg p-4 border border-black/10"
          placeholder="Your message"
          name="message"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all duration-300   hover:bg-gray-950"
        >
          Submit
          <FaPaperPlane className="text-xs ml-1 opacity-75 transition-all duration-300 group-hover:-translate-x-[4px] group-hover:translate-y-[2px] group-hover:scale-100 group-focus:opacity-0 group-focus:-translate-y-3 group-focus:translate-x-4 group-focus:scale-125" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
