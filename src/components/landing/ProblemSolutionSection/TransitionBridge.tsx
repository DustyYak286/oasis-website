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
      className="bg-gray-900 relative flex items-center justify-center min-h-[clamp(180px,42vh,460px)] py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollScrubTypewriter
          words={words}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center"
          caretClassName="bg-oasis-primary"
        />
      </div>
    </div>
  );
}
