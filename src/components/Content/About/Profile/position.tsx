import React from "react";
import { useProfileContext } from "./profileContext";

export const Position = () => {
  const profile = useProfileContext();

  return (
    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
      {profile.position}
    </p>
  );
};
