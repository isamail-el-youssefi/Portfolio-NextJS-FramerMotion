"use server";

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
  ) {
    return "Invalid form data";
  }
  
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "elyoussefiismail18@gmail.com",
    subject: "Message from form on your portfolio",
    text: `${message} from ${senderEmail}`,
    reply_to: senderEmail,
  });
};
