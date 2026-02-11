"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
  { text: "Fatima", className: "text-white" },
  { text: "is", className: "text-white" },
  { text: "not", className: "text-white" },
  { text: "alone.", className: "text-white" },
];

interface TransitionBridgeProps {
  onComplete?: () => void;
}

export function TransitionBridge({ onComplete }: TransitionBridgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);
  const isInView = useInView(containerRef, { once: true, margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView && !hasTriggered.current) {
      hasTriggered.current = true;
      // Wait 2.0 seconds after the typewriter starts (17 chars × 0.1s + 0.3s duration)
      const timer = setTimeout(() => {
        onComplete?.();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isInView, onComplete]);

  return (
    <div
      ref={containerRef}
      className="pb-16 sm:pb-20 lg:pb-24 bg-gray-900 relative flex items-center justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TypewriterEffect
          words={words}
          className="text-2xl sm:text-4xl lg:text-5xl"
          cursorClassName="bg-oasis-primary"
        />
      </div>
    </div>
  );
}
