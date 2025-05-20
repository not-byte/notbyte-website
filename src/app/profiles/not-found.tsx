import React from "react";
import NotFoundTemplate from "@/components/NotFoundTemplate/NotFoundTemplate";

export function generateMetadata() {
  return {
    title: "Profile not found",
    description: "The profile you are looking for might have been removed or is temporarily unavailable.",
  };
}

export default async function NotFound() {
  return (
    <NotFoundTemplate title="Profile not found" message="The profile you are looking for might have been removed or is temporarily unavailable."/>
  );
};
