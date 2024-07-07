"use server";

import { ContactFormState } from "@/lib/model/contactForm";
import { ContactSchema } from "@/lib/validators/contact";
import { createTransport } from "nodemailer";

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

  const mail_host = process.env.EMAIL_HOST;
  const mail_user = process.env.EMAIL_USER;
  const mail_pass = process.env.EMAIL_PASS;

  if (!mail_user || !mail_host || !mail_pass)
    return {
      success: false,
      message: `Email from ${mail_user} is not set`,
      error: true,
      fieldValues: null,
    };

  const transporter = createTransport({
    host: mail_host,
    port: 465,
    secure: true,
    auth: {
      user: mail_user,
      pass: mail_pass,
    },
  });

  transporter.verify((error) => {
    if (error) {
      return {
        message: "Something went wrong" + error.message,
        error: true,
        success: false,
        fieldValues: null,
      };
    }
  });

  const mailOptions = {
    from: mail_user,
    to: validatedFields.data.email,
    subject: `Someone left a sender_message on your site`,
    html: `
      <div style="font-family: Arial, sans-serif; color: white;">
        <div style="background-color: rgb(30,32,36); padding: 20px; border-radius: 10px; max-width: 600px; margin: auto;">
          <div style="background-color: rgb(15,16,19)">
            <div style="background-image: linear-gradient(30deg, rgba(240,132,97,1.00) 0%, rgba(129,81,156,1.00) 40%, rgba(234,86,87,1.00) 69%, rgba(240,132,97,1.00) 100%); padding: 16px 10px; border-radius: 10px 10px 0 0; color: white; text-align: center;">
              <h1 style="margin: 0;">New Message Notification</h1>
            </div>
            <div style="padding: 20px;">
              <p>Dear <strong>${validatedFields.data.name}</strong>,</p>
              <p>We are excited to inform you that you have received a new message on your portfolio site.</p>
              <div style="background-color: rgb(30,32,36); padding: 10px; border-radius: 5px; margin: 20px 0;">
                <p><strong>From:</strong> ${validatedFields.data.name} (<a href="mailto:${validatedFields.data.email}" style="color: #349beb">${validatedFields.data.email}</a>)</p>
                <p><strong>Message:</strong></p>
                <p style="margin-left: 20px; font-style: italic;">${validatedFields.data.message}</p>
              </div>
              <p>We wanted to let you know that from now on, you will be contacted through Notbyte for any messages received on your portfolio site.</p>
              <p>If you have any questions, feel free to reach out to us at <a href="mailto:support@notbyte.com" style="color: #349beb">support@notbyte.com</a>.</p>
              <p>Best regards,</p>
              <p><strong>The Notbyte Team</strong></p>
            </div>
            <div style="background-image: linear-gradient(30deg, rgba(240,132,97,1.00) 0%, rgba(129,81,156,1.00) 40%, rgba(234,86,87,1.00) 69%, rgba(240,132,97,1.00) 100%); padding: 10px; border-radius: 0 0 10px 10px; color: white; text-align: center;">
              <p style="margin: 0;">&copy; 2024 Notbyte. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  };

  async function asyncsendMail() {
    return new Promise<ContactFormState>((resolve) => {
      transporter.sendMail(mailOptions, function (error: any) {
        //if() {console.log(info)}
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
