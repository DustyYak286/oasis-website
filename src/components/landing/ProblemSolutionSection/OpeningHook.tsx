"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function OpeningHook() {
  return (
    <div className="min-h-[100svh] md:min-h-screen bg-gray-900 relative overflow-hidden isolate">
      {/* Cloud transition from white Hero */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 z-20 pointer-events-none">
        {/* Keep transition soft without blur filters to avoid mobile artifact blocks */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 sm:via-white/80 to-transparent" />
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage:
              "radial-gradient(60% 70% at 18% 0%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 75%), radial-gradient(46% 64% at 50% 0%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 72%), radial-gradient(38% 60% at 82% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 74%)",
          }}
        />
      </div>

      {/* Background - solid to match RealityStats */}
      <div className="absolute inset-0 bg-gray-900" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] md:min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 sm:gap-8 lg:gap-4 items-center w-full py-20 sm:py-24 lg:py-0">
          {/* Image Section - 60% on desktop */}
          <motion.div
            className="lg:col-span-3 relative mt-8 sm:mt-10 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/story.png"
                alt="Child in classroom"
                fill
                className="object-cover -scale-x-100"
                priority
              />
              {/* Gradient overlay on image - fades right side */}
              <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-gray-900/30 to-gray-900" />
            </div>
          </motion.div>

          {/* Text Section - 40% on desktop, pulled left to overlap faded image */}
          <div className="lg:col-span-2 text-white text-center lg:text-left max-w-3xl mx-auto lg:mx-0 lg:-ml-24 relative z-10">
            <motion.p
              className="text-oasis-primary-light text-lg sm:text-xl font-medium tracking-wide uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
              transition={{ duration: 0.5 }}
            >
              Her name is Fatima.
            </motion.p>

            <motion.div
              className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30%" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ color: 'var(--background)' }}
            >
              <p style={{ color: 'var(--background)' }}>
                She walks three kilometers to school each day in a remote village.
                She loves mathematics and dreams of becoming an engineer.
              </p>
              <p className="text-gray-400" style={{ color: 'var(--background)' }}>
                But like 1.3 billion other children, she doesn&apos;t have internet
                access at home. And her school? No electricity.
              </p>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight lg:pr-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
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
