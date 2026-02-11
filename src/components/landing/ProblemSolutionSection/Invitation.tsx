"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export function Invitation() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[55svh] sm:min-h-[60vh] bg-gradient-to-b from-oasis-primary to-oasis-primary-light relative overflow-hidden flex items-center py-14 sm:py-16">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/3 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-oasis-accent-green/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Single parent trigger - all children animate together */}
        <motion.div
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Fatima&apos;s story doesn&apos;t have to end in limitations.
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed mb-6"
            style={{ color: 'var(--background)' }}
          >
            With Oasis, she explores the mathematics she loves. She learns at
            her own pace with an AI tutor by her side. She dreams bigger, because
            she has the tools to make those dreams&nbsp;real.
          </p>

          <p
            className="text-lg sm:text-xl font-medium mb-9 sm:mb-10"
            style={{ color: 'var(--background)' }}
          >
            But Oasis only exists when people like you believe it should.
          </p>

          <div>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-white text-oasis-primary hover:bg-white/90 font-semibold px-10 py-6 text-lg"
            >
              Join the Movement
            </Button>
          </div>

          {/* Social Proof - enters with the rest of the section */}
          <div className="mt-10 sm:mt-12 pt-7 sm:pt-8 border-t border-white/20 inline-flex flex-wrap justify-center items-center gap-3 text-white/70 text-xs sm:text-sm">
            <Award className="w-5 h-5 text-white/80" />
            <span>UNESCO x Nestle Global Youth Grant Scheme Recipient</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
