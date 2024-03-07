import { Profile } from "@/lib/model/profile";
import { createContext, useContext } from "react";

const ProfileContext = createContext<Profile | null>(null);

export const useProfileContext = (): Profile => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("Post context failed");
  }
  return context;
};

export default ProfileContext;
