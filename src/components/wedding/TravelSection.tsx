import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Car, ParkingCircle, Hotel, ExternalLink } from "lucide-react";
import { SectionDivider } from "./BotanicalDecoration";

const travelOptions = [
  {
    icon: Car,
    title: "Autóval",
    content: "A helyszín a 83-s útról könnyen megközelíthető GPS: Pápa, Malom út 739/10, 8500.",
  },
  {
    icon: ParkingCircle,
    title: "Parkolás",
    content: "Parkolási lehetőség van a helyszínen , akár másnapig is, ingyenesen.",
  },
];

const accommodations = [
  {
    name: "Duna Panzió",
    link: "https://www.google.com/maps/search/?api=1&query=Duna+Panzi%C3%B3+P%C3%A1pa",
  },
  {
    name: "Centrum Rezidencia",
    link: "https://www.google.com/maps/search/?api=1&query=Centrum+Rezidencia+P%C3%A1pa",
  },
  {
    name: "Belvárosi Rezidencia",
    link: "https://www.google.com/maps/search/?api=1&query=Belv%C3%A1rosi+Rezidencia+P%C3%A1pa",
  },
];

const accommodationMaps = [
  {
    title: "Interaktív térkép útvonal tervezéssel",
    description: "Duna Panzió - Secret Lake, Pápa",
    link: "https://www.google.com/maps/dir/?api=1&origin=Duna+Panzi%C3%B3,+P%C3%A1pa&destination=Secret+Lake,+P%C3%A1pa",
  },
  {
    title: "Interaktív térkép útvonal tervezéssel",
    description: "Centrum Rezidencia - Secret Lake, Pápa",
    link: "https://www.google.com/maps/dir/?api=1&origin=Centrum+Rezidencia,+P%C3%A1pa&destination=Secret+Lake,+P%C3%A1pa",
  },
  {
    title: "Interaktív térkép útvonal tervezéssel",
    description: "Belvárosi Rezidencia - Secret Lake, Pápa",
    link: "https://www.google.com/maps/dir/?api=1&origin=Belv%C3%A1rosi+Rezidencia,+P%C3%A1pa&destination=Secret+Lake,+P%C3%A1pa",
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
            Hogyan jutsz el az esküvőre és hol szállhatsz meg
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 rounded-2xl overflow-hidden shadow-card h-64 sm:h-80 bg-sage-muted/50 flex items-center justify-center"
          >
            <div className="text-center p-8">
              <p className="text-muted-foreground mb-2">Interaktív térkép</p>
              <p className="text-sm text-muted-foreground/60">
                Secret Lake, Pápa
              </p>
              <a
                href="https://www.google.com/maps/place/Secret+Lake/@47.3004312,17.5029086,17z/data=!3m1!4b1!4m6!3m5!1s0x4769633bdc1d44eb:0x8f4d2a4a7a4cc5c!8m2!3d47.3004312!4d17.5054835!16s%2Fg%2F11ln7stxc0?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D"
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

        {/* Accommodations */}
        <div className="mb-12">
          <h3 className="font-serif text-xl text-foreground text-center mb-2">
            Hol szállsz meg
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-8">
            (pontos szállásodat az esküvő előtt megkapod)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accommodations.map((hotel, index) => (
                <motion.a
                    key={hotel.name}
                    href={hotel.link}
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5, delay: 0.4 + index * 0.1}}
                    className="card-botanical group hover:shadow-elevated transition-all duration-300 h-full min-h-[220px] flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Hotel className="w-5 h-5 text-primary"/>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"/>
                  </div>
                  <h4 className="font-serif text-lg text-foreground mb-1">
                    {hotel.name}
                  </h4>
                </motion.a>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {accommodationMaps.map((mapItem, index) => (
              <motion.div
                key={mapItem.description}
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.5, delay: 0.4 + index * 0.1}}
                className="rounded-2xl overflow-hidden shadow-card bg-sage-muted/50 flex items-center justify-center h-full min-h-[220px]"
              >
                <div className="text-center p-6">
                  <p className="text-muted-foreground mb-2">{mapItem.title}</p>
                  <p className="text-sm text-muted-foreground/60">
                    {mapItem.description}
                  </p>
                  <a
                    href={mapItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:underline text-sm"
                  >
                    Megnyitás a Google Térképen
                    <ExternalLink size={14}/>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <SectionDivider/>
    </section>
  );
};
