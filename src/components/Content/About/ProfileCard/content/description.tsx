import React from "react";
import { useProfileContext } from "./context";
import { useTranslations } from "next-intl";

export const Description = () => {
  const { description } = useProfileContext();
  const t = useTranslations("Homepage.profiles");

  return (
    <p className="text-gray-600 dark:text-gray-300 text-center mb-3 pageContent p-5">
      {description}
    </p>
  );
};
