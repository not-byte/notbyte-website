"use client";

import { shimmer, toBase64 } from "@/UI/shimmer";
import CardRedirector from "@/components/shared/cardRedirector";
import { SmallProfile } from "@/lib/model/profile";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MotionImageLink = ({ profile }: { profile: SmallProfile }) => {
  return (
    <CardRedirector>
      <Link href={`/profiles/${profile.id}`} scroll={false}>
        <motion.div
          className=" mb-4 overflow-hidden  w-40 h-40 rounded-full"
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 0.9 }}
          layoutId={String(profile.id)}
        >
          <Image
            width={20}
            height={20}
            quality={1}
            layout="responsive"
            src={profile.image}
            alt={profile.name + "profile image"}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(20, 20)
            )}`}
          />
        </motion.div>
      </Link>
    </CardRedirector>
  );
};
