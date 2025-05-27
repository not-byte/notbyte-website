"use client";

import React from "react";
import { useProfileContext } from "./context";
import { useTranslations } from "next-intl";

export const Position = () => {
  const { position } = useProfileContext();
  const t = useTranslations("Homepage.profiles");
  return (
    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
      {t(position)}
    </p>
  );
};
