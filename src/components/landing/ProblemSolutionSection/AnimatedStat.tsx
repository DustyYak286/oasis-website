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
  duration = 1200,
}: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // Only start animation when in view and hasn't animated yet
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const steps = 60;
    const stepInterval = duration / steps;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        // Handle decimals properly
        if (value % 1 !== 0) {
          setDisplayValue(Math.round(current * 10) / 10);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }
    }, stepInterval);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  // Format the display value
  const formattedValue = value % 1 !== 0
    ? displayValue.toFixed(1)
    : displayValue.toLocaleString();

  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`font-bold ${valueClassName}`}>
        {prefix}
        {formattedValue}
        {suffix}
      </div>
      <div className="text-gray-300 font-medium mt-1">{label}</div>
      {source && (
        <div className="text-gray-500 text-sm mt-1">— {source}</div>
      )}
    </motion.div>
  );
}
