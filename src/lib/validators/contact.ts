import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name must be 50 characters or less" }),
  email: z
    .string()
    .email({ message: "Invalid Email" })
    .max(100, { message: "Email must be 100 characters or less" }),
  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters long" })
    .max(200, { message: "Message must be 200 characters or less" }),
});

export type Contact = z.infer<typeof ContactSchema>;
