import React from "react";
import { SmallProfile } from "@/lib/model/profile";
import { AnimationWrapper } from "./AnimatedCard";
import ProfileCard from "./content";

type Props<T> = {
  profiles: T[];
};

const ProfileWrapper = <T extends SmallProfile>({ profiles }: Props<T>) => {
  return (
    <>
      {profiles.map((profile, index: number) => (
        <AnimationWrapper key={index}>
          <ProfileCard profile={profile} />
        </AnimationWrapper>
      ))}
    </>
  );
};

export default ProfileWrapper;
