import React from "react";
import NotFoundTemplate from "@/components/NotFoundTemplate/NotFoundTemplate";

export function generateMetadata() {
  return {
    title: "Page not found",
    description: "The page you are looking for might have been removed or is temporarily unavailable.",
  };
}

export default async function NotFound() {
  return (
    <NotFoundTemplate title="Page not found" message="The page you are looking for might have been removed or is temporarily unavailable."/>
  );
};
