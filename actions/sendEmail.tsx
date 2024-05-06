"use server";

import ContactForm from "@/email/contact-form";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("email");

  // serverside validation
  if (
    (!message && !senderEmail) ||
    typeof message !== "string" ||
    typeof senderEmail !== "string"
  )
    return "Invalid form data";

  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "elyoussefiismail18@gmail.com",
      subject: "Ismail El Youssefi",
      //text: `${message} from ${senderEmail}`,
      react: <ContactForm message={message} senderEmail={senderEmail} />,
      reply_to: senderEmail,
    });
  } catch (error) {
    return { error };
  }

  return { data };
};
