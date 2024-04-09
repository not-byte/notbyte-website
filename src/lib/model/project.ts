export interface SmallProject {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  status: Status;
}

interface Milestone {
  name: string;
  date: string; // Ideally, dates should be in ISO format (e.g., "YYYY-MM-DD")
}

interface Collaborator {
  name: string;
  role: string;
}

interface Feedback {
  from: string;
  text: string;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  creationDate: string; // Format: "YYYY-MM-DD"
  location: string;
  status: Status;
  technologies: string[];
  milestones: Milestone[];
  impact: string;
  challenges: string;
  futurePlans: string;
  externalLinks: string[];
  collaborators: Collaborator[];
  projectManager: string;
  gallery: string[];
  client: string;
  version: string;
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
