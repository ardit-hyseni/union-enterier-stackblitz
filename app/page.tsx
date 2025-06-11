import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { AboutSection } from "@/components/about-section";
import { StatsSection } from "@/components/stats-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      {/* <StatsSection /> */}
      <ContactSection />
    </main>
  );
}