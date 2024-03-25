import React from "react";
import NotByte from "@/UI/notByte/NotByte";

export default function Header() {
  return (
    <NotByte
      durations={[5, 2, 2]}
      includeSurroundingSquare={true}
      size={768}
      strokeWidth={2}
    />
  );
}
