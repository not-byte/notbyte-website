"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const AnimationWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="bg-transparent border border-black dark:border-grey-darkest p-4 sm:p-6 md:p-10 w-full sm:w-[30vw] md:w-[20vw] lg:w-[15vw] xl:w-[18vw] wqhd:w-[15vw] h-auto transition hover:bg-colors hover:border-none chipped-corner chipped-corner-white dark:chipped-corner-night mt-20"
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};
