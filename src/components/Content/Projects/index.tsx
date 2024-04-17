"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { smallProjects } from "@/lib/data/projects/smallProjectsData";
import { ImageLink } from "./ImageLink";

const ProjectSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className=" py-20 px-4 mt-[30vh]">
      <div className="container mx-auto w-[70vw]">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-black dark:text-white">
            Our Works
          </h2>
          <p className="text-xl mt-4 mx-auto leading-relaxed max-w-3xl">
            Witness the beauty of nature through our lens, as we showcase
            stunning landscapes that evoke wonder and appreciation for the
            environment.
          </p>
        </div>
        <Slider {...settings}>
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
      </div>
    </section>
  );
};

export default ProjectSection;
