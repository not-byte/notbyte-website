import { useTranslations } from "next-intl";
import { SliderComp } from "./Slider";

type Props = {
  gallery: string[];
};
export const Gallery = ({ gallery }: Props) => {
  const t = useTranslations("Projects");

  return (
    <div className="mt-[35vh]">
      <h2 className="text-5xl wqhd:text-7xl text-center text-black dark:text-white mb-20 font-semibold">
        {t("common.gallery")}
      </h2>
      <SliderComp gallery={gallery} />
    </div>
  );
};
