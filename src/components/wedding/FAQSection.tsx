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
    question: "Mikor érkezzek?",
    answer: "Kérjük, legkésőbb 16:00-ra érkezzetek, hogy legyen időtök helyet foglalni a 17:00-kor kezdődő szertartás előtt, és megkóstolni az üdvözlő frissítőket.",
  },
  {
    question: "Mit érdemes viselni?",
    answer: "Az öltözködési stílus félformális / kerti parti elegancia. Hölgyeknek koktélruha, midi szoknya vagy elegáns overál, uraknak öltöny vagy elegáns nadrág zakóval. Kérjük, kerüljétek a fehér és krém színeket.",
  },
  {
    question: "Hozhatok kísérőt?",
    answer: "A meghívódból kiderül, hogy hozhatsz-e kísérőt. Ha bizonytalan vagy, kérlek, írj nekünk. Korlátozott a férőhely, ezért szeretnénk pontosan látni a létszámot.",
  },
  {
    question: "Jöhetnek gyerekek is?",
    answer: "Bár imádjuk a kicsiket, úgy döntöttünk, hogy felnőtteknek szóló ünnepség lesz. Reméljük, így nektek is jut egy szabad este!",
  },
  {
    question: "Van parkolási lehetőség?",
    answer: "A helyszínen korlátozott a parkolás, érkezési sorrendben. Javasoljuk a tömegközlekedést vagy a taxit, főleg ha koccintanátok is!",
  },
  {
    question: "Mi van, ha étkezési megkötésem van?",
    answer: "Szívesen alkalmazkodunk az étkezési igényekhez! Kérjük, jelezd a visszajelzésben az allergiákat vagy megkötéseket. Lesz vegetáriánus opció, és kérésre vegán vagy gluténmentes ételt is biztosítunk.",
  },
  {
    question: "Fotózhatok a szertartás alatt?",
    answer: "Kérjük, hogy a szertartás legyen telefonmentes – a fogadalmak alatt tegyétek el a készülékeket. A fotós mindent megörökít! A vacsorán és a bulin nyugodtan fotózzatok.",
  },
  {
    question: "Mikor ér véget a buli?",
    answer: "Az ünneplés nagyjából hajnali 2 körül ér véget. De ki tudja – ha még táncoltok, lehet, hogy tovább tart!",
  },
  {
    question: "Van ajándéklista?",
    answer: "Számunkra a jelenlétetek a legnagyobb ajándék. Ha mégis szeretnétek adni valamit, létrehoztunk egy kis nászútalapot. Részletek kérésre.",
  },
  {
    question: "Hogyan jutok el a helyszínre a reptérről?",
    answer: "A legegyszerűbb a taxi (kb. 30–40 perc, 25–30 €). Alternatíva: 100E busz a Deák Ferenc térig, onnan M4 metró a Szent Gellért térig, majd 5 perc séta.",
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
            Gyakran ismételt kérdések
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Minden, amit tudni szeretnél
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
