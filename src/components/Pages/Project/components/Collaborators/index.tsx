import React from "react";
import { Collaborator } from "@/lib/model/project";
import { CollaboratorItem } from "./Collabarator";

type Props = {
  collaborators: Collaborator[];
};
export const Collabarators = ({ collaborators }: Props) => {
  return (
    <div className="mt-[25vh]">
      {" "}
      <h2 className="text-7xl text-black dark:text-white  text-center font-semibold ">
        Collaborators
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {collaborators.map((collaborator, index) => (
          <CollaboratorItem key={index} collaborator={collaborator} />
        ))}
      </div>
    </div>
  );
};
