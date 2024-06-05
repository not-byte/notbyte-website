import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name must be 50 characters or less" })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        "Name can only contain letters, spaces, hyphens, and apostrophes",
    }),
  email: z
    .string()
    .email({ message: "Invalid Email" })
    .max(100, { message: "Email must be 100 characters or less" }),
  message: z
    .string()
    .min(20, { message: "Message must be at least 20 characters long" })
    .max(400, { message: "Message must be 400 characters or less" })
    .trim(),
});

export type Contact = z.infer<typeof ContactSchema>;
