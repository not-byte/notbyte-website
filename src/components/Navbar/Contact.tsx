"use client";

import React, { useContext } from "react";
import { send } from "../../server-actions/navbarContact";
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

    const validatedForm = await send(formData);

    if (validatedForm?.error) {
      toast.error(validatedForm.message);
      return;
    }

    toast.success(validatedForm.message);
    closeDialog();
  };

  return (
    <form
      action={createContact}
      id="contactForm"
      className="w-full  mx-auto p-20"
    >
      <div className="input-group mb-4">
        <label
          htmlFor="name"
          className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          name="name"
          className="mt-1 p-2 w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:bg-darkModeColors dark:focus:border-blue-300"
        />
      </div>
      <div className="input-group mb-4">
        <label
          htmlFor="email"
          className="block text-md  font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 p-2 w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:bg-darkModeColors dark:focus:border-blue-300"
        />
      </div>
      <div className="input-group mb-4">
        <label
          htmlFor="message"
          className="block text-md  font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={8}
          required
          className="mt-1 p-2 w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:bg-darkModeColors dark:focus:border-blue-300"
        ></textarea>
      </div>
      <div className="form-actions flex justify-end">
        <FormButton />
      </div>
    </form>
  );
};
