"use client";

import { motion } from "motion/react";
import { AnimatedStat } from "./AnimatedStat";

const stats = [
  {
    value: 1.3,
    suffix: "B",
    label: "children lack internet access at home",
    context:
      "In an increasingly connected world, over a billion young learners are left behind.",
    imagePlaceholder: "Child looking at a disconnected device",
    imagePosition: "left" as const,
    source: "UNICEF",
  },
  {
    value: 617,
    suffix: "M",
    label: "cannot read a basic sentence",
    context:
      "Without quality materials, brilliant minds stay hidden. Dreams remain locked away.",
    imagePlaceholder: "Children sharing worn textbook",
    imagePosition: "right" as const,
  },
  {
    value: 200,
    suffix: "M+",
    label: "children attend schools without electricity",
    context:
      "When the sun sets, learning stops. Potential fades into darkness.",
    imagePlaceholder: "Empty classroom at dusk",
    imagePosition: "left" as const,
  },
];

export function RealityStats() {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 pb-16 lg:pb-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-4">
            The Reality
          </h3>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                stat.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                  stat.imagePosition === "right" ? "lg:order-2" : "lg:order-1"
                }`}
                initial={{ opacity: 0, x: stat.imagePosition === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 text-sm text-center px-4">
                    {stat.imagePlaceholder}
                  </span>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className={`${
                  stat.imagePosition === "right" ? "lg:order-1" : "lg:order-2"
                }`}
                initial={{ opacity: 0, x: stat.imagePosition === "left" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <AnimatedStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  className="mb-6"
                  valueClassName="text-5xl sm:text-6xl lg:text-7xl text-white"
                />
                <p className="text-gray-400 text-lg lg:text-xl leading-relaxed">
                  {stat.context}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient to blend into TurningPoint */}
      <div className="h-32 bg-gradient-to-b from-gray-900 to-gray-700" />
    </div>
  );
}
