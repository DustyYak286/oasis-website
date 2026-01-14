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
    <div className="min-h-[60vh] bg-gradient-to-b from-oasis-primary to-oasis-primary-light relative overflow-hidden flex items-center py-16">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-oasis-accent-green/10 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"
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
            className="text-lg leading-relaxed mb-6"
            style={{ color: 'var(--background)' }}
          >
            With Oasis, she explores the mathematics she loves. She learns at
            her own pace with an AI tutor by her side. She dreams bigger, because
            she has the tools to make those dreams&nbsp;real.
          </p>

          <p
            className="text-xl font-medium mb-10"
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

          {/* Social Proof - animates separately on further scroll */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/20 inline-flex items-center gap-3 text-white/70 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 0.5 }}
          >
            <Award className="w-5 h-5 text-white/80" />
            <span>UNESCO x Nestle Global Youth Grant Scheme Recipient</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
