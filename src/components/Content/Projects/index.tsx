/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Carousel } from "./Carousel";

const ProjectSection = () => {
  return (
    <section className=" py-20 px-4 mt-[30vh]">
      <div className="container mx-auto w-[70vw]">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-black dark:text-white">
            Our Works
          </h2>
          <p className="text-xl mt-4 mx-auto leading-relaxed max-w-3xl">
            We have worked on some incredible projects that demonstrate our
            expertise and innovation. Our projects are a testament to our team's
            dedication and hard work. Check out some of our projects below.{" "}
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default ProjectSection;
