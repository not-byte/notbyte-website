"use client";

import { motion, useAnimation } from "framer-motion";
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

const getXOffset = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 200;
  } else if (width < 1024) {
    return 500;
  } else {
    return 1000;
  }
};

const variants = {
  hidden: {
    x: getXOffset(),
    opacity: 0,
    scale: 0.8,
    rotate: 15,
    duration: 0.6,
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 20,
      restDelta: 0.001,
      duration: 0.6,
    },
  },
  transition: {
    type: "spring",
    damping: 10,
    stiffness: 20,
    restDelta: 0.001,
    delay: 0.3,
    delayChildren: 0.3,
  },
};

export const EducationSectionAnimationWrapper = ({
  EducationContentComponent,
}: {
  EducationContentComponent: ReactNode;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    rootMargin: "-250px 0px",
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.section
      initial="hidden"
      className="w-full py-8 overflow-hidden mt-[25vh]"
      ref={ref}
      animate={controls}
      variants={variants}
    >
      {EducationContentComponent}
    </motion.section>
  );
};
