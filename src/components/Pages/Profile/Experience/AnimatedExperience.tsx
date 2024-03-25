"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ExperienceProps {
  ExperienceWrapper: ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
  },
};

export const AnimatedExperience: React.FC<ExperienceProps> = ({
  ExperienceWrapper,
}) => {
  return (
    <motion.div
      variants={containerVariants}
      className="space-y-6 flex flex-col items-center"
    >
      {ExperienceWrapper}
    </motion.div>
  );
};
