"use client";

import React from "react";
import { useAnimation } from "framer-motion";
import { NotByteSvg } from "./NotByteSvg";
import { cn } from "@/lib/utils";

export default function NotByte({
  durations,
  size,
  includeSurroundingSquare,
  strokeColor,
  strokeWidth,
  containerClassName,
  svgClassName,
}: {
  durations: number[];
  size: number;
  includeSurroundingSquare: boolean;
  strokeColor: string;
  strokeWidth: number;
  containerClassName?: string;
  svgClassName?: string;
}) {
  const controlsFirst = useAnimation();
  const controlsSecond = useAnimation();
  const controlsThird = useAnimation();

  React.useEffect(() => {
    const sequence = async () => {
      await Promise.all([
        controlsFirst.start({
          pathLength: 1,
          transition: { duration: durations[0] },
        }),
        controlsSecond.start({
          pathLength: 1,
          transition: { duration: durations[1] },
        }),
        controlsThird.start({
          pathLength: 1,
          transition: { duration: durations[2] },
        }),
      ]);
    };

    sequence();
  }, [controlsFirst, controlsSecond, controlsThird, durations]);

  return (
    <div className={cn("opacity-10 z-0 absolute", containerClassName)}>
      <NotByteSvg
        width={size}
        strokeColor={strokeColor}
        includeSurroundingSquare={includeSurroundingSquare}
        controls={[controlsFirst, controlsSecond, controlsThird]}
        className={svgClassName}
        strokeWidth={strokeWidth}
      />
    </div>
  );
}
