"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

// Custom hook for responsive rootMargin
const useResponsiveRootMargin = () => {
  const [rootMargin, setRootMargin] = useState("-100px 0px");

  useEffect(() => {
    const updateRootMargin = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Example breakpoint for mobile devices
        setRootMargin("-50px 0px");
      } else {
        setRootMargin("-100px 0px");
      }
    };

    window.addEventListener("resize", updateRootMargin);
    updateRootMargin(); // Initialize on mount

    return () => window.removeEventListener("resize", updateRootMargin);
  }, []);

  return rootMargin;
};

const About = ({ ProfileWrapper }: { ProfileWrapper: ReactNode }) => {
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
      <h1 className="text-5xl wqhd:text-7xl font-semibold text-gray-800 dark:text-gray-200 mb-[5vh]">
        Meet our team!
      </h1>

      <motion.div
        ref={ref}
        className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:justify-start 2xl:gap-12 overflow-hidden usm:mt-[0vh] wqhd:mt-[0vh]"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {ProfileWrapper}
      </motion.div>
    </>
  );
};

export default About;
