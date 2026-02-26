"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: 0, suffix: "", label: "Pilot Schools", color: "text-oasis-primary" },
  { value: 0, suffix: "", label: "Students Reached", color: "text-oasis-accent-green" },
  { value: 0, suffix: "", label: "Countries Reached", color: "text-oasis-primary" },
  { value: 4, suffix: "", label: "SDGs Aligned", color: "text-oasis-accent-green" },
];

const testimonials = [
  {
    quote:
      "For the first time, my students can access the same quality educational materials as urban schools. Oasis has transformed our classroom into a hub of learning and discovery.",
    name: "Sarah Kimani",
    role: "Teacher, Rural Kenya",
    image: "/testimonials/teacher-1.jpg",
  },
  {
    quote:
      "The low-power setup means we never lose a learning day due to power outages. Our students are more engaged and motivated than ever before.",
    name: "Emmanuel Okonkwo",
    role: "School Administrator, Nigeria",
    image: "/testimonials/admin-1.jpg",
  },
  {
    quote:
      "The AI assistant helps me understand difficult concepts at my own pace. It feels like having a personal tutor available whenever I need help.",
    name: "Amara Diallo",
    role: "Student, Senegal",
    image: "/testimonials/student-1.jpg",
  },
];

function getQuoteSizeClass(quoteLength: number): string {
  if (quoteLength > 170) return "text-sm sm:text-base md:text-lg";
  if (quoteLength > 140) return "text-base sm:text-lg md:text-xl";
  return "text-lg sm:text-xl md:text-2xl";
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current || value === 0) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Section id="impact" background="white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Impact
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Real results from our pilot programs around the world.
        </motion.p>
      </div>

      {/* Metrics */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {metrics.map((metric, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 border-none shadow-lg"
          >
            <CardContent className="p-4 sm:p-6 text-center">
              <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${metric.color} mb-2`}>
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">{metric.label}</div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Testimonials - temporarily disabled until real testimonials are available
      <motion.div
        className="relative max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-gradient-to-br from-oasis-secondary to-white border-none shadow-xl">
          <CardContent className="p-8 md:p-12">
            <Quote className="h-12 w-12 text-oasis-primary/20 mb-6" />

            <div className="h-[340px] sm:h-[300px] md:h-[250px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  className="h-full flex flex-col justify-between gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className={`${getQuoteSizeClass(testimonials[currentTestimonial].quote.length)} text-gray-700 leading-relaxed`}>
                    &quot;{testimonials[currentTestimonial].quote}&quot;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-oasis-primary/10 flex items-center justify-center text-oasis-primary font-bold text-xl">
                      {testimonials[currentTestimonial].name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-oasis-primary w-6"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="h-10 w-10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="h-10 w-10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      */}
    </Section>
  );
}
