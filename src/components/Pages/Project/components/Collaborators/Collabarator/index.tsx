"use client";

import ProfileCard from "@/components/Content/About/ProfileCard/content";
import { Collaborator } from "@/lib/model/project";

interface CollaboratorItemProps {
  collaborator: Collaborator;
}

export const CollaboratorItem: React.FC<CollaboratorItemProps> = ({
  collaborator,
}) => (
  <div className="bg-transparent border border-black dark:border-grey-darkest p-4 sm:p-6 md:p-10 w-full sm:w-[30vw] md:w-[20vw] lg:w-[15vw] xl:w-[18vw] wqhd:w-[15vw] h-auto transition hover:bg-colors hover:border-none chipped-corner chipped-corner-white dark:chipped-corner-night mt-20">
    <ProfileCard
      profile={collaborator}
      info={
        <ProfileCard.ContentWrapper>
          <ProfileCard.Image />
          <ProfileCard.Name />
          <ProfileCard.Roles />
          <ProfileCard.Description />
        </ProfileCard.ContentWrapper>
      }
    />
  </div>
);
