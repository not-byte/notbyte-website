import withPortal from "@/UI/HOCS/portal";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { shimmer, toBase64 } from "@/UI/shimmer";
import { Dimmension } from "./model";
import { shouldImageBeScaled } from "./helper";

//custom gallery dialog component

type Props = {
  close: () => void;
  image: string;
};

const GalleryDialogCompoent = ({ close, image }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [dimmensions, setDimmensions] = useState<Dimmension>({
    width: 0,
    height: 0,
  });

  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current;
      setDimmensions({ width, height });
    }
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-50 flex items-center justify-center p-4  bg-opacity-50 backdrop-blur-md"
    >
      <div
        className={`bg-white rounded-lg overflow-hidden shadow-xl transform transition-all ${
          shouldImageBeScaled(dimmensions) ? "w-[45%]" : "w-[80%]"
        }`}
      >
        <Image
          ref={ref}
          className="w-full"
          width={100}
          height={100}
          quality={100}
          src={image}
          layout="responsive"
          alt="project gallery item"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(200, 200)
          )}`}
        />
      </div>
    </div>
  );
};

export default withPortal(GalleryDialogCompoent, { portalId: "#dialog" });
