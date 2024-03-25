"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { slideAnimation } from "@/UI/motion";

export const BasicInfoAnimationWrapper = ({
  BasicInfoComponent,
}: {
  BasicInfoComponent: ReactNode;
}) => {
  return (
    <motion.div
      className="ml-10 mt-10 md:mt-0  p-6 rounded-lg flex justify-centerh-full  flex-col w-[90vw] xl:w-[50vw]  "
      {...slideAnimation("right")}
    >
      {BasicInfoComponent}
    </motion.div>
  );
};
