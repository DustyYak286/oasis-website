import Image from "next/image";
import { BookOpen, Languages, ListChecks, Sparkles } from "lucide-react";
import { Container } from "@/components/layout";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { Reveal } from "@/components/ui/reveal";
import { DEVICE_URL } from "@/lib/site";

const features = [
  {
    icon: BookOpen,
    title: "Courses, lessons and materials",
    text: "Teachers build courses and upload their own files.",
  },
  {
    icon: ListChecks,
    title: "Quizzes graded automatically",
    text: "Students see results at once, teachers see who needs help.",
  },
  {
    icon: Sparkles,
    title: "AI assistant and course builder",
    text: "Help for students, first drafts for teachers.",
  },
  {
    icon: Languages,
    title: "Offline translation",
    text: "Between languages, without a connection.",
  },
];

export function PlatformSection() {
  return (
    <section id="platform" className="scroll-mt-16 overflow-hidden bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.1]">
            A full learning platform, offline
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[19rem_1fr] lg:gap-16">
          <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
            {features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 0.06} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-tint text-blue">
                  <f.icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-ink">{f.title}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-slate">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1} y={28} className="relative lg:-mr-6 xl:-mr-12">
            <div
              aria-hidden="true"
              className="absolute -inset-x-10 -bottom-16 top-10 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_60%_60%,#DCE9FB_0%,rgba(255,255,255,0)_70%)]"
            />
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
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
