"use client";

import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useResponsiveRootMargin from "@/hooks/responsiveRootMargin";

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

type Props = { children: ReactNode; heading: ReactNode };

const About = ({ children, heading }: Props) => {
  const controls = useAnimation();
  const rootMargin = useResponsiveRootMargin(); // Using custom hook
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin, // Using responsive rootMargin
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <>
      {heading}

      <motion.div
        ref={ref}
        className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:justify-start 2xl:gap-12 overflow-hidden usm:mt-[0vh] wqhd:mt-[0vh]"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </>
  );
};

export default About;
