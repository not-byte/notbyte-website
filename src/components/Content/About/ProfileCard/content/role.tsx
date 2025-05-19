"use client";

import React from "react";
import { useProfileContext } from "./context";
import { Collaborator } from "@/lib/model/profile";

const roleConfig = {
  // Colors
  red: "bg-gradient-to-r from-red-500 to-red-950 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer hover:bg-red-800 m-1",

  blue: "bg-gradient-to-r from-blue-500 to-blue-950 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer hover:bg-blue-800 m-1",

  yellow:
    "bg-gradient-to-r from-yellow-500 to-yellow-950 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer hover:bg-yellow-800 m-1",

  pink: "bg-gradient-to-r from-pink-500 to-pink-950 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer hover:bg-pink-800 m-1",

  purple:
    "bg-gradient-to-r from-purple-500 to-purple-950 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer hover:bg-purple-800 m-1",
};

export const Roles = () => {
  const { roles } = useProfileContext<Collaborator>();
  return (
    <div className="py-3 flex flex-wrap justify-center">
      {roles.map((role, index) => {
        return (
          <span
            key={index}
            className={roleConfig[role.color as keyof typeof roleConfig]}
          >
            {role.name}
          </span>
        );
      })}
    </div>
  );
};
