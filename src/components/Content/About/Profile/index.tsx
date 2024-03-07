"use client";

import { ReactNode } from "react";

import ProfileContext from "./profileContext";
import { Social } from "@/lib/model/social";
import { Socials } from "./socialIcons";
import { Position } from "./position";
import { Wrapper } from "./wrapper";
import { Img } from "./image";
import { Description } from "./description";
import { Name } from "./name";

type PostProps = {
  socials: Social[];
  image: string;
  description: string;
  name: string;
  position: string;
  info?: ReactNode;
};

const Profile = ({ profile }: { profile: PostProps }) => {
  const { socials, image, description, name, position, info } = profile;
  return (
    <ProfileContext.Provider
      value={{ socials, description, name, image, position }}
    >
      {info ?? DEFAULT_INFO}
    </ProfileContext.Provider>
  );
};

Profile.Socials = Socials;
Profile.Position = Position;
Profile.Wrapper = Wrapper;
Profile.Image = Img;
Profile.Description = Description;
Profile.Name = Name;

//default info represents the post composed of all the available parts
const DEFAULT_INFO = (
  <>
    <Profile.Wrapper>
      <Profile.Image />
      <Profile.Name />
      <Profile.Position />
      <Profile.Socials />
      <Profile.Description />
    </Profile.Wrapper>
  </>
);

export default Profile;
