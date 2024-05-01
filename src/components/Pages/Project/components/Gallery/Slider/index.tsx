"use client";

import { shimmer, toBase64 } from "@/UI/shimmer";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { SLIDESHOW_SETTINGS } from "@/lib/constants/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GalleryDialogCompoent from "../Dialog";

type SliderProps = {
  gallery: string[];
};

export const SliderComp = ({ gallery }: SliderProps) => {
  return (
    <>
      <Slider {...SLIDESHOW_SETTINGS}>
        {gallery.map((image, index) => (
          <SliderItem key={index} image={image} />
        ))}
      </Slider>
    </>
  );
};

type SliderItemProps = {
  image: string;
};

export const SliderItem = ({ image }: SliderItemProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const click = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      className="px-4 hover:scale-95 transition-all duration-300"
      onClick={click}
    >
      <div className="overflow-hidden shadow-lg cursor-pointer rounded-lg min-h-[30vh] relative ">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={`project gallery item `}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(200, 200)
          )}`}
        />
      </div>
      {isOpen ? <GalleryDialogCompoent close={click} image={image} /> : null}
    </div>
  );
};
