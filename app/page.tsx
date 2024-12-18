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

export const metadata = {
  title: "Designing Solutions",
  description: "Free Shadcn landing page for developers",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Designing Solutions",
    description: "Free Shadcn landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Designing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Designing Solutions",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

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
      <TestimonialSection />
      <TeamSection />
      {/* <CommunitySection /> */}
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
