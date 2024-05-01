"use client";

import { useAnimation, motion } from "framer-motion";
import useResponsiveRootMargin from "@/hooks/responsiveRootMargin";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect } from "react";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  children: ReactNode;
};

export const AnimationWrapper = ({ children }: Props) => {
  const controls = useAnimation();
  const rootMargin = useResponsiveRootMargin();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
