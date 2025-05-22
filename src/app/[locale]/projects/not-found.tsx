import React from "react";
import NotFoundTemplate from "@/components/NotFoundTemplate/NotFoundTemplate";


export function generateMetadata() {
  return {
    title: "Project not found",
    description: "The project you are looking for might have been removed or is temporarily unavailable.",
  };
}

export default async function NotFound() {
  return (
    <NotFoundTemplate title="Project not found" message="The project you are looking for might have been removed or is temporarily unavailable."/>
  );
};
