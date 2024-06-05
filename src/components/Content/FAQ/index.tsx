import { faqs } from "@/lib/data/FAQ";
import { FAQItem } from "./FAQItem";

const FaqSection = () => {
  return (
    <div className="p-6 space-y-6 wqhd:w-[60vw] xl:w-[70vw] md:w-[75vw] sm:w-[90vw] flex justify-center flex-col items-center overflow-hidden mt-[30vh]">
      <h2 className="text-5xl wqhd:text-7xl text-black dark:text-white mb-20 font-semibold">
        FAQ
      </h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};

export default FaqSection;
