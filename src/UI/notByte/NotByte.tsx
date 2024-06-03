"use client";

import React, { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { NotByteSvg } from "./NotByteSvg";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function NotByte({
  durations,
  size,
  includeSurroundingSquare,
  strokeWidth,
  containerClassName,
  svgClassName,
  shineAfterFinish = true,
}: {
  durations: number[];
  size: number;
  includeSurroundingSquare: boolean;
  strokeWidth: number;
  shineAfterFinish: boolean;
  containerClassName?: string;
  svgClassName?: string;
}) {
  const [color, setColor] = useState<string>("#fff");

  const controlsFirst = useAnimation();
  const controlsSecond = useAnimation();
  const controlsThird = useAnimation();

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#fff" : "#000");
  }, [resolvedTheme]);

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
    <div className={cn("opacity-10 absolute top-[20vh]", containerClassName)}>
      <NotByteSvg
        width={size}
        strokeColor={color}
        includeSurroundingSquare={includeSurroundingSquare}
        controls={[controlsFirst, controlsSecond, controlsThird]}
        className={svgClassName}
        strokeWidth={strokeWidth}
        shineAfterFinish={shineAfterFinish}
      />
    </div>
  );
}
