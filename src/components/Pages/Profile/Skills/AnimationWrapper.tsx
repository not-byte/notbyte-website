"use client";

import { motion, useAnimation } from "framer-motion";
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: {
    scale: 0.9,
    opacity: 0,
    x: -100,
    y: 20,
  },
  show: {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      scale: {
        delay: 0.2,
        duration: 0.4,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
      opacity: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
      },
      x: {
        duration: 0.5,
        ease: "easeOut",
      },
      y: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  },
};

export const SkillsSectionAnimationWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    rootMargin: "-150px 0px",
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={controls}
      variants={variants}
      className="mt-[25vh] mx-auto p-10 rounded-lg  transition duration-300  sm:w-[80vw] md:w-[90vw] lg:w-[80vw] xl:w-[80vw] wqhd:w-[60vw]"
    >
      {children}
    </motion.div>
  );
};
