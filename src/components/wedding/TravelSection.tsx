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
    name: "Dunna Panzió",
    link: "https://dunna.hu/",
  },
  {
    name: "Centrum Rezidencia",
    link: "https://www.booking.com/hotel/hu/centrum-rezidencia-papa.hu.html?aid=319854&label=centrum-rezidencia-papa-WwvfiM7KjF%2AMHicp%2ACDU0gS747717833407%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2425152981095%3Alp9062963%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfebvPBbIhsA9v88nhiHKmI&sid=127f06e275ba3d294118ed72b39c223b&dest_id=-863934&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1770329122&srpvid=75bcee5eeaef2c702a19976ace01501d&type=total&ucfs=1&",
  },
  {
    name: "Belvárosi Rezidencia",
    link: "https://www.booking.com/hotel/hu/belva-rosi-panzia3-pa-pa.hu.html?aid=318615&label=Hungarian_Hungary_HU_HU_29562110185-Ja3GNxTF4FyuEozSs0%2A%2A1QS217291076767%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55511579316%3Atidsa-322372659818%3Alp9062963%3Ali%3Adec%3Adm&sid=ce5ca79f5bad8a4ba944d84e55f71652&dest_id=-863934&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1770329360&srpvid=01ee9ba7f7f602b5&type=total&ucfs=1&",
  },
];

const accommodationMaps = [
  {
    title: "Interaktív térkép útvonal tervezéssel",
    description: "Dunna Panzió - Secret Lake, Pápa",
    link: "https://www.google.com/maps/dir/Dunna,+P%C3%A1pa,+Szent+Istv%C3%A1n+%C3%BAt+10,+8500/Secret+Lake,+P%C3%A1pa,+Malom+%C3%BAt,+8500/@47.3155069,17.4559752,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x476961071d0307ef:0x8924e0e99a4157ff!2m2!1d17.4630744!2d47.3324304!1m5!1m1!1s0x4769633bdc1d44eb:0x8f4d2a4a7a4cc5c!2m2!1d17.5054807!2d47.300435?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    title: "Interaktív térkép útvonal tervezéssel",
    description: "Centrum Rezidencia - Secret Lake, Pápa",
    link: "https://www.google.com/maps/dir/Centrum+Rezidencia+P%C3%A1pa,+P%C3%A1pa,+Fapiac+t%C3%A9r+4,+8500/Secret+Lake,+P%C3%A1pa,+Malom+%C3%BAt,+8500/@47.3114907,17.4634116,14z/data=!4m13!4m12!1m5!1m1!1s0x4769610052a652c5:0x886282f91af4da82!2m2!1d17.4688103!2d47.3251747!1m5!1m1!1s0x4769633bdc1d44eb:0x8f4d2a4a7a4cc5c!2m2!1d17.5054807!2d47.300435?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    title: "Interaktív térkép útvonal tervezéssel",
    description: "Belvárosi Rezidencia - Secret Lake, Pápa",
    link: "https://www.google.com/maps/dir/Belv%C3%A1rosi+Rezidencia+(Panzi%C3%B3)+P%C3%A1pa,+P%C3%A1pa,+Anna+t%C3%A9r+6,+8500/Secret+Lake,+P%C3%A1pa,+Malom+%C3%BAt,+8500/@47.3128999,17.4631253,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4769610e6bb96cd1:0x5cabe05690b2d04e!2m2!1d17.4688754!2d47.3252169!1m5!1m1!1s0x4769633bdc1d44eb:0x8f4d2a4a7a4cc5c!2m2!1d17.5054807!2d47.300435?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D",
  },
];

const accommodationPairs = accommodations.map((hotel, index) => ({
  hotel,
  map: accommodationMaps[index],
}));

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
            className="mt-8 rounded-2xl overflow-hidden shadow-card bg-sage-muted/50 flex items-center justify-center p-6 sm:p-8"
          >
            <div className="text-center">
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
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {accommodationPairs.map((pair, index) => (
              <div key={pair.hotel.name} className="grid gap-6">
                <motion.a
                  href={pair.hotel.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="card-botanical group hover:shadow-elevated transition-all duration-300 h-full min-h-[220px] flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Hotel className="w-5 h-5 text-primary" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="font-serif text-lg text-foreground mb-1">
                    {pair.hotel.name}
                  </h4>
                </motion.a>
                <motion.div
                  key={pair.map.description}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-card bg-sage-muted/50 flex items-center justify-center h-full min-h-[220px]"
                >
                  <div className="text-center p-6">
                    <p className="text-muted-foreground mb-2">
                      {pair.map.title}
                    </p>
                    <p className="text-sm text-muted-foreground/60">
                      {pair.map.description}
                    </p>
                    <a
                      href={pair.map.link}
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
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {accommodations.map((hotel, index) => (
              <motion.a
                key={hotel.name}
                href={hotel.link}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card-botanical group hover:shadow-elevated transition-all duration-300 h-full min-h-[220px] flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <Hotel className="w-5 h-5 text-primary" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-serif text-lg text-foreground mb-1">
                  {hotel.name}
                </h4>
              </motion.a>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-3 gap-6 mt-8">
            {accommodationMaps.map((mapItem, index) => (
              <motion.div
                key={mapItem.description}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
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
                    <ExternalLink size={14} />
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
