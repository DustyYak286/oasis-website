"use client";

import { motion } from "motion/react";

export function OpeningHook() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Cloud transition from white Hero */}
      <div className="absolute top-0 left-0 right-0 h-16 z-20 pointer-events-none">
        {/* Main gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent" />
        {/* Soft cloud shapes using layered blurs */}
        <div className="absolute -top-6 left-[10%] w-[30%] h-12 bg-white/80 rounded-full blur-2xl" />
        <div className="absolute -top-4 left-[40%] w-[25%] h-10 bg-white/70 rounded-full blur-xl" />
        <div className="absolute -top-5 right-[15%] w-[20%] h-10 bg-white/60 rounded-full blur-2xl" />
        <div className="absolute -top-3 left-[65%] w-[15%] h-8 bg-white/50 rounded-full blur-xl" />
      </div>

      {/* Background - solid to match RealityStats */}
      <div className="absolute inset-0 bg-gray-900" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center w-full py-16 lg:py-0">
          {/* Image Section - 60% on desktop */}
          <motion.div
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Placeholder - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-sm mb-2">Image Placeholder</div>
                  <div className="text-xs">Child in classroom, curious expression</div>
                </div>
              </div>
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-900/80" />
            </div>
          </motion.div>

          {/* Text Section - 40% on desktop */}
          <div className="lg:col-span-2 text-white">
            <motion.p
              className="text-oasis-primary-light text-sm font-medium tracking-wide uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Her name is Fatima.
            </motion.p>

            <motion.div
              className="space-y-4 text-gray-300 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                She walks three kilometers to school each day in a remote village.
                She loves mathematics and dreams of becoming an engineer.
              </p>
              <p className="text-gray-400">
                But like 1.3 billion other children, she doesn&apos;t have internet
                access at home. And her school? No electricity.
              </p>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Every child deserves a chance to learn.
            </motion.h2>
          </div>
        </div>
      </div>

    </div>
  );
}
