import Image from "next/image";
import { Tv, Wifi } from "lucide-react";
import { Container } from "@/components/layout";
import { Reveal } from "@/components/ui/reveal";

const hackathon = [
  { big: "50+", label: "teams" },
  { big: "2", label: "days to build" },
  { big: "1st", label: "place", accent: true },
];

const sdgs = [
  { n: 4, label: "Quality Education", color: "#C5192D" },
  { n: 9, label: "Industry, Innovation and Infrastructure", color: "#FD6925" },
  { n: 13, label: "Climate Action", color: "#3F7E44" },
];

const timeline = [
  { title: "Hackathon win", text: "Lifelines, Qatar" },
  { title: "UNESCO incubation", text: "Six months, three founders" },
  { title: "Working MVP", text: "Platform, AI and device" },
  { title: "Next chapter", text: "First classrooms in Qatar, then across MENA", next: true },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.1]">
      {children}
    </h2>
  );
}

export function StorySection() {
  return (
    <>
      {/* Where it began */}
      <section id="story" className="scroll-mt-16 bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionTitle>It began at the Lifelines Hackathon in Qatar</SectionTitle>
          </Reveal>

          <Reveal delay={0.1} className="mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {hackathon.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center text-center ${i > 0 ? "sm:border-l sm:border-line" : ""}`}
              >
                <p
                  className={`text-6xl font-semibold tracking-[-0.04em] sm:text-7xl ${
                    s.accent ? "text-blue" : "text-ink"
                  }`}
                >
                  {s.big}
                </p>
                <p className="mt-3 text-base text-slate sm:text-lg">{s.label}</p>
              </div>
            ))}
            <div className="flex flex-col items-center justify-end text-center sm:border-l sm:border-line">
              <Tv className="size-14 text-blue sm:size-16" strokeWidth={1.5} aria-hidden="true" />
              <p className="mt-3 text-base text-slate sm:text-lg">and on TV</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-14 flex items-center gap-4 rounded-2xl bg-paper px-5 py-5 sm:px-7">
            <Wifi className="size-5 shrink-0 text-blue" aria-hidden="true" />
            <p className="text-[15px] text-ink sm:text-base">
              Our first version was a Raspberry Pi serving lessons over its own Wi-Fi, with no internet.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The statement */}
      <section className="grain relative isolate overflow-hidden bg-night text-white">
        <Image
          src="/images/night-wave.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover object-bottom"
        />
        <Container className="py-28 sm:py-36">
          <Reveal>
            <blockquote className="max-w-4xl">
              <p className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Most hackathon projects end when the judging does.
              </p>
              <p className="mt-5 text-2xl text-sky sm:text-[2rem]">I didn’t want this one to.</p>
            </blockquote>
            <p className="mt-10 text-sm text-white/60">
              <span className="font-semibold text-white">David-Andrei Bratu</span>, co-founder
            </p>
          </Reveal>
        </Container>
      </section>

      {/* UNESCO */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionTitle>Selected for a UNESCO incubation</SectionTitle>
          </Reveal>

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.05}>
              <div className="flex items-end gap-5">
                <p className="text-[7rem] font-semibold leading-[0.8] tracking-[-0.05em] text-blue sm:text-[9rem]">6</p>
                <div className="pb-1">
                  <p className="text-lg font-semibold text-ink sm:text-xl">months of incubation</p>
                  <p className="mt-1 text-[15px] text-slate">UNESCO x Nestlé Global Youth Grant Scheme</p>
                </div>
              </div>

              <ul className="mt-10 grid grid-cols-3 gap-3" aria-label="Sustainable Development Goals">
                {sdgs.map((g) => (
                  <li
                    key={g.n}
                    className="flex aspect-square flex-col justify-between rounded-xl p-3.5 text-white sm:p-4"
                    style={{ backgroundColor: g.color }}
                  >
                    <span className="text-3xl font-bold sm:text-4xl">{g.n}</span>
                    <span className="text-[11px] font-semibold leading-tight sm:text-xs">{g.label}</span>
                  </li>
                ))}
              </ul>

            </Reveal>

            <Reveal as="figure" delay={0.12}>
              <div className="overflow-hidden rounded-2xl shadow-[0_30px_60px_-24px_rgba(15,27,51,0.35)]">
                <Image
                  src="/images/story/unesco-paris.jpg"
                  alt="Group photo at the UNESCO conference in Paris"
                  width={480}
                  height={360}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-[15px] text-slate">
                <span className="font-semibold text-ink">Six months later, Paris</span>
              </figcaption>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Where we are now */}
      <section className="bg-paper py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionTitle>Where we are now</SectionTitle>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative mt-16 grid gap-10 sm:grid-cols-4 sm:gap-6">
              {/* the line */}
              <span
                aria-hidden="true"
                className="absolute left-[15px] top-4 h-[calc(100%-2rem)] w-0.5 bg-blue sm:left-[12.5%] sm:right-[37.5%] sm:h-0.5 sm:w-auto"
              />
              <span
                aria-hidden="true"
                className="absolute hidden border-t-2 border-dashed border-blue sm:left-[62.5%] sm:right-[12.5%] sm:top-4 sm:block"
              />
              {timeline.map((m) => (
                <li key={m.title} className="relative flex gap-5 sm:flex-col sm:items-center sm:gap-0 sm:text-center">
                  {m.next ? (
                    <span className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full bg-white ring-2 ring-blue">
                      <span
                        className="motion-safe-anim absolute -inset-1.5 rounded-full border-2 border-blue/40"
                        style={{ animation: "ring-ping 2.6s ease-out infinite" }}
                      />
                      <span className="size-3.5 rounded-full bg-blue" />
                    </span>
                  ) : (
                    <span className="relative z-10 size-8 shrink-0 rounded-full border-[6px] border-paper bg-blue" />
                  )}
                  <div className="sm:mt-6">
                    <p className={`font-semibold ${m.next ? "text-blue" : "text-ink"}`}>{m.title}</p>
                    <p className="mt-1 text-[15px] text-slate">{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
