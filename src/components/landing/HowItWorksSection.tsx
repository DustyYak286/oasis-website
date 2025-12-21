"use client";

import { motion } from "motion/react";
import {
  Package,
  Upload,
  Wifi,
  GraduationCap,
  BarChart3,
} from "lucide-react";
import { Section } from "@/components/layout";

const steps = [
  {
    icon: Package,
    title: "Setup",
    description:
      "School receives a Raspberry Pi mini-server with pre-loaded educational content and the Oasis platform.",
    color: "bg-oasis-primary",
  },
  {
    icon: Upload,
    title: "Content Load",
    description:
      "Teachers upload curriculum-aligned materials via USB or sync when connectivity is available.",
    color: "bg-oasis-accent-green",
  },
  {
    icon: Wifi,
    title: "Connect",
    description:
      "Students connect their devices wirelessly to the local Oasis network—no internet required.",
    color: "bg-oasis-primary",
  },
  {
    icon: GraduationCap,
    title: "Learn",
    description:
      "Access educational content, interact with the AI assistant, and complete assessments.",
    color: "bg-oasis-accent-red",
  },
  {
    icon: BarChart3,
    title: "Track",
    description:
      "Teachers monitor student progress and adapt instruction based on real-time analytics.",
    color: "bg-oasis-accent-green",
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" background="secondary">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Getting started with Oasis is simple. Here&apos;s how we bring
          education to underserved communities.
        </motion.p>
      </div>

      <div className="relative">
        {/* Timeline line - desktop */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-oasis-primary via-oasis-accent-green to-oasis-primary rounded-full" />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Step number and icon */}
              <div className="relative inline-flex flex-col items-center">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${step.color} flex items-center justify-center shadow-lg mb-4 relative z-10`}
                >
                  <step.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold text-gray-700 z-20">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-oasis-primary/10 text-oasis-primary font-semibold">
          No internet? No problem.
        </div>
      </motion.div>
    </Section>
  );
}
