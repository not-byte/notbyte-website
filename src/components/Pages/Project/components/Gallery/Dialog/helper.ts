import { Dimmension } from "./model";

export const shouldImageBeScaled = (dimmensions: Dimmension) => {
  if (dimmensions.width * 0.7 < dimmensions.height) return true;
  else return false;
};
