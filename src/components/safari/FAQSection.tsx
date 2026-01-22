import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What should I wear for the desert safari?",
    answer: "We recommend wearing comfortable, loose-fitting clothing. Light colors are best as they reflect heat. Bring sunglasses, a hat, and sunscreen. For evening safaris, consider bringing a light jacket as temperatures can drop after sunset.",
  },
  {
    question: "Is the dune bashing safe for children?",
    answer: "Yes, our dune bashing is conducted by professional drivers with years of experience. However, we recommend that children be at least 4 years old. Pregnant women and people with back problems should avoid dune bashing.",
  },
  {
    question: "What's included in the safari packages?",
    answer: "All packages include hotel pickup and drop-off, professional guide, refreshments, and activities as listed. Premium packages include BBQ dinner, entertainment shows, and additional activities like camel riding and sandboarding.",
  },
  {
    question: "Can I customize my safari experience?",
    answer: "Absolutely! We offer customizable packages to suit your preferences. Whether you want a private tour, special dietary requirements, or specific activities, our team can arrange everything. Contact us to discuss your needs.",
  },
  {
    question: "What's the best time for a desert safari?",
    answer: "The best time is from October to April when temperatures are pleasant. Evening safaris (3-4 PM departure) are most popular as you can enjoy the sunset. Morning safaris offer cooler temperatures and unique lighting for photography.",
  },
  {
    question: "How do I book and what's the cancellation policy?",
    answer: "You can book directly through our website or contact us. We require 24-hour advance booking. Free cancellation is available up to 24 hours before the tour. Refunds are processed within 5-7 business days.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know before your adventure.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-lg px-6 border shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
