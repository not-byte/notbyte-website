"use client";

import { Button } from "@/UI/Button";
import React from "react";
import { useFormStatus } from "react-dom";

export const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      isLoading={pending}
      type="submit"
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition-colors duration-200"
    >
      Send Message
    </Button>
  );
};
