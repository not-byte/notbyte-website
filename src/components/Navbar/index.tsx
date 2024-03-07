"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/UI/Button";
import { useTheme } from "next-themes";
import ThemeSwitch from "../ThemeSwitch-debug";
import Dialog from "@/UI/Dialog";
import { onClose, onOk } from "./actions";
import { Contact } from "./Contact";
import { shimmer, toBase64 } from "@/UI/shimmer";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [image, setImage] = useState<string>("/logo-white.png");

  useEffect(() => {
    setImage(resolvedTheme === "dark" ? "/logo-white.png" : "/logo-black.png");
  }, [resolvedTheme]);

  return (
    <nav className="flex justify-between items-center px-4 py-4 fixed w-full bg-grey-lightest text-black dark:bg-black dark:text-white lg:px-8">
      <Suspense fallback={<div>Loading...</div>}>
        <Dialog title="Contact" onClose={onClose} onOk={onOk}>
          <Contact />
        </Dialog>
      </Suspense>
      <div className="flex items-center space-x-2">
        <Image
          src={image}
          alt="logo"
          width={30}
          height={30}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(20, 20))}`}
        />
        <span className="text-xl font-semibold">notByte</span>
      </div>
      <div className="flex justify-center gap-8 items-center">
        <ThemeSwitch />
        <Button className="bg-colors text-lg  rounded-none">
          <Link href="/?showDialog=y">
            <span>get in touch</span>
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
