"use client";

import { motion } from "motion/react";

const headlines = [
  "Learning didn't require the internet.",
  "Education didn't depend on a power grid.",
  "Classrooms had their own digital libraries.",
];

export function TurningPoint() {
  return (
    <div className="min-h-[55svh] sm:min-h-[60vh] relative overflow-hidden flex items-center justify-center py-14 sm:py-16">
      {/* Gradient background - transition from dark to brand colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-oasis-primary-dark" />

      {/* Subtle animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-oasis-primary/10 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 right-1/4 w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 bg-oasis-primary-light/10 rounded-full blur-3xl"
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

      {/* Single parent trigger - all children animate based on delays from this trigger */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30%" }}
      >
        <motion.p
          className="text-white text-base sm:text-xl font-medium mb-7 sm:mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          But imagine if...
        </motion.p>

        <div className="space-y-3 sm:space-y-6 mb-10 sm:mb-12">
          {headlines.map((headline, index) => (
            <motion.h2
              key={index}
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.4,
                ease: "easeOut",
              }}
            >
              {headline}
            </motion.h2>
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          <span
            className="inline-block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            This is Oasis.
          </span>
          <motion.div
            className="h-1 bg-white mx-auto mt-4 rounded-full"
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1 },
            }}
            transition={{ duration: 0.6, delay: 2.3 }}
            style={{ maxWidth: "200px" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
