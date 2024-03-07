import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" }) // Minimum length requirement
    .max(50, { message: "Name must be 50 characters or less" }), // Maximum length limit
  email: z
    .string()
    .email({ message: "Invalid Email" }) // Email format validation
    .max(100, { message: "Email must be 100 characters or less" }), // Maximum length limit for email
  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters long" }) // Minimum length requirement
    .max(200, { message: "Message must be 200 characters or less" }), // Maximum length limit for message
});

export type Contact = z.infer<typeof ContactSchema>;
