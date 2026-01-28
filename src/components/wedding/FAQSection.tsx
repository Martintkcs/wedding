import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionDivider } from "./BotanicalDecoration";

const faqs = [
  {
    question: "When should I arrive?",
    answer: "Please arrive by 4:00 PM to settle in before the ceremony begins at 5:00 PM. This gives you time to find your seat and enjoy some welcome refreshments.",
  },
  {
    question: "What should I wear?",
    answer: "The dress code is semi-formal / garden party elegance. Think cocktail dresses, midi skirts, or dressy jumpsuits for ladies, and suits or smart trousers with a blazer for gentlemen. Please avoid white or cream colors.",
  },
  {
    question: "Can I bring a plus-one?",
    answer: "Your invitation will specify if you have a plus-one. If you're unsure, please reach out to us directly. We have limited space and want to make sure everyone is accounted for.",
  },
  {
    question: "Are children welcome?",
    answer: "While we love your little ones, we've decided to make this an adults-only celebration. We hope this gives you a chance to enjoy a night out!",
  },
  {
    question: "Is there parking available?",
    answer: "Limited parking is available at the venue on a first-come, first-served basis. We recommend using public transport or taxi services, especially if you plan to enjoy the drinks!",
  },
  {
    question: "What if I have dietary restrictions?",
    answer: "We're happy to accommodate dietary needs! Please let us know about any allergies or restrictions in your RSVP. We'll have vegetarian options available, and can arrange vegan or gluten-free meals upon request.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer: "We kindly ask for an unplugged ceremony – please put your phones away during the vows. Our photographer will capture everything! Feel free to take photos during the reception and party.",
  },
  {
    question: "What time will the party end?",
    answer: "The celebration will wrap up around 2:00 AM. But who knows – if you're still dancing, we might just keep going!",
  },
  {
    question: "Is there a gift registry?",
    answer: "Your presence is truly the best gift we could ask for. If you'd like to give something, we have a small honeymoon fund set up. Details will be shared upon request.",
  },
  {
    question: "How do I get to the venue from the airport?",
    answer: "The easiest way is to take a taxi (about 30-40 minutes and €25-30). You can also take the 100E bus to Deák Ferenc tér, then Metro M4 to Szent Gellért tér and walk 5 minutes.",
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-20 sm:py-28 bg-sage-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you might want to know
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-botanical border-0 px-0 data-[state=open]:shadow-elevated transition-shadow duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-serif text-lg text-foreground hover:no-underline hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  );
};
