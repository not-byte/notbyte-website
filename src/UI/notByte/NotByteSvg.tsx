"use client";

import { cn } from "@/lib/utils";
import { AnimationControls, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

const DEFAULT_ANIMATION_SHINE_COUNT = 1;

export const NotByteSvg = ({
  width,
  controls,
  includeSurroundingSquare,
  strokeColor,
  strokeWidth,
  className,
  shineAfterFinish, //not yet implemented, idea is for it to shine after the animation finishes
}: {
  width: number;
  controls: AnimationControls[];
  includeSurroundingSquare: boolean;
  strokeColor: string;
  strokeWidth: number;
  shineAfterFinish: boolean;
  className?: string;
}) => {
  const [animationFinished, setAnimationFinished] = useState<boolean>(false);
  const [shineCount, setShineCount] = useState<number>(0);
  const [shine, setShine] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (shine && animationFinished) {
      timer = setTimeout(() => {
        setShine(false);
        setShineCount((count) => count + 1);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [shine, animationFinished]);

  useEffect(() => {
    if (
      shineCount < DEFAULT_ANIMATION_SHINE_COUNT &&
      shineAfterFinish &&
      animationFinished
    ) {
      setShine(true);
    }
  }, [shineCount, shineAfterFinish, animationFinished]);

  const path = includeSurroundingSquare
    ? "M.01,0v2048h2047.97V0H.01ZM585.16,1755.4h-292.57v-292.55h292.57l-292.57-292.57V292.57h292.57v1462.83ZM1755.44,877.71h-292.6l292.6,292.57v585.12h-877.71V292.57h585.12l292.6,292.57v292.57Z"
    : "M585.16,1755.4h-292.57v-292.55h292.57l-292.57-292.57V292.57h292.57v1462.83ZM1755.44,877.71h-292.6l292.6,292.57v585.12h-877.71V292.57h585.12l292.6,292.57v292.57Z";

  return (
    <div className={cn("sticky top-80", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
        className="w-full h-auto"
        width={width}
        height={width}
      >
        <g fill="transparent" stroke={strokeColor} strokeWidth={strokeWidth}>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={controls[0]}
            transition={transition}
            d={path}
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={controls[1]}
            transition={transition}
            x="1170.3"
            y="1170.29"
            width="292.55"
            height="292.55"
          />
          <motion.rect
            initial={{ pathLength: 0 }}
            animate={controls[2]}
            transition={transition}
            x="1170.3"
            y="585.14"
            width="292.55"
            height="292.55"
            onAnimationComplete={() => setAnimationFinished(true)}
          />
        </g>
      </svg>
      {shine && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="shine-effect" />
        </div>
      )}
      <style jsx>{`
        .shine-effect {
          width: 200%;
          height: 200%;
          position: absolute;
          top: -200%;
          left: -200%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 70%
          );
          transform: rotate(90deg);
          animation: shine 3s linear;
        }

        @keyframes shine {
          0% {
            top: -200%;
            left: -200%;
          }
          100% {
            top: 100%;
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};
