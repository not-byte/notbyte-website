"use client";

import { shimmer, toBase64 } from "@/UI/shimmer";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { slideAnimation } from "@/UI/motion";

type Props = {
  description: string;
  bannerUrl: string;
};
export const Banner = ({ description, bannerUrl }: Props) => {
  return (
    <motion.div
      className={` overflow-hidden rounded-lg shadow-lg mt-[10vh]`}
      {...slideAnimation("right")}
    >
      <Image
        alt={description}
        width={1000}
        height={1000}
        quality={100}
        layout="responsive"
        src={bannerUrl || "/logo-black.png"}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 200))}`}
      />
    </motion.div>
  );
};
