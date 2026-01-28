import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FloatingLeaves, BranchSvg } from "./BotanicalDecoration";
export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage-muted/50 via-background to-background" />
      
      {/* Botanical Decorations */}
      <FloatingLeaves />
      
      {/* Top Branch */}
      <motion.div initial={{
      opacity: 0,
      x: -50
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 1.2,
      delay: 0.5
    }} className="absolute top-24 left-0 hidden md:block">
        <BranchSvg className="w-64 h-32 text-primary/15" />
      </motion.div>
      
      {/* Bottom Branch */}
      <motion.div initial={{
      opacity: 0,
      x: 50
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 1.2,
      delay: 0.7
    }} className="absolute bottom-24 right-0 hidden md:block">
        <BranchSvg className="w-56 h-28 text-primary/15 rotate-180" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-20">
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-subheading mb-6">
          Megházasodunk
        </motion.p>

        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-display text-foreground mb-8">
          Kati & Martin
        </motion.h1>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="botanical-divider mb-8" />

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.6
      }} className="space-y-2 mb-12">
          <p className="text-xl sm:text-2xl font-serif text-primary">
            2025. szeptember 14.
          </p>
          <p className="text-muted-foreground">
            Budapest, Magyarország
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollToSection("#schedule")} className="btn-botanical-primary">
            Program megtekintése
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }} className="text-primary/40 cursor-pointer" onClick={() => scrollToSection("#info")}>
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>;
};
