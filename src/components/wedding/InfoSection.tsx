import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Shirt, Gift, Users, Heart } from "lucide-react";
import { SectionDivider } from "./BotanicalDecoration";

const infoCards = [
  {
    icon: Calendar,
    title: "Dátum",
    content: "2025. szeptember 14.",
    subtext: "Szombat, 16:00",
  },
  {
    icon: MapPin,
    title: "Helyszín",
    content: "Várkert Bazár",
    subtext: "1013 Budapest, Ybl Miklós tér 2-6",
  },
  {
    icon: Shirt,
    title: "Öltözködési stílus",
    content: "Félformális",
    subtext: "Kerti parti elegancia",
  },
  {
    icon: Gift,
    title: "Ajándékok",
    content: "Számunkra a jelenléted a legnagyobb ajándék",
    subtext: "Kérjük, ne hozzatok tárgyi ajándékot",
  },
  {
    icon: Users,
    title: "Vendégek",
    content: "Csak felnőtteknek szóló ünnepség",
    subtext: "Kérjük, a kicsiket hagyjátok otthon",
  },
  {
    icon: Heart,
    title: "Különleges üzenet",
    content: "Alig várjuk, hogy veletek ünnepeljünk!",
    subtext: "Felejthetetlen nap lesz",
  },
];

export const InfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="info" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-foreground mb-4">
            Esküvő részletei
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Minden fontos tudnivaló a nagy napunkról
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-botanical group hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <card.icon size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {card.title}
                  </h3>
                  <p className="font-medium text-foreground mb-1">
                    {card.content}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {card.subtext}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SectionDivider />
    </section>
  );
};
