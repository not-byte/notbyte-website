"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Faq } from "@/lib/model/FAQ";

type Props = {
  faq: Faq;
};

export const FAQItem = ({ faq }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  const variants = {
    open: {
      opacity: 1,
      height: contentHeight,
    },
    collapsed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      layout
      initial="collapsed"
      animate={isOpen ? "open" : "collapsed"}
      className="rounded-lg shadow-lg overflow-hidden usm:w-[90%] sm:w-[80%] md:w-[70%] xl:w-[50%] 2xl:w-[40%] "
    >
      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-5 text-left text-base font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none hover:bg-colors"
      >
        <span>{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gray-600"
        >
          <svg
            className="w-5 h-5 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variants}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="overflow-hidden"
          >
            <div ref={contentRef} className="p-5 bg-white">
              <p className="text-gray-700 text-sm">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
