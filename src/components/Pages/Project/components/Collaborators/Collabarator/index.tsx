"use client";

import ProfileCard from "@/components/Content/About/ProfileCard/content";
import { Collaborator } from "@/lib/model/profile";
import { motion } from "framer-motion";

interface CollaboratorItemProps {
  collaborator: Collaborator;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const CollaboratorItem: React.FC<CollaboratorItemProps> = ({
  collaborator,
}) => (
  <motion.div
    variants={cardVariants}
    className="bg-transparent border border-black dark:border-grey-darkest p-4 sm:p-6 md:p-10 w-full sm:w-[80vw] md:w-[50vw] lg:w-[30vw] xl:w-[28vw] 2xl:w-[20vw]  wqhd:w-[15vw] h-auto transition hover:bg-colors hover:border-none chipped-corner chipped-corner-white dark:chipped-corner-night mt-20"
  >
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
  </motion.div>
);
