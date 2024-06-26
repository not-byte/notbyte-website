import React from "react";
import { CollaboratorItem } from "./Collabarator";
import { AnimationWrapper } from "./AnimationWrapper";
import { Collaborator } from "@/lib/model/profile";

type Props = {
  collaborators: Collaborator[];
};
export const Collabarators = ({ collaborators }: Props) => {
  return (
    <div className="mt-[30vh]">
      {" "}
      <h2 className="text-5xl wqhd:text-7xl text-black dark:text-white  text-center font-semibold ">
        Collaborators
      </h2>
      <AnimationWrapper>
        <div className="flex flex-wrap justify-center gap-4 ">
          {collaborators.map((collaborator, index) => (
            <CollaboratorItem key={index} collaborator={collaborator} />
          ))}
        </div>
      </AnimationWrapper>
    </div>
  );
};
