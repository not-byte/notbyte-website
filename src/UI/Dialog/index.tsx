"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { redirectToPage } from "./close";
import DialogContext from "./dialogContext";
import { FaTimesCircle } from "react-icons/fa";

type Props = {
  title: string;
  onClose: () => void;
  onOk: () => void;
  children: React.ReactNode;
};

export default function Dialog({ title, onClose, onOk, children }: Props) {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");
  const pathname = usePathname();

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
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const closeDialog = () => {
    dialogRef.current?.close();
    redirectToPage(pathname);
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <DialogContext.Provider value={{ closeDialog }}>
        <dialog
          ref={dialogRef}
          className="w-[50%] h-[70%] p-16 rounded-xl shadow-lg bg-transparent backdrop-blur-md text-gray-200 border transition-all "
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-6xl font-semibold text-gradient-colors">
                {title}
              </h1>
              <button
                onClick={closeDialog}
                className="rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <FaTimesCircle className="w-12 h-12" />
              </button>
            </div>
            <div className="mb-6 text-gray-400">{children}</div>
          </div>
        </dialog>
      </DialogContext.Provider>
    ) : null;

  return dialog;
}
