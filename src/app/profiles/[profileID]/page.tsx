/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { profiles } from "@/lib/data/profile/profileData";
import ProfileComp from "@/components/Pages/Profile";
import { BasicInfoAnimationWrapper } from "@/components/Pages/Profile/components/BasicInfo/AnimationWrapper";
import { BasicInfoSection } from "@/components/Pages/Profile/components/BasicInfo";
import { ExperienceSection } from "@/components/Pages/Profile/components/Experience";
import { SkillsSection } from "@/components/Pages/Profile/components/Skills";
import { SkillsSectionAnimationWrapper } from "@/components/Pages/Profile/components/Skills/AnimationWrapper";
import { EducationSectionAnimationWrapper } from "@/components/Pages/Profile/components/Education/AnimationWrapper";
import { EducationSection } from "@/components/Pages/Profile/components/Education";
import { ProfileFallback } from "@/components/Pages/Profile/profileShell";

interface Props {
  params: {
    profileID: string;
  };
}

export async function generateStaticParams() {
  return profiles.map((profile) => ({
    profileID: profile.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const id = params.profileID;
  const profile = profiles.find((item) => item.id === id);

  if (!profile) {
    return {
      title: "profile not found",
      description: "no description beacuse profile was not found",
    };
  }

  return {
    title: {
      default: `profile of ${profile.name}`,
      template: `%s | Profile of ${profile.name}`,
    },
    description: profile.shortDescription,
    alternates: {
      canonical: `/profiles/${profile.id}`,
    },
  };
}

const ProfilePage = ({ params }: Props) => {
  const id = params.profileID;
  const profile = profiles.find((item) => item.id === id);

  if (!profile) {
    return <ProfileFallback />;
  }

  return (
    <ProfileComp
      profile={profile}
      BasicInfo={
        <BasicInfoAnimationWrapper>
          <BasicInfoSection profile={profile} />
        </BasicInfoAnimationWrapper>
      }
      Experience={<ExperienceSection experience={profile.experience} />}
      Education={
        <EducationSectionAnimationWrapper>
          <EducationSection educations={profile.education} />
        </EducationSectionAnimationWrapper>
      }
      ProfileSummary={
        <>
          {profile.awards ? (
            <SkillsSectionAnimationWrapper>
              <SkillsSection awards={profile.awards!} />
            </SkillsSectionAnimationWrapper>
          ) : null}
        </>
      }
    />
  );
};

export default ProfilePage;
