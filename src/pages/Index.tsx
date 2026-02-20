import { useState } from "react";
import { Navigation } from "@/components/wedding/Navigation";
import { HeroSection } from "@/components/wedding/HeroSection";
import { InfoSection } from "@/components/wedding/InfoSection";
import { ScheduleSection } from "@/components/wedding/ScheduleSection";
import { MenuSection } from "@/components/wedding/MenuSection";
import { TravelSection, AccommodationSection } from "@/components/wedding/TravelSection";
import { FAQSection } from "@/components/wedding/FAQSection";
import { GallerySection } from "@/components/wedding/GallerySection";
import { ContactSection, Footer } from "@/components/wedding/ContactSection";
import { EnvelopeIntro } from "@/components/wedding/EnvelopeIntro";

const Index = () => {
  const [isInviteOpened, setIsInviteOpened] = useState(false);

  return (
    <>
      {!isInviteOpened && <EnvelopeIntro onOpened={() => setIsInviteOpened(true)} />}
      <div
        className={`min-h-screen bg-background transition-opacity duration-1000 ${
          isInviteOpened ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation />
        <main>
          <HeroSection />
          <InfoSection />
          <ScheduleSection />
          <MenuSection />
          <TravelSection />
          <AccommodationSection />
          <GallerySection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
