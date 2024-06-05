"use client";

import { SLIDESHOW_SETTINGS } from "@/lib/constants/slider";
import { smallProjects } from "@/lib/data/projects/smallProjectsData";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageLink } from "./ImageLink";

export const Carousel = () => {
  return (
    <Slider {...SLIDESHOW_SETTINGS}>
      {smallProjects.map((project, index) => (
        <div key={index} className="px-2">
          <div className="overflow-hidden shadow-lg cursor-pointer border border-black dark:border-grey-darkest">
            <ImageLink project={project} />

            <div className="p-6 bg-transparent">
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-base mb-4">
                {project.description}
              </p>
              <div className="flex mt-4 gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-colors rounded-full bg-[length:200%] text-xs text-white py-1 px-3 hover:bg-center transition-all duration-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};
