"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { Aurora } from "@/components/ui/aurora";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section
      id="top"
      className="grain bg-night-sky relative isolate flex min-h-[100svh] items-center overflow-hidden text-white"
    >
      <Aurora className="-z-10" baseline={0.8} tilt={-0.14} />

      <Container className="w-full pb-36 pt-28 sm:pb-40 md:pb-44">
        <div className="max-w-3xl">
          <motion.h1
            {...rise(0.1)}
            className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[5.25rem]"
          >
            Quality education,
            <br />
            <span className="text-sky">anywhere.</span>
          </motion.h1>

          <motion.p
            {...rise(0.25)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:mt-7 sm:text-xl"
          >
            Oasis gives a classroom its own server, with lessons, quizzes and an
            AI assistant that work without the internet.
          </motion.p>

          <motion.div {...rise(0.4)} className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a
              href="#how-it-works"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[15px] font-medium text-ink transition-colors hover:bg-tint"
            >
              See how it works
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-[15px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              Get in touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
