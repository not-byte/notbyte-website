"use client";
import React, { useState, useEffect } from "react";
import NotByte from "@/UI/notByte/NotByte";

export default function Header() {
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width >= 2560 && height >= 1440) {
      return 1024;
    } else if (width >= 1920 && height >= 1080) {
      return 768;
    } else if (width >= 1366 && height >= 768) {
      return 576;
    } else {
      return 384;
    }
  }

  return (
    <NotByte
      durations={[5, 2, 2]}
      includeSurroundingSquare={true}
      size={size}
      strokeWidth={2}
    />
  );
}
