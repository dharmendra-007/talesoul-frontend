"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full py-10 px-6 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-[#6B2E25] text-center lg:text-left">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center lg:text-left">
            Can&apos;t find the answer you are looking for? <br />
            <span className="underline cursor-pointer">Reach Out to Us</span>
          </p>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">

          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              defaultValue={index === 0 ? "item-0" : undefined} // first open
              className="w-full"
            >
              <AccordionItem
                value={`item-${index}`}
                className={`rounded-xl border-none shadow-sm transition-all`}
              >
                <AccordionTrigger
                  className={`px-5 py-4 hover:no-underline flex justify-between items-center`}
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className={`px-5 pb-4 text-sm leading-relaxed caption !text-white font-light`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}

        </div>
      </div>
    </section>
  );
}
