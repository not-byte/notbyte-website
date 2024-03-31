import React, { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/UI/Button";
import ThemeSwitch from "../ThemeSwitch-debug";
import Dialog from "@/UI/Dialog";
import { onClose, onOk } from "./actions";
import { Contact } from "./Contact";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-4 fixed w-full bg-grey-lightest text-black dark:bg-black dark:text-white lg:px-8 z-20">
      <Suspense fallback={<div>Loading...</div>}>
        <Dialog title="Contact" onClose={onClose} onOk={onOk}>
          <Contact />
        </Dialog>
      </Suspense>
      <Link href={"/"}>
        <Logo />
      </Link>
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
