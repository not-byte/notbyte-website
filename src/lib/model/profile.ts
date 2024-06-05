import { Social } from "./social";

export interface Profile {
  id: string;
  socials: Social[];
  image: string;
  longDescription: string;
  shortDescription: string;
  name: string;
  position: string;
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  education: Education[];
  experience: Experience[];
  awards?: Award[];
  certifications?: Certification[];
}

export interface Award {
  title: string;
  date: Date;
  issuer: string;
  description?: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: Date;
}

export interface Experience {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}

export interface PersonalInfo {
  dob?: Date;
  nationality?: string;
  languages: string[];
}

export interface SmallProfile {
  id: string;
  socials: Social[];
  image: string;
  description: string;
  name: string;
  position: string;
}

export interface Collaborator extends SmallProfile {
  roles: Role[];
}

interface Role {
  name: string;
  color: "purple" | "blue" | "red" | "green";
}
