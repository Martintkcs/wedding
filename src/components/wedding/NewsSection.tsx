import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, Calendar, Hotel, Music } from "lucide-react";
import { SectionDivider } from "./BotanicalDecoration";

const newsItems = [
  {
    date: "2025. január 15.",
    icon: Bell,
    title: "Tedd fel a naptárba!",
    content: "Hivatalosan is bejelentjük az esküvő időpontját. Írd be a naptáradba: 2025. szeptember 14.",
    isNew: false,
  },
  {
    date: "2025. február 10.",
    icon: Hotel,
    title: "Szobakeret lefoglalva",
    content: "A Hotel Gellértben szobakeretet foglaltunk. A kedvezményes árért július 1-ig foglaljatok.",
    isNew: false,
  },
  {
    date: "2025. március 5.",
    icon: Calendar,
    title: "Megnyílt a visszajelzés",
    content: "Már tudtok visszajelezni az esküvőre. Kérjük, 2025. augusztus 1-ig küldjétek el.",
    isNew: true,
  },
  {
    date: "2025. április 20.",
    icon: Music,
    title: "Élő zenekar megerősítve",
    content: "Örömmel jelentjük be, hogy a Papagáj Band játszik majd a fogadáson!",
    isNew: true,
  },
];

export const NewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="py-20 sm:py-28 bg-sage-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-foreground mb-4">
            Hírek és frissítések
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kövesd az esküvővel kapcsolatos bejelentéseket
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-botanical relative overflow-hidden"
            >
              {item.isNew && (
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium text-primary-foreground bg-primary rounded-full">
                  Új
                </span>
              )}

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <item.icon size={20} />
                </div>
                <div className="flex-1">
                  <time className="text-xs text-muted-foreground uppercase tracking-wide">
                    {item.date}
                  </time>
                  <h3 className="font-serif text-lg text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <SectionDivider />
    </section>
  );
};
