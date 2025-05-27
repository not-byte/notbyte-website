/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Carousel } from "./Carousel";
import { useTranslations } from "next-intl";

const ProjectSection = () => {
  const t = useTranslations("Homepage.portfolio");

  return (
    <section className=" py-20 px-4 mt-[30vh]">
      <div className="container mx-auto w-[70vw]">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-black dark:text-white">
            {t("title")}
          </h2>
          <p className="text-xl mt-4 mx-auto leading-relaxed max-w-3xl">
            {t("description")}{" "}
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default ProjectSection;
