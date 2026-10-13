import React from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";

export const faqs = [
  {
    question: "What is the average cost of commercial cleaning in Long Beach?",
    answer:
      "Commercial cleaning services in Long Beach typically range from $0.10 to $0.30 per square foot, depending on facility size, cleaning frequency, and scope of work. Monthly contracts generally start between $300 and $1,500 per month for standard commercial office spaces.",
  },
  {
    question: "What is included in your standard commercial janitorial process?",
    answer:
      "Our commercial cleaning process includes routine surface disinfection, trash removal, vacuuming high-traffic areas, floor mopping, restroom sanitization, and replenishing essential paper products. Custom checklists are tailored to office, medical, or industrial facility compliance requirements during the initial site walkthrough.",
  },
  {
    question: "How quickly can commercial cleaning services begin after requesting a quote?",
    answer:
      "Service typically begins within 24 to 48 hours following the site inspection and proposal sign-off. For emergency cleaning or urgent office onboarding in Long Beach, immediate next-day service setup is available upon request.",
  },
  {
    question: "What compliance and safety standards do your janitorial teams follow?",
    answer:
      "Our janitorial staff follows strict OSHA workplace safety regulations, CDC surface disinfection guidelines, and uses EPA-registered, non-toxic disinfectants. All team members undergo background checks, carry full liability insurance, and receive specialized training for commercial facility protocols.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const FAQ = ({ className }) => (
  <section className={className || "py-16 md:py-32"}>
    <div className="container">
      <div className="max-w-4xl">
        <h2>Frequently Asked Questions</h2>
        <Accordion allowZeroExpanded>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} className="mb-4 bg-gray-50 px-6 py-4 md:px-10">
              <AccordionItemHeading aria-level={3}>
                <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                  <span className="mb-0 text-lg font-bold md:text-xl">{faq.question}</span>
                  <AccordionItemState>
                    {({ expanded }) => (
                      <i className={`fas fa-caret-down ml-4 transform transition-all duration-300 ease-linear ${expanded ? "rotate-180" : "rotate-0"}`}></i>
                    )}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="animate-fadeIn pt-4">
                <p className="mb-0">{faq.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
