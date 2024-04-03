import { ReactNode } from "react";
import { Social } from "@/lib/model/social";
import { SocialIcon } from "react-social-icons";
import { MotionImageLink } from "./MotionImageLink";

type PostProps = {
  socials: Social[];
  image: string;
  description: string;
  name: string;
  position: string;
  id: string;
  info?: ReactNode;
};

const ProfileCardServer = ({ profile }: { profile: PostProps }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <MotionImageLink profile={profile} />

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 pageHeader ">
          {profile.name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
          {profile.position}
        </p>
        <div className="flex justify-center space-x-3">
          {profile.socials.map((item, index: number) => {
            return <SocialIcon key={index} url={item.url} />;
          })}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-3 pageContent ">
          {profile.description}
        </p>
      </div>
    </>
  );
};

export default ProfileCardServer;
