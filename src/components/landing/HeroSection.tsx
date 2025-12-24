"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      <WavyBackground
        colors={["#3F84E5", "#6BA3F0", "#468657", "#2A5BA8"]}
        backgroundFill="white"
        waveOpacity={0.3}
        blur={15}
        speed="slow"
        containerClassName="min-h-screen"
      >
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Bringing Quality Education{" "}
            <span className="text-oasis-primary drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
              {"Anywhere".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.8 + index * 0.05,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-black mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A self-contained educational platform for schools without stable
            internet or electricity. Empowering students and teachers in
            underserved communities worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#story")}
              className="bg-oasis-primary hover:bg-oasis-primary-dark text-white px-8 py-6 text-lg"
            >
              Learn More
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-oasis-primary text-oasis-primary hover:bg-oasis-primary hover:text-white px-8 py-6 text-lg"
            >
              Get Involved
            </Button>
          </motion.div>

          </div>
        </Container>
      </WavyBackground>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </motion.div>
    </section>
  );
}
