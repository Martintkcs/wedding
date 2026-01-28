import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, ExternalLink } from "lucide-react";
import { SectionDivider } from "./BotanicalDecoration";

const galleryImages = [
  { id: 1, alt: "Páros fotó 1" },
  { id: 2, alt: "Páros fotó 2" },
  { id: 3, alt: "Páros fotó 3" },
  { id: 4, alt: "Páros fotó 4" },
  { id: 5, alt: "Páros fotó 5" },
  { id: 6, alt: "Páros fotó 6" },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-sage-muted/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-foreground mb-4">
            A mi történetünk
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Egy pillantás közös utunkra
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-sage-muted to-beige shadow-card group cursor-pointer ${
                index === 0 ? "md:row-span-2 md:aspect-auto" : ""
              }`}
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-8 h-8 text-primary/30" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Upload Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Camera size={18} />
            <span>Töltsd fel a fotóidat az esküvő után</span>
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  );
};
