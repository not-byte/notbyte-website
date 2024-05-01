import { Profile } from "@/lib/model/profile";
import React from "react";
import { SocialIcon } from "react-social-icons";

export const BasicInfoSection = async ({ profile }: { profile: Profile }) => {
  return (
    <div className="overflow-hidden">
      <h1 className="text-2xl md:text-3xl lg:text-4xl wqhd:text-5xl font-extrabold dark:text-white text-gray-800 text-center md:text-left">
        {profile.name}
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl wqhd:text-3xl font-semibold dark:text-gray-300 text-gray-600 text-center md:text-left">
        {profile.position}
      </h2>
      <p className="text-sm md:text-md lg:text-xl wqhd:text-2xl pt-4 pr-4 pb-4 dark:text-gray-300 text-gray-600">
        {profile.longDescription}
      </p>
      <div className=" text-xl flex flex-col md:flex-row justify-start items-center mt-4 space-x-0 md:space-x-4">
        <p className="dark:text-white text-gray-800">
          📧 {profile.contact.email}
        </p>
        {profile.contact.phone && (
          <p className="dark:text-white text-gray-800 mt-2 md:mt-0">
            📞 {profile.contact.phone}
          </p>
        )}
      </div>
      <div className="flex justify-center items-center mt-4 lg:justify-start">
        {profile.socials.map((social, index) => (
          <div key={index} className="mr-2 last:mr-0 ">
            <SocialIcon url={social.url} style={{ height: 60, width: 60 }} />
          </div>
        ))}
      </div>
    </div>
  );
};
