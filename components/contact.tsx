"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import {  toast } from "sonner";

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
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        Please contact me at{" "}
        <a className="underline" href="mailto:elyoussefiismail18@gmail.com">
        elyoussefiismail18@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.warning("Something went wrong");
            return;
          } else if (data) {
            toast.success("Email sent successfully!");
          }
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          type="email"
          name="email"
          required
          maxLength={50}
          className="px-4 h-14 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rlg p-4 border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          name="message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
