import React from "react";
import NotByte from "@/UI/notByte/NotByte";

export default function Header() {
  return (
    <NotByte
      durations={[5, 2, 2]}
      strokeColor="#FFF"
      includeSurroundingSquare={false}
      size={1024}
      strokeWidth={2}
    />
  );
}
