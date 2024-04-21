"use client";

import { shimmer, toBase64 } from "@/UI/shimmer";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { SLIDESHOW_SETTINGS } from "@/lib/constants/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  gallery: string[];
};
export const Gallery = ({ gallery }: Props) => {
  return (
    <div className="mt-[25vh]">
      <h2 className="text-7xl text-center text-black dark:text-white mb-20 font-semibold">
        Gallery
      </h2>
      <Slider {...SLIDESHOW_SETTINGS}>
        {gallery.map((image, index) => (
          <div key={index} className="px-4">
            <div className="overflow-hidden shadow-lg cursor-pointer rounded-lg min-h-[30vh] relative">
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt={`Gallery item ${index + 1}`}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 700)
                )}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
