"use client";

import { ScrollScrubTypewriter } from "./ScrollScrubTypewriter";

const words = [
  { text: "Fatima", className: "text-white" },
  { text: "is", className: "text-white" },
  { text: "not", className: "text-white" },
  { text: "alone.", className: "text-white" },
];

export function TransitionBridge() {
  return (
    <div
      className="bg-gray-900 relative flex items-center justify-center min-h-[clamp(165px,39vh,460px)] py-10 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -translate-y-8 sm:translate-y-0">
        <ScrollScrubTypewriter
          words={words}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center"
          caretClassName="bg-oasis-primary"
        />
      </div>
    </div>
  );
}
