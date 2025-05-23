import React, { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/UI/Button";
import ThemeSwitch from "../shared/ThemeSwitch-debug";
import Dialog from "@/UI/Dialog";
import { onClose } from "../../server-actions/navbarContact";
import { Contact } from "../shared/Contact";
import Logo from "./Logo";
import LocaleSwitch from "@/components/shared/LocaleSwitch";
import {getLocale} from "next-intl/server";

export default async function Navbar() {

  const locale = await getLocale();

  return (
    <nav className="flex justify-between items-center px-4 py-4 fixed w-full bg-grey-lightest text-black dark:bg-black dark:text-white lg:px-8 z-20">
      <Suspense fallback={<div>Loading...</div>}>
        <Dialog title="Contact" onClose={onClose}>
          <Contact />
        </Dialog>
      </Suspense>
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className="flex justify-center gap-8 items-center">
        <ThemeSwitch />
        <LocaleSwitch currentLocale={locale} />
        <Link
          scroll={false}
          href={{
            pathname: "",
            query: { showDialog: "y" },
          }}
        >
          <Button className="bg-colors text-lg  rounded-none">
            <span>get in touch</span>
          </Button>
        </Link>
      </div>
    </nav>
  );
};

