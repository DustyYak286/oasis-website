import Image from "next/image";
import { HardDrive } from "lucide-react";
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
          <div>
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
            <Reveal delay={0.3} className="mt-10 flex gap-3.5 border-t border-line pt-8">
              <HardDrive className="mt-0.5 size-5 shrink-0 text-blue" strokeWidth={1.8} aria-hidden="true" />
              <p className="text-[15px] leading-relaxed text-slate">
                <span className="font-semibold text-ink">The AI runs on the device.</span> It works offline, and
                students&apos; questions never leave the classroom.
              </p>
            </Reveal>
          </div>

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
      </Container>
    </section>
  );
}
