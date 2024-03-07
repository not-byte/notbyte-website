import React from "react";
import { useProfileContext } from "./profileContext";

export const Name = () => {
  const profile = useProfileContext();

  return (
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
      {profile.name}
    </h3>
  );
};
