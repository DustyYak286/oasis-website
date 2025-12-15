"use client";

import { motion } from "motion/react";
import { WifiOff, GraduationCap, BookX, Zap } from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: WifiOff,
    value: "2.9 Billion",
    label: "People lack internet access",
    source: "ITU 2023",
    color: "text-oasis-primary",
    bgColor: "bg-oasis-primary/10",
  },
  {
    icon: GraduationCap,
    value: "258 Million",
    label: "Children out of school",
    source: "UNESCO 2023",
    color: "text-oasis-accent-red",
    bgColor: "bg-oasis-accent-red/10",
  },
  {
    icon: BookX,
    value: "617 Million",
    label: "Cannot read basic text",
    source: "World Bank",
    color: "text-oasis-accent-green",
    bgColor: "bg-oasis-accent-green/10",
  },
  {
    icon: Zap,
    value: "789 Million",
    label: "Lack electricity access",
    source: "IEA",
    color: "text-oasis-primary",
    bgColor: "bg-oasis-primary/10",
  },
];

export function ProblemSection() {
  return (
    <Section id="problem" background="secondary">
      <div className="text-center mb-12">
        <motion.span
          className="text-sm font-semibold text-oasis-primary uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Challenge
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          The Global Education Gap
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Millions of students around the world are denied access to quality
          education simply because they lack internet connectivity or reliable
          electricity.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${stat.bgColor} mb-4`}
                >
                  <stat.icon className={`h-7 w-7 ${stat.color}`} />
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">{stat.source}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-gray-500 italic max-w-3xl mx-auto">
          &quot;Education is the most powerful weapon which you can use to change the
          world.&quot; — Nelson Mandela
        </p>
      </motion.div>
    </Section>
  );
}
