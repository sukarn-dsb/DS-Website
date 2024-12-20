import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string | string[];
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services does Designing Solutions offer?",
    answer:
      "At Designing Solutions, we specialize in a wide range of IT and Telecom services, including website development, eCommerce solutions, mobile and web application development, UI/UX design, software development, technology consultancy, and project management. Our solutions are tailored to meet the unique needs of businesses across industries.",
    value: "item-1",
  },
  {
    question: "Why should I choose Designing Solutions for my business needs?",
    answer:
      "With over 17 years of experience, we bring a wealth of expertise in IT and Telecom. Our client-centric approach ensures we understand your goals and deliver customized, cost-effective, and high-quality solutions. Our proven offshore development capabilities make us a reliable and affordable partner for businesses globally.",
    value: "item-2",
  },
  {
    question: "How does Designing Solutions ensure project success?",
    answer:
      "We follow a structured methodology that includes thorough planning, idea generation, team collaboration, rigorous testing, and seamless implementation. Our experienced team works closely with clients at every stage, ensuring projects are delivered on time, within budget, and aligned with your business objectives.",
    value: "item-3",
  },
  {
    question: "What engagement models do you offer?",
    answer: [
      "Fixed Cost Model: Best for well-defined projects with a fixed budget.",
      "Time & Material Model: Ideal for projects requiring flexibility and control.",
      "Partnership Model: Designed for long-term collaboration and business growth.",
      "Hourly Model: Perfect for projects with evolving requirements.",
    ],
    value: "item-4",
  },
  {
    question: "What industries does Designing Solutions serve?",
    answer:
      "We cater to a diverse range of industries, with particular expertise in IT and Telecom. Our clients span sectors like eCommerce, education, healthcare, real estate, and more. Whether you’re a startup or an enterprise, we have the experience and resources to support your digital transformation journey.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>
              {Array.isArray(answer) ? (
                <ul className="list-disc pl-6 space-y-2">
                  {answer.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{answer}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
