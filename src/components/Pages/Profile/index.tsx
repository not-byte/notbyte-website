"use client";

import { motion } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./profile.module.css";
import Image from "next/image";
import { shimmer, toBase64 } from "@/UI/shimmer";
import { Profile } from "@/lib/model/profile";

interface PageProps {
  profile: Profile;
  BasicInfo: ReactNode;
  Experience: ReactNode;
  Education: ReactNode;
  ProfileSummary: ReactNode;
}

const ProfileComp = ({
  profile,
  BasicInfo,
  Experience,
  Education,
  ProfileSummary,
}: PageProps) => {
  const [fixed, setFixed] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setFixed(false);
    }, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center sm:flex-row  justify-start p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white 2xl:pt-[20vh]">
        <motion.div
          className={styles.block}
          data-fixed={fixed}
          layoutId={String(profile.id)}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt={profile.shortDescription}
            width={500}
            height={500}
            quality={100}
            layout="responsive"
            src={profile.image || "/logo-black.png"}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
          />
        </motion.div>
        <div className="flex flex-col ">{BasicInfo}</div>
      </div>
      {Experience}
      {Education}
      {ProfileSummary}
    </div>
  );
};

export default ProfileComp;
