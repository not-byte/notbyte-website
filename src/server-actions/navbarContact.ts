"use server";

import { ContactSchema } from "@/lib/validators/contact";
import { createTransport } from "nodemailer";

export async function onClose() {} // does nothing beacuse it does not have to do anything

export interface ContactFormState {
  message: string;
  error: boolean;
  success: boolean;
  fieldValues: {
    name: string;
    email: string;
    message: string;
  } | null;
}

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

  const mail_from = process.env.EMAIL_FROM;
  if (!mail_from)
    return {
      success: false,
      message: `Email from ${mail_from} is not set`,
      error: true,
      fieldValues: null,
    };

  const transporter = createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "pawellinek2@gmail.com",
      pass: "fsd",
    },
  });

  const mailOptions = {
    from: mail_from,
    to: validatedFields.data.email,
    subject: `Someone left a sender_message on your site`,
    text: `hey there, ${validatedFields.data.name} with email: ${validatedFields.data.name} 
      has reached out to you on your portfolio site. \n
      ------------------------------------------------\n
      ${validatedFields.data.name}
      `,
  };

  async function asyncsendMail() {
    return new Promise<ContactFormState>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
          resolve({
            message: "Something went wrong" + error.message,
            error: true,
            success: false,
            fieldValues: null,
          });
        } else {
          resolve({
            message: "Successfully sent, Thank you!",
            error: false,
            success: true,
            fieldValues: {
              name: "",
              email: "",
              message: "",
            },
          });
        }
      });
    });
  }

  return await asyncsendMail();
}
