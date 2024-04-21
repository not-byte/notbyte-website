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

interface PageProps {
  params: {
    profileID: string;
  };
}

//the reason we are passing components as children is to render them on the server, for example basicInfo is not rendered on the server but infoServer is,
const ProfilePage = ({ params }: PageProps) => {
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
        <SkillsSectionAnimationWrapper>
          <SkillsSection awards={profile.awards!} />
        </SkillsSectionAnimationWrapper>
      }
    />
  );
};

export default ProfilePage;
