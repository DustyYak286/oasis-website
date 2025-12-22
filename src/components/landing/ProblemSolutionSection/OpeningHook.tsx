"use client";

import { motion } from "motion/react";
import { AnimatedStat } from "./AnimatedStat";

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

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

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

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Every child deserves a chance to learn.
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                She walks three kilometers to school each day in rural Kenya.
                She loves mathematics and dreams of becoming an engineer.
              </p>
              <p className="text-gray-400">
                But like 1.3 billion other children, she doesn&apos;t have internet
                access at home. And her school? No electricity.
              </p>
            </motion.div>

            <AnimatedStat
              value={1.3}
              suffix=" billion"
              label="children lack internet at home"
              source="UNICEF"
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
              valueClassName="text-4xl sm:text-5xl text-oasis-primary-light"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-2 bg-gray-500 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
