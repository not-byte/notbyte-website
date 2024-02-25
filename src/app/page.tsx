import Header from "@/components/Header";
import { Chakra_Petch } from "next/font/google";

const chakra = Chakra_Petch({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <main className="flex  justify-center items-center h-[100vh] bg-white dark:bg-night">
        <h1
          className={`${chakra.className} bg-colors text-transparent bg-clip-text text-[12rem] lowercase -translate-y-[20%] z-10`}
        >
          Coming soon_
        </h1>
        <Header />
      </main>
    </>
  );
}
