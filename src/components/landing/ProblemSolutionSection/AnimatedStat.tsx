"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  source?: string;
  className?: string;
  valueClassName?: string;
  duration?: number;
  startAnimation: boolean;
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
  const hasAnimated = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Only start animation when triggered and hasn't animated yet
    if (!startAnimation || hasAnimated.current) return;

    if (shouldReduceMotion) {
      return;
    }
    hasAnimated.current = true;

    // Handle visibility with delay
    const visibilityTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, animationDelay);

    return () => window.clearTimeout(visibilityTimer);
  }, [startAnimation, animationDelay, shouldReduceMotion, value]);

  useEffect(() => {
    if (!isVisible || shouldReduceMotion) return;

    let animationFrameId = 0;
    let startTime: number | null = null;
    const isDecimalValue = value % 1 !== 0;

    const normalizeValue = (raw: number) => {
      if (isDecimalValue) {
        return Math.round(raw * 10) / 10;
      }
      return Math.floor(raw);
    };

    const animateValue = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const nextValue = normalizeValue(value * progress);

      setDisplayValue((previousValue) =>
        previousValue === nextValue ? previousValue : nextValue
      );

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(animateValue);
        return;
      }

      setDisplayValue(value);
    };

    animationFrameId = window.requestAnimationFrame(animateValue);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isVisible, value, duration, shouldReduceMotion]);

  // Format the display value
  const isStatVisible = shouldReduceMotion ? startAnimation : isVisible;
  const renderedValue = shouldReduceMotion && startAnimation ? value : displayValue;
  const formattedValue =
    value % 1 !== 0 ? renderedValue.toFixed(1) : renderedValue.toLocaleString();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isStatVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
