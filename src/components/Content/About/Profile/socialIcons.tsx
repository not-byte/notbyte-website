import React from "react";
import { useProfileContext } from "./profileContext";
import { SocialIcon } from "react-social-icons";

export const Socials = () => {
  const profile = useProfileContext();

  return (
    <div className="flex justify-center space-x-3 mb-6">
      {profile.socials.map((item, index: number) => {
        return <SocialIcon key={index} url={item.url} />;
      })}
    </div>
  );
};
