"use server";

import { ContactSchema } from "@/lib/validators/contact";

export async function onClose() {
  console.log("Modal has closed");
}

export async function onOk() {
  console.log("Ok was clicked");
}

const wait = (ms: number) => new Promise((acc, _) => setTimeout(acc, ms));

//server side create contact validation
export async function create(formData: FormData) {
  await wait(2000);

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

    return { error: errorMessage };
  }
}
