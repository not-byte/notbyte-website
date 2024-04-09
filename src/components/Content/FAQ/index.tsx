import { faqs } from "@/lib/data/FAQ";
import { FAQItem } from "./FAQItem";

const FaqSection = () => {
  return (
    <div className="p-6 space-y-6 w-full flex justify-center flex-col items-center overflow-hidden mt-[30vh]">
      <h1 className="text-5xl wqhd:text-7xl text-black dark:text-white mb-20 font-semibold">
        FAQ
      </h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};

export default FaqSection;
