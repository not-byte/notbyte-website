import React from "react";
import { MotionImageLink } from "../MotionImageLink";
import { useProfileContext } from "./context";

export const Image = () => {
  const profile = useProfileContext();
  return <MotionImageLink profile={profile} />;
};
