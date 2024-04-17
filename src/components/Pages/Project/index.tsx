"use client";

import { shimmer, toBase64 } from "@/UI/shimmer";
import { ProjectData, Milestone, Collaborator } from "@/lib/model/project";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./project.module.css";
import { MilestoneItem } from "./components/Milestone";
import { CollaboratorItem } from "./components/Collabarator";
import { slideAnimation } from "@/UI/motion";

// Assuming the Status enum and other interfaces are in a separate file, import them
// import { Status, ProjectData, Milestone, Collaborator } from './path-to-your-interfaces-file';

interface ProjectDetailsProps {
  project: ProjectData;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className="w-[70vw] mx-auto px-6 py-8 sm:px-8 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{project.title}</h1>
      <motion.div
        className={`${styles.block} overflow-hidden rounded-lg shadow-lg`}
        {...slideAnimation("right")}
      >
        <Image
          alt={project.description}
          width={1000}
          height={1000}
          quality={100}
          layout="responsive"
          src={project.bannerUrl || "/logo-black.png"}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(300, 200)
          )}`}
        />
      </motion.div>
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>
      <div className="mb-8">
        <strong className="font-semibold text-lg text-gray-800">Tags:</strong>
        <span className="ml-4 inline-flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer hover:bg-blue-800"
            >
              {tag}
            </span>
          ))}
        </span>
      </div>
      <div className="mb-6">
        <strong className="font-semibold">Status:</strong>{" "}
        <span className="text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">
          {project.status}
        </span>
      </div>
      <div className="mb-6">
        <strong className="font-semibold">Technologies:</strong>
        <span className="ml-2 inline-flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-800 text-sm font-semibold px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </span>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Milestones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.milestones.map((milestone, index) => (
          <MilestoneItem key={index} milestone={milestone} />
        ))}
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Collaborators</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {project.collaborators.map((collaborator, index) => (
          <CollaboratorItem key={index} collaborator={collaborator} />
        ))}
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {project.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery item ${index + 1}`}
            className="w-full h-32 sm:h-48 object-cover rounded-lg"
          />
        ))}
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Feedback</h2>
      <div className="space-y-4">
        {project.feedback &&
          project.feedback.map((feedback, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <strong>From:</strong> {feedback.from}
              <p className="text-gray-700 dark:text-gray-300">
                {feedback.text}
              </p>
            </div>
          ))}
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">External Links</h2>
      <ul className="list-disc pl-6">
        {project.externalLinks.map((link, index) => (
          <li key={index} className="mb-2">
            <a
              href={link}
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 hover:underline"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
