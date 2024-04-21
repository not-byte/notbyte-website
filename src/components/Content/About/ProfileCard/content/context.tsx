import { SmallProfile } from "@/lib/model/profile";
import { createContext, useContext } from "react";

//setting this as any is a hack to provide extended SmallProfile further in the code
const ProfileContext = createContext<any>(null);

export const useProfileContext = <T extends SmallProfile>(): T => {
  const context = useContext<T>(ProfileContext);
  if (!context) {
    throw new Error("Profile context failed");
  }
  return context;
};

export default ProfileContext;
