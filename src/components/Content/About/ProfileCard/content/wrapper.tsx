import React, { ReactNode } from "react";

type Props = { children: ReactNode };
export const Wrapper = ({ children }: Props) => {
  return <div className="flex flex-col items-center">{children}</div>;
};
