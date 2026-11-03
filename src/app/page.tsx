import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  PlatformSection,
  AISection,
  StorySection,
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
        <StorySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
