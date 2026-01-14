"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
  { text: "Fatima", className: "text-white" },
  { text: "is", className: "text-white" },
  { text: "not", className: "text-white" },
  { text: "alone.", className: "text-white" },
];

export function TransitionBridge() {
  return (
    <div className="pb-20 lg:pb-24 bg-gray-900 relative flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TypewriterEffect
          words={words}
          className="text-2xl sm:text-3xl lg:text-4xl"
          cursorClassName="bg-oasis-primary"
        />
      </div>
    </div>
  );
}
