"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProfileCard from "./Profile";
import { Profile } from "@/lib/model/profile";

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const About = ({ profiles }: { profiles: Profile[] }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px", // This value can be adjusted based on when you want the animation to start
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap justify-center gap-4 sm:gap-6 md:justify-start"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {profiles.map((profile) => (
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 md:p-10 w-full sm:w-[30vw] md:w-[20vw] lg:w-[15vw] xl:w-[15vw] h-auto"
          key={Math.floor(Math.random()) * 100000000}
          variants={cardVariants}
        >
          <ProfileCard profile={profile} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default About;
