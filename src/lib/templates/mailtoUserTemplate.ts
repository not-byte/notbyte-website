export function mailToUserTemplate(validatedFields: any): string {
  return `
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
    `;
}