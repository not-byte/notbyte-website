import { SmallProfile } from "@/lib/model/profile";
import { createContext, useContext } from "react";

//setting this as any is a hack to provide extended SmallProfile further in the code
const ProfileContext = createContext<any>(null);

export const useProfileContext = <K extends SmallProfile>(): K => {
  const context = useContext<K>(ProfileContext);
  if (!context) {
    throw new Error("Profile context failed");
  }
  return context;
};

export default ProfileContext;
