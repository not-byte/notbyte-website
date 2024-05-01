"use client";

import { shimmer, toBase64 } from "@/UI/shimmer";
import { SmallProject } from "@/lib/model/project";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ImageLink = ({ project }: { project: SmallProject }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        className=" mb-4 rounded-full"
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05, filter: "grayscale(100%)" }}
      >
        <Image
          className="w-full transform hover:scale-110 transition duration-700 ease-in-out"
          src={project.imageUrl}
          alt={project.title}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(300, 200)
          )}`}
          width={300}
          quality={50}
          height={200}
          layout="responsive"
        />
      </motion.div>
    </Link>
  );
};
