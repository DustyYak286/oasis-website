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
  startAnimation?: boolean;
  animationDelay?: number;
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
  startAnimation,
  animationDelay = 0,
}: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Determine if we should start based on external trigger or inView
  const shouldStart = startAnimation !== undefined ? startAnimation : isInView;

  useEffect(() => {
    // Only start animation when triggered and hasn't animated yet
    if (!shouldStart || hasAnimated.current) return;
    hasAnimated.current = true;

    // Handle visibility with delay
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay);

    return () => clearTimeout(visibilityTimer);
  }, [shouldStart, animationDelay]);

  useEffect(() => {
    if (!isVisible) return;

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
  }, [isVisible, value, duration]);

  // Format the display value
  const formattedValue = value % 1 !== 0
    ? displayValue.toFixed(1)
    : displayValue.toLocaleString();

  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`font-bold ${valueClassName}`}>
        {prefix}
        {formattedValue}
        {suffix}
      </div>
      <div className="font-medium mt-1 text-sm sm:text-base" style={{ color: 'var(--background)' }}>
        {label}
      </div>
      {source && (
        <div className="text-gray-500 text-sm mt-1">— {source}</div>
      )}
    </motion.div>
  );
}
