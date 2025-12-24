"use client";

import { motion } from "motion/react";

const headlines = [
  "Learning didn't require the internet.",
  "Education didn't depend on a power grid.",
  "Every classroom had its own digital library.",
];

export function TurningPoint() {
  return (
    <div className="min-h-[80vh] relative overflow-hidden flex items-center justify-center">
      {/* Gradient background - transition from dark to brand colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-700 via-gray-600/80 to-oasis-primary/30" />

      {/* Subtle animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-oasis-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-oasis-primary-light/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="text-oasis-primary-light text-lg sm:text-xl font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          But imagine if...
        </motion.p>

        <div className="space-y-4 sm:space-y-6 mb-12">
          {headlines.map((headline, index) => (
            <motion.h2
              key={index}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.4,
                ease: "easeOut",
              }}
            >
              {headline}
            </motion.h2>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <span className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: 'var(--oasis-primary)' }}>
            This is Oasis.
          </span>
          <motion.div
            className="h-1 bg-oasis-primary mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.2 }}
            style={{ maxWidth: "200px" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
