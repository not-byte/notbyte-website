//opengraph image creation for dynamic metadata
import { profiles } from "@/lib/data/profile/profileData";
import {defaultOgImage, profileOgImage} from "@/UI/og";
import {headers} from "next/headers";

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

  const imagePath = profile?.image ?? "/logo-black.png";

  const host = headers().get("host")!;
  const protocol = host.startsWith("localhost") ? "http" : "https";

  // url has to be absolute
  const imageUrl = `${protocol}://${host}${imagePath}`;

  const altString = profile?.name ?? "Profile picture";

  if(!profile) {
    return defaultOgImage();
  }

  return profileOgImage({imageUrl, altString})
}
