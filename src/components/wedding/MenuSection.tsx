import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wine, Utensils, Coffee, Moon, AlertCircle } from "lucide-react";
import { SectionDivider } from "./BotanicalDecoration";

const menuCategories = [
  {
    icon: Wine,
    title: "Üdvözlő italok",
    items: [
      "Aperol Spritz",
      "Bodzás prosecco",
      "Friss limonádé",
      "Szénsavas víz",
    ],
  },
  {
    icon: Utensils,
    title: "Vacsora",
    items: [
      { course: "Előétel", dish: "Magyar libamájterrine fügekompóttal" },
      { course: "Főétel", dish: "Lassan sült kacsamell meggyszósszal" },
      { course: "Vegetáriánus", dish: "Erdei gombás rizottó szarvasgombaolajjal" },
      { course: "Desszert", dish: "Dobos torta karamellkrémmel" },
    ],
  },
  {
    icon: Moon,
    title: "Éjféli falatok",
    items: [
      "Hagyományos gulyásleves",
      "Lángos tejföllel",
      "Kürtőskalács",
    ],
  },
  {
    icon: Coffee,
    title: "Italok egész éjjel",
    items: [
      "Magyar borok (tokaji, egri)",
      "Válogatott kézműves sörök",
      "Egyedi koktélok",
      "Pálinkakóstoló",
      "Kávé- és teapont",
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
            Ételek és italok
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A magyar vendégszeretet ízei
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
                Étkezési igények
              </h4>
              <p className="text-sm text-muted-foreground">
                Kérjük, a visszajelzéskor jelezzétek az allergiákat vagy étkezési megkötéseket.
                Szívesen alkalmazkodunk vegetáriánus, vegán, gluténmentes és egyéb igényekhez is.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  );
};
