import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface FAQGroupProps {
  title: string;
  items: FAQItem[];
}

export const FAQGroup: React.FC<FAQGroupProps> = ({ title, items }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200 dark:border-gray-700">
            <AccordionTrigger className="text-lg font-medium text-gray-700 dark:text-gray-200 py-4 hover:text-learnflow-primary">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};