import Header from "@/components/Header";
import About from "@/components/Content/About";
import { Chakra_Petch } from "next/font/google";
import { mockProfileData } from "@/lib/constants/mockProfileData";

const chakra = Chakra_Petch({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <main className="flex justify-center items-center h-full flex-col gap-10  w-[100%] overflow-x-hidden ">
        <div className="h-[100vh] flex flex-col justify-center w-[100%] items-center">
          <span className="text-3xl">
            raise your online identity to the new, higher level.
          </span>
          <h1
            className={`${chakra.className} w-[50%]  bg-clip-text text-[6rem] lowercase  z-10 text-center`}
          >
            <span className="text-night dark:text-white">
              Unleash the digital future, with our
            </span>
            <span className="bg-colors text-transparent bg-clip-text">
              <span> </span>Web Alchemy_
            </span>
          </h1>
        </div>
        <Header />
        <About profiles={mockProfileData} />
      </main>
    </>
  );
}
