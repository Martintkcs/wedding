import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Check, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SectionDivider } from "./BotanicalDecoration";

export const RSVPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    dietary: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Visszajelzés megérkezett!",
      description: "Köszönjük a válaszodat. Alig várjuk, hogy veletek ünnepeljünk!",
    });
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 sm:py-28">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="card-botanical py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <Heart className="w-10 h-10 text-primary" />
              </motion.div>
              <h3 className="font-serif text-2xl text-foreground mb-3">
                Köszönjük!
              </h3>
              <p className="text-muted-foreground">
                Megkaptuk a visszajelzésed. Nagyon örülünk, hogy velünk ünnepelsz a nagy napon!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-foreground mb-4">Visszajelzés</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kérjük, jelezzetek vissza legkésőbb 2025. augusztus 1-ig
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="card-botanical space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Teljes név(ek) *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="pl. Kovács Anna és Nagy Péter"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>

            {/* Attending */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Részt veszel? *
              </label>
              <div className="flex gap-4">
                <label className="flex-1">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    required
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="p-4 text-center rounded-xl border-2 border-border cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50">
                    <Check className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <span className="text-sm font-medium">Örömmel elfogadom</span>
                  </div>
                </label>
                <label className="flex-1">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="p-4 text-center rounded-xl border-2 border-border cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50">
                    <span className="block text-lg mb-1">😢</span>
                    <span className="text-sm font-medium">
                      Sajnálattal visszautasítom
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Vendégek száma
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} vendég
                  </option>
                ))}
              </select>
            </div>

            {/* Dietary */}
            <div>
              <label
                htmlFor="dietary"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Étkezési megkötések / allergiák
              </label>
              <input
                type="text"
                id="dietary"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                placeholder="pl. vegetáriánus, gluténmentes, dióallergia"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Üzenet a párnak
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Írd meg jókívánságaidat vagy bármilyen megjegyzést..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
              />
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground">
              Az űrlap elküldésével hozzájárulsz, hogy az esküvővel kapcsolatban felvegyük veled a
              kapcsolatot. Adataidat nem osztjuk meg harmadik féllel.
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-botanical-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Küldés...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send size={18} />
                  Visszajelzés küldése
                </span>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <SectionDivider />
    </section>
  );
};
