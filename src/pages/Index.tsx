import { Navigation } from "@/components/wedding/Navigation";
import { HeroSection } from "@/components/wedding/HeroSection";
import { InfoSection } from "@/components/wedding/InfoSection";
import { ScheduleSection } from "@/components/wedding/ScheduleSection";
import { MenuSection } from "@/components/wedding/MenuSection";
import { TravelSection } from "@/components/wedding/TravelSection";
import { FAQSection } from "@/components/wedding/FAQSection";
import { GallerySection } from "@/components/wedding/GallerySection";
import { ContactSection, Footer } from "@/components/wedding/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <InfoSection />
        <ScheduleSection />
        <MenuSection />
        <TravelSection />
        <FAQSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
