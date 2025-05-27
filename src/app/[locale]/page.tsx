import Header from "@/components/Header";
import About from "@/components/Content/About";
import ProfileWrapper from "@/components/Content/About/ProfileCard/ProfileWrapper";
import Timeline from "@/components/Content/Plans";
import FaqSection from "@/components/Content/FAQ";
import ProjectSection from "@/components/Content/Projects";
import { Chakra_Petch } from "next/font/google";
import { smallProfiles } from "@/lib/data/profile/smallProfileData";
import { useTranslations } from "next-intl";

const chakra = Chakra_Petch({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <main className="flex justify-center items-center h-full flex-col gap-10 w-full overflow-x-hidden">
      <div className="h-screen flex flex-col justify-center w-full items-center px-4 sm:px-8 md:px-16">
        <span className="text-xl md:text-2xl lg:text-3xl text-center">
          {t("subtitle")}
        </span>
        <h1
          className={`${chakra.className} w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-clip-text text-4xl md:text-5xl lg:text-7xl wqhd:text-8xl  lowercase z-10 text-center`}
        >
          <span className="text-night dark:text-white">{t("title")}</span>
          <span className="text-gradient-colors">
            <span> </span>
            {t("web_alchemy")}
          </span>
        </h1>
      </div>
      <Header />
      <About
        heading={
          <h2 className="text-5xl wqhd:text-7xl font-semibold text-gray-800 dark:text-gray-200 mb-[5vh]">
            {t("meet_team")}
          </h2>
        }
      >
        <ProfileWrapper profiles={smallProfiles} />
      </About>
      <Timeline />
      <ProjectSection />
      <FaqSection />
    </main>
  );
}
