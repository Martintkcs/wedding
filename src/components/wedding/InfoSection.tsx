import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Shirt, Gift, Users, Heart } from "lucide-react";
import { SectionDivider } from "./BotanicalDecoration";

const infoCards = [
  {
    icon: Calendar,
    title: "Date",
    content: "September 14, 2025",
    subtext: "Saturday, 4:00 PM",
  },
  {
    icon: MapPin,
    title: "Venue",
    content: "Várkert Bazár",
    subtext: "1013 Budapest, Ybl Miklós tér 2-6",
  },
  {
    icon: Shirt,
    title: "Dress Code",
    content: "Semi-Formal",
    subtext: "Garden party elegance",
  },
  {
    icon: Gift,
    title: "Gifts",
    content: "Your presence is our present",
    subtext: "No boxed gifts, please",
  },
  {
    icon: Users,
    title: "Guests",
    content: "Adults only celebration",
    subtext: "Kindly leave little ones at home",
  },
  {
    icon: Heart,
    title: "Special Note",
    content: "We can't wait to celebrate with you!",
    subtext: "This will be an unforgettable day",
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
            Wedding Details
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about our special day
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
