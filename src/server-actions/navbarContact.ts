"use server";

import { ContactSchema } from "@/lib/validators/contact";
import { createTransport } from "nodemailer";
import {mailToUserTemplate} from "@/lib/templates/mailtoUserTemplate";
import {mailToSelfTemplate} from "@/lib/templates/mailToSelfTemplate";

//dialog modification related stuff onClose
// does nothing beacuse it does not have to do anything
export async function onClose() {}

//server side  contact validation
//sends email to the user and validates the form data before sending
export async function send(formData: FormData) {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    let errorMessage = "";
    validatedFields.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ":" + issue.message + ". ";
    });

    return {
      success: false,
      message: errorMessage,
      error: true,
      fieldValues: null,
    };
  }

  const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.verify()
  } catch (error: any) {
    return {
      message: "Something went wrong" + error.message,
      error: true,
      success: false,
      fieldValues: null,
    };
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: validatedFields.data.email,
    subject: `Someone left a sender_message on your site`,
    html: mailToUserTemplate(validatedFields),
  };
  const mailSelfOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message from ${validatedFields.data.email}`,
    html: mailToSelfTemplate(validatedFields),
  }

  try {
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(mailSelfOptions)
    return {
      message: "Successfully sent, Thank you!",
      error: false,
      success: true,
      fieldValues: {
        name: "",
        email: "",
        message: "",
      },
    }
  } catch (error: any) {
    return {
      message: "Something went wrong" + error.message,
      error: true,
      success: false,
      fieldValues: null,
    }
  }
}
