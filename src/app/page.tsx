import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  HowItWorksSection,
  ImpactSection,
  CTASection,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
