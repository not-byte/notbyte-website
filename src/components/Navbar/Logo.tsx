"use client";

import { shimmer, toBase64 } from "@/UI/shimmer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [image, setImage] = useState<string>("/logo-white.png");

  useEffect(() => {
    setImage(resolvedTheme === "dark" ? "/logo-white.png" : "/logo-black.png");
  }, [resolvedTheme]);

  return (
    <div className="flex items-center space-x-2">
      <Image
        src={image}
        alt="logo"
        width={30}
        height={30}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(30, 30))}`}
      />
      <span className="text-xl font-semibold">notByte</span>
    </div>
  );
};

export default Logo;
