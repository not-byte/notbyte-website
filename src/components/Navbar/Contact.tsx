"use client";

import React, { useContext } from "react";
import { create } from "./actions";
import { ContactSchema } from "@/lib/validators/contact";
import toast from "react-hot-toast";
import DialogContext from "@/UI/Dialog/dialogContext";
import { FormButton } from "./button";

export const Contact = () => {
  const { closeDialog } = useContext(DialogContext);

  const createContact = async (formData: FormData) => {
    const validatedFields = ContactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      let errorMessage = "";
      validatedFields.error.issues.forEach((issue) => {
        errorMessage =
          errorMessage + issue.path[0] + ":" + issue.message + ". ";
      });

      toast.error(errorMessage);
      return;
    }

    const res = await create(formData);
    if (res?.error) {
      toast.error(res.error);
    }
    toast.success("Sucessfuly send form");
    closeDialog();
  };

  return (
    <form
      action={createContact}
      id="contactForm"
      className="w-full max-w-lg mx-auto"
    >
      <div className="input-group mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          name="name"
          className="mt-1 p-2 w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="input-group mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 p-2 w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="input-group mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 p-2 w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
        ></textarea>
      </div>
      <div className="form-actions flex justify-end">
        <FormButton />
      </div>
    </form>
  );
};
