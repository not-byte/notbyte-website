"use client";

import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Function to determine the x-axis offset based on the viewport width
const getXOffset = () => {
  if (typeof window === "undefined") return 300;
  const width = window.innerWidth;
  if (width < 768) {
    return 300;
  } else if (width < 1024) {
    return 500;
  } else {
    return 1000;
  }
};

const cardVariants = (direction: "left" | "right") => {
  const xOffset = getXOffset();
  return {
    hidden: { opacity: 0, y: 20, x: direction === "left" ? -xOffset : xOffset },
    show: { opacity: 1, y: 0, x: 0 },
  };
};

interface ExperienceItemProps {
  index: number;
  ExperienceItemServer: ReactNode;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  index,
  ExperienceItemServer,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    rootMargin: "-150px 0px",
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={controls}
      className="w-full md:w-3/4 lg:w-2/3 xl:w-[60vw] 2xl:w-[60vw] wqhd:w-[60vw] 4k:w-[60vw]"
      variants={cardVariants(index % 2 === 0 ? "left" : "right")}
    >
      {ExperienceItemServer}
    </motion.div>
  );
};
