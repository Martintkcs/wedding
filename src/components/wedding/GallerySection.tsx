import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, ExternalLink } from "lucide-react";
import { SectionDivider } from "./BotanicalDecoration";

const galleryImages = [
  { id: 1, alt: "Páros fotó 1", src: "/images/gallery-1.jpg" },
  { id: 2, alt: "Páros fotó 2", src: "/images/gallery-2.jpg" },
  { id: 3, alt: "Páros fotó 3", src: "/images/gallery-3.jpg" },
  { id: 4, alt: "Páros fotó 4", src: "/images/gallery-4.jpg" },
  { id: 5, alt: "Páros fotó 5", src: "/images/gallery-5.jpg" },
  { id: 6, alt: "Páros fotó 6", src: "/images/gallery-6.jpg" },
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
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

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
          className="mx-auto max-w-xl"
        >
          <a
            href="https://drive.google.com/drive/folders/17J3idz6NFTVr6s_wcH3lDQjjBeCExBJu?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center gap-3 rounded-2xl border border-primary/10 bg-white/70 px-6 py-5 text-center text-primary shadow-card transition hover:border-primary/30 hover:bg-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary/20">
              <Camera size={18} />
            </span>
            <span className="text-base font-medium">
              Töltsd fel a fotóidat az esküvő után
            </span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  );
};
