"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { useProfileContext } from "./context";

export const Socials = () => {
  const { socials } = useProfileContext();
  return (
    <div className="flex justify-center space-x-3">
      {socials.map((item, index) => {
        return <SocialIcon key={index} url={item.url} />;
      })}
    </div>
  );
};
