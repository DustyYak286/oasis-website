"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout";
import { Reveal } from "@/components/ui/reveal";

const COLS = 10;
const ROWS = 10;
const OFFLINE_FROM = 75; // the last 25 of 100: one in four

export function ProblemSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();
  const on = inView || reduce;

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-[4.5rem] font-semibold leading-none tracking-[-0.04em] text-blue sm:text-[6.5rem] lg:text-[7.5rem]">
              2.2 billion
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              people are still offline
            </h2>
            <p className="mt-4 text-lg text-slate">
              Most of them in low and middle income countries.
            </p>
            <p className="mt-10 text-xs text-mist">
              Source:{" "}
              <a
                href="https://www.itu.int/hub/publication/D-IND-ICT_MDD-2025-3/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line underline-offset-2 hover:text-slate"
              >
                ITU, Facts and Figures 2025
              </a>
            </p>
          </Reveal>

          <div className="mx-auto w-full max-w-[19rem] sm:max-w-[25rem] lg:mr-0">
            <div
              ref={gridRef}
              role="img"
              aria-label="A grid of 100 dots where 25 are dark: one in four people is offline"
              className="grid gap-[clamp(6px,1.6vw,12px)]"
              style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
            >
              {Array.from({ length: COLS * ROWS }, (_, i) => {
                const offline = i >= OFFLINE_FROM;
                return (
                  <motion.span
                    key={i}
                    className="aspect-square rounded-full"
                    initial={reduce ? false : { opacity: 0, scale: 0.4, backgroundColor: "#D5E3F7" }}
                    animate={
                      on
                        ? {
                            opacity: 1,
                            scale: 1,
                            backgroundColor: offline ? "#0F1B33" : "#D5E3F7",
                          }
                        : undefined
                    }
                    transition={{
                      opacity: { duration: 0.3, delay: (Math.floor(i / COLS) + (i % COLS)) * 0.012 },
                      scale: { duration: 0.3, delay: (Math.floor(i / COLS) + (i % COLS)) * 0.012 },
                      backgroundColor: {
                        duration: 0.35,
                        delay: offline ? 0.3 + (i - OFFLINE_FROM) * 0.018 : 0,
                      },
                    }}
                  />
                );
              })}
            </div>
            <p className="mt-6 text-base text-slate">
              <span className="font-semibold text-ink">1 in 4</span> people
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
