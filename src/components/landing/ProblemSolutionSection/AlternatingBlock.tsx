"use client";

import { motion } from "motion/react";

interface AlternatingBlockProps {
  imagePosition: "left" | "right";
  imagePlaceholder?: string;
  imageAlt: string;
  children: React.ReactNode;
  className?: string;
}

export function AlternatingBlock({
  imagePosition,
  imagePlaceholder = "Image",
  imageAlt,
  children,
  className = "",
}: AlternatingBlockProps) {
  const imageElement = (
    <motion.div
      className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-700"
      initial={{ opacity: 0, x: imagePosition === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Placeholder gradient - replace with Next.js Image when ready */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center"
        role="img"
        aria-label={imageAlt}
      >
        <span className="text-gray-500 text-sm">{imagePlaceholder}</span>
      </div>
    </motion.div>
  );

  const contentElement = (
    <motion.div
      className="flex flex-col justify-center"
      initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${className}`}>
      {imagePosition === "left" ? (
        <>
          {imageElement}
          {contentElement}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{contentElement}</div>
          <div className="order-1 lg:order-2">{imageElement}</div>
        </>
      )}
    </div>
  );
}
