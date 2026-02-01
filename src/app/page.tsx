import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  ProblemSolutionSection,
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
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
