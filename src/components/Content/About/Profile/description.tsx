import React from "react";
import { useProfileContext } from "./profileContext";

export const Description = () => {
  const profile = useProfileContext();

  return (
    <p className="text-gray-600 dark:text-gray-300 text-center mb-3">
      {profile.description}
    </p>
  );
};
