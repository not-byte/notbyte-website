import React from "react";
import { useProfileContext } from "./profileContext";
import Image from "next/image";
import { shimmer, toBase64 } from "@/UI/shimmer";

export const Img = () => {
  const profile = useProfileContext();

  return (
    <div className="w-40 h-40 rounded-full mb-4 overflow-auto">
      <Image
        width={20}
        height={20}
        layout="responsive"
        src={profile.image}
        alt={profile.name + "profile image"}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(20, 20))}`}
      />
    </div>
  );
};
