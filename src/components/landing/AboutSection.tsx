import Image from "next/image";
import { Container } from "@/components/layout";
import { Reveal } from "@/components/ui/reveal";

const sdgs = [
  { n: 4, label: "Quality Education", color: "#C5192D" },
  { n: 9, label: "Industry, Innovation and Infrastructure", color: "#FD6925" },
  { n: 13, label: "Climate Action", color: "#3F7E44" },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.1]">
              Who’s building Oasis
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
              Oasis is developed by a team based at Carnegie Mellon University in Qatar.
            </p>

            <dl className="mt-10 divide-y divide-line border-y border-line">
              <div className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm font-medium text-mist">Incubated by</dt>
                <dd className="font-semibold text-ink">UNESCO x Nestlé Global Youth Grant Scheme</dd>
              </div>
              <div className="grid gap-3 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="text-sm font-medium text-mist sm:pt-1">Supports</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2.5" aria-label="UN Sustainable Development Goals">
                    {sdgs.map((g) => (
                      <li
                        key={g.n}
                        className="flex items-center gap-2.5 rounded-lg py-1.5 pl-1.5 pr-3 text-white"
                        style={{ backgroundColor: g.color }}
                        title={`SDG ${g.n}: ${g.label}`}
                      >
                        <span className="grid size-7 place-items-center rounded-md bg-white/15 text-sm font-bold">
                          {g.n}
                        </span>
                        <span className="text-xs font-semibold">{g.label}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal as="figure" delay={0.12}>
            <div className="overflow-hidden rounded-2xl shadow-[0_30px_60px_-24px_rgba(15,27,51,0.35)]">
              <Image
                src="/images/story/unesco-paris.jpg"
                alt="The Oasis team at the UNESCO conference in Paris"
                width={480}
                height={360}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 text-[15px] text-slate">At the UNESCO conference in Paris</figcaption>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2">
          <div className="rounded-2xl bg-paper p-6 sm:p-8">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              <span className="size-2.5 rounded-full bg-ink" aria-hidden="true" />
              Now
            </p>
            <p className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              A working platform, AI assistant and classroom device
            </p>
          </div>
          <div className="rounded-2xl bg-tint p-6 ring-1 ring-blue/15 sm:p-8">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue">
              <span className="relative grid size-2.5 place-items-center" aria-hidden="true">
                <span
                  className="motion-safe-anim absolute -inset-1 rounded-full border-2 border-blue/40"
                  style={{ animation: "ring-ping 2.6s ease-out infinite" }}
                />
                <span className="size-2.5 rounded-full bg-blue" />
              </span>
              Next
            </p>
            <p className="mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              First classrooms in Qatar, then across the Middle East and North Africa
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
