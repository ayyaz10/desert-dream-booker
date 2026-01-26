import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What should I wear for the Dubai desert safari?",
    answer: "We recommend wearing comfortable, loose-fitting clothing. Light colors are best as they reflect heat. Bring sunglasses, a hat, and sunscreen. For evening safaris, consider bringing a light jacket as Dubai desert temperatures can drop after sunset.",
  },
  {
    question: "Is the dune bashing safe for children?",
    answer: "Yes, our dune bashing is conducted by Dubai-licensed professional drivers with years of experience. However, we recommend that children be at least 4 years old. Pregnant women and people with back problems should opt for a gentler ride or skip dune bashing.",
  },
  {
    question: "What's included in Visit White Desert packages?",
    answer: "All packages include hotel pickup and drop-off from anywhere in Dubai, professional guide, refreshments, and activities as listed. Premium packages include BBQ dinner, belly dance show, Tanoura dance, henna painting, and additional activities like camel riding and sandboarding.",
  },
  {
    question: "Do you provide hotel pickup from all Dubai locations?",
    answer: "Yes! We provide complimentary pickup and drop-off from all hotels, residences, and major landmarks across Dubai, Sharjah, and Ajman. Just share your location via WhatsApp and we'll be there!",
  },
  {
    question: "What's the best time for a Dubai desert safari?",
    answer: "The best season is from October to April when temperatures are pleasant. Evening safaris (3-4 PM departure) are most popular as you can enjoy the magical Dubai sunset. Morning safaris offer cooler temperatures and unique lighting for photography.",
  },
  {
    question: "How do I book and what's the cancellation policy?",
    answer: "Simply message us on WhatsApp for instant booking! We require 24-hour advance booking. Free cancellation is available up to 24 hours before the tour. For same-day bookings, contact us directly on WhatsApp.",
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
            Everything you need to know about your Dubai desert adventure.
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
