import React from "react";
import { AnimatedCard } from "./AnimatedCard";
import { SmallProfile } from "@/lib/model/profile";
import ProfileCardServer from "./ProfileCardServer";

export const ProfileWrapper = ({ profiles }: { profiles: SmallProfile[] }) => {
  return (
    <>
      {profiles.map((profile, index: number) => (
        <AnimatedCard
          key={index}
          ProfileCard={<ProfileCardServer profile={profile} />}
        />
      ))}
    </>
  );
};
