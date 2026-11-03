"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Crosshair, Scale } from "lucide-react";
import { Container } from "@/components/layout";
import { Reveal } from "@/components/ui/reveal";

const controls = [
  { title: "Turn it on per course", text: "Each course has its own AI switch." },
  { title: "Hints, not answers", text: "Guided help asks questions instead of solving." },
  { title: "Their own instructions", text: "The teacher writes what the AI should focus on." },
];

// Marker positions on the settings card, as percentages of its size.
const markers = [
  { n: 1, top: "24.7%" },
  { n: 2, top: "49.4%" },
  { n: 3, top: "75%" },
];

function MemoryBar({
  label,
  aside,
  value,
  fraction,
  strong,
  note,
  delay,
}: {
  label: string;
  aside?: string;
  value: string;
  fraction: number;
  strong?: boolean;
  note?: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  return (
    <div ref={ref}>
      <div className="mb-2.5 flex items-baseline justify-between gap-4">
        <p className="text-sm font-semibold text-ink">{label}</p>
        {aside && <p className="shrink-0 text-xs font-medium text-mist">{aside}</p>}
      </div>
      <div className="relative flex h-11 items-center overflow-hidden rounded-full bg-white ring-1 ring-line">
        <motion.div
          className={`flex h-full items-center rounded-full px-4 text-sm font-medium ${
            strong ? "bg-blue text-white" : "bg-[#BCD4F6] text-ink"
          }`}
          initial={reduce ? false : { width: "0%" }}
          animate={inView || reduce ? { width: `${Math.max(fraction * 100, 0)}%` } : undefined}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ minWidth: "fit-content" }}
        >
          <span className="whitespace-nowrap">{value}</span>
        </motion.div>
        {note && (
          <span className="ml-4 hidden truncate text-sm italic text-slate sm:block">{note}</span>
        )}
      </div>
    </div>
  );
}

export function AISection() {
  return (
    <section id="ai" className="scroll-mt-16 bg-white pb-20 pt-4 sm:pb-28 sm:pt-8">
      <Container>
        <Reveal>
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.1]">
            Teachers decide how the AI helps
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[19rem_1fr] lg:gap-16">
          <ol className="space-y-8">
            {controls.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 0.08} className="flex gap-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">{c.title}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-slate">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.1} y={28} className="relative mx-auto w-full max-w-3xl pl-4 sm:pl-5">
            <div className="overflow-hidden rounded-2xl shadow-[0_30px_60px_-24px_rgba(15,27,51,0.28),0_10px_24px_-12px_rgba(15,27,51,0.12)]">
              <Image
                src="/images/product/ai-settings.png"
                alt="OasisAI settings for a course: an on switch, the Guided Help response mode and the teacher's own prompt"
                width={1536}
                height={1044}
                sizes="(min-width: 1024px) 720px, 100vw"
                className="h-auto w-full"
              />
            </div>
            {markers.map((m) => (
              <span
                key={m.n}
                aria-hidden="true"
                className="absolute left-0 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-blue text-sm font-semibold text-white ring-4 ring-white sm:size-9"
                style={{ top: m.top }}
              >
                {m.n}
              </span>
            ))}
          </Reveal>
        </div>

        {/* On-device AI */}
        <Reveal className="mt-20 rounded-3xl bg-paper p-6 sm:mt-28 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                The AI runs on the box, not in the cloud
              </h3>
              <div className="mt-8 space-y-5">
                <div className="flex gap-3.5">
                  <Scale className="mt-0.5 size-5 shrink-0 text-slate" strokeWidth={1.8} aria-hidden="true" />
                  <p className="text-[15px] leading-relaxed text-slate">
                    <span className="font-semibold text-ink">The trade-off.</span> A small model knows less than cloud AI.
                  </p>
                </div>
                <div className="flex gap-3.5">
                  <Crosshair className="mt-0.5 size-5 shrink-0 text-blue" strokeWidth={1.8} aria-hidden="true" />
                  <p className="text-[15px] leading-relaxed text-slate">
                    <span className="font-semibold text-ink">So we keep it focused.</span> On the course, with the teacher in control.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-7 self-center">
              <MemoryBar
                label="A 3-billion-parameter model, full size"
                aside="16 GB of memory"
                value="about 6 GB"
                fraction={6 / 16}
                delay={0}
              />
              <MemoryBar
                label="Compressed to 4-bit"
                value="about 2 GB"
                fraction={2 / 16}
                strong
                note="Room left for the platform and a whole class"
                delay={0.25}
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
