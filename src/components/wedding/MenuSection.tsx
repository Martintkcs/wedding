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
      "Alkoholos italok",
      "Üdítők",
      "Friss limonádé",
      "Szénsavas víz",
    ],
  },
  {
    icon: Utensils,
    title: "Vacsora",
    items: [
      { course: "Leves", dish: "Falusi tyúkhúsleves csigatésztával " },
      { course: "Főétel I", dish: "Marhapörkölt galuskával" },
      { course: "Főtel II", dish: "Csirke cordon Bleu,\n" + "Rántott sertéskaraj,\n" +
            "Rántott trappista sajt, Rizzsel, Parázs burgonyával és Tartármártással" }
    ],
  },
  {
    icon: Moon,
    title: "Éjféli falatok",
    items: [
      "Falusi töltött káposzta \n" +
      "friss kenyérrel és tejföllel\n",
      "Mini hamburger",
    ],
  },
  {
    icon: Coffee,
    title: "Italok egész éjjel",
    items: [
      { course: "Tömények", dish: "Jager, Pálinka, Rum, Baliey's, Vodka, Gin" },
      { course: "Csapolt sör", dish: "Peroni" },
      { course: "Borok", dish: "Olasz Rizling, Muskotály, Cabernet,\n" +
            "Rosé, Kék frankos" },
         { course: "Alkoholmentes italok", dish: "Coca cola, Fanta, Sprite, Tonic,\n" +
               "Almalé, Baracklé, Narancslé, Peroni, Kávék, Limonádék" }
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

      </div>

      <SectionDivider />
    </section>
  );
};
