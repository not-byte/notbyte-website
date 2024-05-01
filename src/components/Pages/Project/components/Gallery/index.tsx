import { SliderComp } from "./Slider";

type Props = {
  gallery: string[];
};
export const Gallery = ({ gallery }: Props) => {
  return (
    <div className="mt-[35vh]">
      <h2 className="text-7xl text-center text-black dark:text-white mb-20 font-semibold">
        Gallery
      </h2>
      <SliderComp gallery={gallery} />
    </div>
  );
};
