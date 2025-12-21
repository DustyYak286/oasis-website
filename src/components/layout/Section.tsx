"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "white" | "secondary" | "primary";
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    secondary: "bg-oasis-secondary",
    primary: "bg-oasis-primary text-white",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 scroll-mt-24", bgClasses[background], className)}
    >
      <Container className={containerClassName}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
