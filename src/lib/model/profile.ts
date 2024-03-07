import { Social } from "./social";

export interface Profile {
  socials: Social[];
  image: string;
  description: string;
  name: string;
  position: string;
}
