"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { redirectToPage } from "./close";
import DialogContext from "./dialogContext";

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
          className="fixed inset-0 m-auto w-[90%] max-w-lg p-5 rounded-xl shadow-lg backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border dark:border-gray-700 transition-all"
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {title}
              </h1>
              <button
                onClick={closeDialog}
                className="rounded-full p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-6 text-gray-600 dark:text-gray-400">
              {children}
            </div>
            <div className="flex justify-end">
              <button
                onClick={clickOk}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </dialog>
      </DialogContext.Provider>
    ) : null;

  return dialog;
}
