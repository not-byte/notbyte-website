"use client";
import React from "react";
import { useProfileContext } from "./context";

export const Name = () => {
  const { name } = useProfileContext();
  return (
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 pageHeader ">
      {name}
    </h3>
  );
};
