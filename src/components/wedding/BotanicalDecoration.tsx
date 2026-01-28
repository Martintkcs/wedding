import { motion } from "framer-motion";

interface LeafProps {
  className?: string;
  style?: React.CSSProperties;
}

export const LeafSvg = ({ className = "", style }: LeafProps) => (
  <svg
    viewBox="0 0 100 150"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 0C50 0 20 40 20 80C20 120 50 150 50 150C50 150 80 120 80 80C80 40 50 0 50 0Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M50 20V140"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M50 40L30 60M50 60L70 80M50 80L35 95M50 100L65 115"
      stroke="currentColor"
      strokeWidth="0.75"
    />
  </svg>
);

export const BranchSvg = ({ className = "", style }: LeafProps) => (
  <svg
    viewBox="0 0 200 100"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 50C40 50 60 30 80 30C100 30 110 50 130 50C150 50 170 35 200 35"
      stroke="currentColor"
      strokeWidth="1"
    />
    <ellipse cx="40" cy="40" rx="8" ry="12" stroke="currentColor" strokeWidth="0.75" transform="rotate(-20 40 40)" />
    <ellipse cx="70" cy="35" rx="6" ry="10" stroke="currentColor" strokeWidth="0.75" transform="rotate(-10 70 35)" />
    <ellipse cx="100" cy="45" rx="7" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(10 100 45)" />
    <ellipse cx="130" cy="42" rx="6" ry="10" stroke="currentColor" strokeWidth="0.75" transform="rotate(-5 130 42)" />
    <ellipse cx="160" cy="38" rx="8" ry="12" stroke="currentColor" strokeWidth="0.75" transform="rotate(-15 160 38)" />
  </svg>
);

export const FloatingLeaves = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-20 left-10"
    >
      <LeafSvg className="w-12 h-18 text-primary/10" />
    </motion.div>
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute top-40 right-16"
    >
      <LeafSvg className="w-8 h-12 text-primary/8" />
    </motion.div>
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-32 left-20"
    >
      <LeafSvg className="w-10 h-15 text-primary/10" />
    </motion.div>
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute bottom-20 right-10"
    >
      <LeafSvg className="w-14 h-20 text-primary/8" />
    </motion.div>
  </div>
);

export const SectionDivider = () => (
  <div className="flex items-center justify-center gap-4 py-8">
    <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/20" />
    <LeafSvg className="w-6 h-9 text-primary/30" />
    <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/20" />
  </div>
);
