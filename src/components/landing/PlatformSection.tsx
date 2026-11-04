"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  BookOpen,
  CircleCheck,
  ListChecks,
  MonitorSmartphone,
  Sparkles,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { TabletFrame } from "@/components/ui/tablet-frame";
import { Reveal } from "@/components/ui/reveal";
import { DEVICE_URL } from "@/lib/site";

type Audience = "teachers" | "students";

const features: Record<Audience, { icon: LucideIcon; title: string; text: string }[]> = {
  teachers: [
    {
      icon: BookOpen,
      title: "Courses and materials",
      text: "Upload presentations, readings and assignments.",
    },
    {
      icon: ListChecks,
      title: "Quizzes graded automatically",
      text: "Every student's results, with no marking by hand.",
    },
    {
      icon: WandSparkles,
      title: "AI course builder",
      text: "Drafts a course's sections and materials from a topic.",
    },
  ],
  students: [
    {
      icon: MonitorSmartphone,
      title: "Any device",
      text: "Phones, tablets or laptops, in the browser.",
    },
    {
      icon: CircleCheck,
      title: "Results right away",
      text: "A score and a breakdown as soon as they submit.",
    },
    {
      icon: Sparkles,
      title: "AI help and translation",
      text: "Answers from the course materials, and translation between 10 languages.",
    },
  ],
};

const tabs: { id: Audience; label: string }[] = [
  { id: "teachers", label: "For teachers" },
  { id: "students", label: "For students" },
];

function TeacherVisual() {
  return (
    <BrowserFrame url={DEVICE_URL}>
      {/* On phones, zoom into the left of the dashboard so it stays legible. */}
      <div className="aspect-[6/5] overflow-hidden sm:aspect-auto">
        <Image
          src="/images/product/teacher-dashboard.png"
          alt="The Oasis teacher dashboard, with courses, publishing status and quick actions"
          width={2880}
          height={1640}
          sizes="(min-width: 1280px) 900px, (min-width: 1024px) 70vw, 180vw"
          className="h-auto w-[180%] max-w-none sm:w-full"
        />
      </div>
    </BrowserFrame>
  );
}

function StudentVisual() {
  return (
    <div className="relative pr-[22%] sm:pr-[16%]">
      <TabletFrame>
        <Image
          src="/images/product/student-course-tablet.png"
          alt="A course on a tablet: Grade 7 Mathematics with its sections and materials"
          width={1770}
          height={1230}
          sizes="(min-width: 1024px) 760px, 80vw"
          className="h-auto w-full"
        />
      </TabletFrame>
      <PhoneFrame className="absolute -bottom-10 right-0 w-[34%] max-w-[15rem] sm:-bottom-14 sm:w-[27%]">
        <Image
          src="/images/product/student-results.png"
          alt="Quiz results on a phone: 3 of 3 questions correct"
          width={780}
          height={1688}
          sizes="(min-width: 640px) 240px, 34vw"
          className="h-auto w-full"
        />
      </PhoneFrame>
    </div>
  );
}

export function PlatformSection() {
  const [audience, setAudience] = useState<Audience>("teachers");
  const reduce = useReducedMotion();
  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 },
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section id="platform" className="scroll-mt-16 overflow-hidden bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.1]">
            A full learning platform, offline
          </h2>

          <div
            role="tablist"
            aria-label="Who it's for"
            className="relative inline-flex w-fit shrink-0 rounded-full bg-paper p-1 ring-1 ring-line"
          >
            {tabs.map((t) => {
              const active = audience === t.id;
              return (
                <button
                  key={t.id}
                  id={`tab-${t.id}`}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  aria-controls="platform-panel"
                  onClick={() => setAudience(t.id)}
                  className={cn(
                    "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors sm:px-6",
                    active ? "text-white" : "text-slate hover:text-ink"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="platform-tab"
                      className="absolute inset-0 rounded-full bg-blue shadow-[0_6px_16px_-8px_rgba(63,132,229,0.9)]"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          id="platform-panel"
          role="tabpanel"
          aria-labelledby={`tab-${audience}`}
          className="mt-14 grid items-center gap-14 pb-10 sm:pb-14 lg:grid-cols-[19rem_1fr] lg:gap-20"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul key={audience} {...fade} className="grid gap-7 sm:grid-cols-3 lg:grid-cols-1">
              {features[audience].map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-tint text-blue">
                    <f.icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{f.title}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate">{f.text}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>

          <Reveal delay={0.1} y={28} className="relative lg:-mr-6 xl:-mr-12">
            <div
              aria-hidden="true"
              className="absolute -inset-x-10 -bottom-16 top-10 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_60%_60%,#DCE9FB_0%,rgba(255,255,255,0)_70%)]"
            />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={audience} {...fade}>
                {audience === "teachers" ? <TeacherVisual /> : <StudentVisual />}
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
