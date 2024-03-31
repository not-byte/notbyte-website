import { FAQItem } from "./FAQItem";
import { faqs } from "./data";

const FaqSection = () => {
  return (
    <div className="p-6 space-y-6 w-full flex justify-center flex-col items-center overflow-hidden mt-[30vh]">
      <h1 className="text-7xl text-black dark:text-white mb-20">FAQ</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};

export default FaqSection;
