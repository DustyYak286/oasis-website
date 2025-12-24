"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export function Invitation() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-oasis-primary to-oasis-primary-dark relative overflow-hidden flex items-center">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Grayscale to color effect via CSS - will animate on scroll */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
              <div className="text-center text-white/60 px-4">
                <div className="text-sm mb-2">Image Placeholder</div>
                <div className="text-xs">Child engaged with learning device, smiling</div>
              </div>
            </div>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-oasis-primary/30 to-transparent" />
          </motion.div>

          {/* Content Section */}
          <div className="text-white">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ color: 'var(--accent-foreground)' }}
            >
              Fatima&apos;s story doesn&apos;t have to end in limitations.
            </motion.h2>

            <motion.div
              className="text-white/80 text-lg leading-relaxed mb-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                With Oasis, she explores the mathematics she loves. She learns at
                her own pace with an AI tutor by her side. She dreams bigger—because
                now, she has the tools to make those dreams real.
              </p>
            </motion.div>

            <motion.p
              className="text-xl font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: 'var(--background)' }}
            >
              But Oasis only exists when people like you believe it should.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold">Join the Movement</h3>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={scrollToCTA}
                  className="bg-white text-oasis-primary hover:bg-white/90 font-semibold"
                >
                  Partner With Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToCTA}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Support Our Mission
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  onClick={scrollToCTA}
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  Stay Updated
                </Button>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="mt-10 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Award className="w-5 h-5 text-oasis-primary-light" />
                <span>UNESCO x Nestle Global Youth Grant Scheme Recipient</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
