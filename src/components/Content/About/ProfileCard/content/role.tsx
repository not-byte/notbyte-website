"use client";

import React from "react";
import { useProfileContext } from "./context";
import { Collaborator } from "@/lib/model/profile";

export const Roles = () => {
  const { roles } = useProfileContext<Collaborator>();
  return (
    <div className="pb-3 pt-3">
      {roles.map((role, index) => {
        return (
          <span
            key={index}
            className={`bg-gradient-to-r from-${role.color}-500 to-${role.color}-900 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer hover:bg-${role.color}-800 m-1`}
          >
            {role.name}
          </span>
        );
      })}
    </div>
  );
};
