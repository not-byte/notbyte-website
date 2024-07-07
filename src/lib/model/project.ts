/* eslint-disable no-unused-vars */
import { Collaborator } from "./profile";

export interface SmallProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  status: Status;
}

export interface Milestone {
  name: string;
  date: string; // Ideally, dates should be in ISO format (e.g., "YYYY-MM-DD")
  description: string;
  tags: string[];
  status: Status;
  relatedLinks?: string[];
}

export interface Feedback {
  from: string;
  text: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  bannerUrl: string;
  tags: string[];
  creationDate: string; // Format: "YYYY-MM-DD"
  status: Status;
  milestones: Milestone[];
  challenges: string;
  futurePlans: string;
  collaborators: Collaborator[];
  projectManager: string;
  gallery: string[];
  version: string;
  location?: string;
  impact?: string;
  externalLinks?: string[];
  client?: string;
  license?: string;
  budget?: number;
  feedback?: Feedback[];
}

export enum Status {
  Initiated = "INITIATED",
  InPlanning = "IN_PLANNING",
  InDevelopment = "IN_DEVELOPMENT",
  Completed = "COMPLETED",
  Paused = "PAUSED",
  Cancelled = "CANCELLED",
  OnHold = "ON_HOLD",
  OnGoing = "ONGOING",
}
