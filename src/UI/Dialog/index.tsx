"use client";

import React, { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { redirectToPage } from "./close";
import DialogContext from "./dialogContext";
import { FaTimesCircle } from "react-icons/fa";

type Props = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Dialog({ title, onClose, children }: Props) {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");
  const pathname = usePathname();

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
    redirectToPage(pathname);
    onClose();
  }, [onClose, pathname]);

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeDialog]);

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <DialogContext.Provider value={{ closeDialog }}>
        <dialog
          ref={dialogRef}
          className="w-full p-4 lg:w-[75%] xl:w-[50%] lg:px-16 lg:py-12 rounded-xl shadow-lg bg-transparent backdrop-blur-2xl text-gray-200 border border-grey-light transition-all "
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h1 className=" text-4xl md:text-6xl font-semibold text-gradient-colors">
                {title}
              </h1>
              <button
                onClick={closeDialog}
                className="rounded-full p-1 inline-flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <FaTimesCircle className="w-8 h-8" />
              </button>
            </div>
            <div className="mb-6 text-gray-400">{children}</div>
          </div>
        </dialog>
      </DialogContext.Provider>
    ) : null;

  return dialog;
}
