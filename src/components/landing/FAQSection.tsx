"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { Reveal } from "@/components/ui/reveal";
import { DEVICE_URL } from "@/lib/site";

const faqs = [
  {
    q: "Who is Oasis for?",
    a: "Schools with little or no internet, and schools that want their lessons to keep working when the connection doesn't.",
  },
  {
    q: "Does Oasis need an internet connection?",
    a: "No. Lessons, quizzes, the AI assistant and translation all run on the Oasis device in the classroom. There's no cloud account and no subscription.",
  },
  {
    q: "What do students need?",
    a: `Any phone, tablet or laptop with a web browser. They join the Oasis Wi-Fi and open ${DEVICE_URL}. There's nothing to install.`,
  },
  {
    q: "Where is student data stored?",
    a: "On the device, in the classroom. No personal student data is sent anywhere, and the school stays in control of it.",
  },
  {
    q: "Can teachers use their own materials?",
    a: "Yes. Teachers upload their own presentations, readings and assignments, and build quizzes for each course. The AI course builder can draft a first version from a topic.",
  },
  {
    q: "What does the device need to run?",
    a: "Just power. It uses under 10 W, so there's no server room or cooling.",
  },
  {
    q: "How can our school start using Oasis?",
    a: "We're preparing our first classrooms in Qatar. If you'd like your school to be one of them, write to us below.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-16 bg-paper py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[19rem_1fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.1]">
              Questions
            </h2>
            <p className="mt-5 text-[15px] text-slate">
              Something else?{" "}
              <a href="#contact" className="font-medium text-blue underline-offset-4 hover:underline">
                Ask us
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="divide-y divide-line border-y border-line">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <h3>
                      <button
                        type="button"
                        id={`faq-q-${i}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-a-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                      >
                        <span className="text-base font-semibold text-ink transition-colors group-hover:text-blue sm:text-lg">
                          {f.q}
                        </span>
                        <span
                          className={cn(
                            "grid size-8 shrink-0 place-items-center rounded-full ring-1 transition-[background-color,transform,color] duration-300",
                            isOpen ? "rotate-45 bg-blue text-white ring-blue" : "bg-white text-slate ring-line"
                          )}
                          aria-hidden="true"
                        >
                          <Plus className="size-4" strokeWidth={2} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-6 pr-12 text-[15px] leading-relaxed text-slate sm:text-base">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
