import { About } from "@/components/layout/sections/about";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import HowItWorksSection from "@/components/layout/sections/stepByStep";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { Meteors } from "@/components/ui/meteors";



export default function Home() {
  return (
    <>
      <Meteors />
      <HeroSection />
      {/* <SponsorsSection /> */}
      <About />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <HowItWorksSection />
      {/* <TestimonialSection /> */}
      <TeamSection />
      {/* <CommunitySection /> */}
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
