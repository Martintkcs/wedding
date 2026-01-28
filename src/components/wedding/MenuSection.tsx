import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wine, Utensils, Coffee, Moon, AlertCircle } from "lucide-react";
import { SectionDivider } from "./BotanicalDecoration";

const menuCategories = [
  {
    icon: Wine,
    title: "Welcome Drinks",
    items: [
      "Aperol Spritz",
      "Elderflower Prosecco",
      "Fresh Lemonade",
      "Sparkling Water",
    ],
  },
  {
    icon: Utensils,
    title: "Dinner",
    items: [
      { course: "Starter", dish: "Hungarian Goose Liver Terrine with Fig Compote" },
      { course: "Main", dish: "Slow-Roasted Duck Breast with Cherry Reduction" },
      { course: "Vegetarian", dish: "Wild Mushroom Risotto with Truffle Oil" },
      { course: "Dessert", dish: "Dobos Torte with Caramel Cream" },
    ],
  },
  {
    icon: Moon,
    title: "Midnight Snack",
    items: [
      "Traditional Goulash Soup",
      "Lángos with Sour Cream",
      "Kürtőskalács (Chimney Cake)",
    ],
  },
  {
    icon: Coffee,
    title: "Drinks All Night",
    items: [
      "Hungarian Wines (Tokaji, Egri)",
      "Craft Beer Selection",
      "Signature Cocktails",
      "Pálinka Tasting",
      "Coffee & Tea Station",
    ],
  },
];

export const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-foreground mb-4">
            Food & Drinks
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A taste of Hungarian hospitality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-botanical"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <category.icon size={22} />
                </div>
                <h3 className="font-serif text-xl text-foreground">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground">
                    {typeof item === "string" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {item}
                      </span>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-xs text-primary font-medium uppercase tracking-wide">
                          {item.course}
                        </span>
                        <span className="text-foreground">{item.dish}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Dietary Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent/50 border border-primary/10">
            <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-foreground mb-1">
                Dietary Requirements
              </h4>
              <p className="text-sm text-muted-foreground">
                Please let us know about any allergies or dietary restrictions when you RSVP. 
                We're happy to accommodate vegetarian, vegan, gluten-free, and other dietary needs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  );
};
