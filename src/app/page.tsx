import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSolutionSection,
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
        <ProblemSolutionSection />
        <HowItWorksSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
