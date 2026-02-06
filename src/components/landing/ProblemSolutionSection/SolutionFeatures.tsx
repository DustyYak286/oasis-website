"use client";

import { motion } from "motion/react";
import { WifiOff, BatteryLow, BookOpen, Bot, BarChart3 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: WifiOff,
    title: "Works Without Internet",
    subtitle: "100% Offline Capability",
    description:
      "Oasis operates as a self-contained local server. Teachers upload content, students connect wirelessly. The internet becomes optional, not required.",
    imagePlaceholder: "Device with WiFi signal illustration",
    imagePosition: "right" as const,
    image: "/images/oasis-png1.png",
  },
  {
    icon: BatteryLow,
    title: "Runs on Almost Nothing",
    subtitle: "Less than 10 watts per device",
    description:
      "While traditional digital learning centers demand hundreds of watts, Oasis needs less power than a single light bulb. It works even where electricity is limited or intermittent.",
    imagePlaceholder: "Device with power efficiency visual",
    imagePosition: "left" as const,
    image: "/images/oasis-png2.png",
  },
  {
    icon: BookOpen,
    title: "Curriculum at Their Fingertips",
    subtitle: "Teacher-Controlled Content",
    description:
      "Teachers curate and upload curriculum-aligned materials, presentations, and assessments. Entire classrooms access content simultaneously—truly shared learning.",
    imagePlaceholder: "Teacher upload interface concept",
    imagePosition: "right" as const,
  },
  {
    icon: Bot,
    title: "A Tutor for Every Student",
    subtitle: "AI-Powered Learning Assistant",
    description:
      "An intelligent assistant that adapts to each student's pace, answers questions, explains difficult concepts, and guides independent study—all while completely offline.",
    imagePlaceholder: "Student using AI chat interface",
    imagePosition: "left" as const,
  },
  {
    icon: BarChart3,
    title: "Track Progress in Real Time",
    subtitle: "Built-In Analytics Dashboard",
    description:
      "Teachers monitor student performance, identify struggling learners, and adapt instruction based on real-time insights—all without sending data to the cloud.",
    imagePlaceholder: "Teacher viewing analytics dashboard",
    imagePosition: "right" as const,
  },
];

export function SolutionFeatures() {
  return (
    <div className="bg-gradient-to-b from-oasis-primary-dark to-oasis-primary pt-14 sm:pt-16 pb-14 sm:pb-16 lg:pt-20 lg:pb-24 relative overflow-hidden">
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-14 sm:space-y-20 lg:space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8 lg:gap-16 items-center"
            >
              {/* Image/Render placeholder */}
              <motion.div
                className={`relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden ${
                  feature.imagePosition === "right" ? "lg:order-2" : "lg:order-1"
                }`}
                initial={{
                  opacity: 0,
                  x: feature.imagePosition === "right" ? 50 : -50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {feature.image ? (
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <div className="text-center text-white/60 px-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <span className="text-xs sm:text-sm">{feature.imagePlaceholder}</span>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Content */}
              <motion.div
                className={`${
                  feature.imagePosition === "right" ? "lg:order-1" : "lg:order-2"
                }`}
                initial={{
                  opacity: 0,
                  x: feature.imagePosition === "right" ? -50 : 50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--background)' }}>
                    {feature.subtitle}
                  </span>
                </div>

                <h3 className="text-xl [@media(min-width:360px)]:text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--background)' }}>
                  {feature.title}
                </h3>

                <p className="text-base [@media(min-width:360px)]:text-lg leading-relaxed" style={{ color: 'var(--background)' }}>
                  {feature.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
