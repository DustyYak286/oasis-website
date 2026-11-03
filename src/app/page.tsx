import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  PlatformSection,
  AISection,
  AboutSection,
  FAQSection,
  ContactSection,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <PlatformSection />
        <AISection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
