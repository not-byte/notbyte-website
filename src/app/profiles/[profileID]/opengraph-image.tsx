//opengraph image creation for dynamic metadata
import { profiles } from "@/lib/data/profile/profileData";
import Image from "next/image";
import { ImageResponse } from "next/og";

export const size = {
  width: 500,
  height: 500,
};

export const contentType = "image/png";

interface PageProps {
  params: {
    profileID: number;
  };
}

export default function og({ params }: PageProps) {
  const id = params.profileID;
  const profile = profiles.find((item) => item.id == String(id));

  return new ImageResponse(
    (
      <Image
        src={profile!.image}
        alt={profile!.shortDescription}
        width={500}
        height={500}
      />
    ),
    size
  );
}
