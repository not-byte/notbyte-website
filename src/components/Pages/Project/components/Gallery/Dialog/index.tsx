/* eslint-disable indent */
import withPortal from "@/UI/HOCS/portal";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { shimmer, toBase64 } from "@/UI/shimmer";
import { Dimmension } from "./model";
import { shouldImageBeScaled } from "./helper";

//custom gallery dialog component

type Props = {
  close: () => void;
  imagesUrls: string[];
  currentIndex: number;
};

const GalleryDialogCompoent = ({ imagesUrls, currentIndex, close }: Props) => {
  const [dimmensions, setDimmensions] = useState<Dimmension>({
    width: 0,
    height: 0,
  });
  const [activeIndex] = useState<number>(currentIndex);

  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current;
      setDimmensions({ width, height });
    }
  }, []);

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-50 flex items-center justify-center p-4  bg-opacity-50 backdrop-blur-md"
    >
      {/*
          <div
        className="p-20 hover:scale-110 duration-300 cursor-pointer"
        onClick={slide("left")}
      >
        <FaArrowLeft size={60} color="white" />
      </div>*/}
      <div
        className={`bg-white rounded-lg overflow-hidden shadow-xl transform transition-all
        ${
          shouldImageBeScaled(dimmensions)
            ? "w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%]"
            : "w-[95%] sm:w-[85%] md:w-[80%] lg:w-[75%]"
        }`}
      >
        <Image
          ref={ref}
          className="w-full"
          width={100}
          height={100}
          quality={100}
          src={imagesUrls[activeIndex]}
          layout="responsive"
          alt="project gallery item"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(200, 200)
          )}`}
        />
      </div>

      {/*     <div
        className="p-20 hover:scale-110 duration-300 cursor-pointer"
        onClick={slide("right")}
      >
        <FaArrowRight size={60} color="white" />
      </div>*/}
    </div>
  );
};

export default withPortal(GalleryDialogCompoent, { portalId: "#dialog" });
