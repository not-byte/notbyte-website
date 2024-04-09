"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { shimmer, toBase64 } from "@/UI/shimmer";

const projects = [
  {
    id: 1,
    title: "Ocean at Dusk",
    description:
      "A serene ocean scene as the sun sets, casting hues of orange and pink across the water.",
    imageUrl: "/knury.jpg",
    tags: ["Photography", "Nature"],
  },
  {
    id: 2,
    title: "Dancing Dunes",
    description:
      "Capturing the breathtaking beauty of sand dunes through artistic lensmanship.",
    imageUrl: "/knury.jpg",
    tags: ["Photography", "Art Direction"],
  },
  {
    id: 2,
    title: "Dancing Dunes",
    description:
      "Capturing the breathtaking beauty of sand dunes through artistic lensmanship.",
    imageUrl: "/knury.jpg",
    tags: ["Photography", "Art Direction"],
  },
  {
    id: 2,
    title: "Dancing Dunes",
    description:
      "Capturing the breathtaking beauty of sand dunes through artistic lensmanship.",
    imageUrl: "/knury.jpg",
    tags: ["Photography", "Art Direction"],
  },
  // ... more projects
];

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
    <section className=" py-20 px-4 mt-[25vh]">
      <div className="container mx-auto w-[70vw]">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-black dark:text-white">
            My Works
          </h2>
          <p className="text-xl mt-4 mx-auto leading-relaxed max-w-3xl">
            Witness the beauty of nature through our lens, as we showcase
            stunning landscapes that evoke wonder and appreciation for the
            environment.
          </p>
        </div>
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-2">
              <div className="overflow-hidden rounded-3xl shadow-lg cursor-pointer">
                <Image
                  className="w-full transform hover:scale-110 transition duration-700 ease-in-out"
                  src={project.imageUrl}
                  alt={project.title}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(300, 200)
                  )}`}
                  width={300}
                  quality={50}
                  height={200}
                  layout="responsive"
                />
                <div className="p-6 bg-gray-800 rounded-b-3xl">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-base mb-4">
                    {project.description}
                  </p>
                  <div className="flex mt-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-500 text-xs text-white py-1 px-3 rounded-full mr-2"
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
