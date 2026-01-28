import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, Calendar, Hotel, Music } from "lucide-react";
import { SectionDivider } from "./BotanicalDecoration";

const newsItems = [
  {
    date: "January 15, 2025",
    icon: Bell,
    title: "Save the Date!",
    content: "We're officially announcing our wedding date. Mark your calendars for September 14, 2025!",
    isNew: false,
  },
  {
    date: "February 10, 2025",
    icon: Hotel,
    title: "Hotel Block Available",
    content: "We've reserved a block of rooms at Hotel Gellért. Book before July 1st for the special rate.",
    isNew: false,
  },
  {
    date: "March 5, 2025",
    icon: Calendar,
    title: "RSVPs Now Open",
    content: "You can now RSVP for our wedding. Please respond by August 1, 2025.",
    isNew: true,
  },
  {
    date: "April 20, 2025",
    icon: Music,
    title: "Live Band Confirmed",
    content: "We're excited to announce that the Papagáj Band will be playing at our reception!",
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
            News & Updates
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Stay up to date with wedding announcements
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
                  New
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
