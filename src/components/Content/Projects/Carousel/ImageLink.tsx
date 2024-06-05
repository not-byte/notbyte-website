"use client";

import { shimmer, toBase64 } from "@/UI/shimmer";
import { SmallProject } from "@/lib/model/project";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  project: SmallProject;
}

export const ImageLink = ({ project, className }: ImageProps) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        className="aspect-w-21 aspect-h-9 mb-4 rounded-full"
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05, filter: "grayscale(100%)" }}
      >
        <div className="relative w-full h-0 pb-[42.86%]">
          <Image
            className={cn(
              "absolute top-0 left-0 w-full h-full transform hover:scale-110 transition duration-700 ease-in-out",
              className
            )}
            src={project.imageUrl}
            alt={project.title}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 300)
            )}`}
            layout="fill"
            objectFit="cover"
            quality={50}
          />
        </div>
      </motion.div>
    </Link>
  );
};
