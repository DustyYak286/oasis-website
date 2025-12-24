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
    <WavyBackground
      colors={["#B20D30", "#D4344F", "#468657", "#8B0A25", "#B20D30"]}
      backgroundFill="white"
      waveOpacity={0.3}
      blur={15}
      speed="slow"
      containerClassName="min-h-screen"
    >
      <Container className="relative z-10 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Bringing Quality Education{" "}
            <span className="relative">
              <span className="relative z-10 text-oasis-primary">Anywhere</span>
              <motion.span
                className="absolute bottom-2 left-0 right-0 h-3 bg-oasis-primary/20 -z-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
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
              onClick={() => scrollToSection("#problem")}
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

          {/* Stats Preview */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              { value: "2.9B", label: "People lack internet" },
              { value: "258M", label: "Children out of school" },
              { value: "100%", label: "Offline capable" },
              { value: "Solar", label: "Powered" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-oasis-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </motion.div>
    </WavyBackground>
  );
}
