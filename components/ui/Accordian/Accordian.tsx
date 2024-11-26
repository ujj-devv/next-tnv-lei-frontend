import { useState } from "react";

export interface FaqItem {
    id: number;
    documentId: string;
    key: string;
    question: string;
    answer: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }

  export interface FaqsResponse {
    data: FaqItem[];
    meta: {
      pagination: Pagination;
    };
  }

export type AccordionProps = {
  accordionData: FaqItem[];
};

const Accordion = ({ accordionData }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 mx-auto">
      {accordionData?.map(({ key, question, answer }, index) => (
        <div key={key} className="border-b border-gray-300 w-full">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full py-4 text-left"
          >
            <h3 className="text-[#9EA0A0] font-normal text-xl md:text-2xl">
              {question}
            </h3>
            <span>
              {activeIndex === index ? <RxCaretUp /> : <RxCaretDown />}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="p-4 text-[#334155] rounded-b-lg w-full">
              {answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
