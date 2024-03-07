import React from "react";

export const Wrapper = ({ children }: { children: any }) => {
  return <div className="flex flex-col items-center">{children}</div>;
};
