import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionDivider, LeafSvg } from "./BotanicalDecoration";

const scheduleItems = [
  {
    time: "16:00",
    title: "Vendégek érkezése",
    description: "Üdvözlő italok a kertben, Vendégváró falatokkal",
  },
  {
    time: "17:00",
    title: "Szertartás",
    description: "Fogadalom a kis szigeten",
  },
  {
    time: "18:00",
    title: "Gratuláció",
    description: "Gratulációk és pezsgős koccintás,közös fotózás",
  },
  {
    time: "19:00",
    title: "Vacsora",
    description: "Háromfogásos vacsora",
  },
  {
    time: "21:00",
    title: "Nyitótánc",
    description: "Kezdődjön az ünneplés!",
  },
  {
    time: "22:00",
    title: "Buli",
    description: "Tánc és ünneplés",
  },
  {
    time: "00:00",
    title: "Éjféli falatok",
    description: "Hagyományos magyar finomságok + meglepi",
  },
  {
    time: "05:00",
    title: "Ünneplés vége",
    description: "Köszönjük, hogy velünk ünnepeltetek!",
  },
];

export const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="py-20 sm:py-28 bg-sage-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-foreground mb-4">
            Program
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Az ünneplés időbeosztása
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 transform sm:-translate-x-1/2" />

            {scheduleItems.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-6 mb-8 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 sm:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-16 sm:ml-0 w-full sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  }`}
                >
                  <div className="card-botanical w-full">
                    <span className="inline-block px-3 py-1 mb-2 text-sm font-medium text-primary bg-primary/10 rounded-full">
                      {item.time}
                    </span>
                    <h3 className="font-serif text-xl text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}

            {/* End Decoration */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute left-8 sm:left-1/2 bottom-0 transform -translate-x-1/2"
            >
              <LeafSvg className="w-6 h-9 text-primary/40" />
            </motion.div>
          </div>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
};
