export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction: string) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};

export const scaleAnimation = {
  initial: {
    scale: 0,
    opacity: 0,
    transition: { ...transition, delay: 0.2 },
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const rotateAnimation = {
  initial: {
    rotate: -45, // Start from a -45 degrees rotation
    opacity: 0,
    transition: { ...transition, delay: 0.3 },
  },
  animate: {
    rotate: 0, // Rotate back to 0 degrees
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    rotate: 45, // Rotate to 45 degrees on exit
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const pathDrawingAnimation = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { ...transition, duration: 1.5 },
  },
};

export const listContainerAnimation = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const listItemAnimation = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { ...transition } },
};

export const flipAnimation = {
  initial: {
    rotateY: 90,
    opacity: 0,
    transition: { ...transition, delay: 0.1 },
  },
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    rotateY: -90,
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};
