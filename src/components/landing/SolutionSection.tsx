"use client";

import { motion } from "motion/react";
import {
  WifiOff,
  BatteryCharging,
  BookOpen,
  Bot,
  Server,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: WifiOff,
    title: "Offline-First",
    description:
      "Works without internet connectivity. Content syncs automatically when a connection becomes available.",
    color: "text-oasis-primary",
    bgColor: "bg-oasis-primary",
    span: "md:col-span-2",
  },
  {
    icon: BatteryCharging,
    title: "Low-Power Design",
    description:
      "Runs on minimal electricity. Solar-compatible for the most remote areas.",
    color: "text-oasis-accent-green",
    bgColor: "bg-oasis-accent-green",
    span: "",
  },
  {
    icon: BookOpen,
    title: "Local Content Access",
    description:
      "Curriculum-aligned educational materials accessible to entire classrooms simultaneously.",
    color: "text-oasis-accent-red",
    bgColor: "bg-oasis-accent-red",
    span: "",
  },
  {
    icon: Bot,
    title: "AI Learning Assistant",
    description:
      "Intelligent tutoring system that adapts to each student's learning pace and needs, even offline.",
    color: "text-oasis-primary",
    bgColor: "bg-oasis-primary",
    span: "md:col-span-2",
  },
  {
    icon: Server,
    title: "Raspberry Pi Deployment",
    description:
      "Affordable, compact hardware that any school can set up and maintain with minimal training.",
    color: "text-oasis-accent-green",
    bgColor: "bg-oasis-accent-green",
    span: "",
  },
];

export function SolutionSection() {
  return (
    <Section id="solution" background="white">
      <div className="text-center mb-12">
        <motion.span
          className="text-sm font-semibold text-oasis-primary uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Solution
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          The Oasis Platform
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A comprehensive educational ecosystem designed for the most
          challenging environments.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={feature.span}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardContent className="p-6 relative">
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bgColor}/10 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 flex items-center justify-center gap-2 text-oasis-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <Sparkles className="h-5 w-5" />
        <span className="font-medium">No internet? No problem.</span>
      </motion.div>
    </Section>
  );
}
