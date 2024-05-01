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
            Witness the beauty of nature through our lens, as we showcase
            stunning landscapes that evoke wonder and appreciation for the
            environment.
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default ProjectSection;
