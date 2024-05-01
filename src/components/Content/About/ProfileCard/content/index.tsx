"use client";

import { SmallProfile } from "@/lib/model/profile";
import ProfileContext from "./context";
import { ReactNode } from "react";
import { Wrapper } from "./wrapper";
import { Image } from "./image";
import { Name } from "./name";
import { Position } from "./position";
import { Socials } from "./socials";
import { Description } from "./description";
import { Roles } from "./role";

type Props<T> = {
  profile: T;
  info?: ReactNode;
};

const ProfileCard = <T extends SmallProfile>({ profile, info }: Props<T>) => {
  return (
    <ProfileContext.Provider value={profile}>
      {info ?? DEFAULT_INFO}
    </ProfileContext.Provider>
  );
};

ProfileCard.ContentWrapper = Wrapper;
ProfileCard.Image = Image;
ProfileCard.Name = Name;
ProfileCard.Roles = Roles;
ProfileCard.Position = Position;
ProfileCard.Socials = Socials;
ProfileCard.Description = Description;

const DEFAULT_INFO = (
  <ProfileCard.ContentWrapper>
    <ProfileCard.Image />
    <ProfileCard.Name />
    <ProfileCard.Position />
    <ProfileCard.Socials />
    <ProfileCard.Description />
  </ProfileCard.ContentWrapper>
);

export default ProfileCard;
