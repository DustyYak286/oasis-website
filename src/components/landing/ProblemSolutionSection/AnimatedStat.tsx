"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  source?: string;
  className?: string;
  valueClassName?: string;
  duration?: number;
}

export function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  label,
  source,
  className = "",
  valueClassName = "",
  duration = 2000,
}: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

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

    setHasAnimated(true);
    return () => clearInterval(timer);
  }, [isInView, value, hasAnimated, duration]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`font-bold ${valueClassName}`}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-300 font-medium mt-1">{label}</div>
      {source && (
        <div className="text-gray-500 text-sm mt-1">— {source}</div>
      )}
    </motion.div>
  );
}
