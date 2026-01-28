import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { LeafSvg } from "./BotanicalDecoration";

const contacts = [
  {
    name: "Kati",
    role: "Menyasszony",
    phone: "+36 30 123 4567",
    email: "kati@example.com",
  },
  {
    name: "Martin",
    role: "Vőlegény",
    phone: "+36 30 765 4321",
    email: "martin@example.com",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-foreground mb-4">
            Kapcsolat
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kérdésed van? Szívesen válaszolunk
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-botanical text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-serif text-2xl text-primary">
                  {contact.name[0]}
                </span>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-1">
                {contact.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {contact.role}
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  {contact.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://wa.me/36301234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
          >
            <MessageCircle size={20} />
            Üzenj nekünk WhatsAppon
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="section-container text-center">
      <LeafSvg className="w-8 h-12 mx-auto mb-6 text-primary/30" />
      <p className="font-serif text-2xl text-foreground mb-2">Kati & Martin</p>
      <p className="text-sm text-muted-foreground mb-6">2025. szeptember 14.</p>
      <p className="text-xs text-muted-foreground">
        Szeretettel készítve a nagy napunkra
      </p>
    </div>
  </footer>
);
