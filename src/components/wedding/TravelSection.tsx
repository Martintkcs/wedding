import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Train, Plane, ParkingCircle, Hotel, ExternalLink } from "lucide-react";
import { SectionDivider } from "./BotanicalDecoration";

const travelOptions = [
  {
    icon: Plane,
    title: "Repülővel",
    content: "A Budapest Liszt Ferenc Nemzetközi Repülőtér (BUD) 25 km-re van a helyszíntől. Taxi és reptéri transzfer könnyen elérhető.",
  },
  {
    icon: Train,
    title: "Vonattal",
    content: "A Keleti pályaudvar a fő csomópont. Szállj az M4-es metróra a Szent Gellért térig, majd 5 perc séta a helyszín.",
  },
  {
    icon: Car,
    title: "Autóval",
    content: "A helyszín az M1/M7 autópályákról könnyen megközelíthető. GPS: Várkert Bazár, 1013 Budapest.",
  },
  {
    icon: ParkingCircle,
    title: "Parkolás",
    content: "Korlátozott parkolás lehetséges a helyszínen. Javasoljuk a tömegközlekedést vagy taxit.",
  },
];

const accommodations = [
  {
    name: "Hotel Gellért",
    distance: "0.5 km",
    note: "Esküvői szobakeret elérhető",
    link: "#",
  },
  {
    name: "Danubius Hotel",
    distance: "1.2 km",
    note: "Kiváló ár-érték arány",
    link: "#",
  },
  {
    name: "Aria Hotel Budapest",
    distance: "2.5 km",
    note: "Luxus butikhotel",
    link: "#",
  },
  {
    name: "Airbnb lehetőségek",
    distance: "Többféle",
    note: "Sok apartman a közelben",
    link: "#",
  },
];

export const TravelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="travel" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-foreground mb-4">
            Utazás és szállás
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hogyan jutsz el Budapestre és hol érdemes megszállni
          </p>
        </motion.div>

        {/* Getting There */}
        <div className="mb-16">
          <h3 className="font-serif text-xl text-foreground text-center mb-8">
            Megközelítés
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {travelOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-botanical"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <option.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-2">
                      {option.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {option.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Accommodations */}
        <div className="mb-12">
          <h3 className="font-serif text-xl text-foreground text-center mb-8">
            Hol szállj meg
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {accommodations.map((hotel, index) => (
              <motion.a
                key={hotel.name}
                href={hotel.link}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card-botanical group hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <Hotel className="w-5 h-5 text-primary" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-serif text-lg text-foreground mb-1">
                  {hotel.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {hotel.distance} a helyszíntől
                </p>
                <p className="text-xs text-primary">
                  {hotel.note}
                </p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-card h-64 sm:h-80 bg-sage-muted/50 flex items-center justify-center"
        >
          <div className="text-center p-8">
            <p className="text-muted-foreground mb-2">Interaktív térkép</p>
            <p className="text-sm text-muted-foreground/60">
              Várkert Bazár, Budapest
            </p>
            <a
              href="https://maps.google.com/?q=Várkert+Bazár+Budapest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary hover:underline text-sm"
            >
              Megnyitás a Google Térképen
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  );
};
