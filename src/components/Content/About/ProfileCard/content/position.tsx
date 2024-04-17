"use client";

import React from "react";
import { useProfileContext } from "./context";

export const Position = () => {
  const { position } = useProfileContext();
  return (
    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{position}</p>
  );
};
