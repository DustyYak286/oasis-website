import Image from "next/image";
import { CloudOff, Laptop, Leaf, Smartphone, Tablet } from "lucide-react";
import { Container } from "@/components/layout";
import { Reveal } from "@/components/ui/reveal";
import { DEVICE_URL } from "@/lib/site";

function Connector() {
  return (
    <div className="flex shrink-0 items-center justify-center py-3 lg:px-2 lg:py-0" aria-hidden="true">
      {/* vertical on phones, horizontal from lg */}
      <svg className="h-14 w-4 lg:hidden" viewBox="0 0 16 56" fill="none">
        <line x1="8" y1="2" x2="8" y2="46" stroke="#3F84E5" strokeWidth="2" strokeDasharray="6 6" className="dash-flow" />
        <path d="M3 45 L8 53 L13 45" fill="#3F84E5" />
      </svg>
      <svg className="hidden h-4 w-[clamp(3rem,6vw,6rem)] lg:block" viewBox="0 0 96 16" preserveAspectRatio="none" fill="none">
        <line x1="2" y1="8" x2="86" y2="8" stroke="#3F84E5" strokeWidth="2" strokeDasharray="6 6" className="dash-flow" />
        <path d="M85 3 L93 8 L85 13" fill="#3F84E5" />
      </svg>
    </div>
  );
}

function WifiMark() {
  const arcs = [
    "M7 18.5a7 7 0 0 1 10 0",
    "M3.8 15a11.5 11.5 0 0 1 16.4 0",
    "M0.8 11.4a16 16 0 0 1 22.4 0",
  ];
  return (
    <svg viewBox="0 0 24 24" className="size-12 text-blue" fill="none" aria-hidden="true">
      <circle cx="12" cy="21.6" r="1.6" fill="currentColor" />
      {arcs.map((d, i) => (
        <path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="motion-safe-anim"
          style={{ animation: `wifi-pulse 2.4s ease-in-out ${i * 0.3}s infinite` }}
        />
      ))}
    </svg>
  );
}

function Label({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mt-5 text-center">
      <p className="text-lg font-semibold text-ink">{title}</p>
      <p className="mt-1 text-[15px] text-slate">{sub}</p>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.1]">
            A classroom server that fits in your pocket
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-6 lg:grid-cols-[1fr_15rem] lg:items-stretch">
          <div className="relative rounded-3xl border-2 border-dashed border-[#CBDCF5] bg-paper px-6 pb-12 pt-8 sm:px-10 lg:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue">One classroom</p>

            <div className="mt-10 flex flex-col items-center lg:mt-14 lg:flex-row lg:items-start lg:justify-between">
              {/* The box */}
              <div className="flex flex-col items-center">
                <div className="relative grid size-28 place-items-center rounded-[1.75rem] bg-ink shadow-[0_18px_40px_-16px_rgba(15,27,51,0.6)] sm:size-32">
                  <Image src="/images/logo-mark.png" alt="" width={330} height={346} className="h-14 w-auto sm:h-16" />
                  <span className="absolute bottom-3.5 right-3.5 grid size-2.5 place-items-center" aria-hidden="true">
                    <span
                      className="motion-safe-anim absolute inset-0 rounded-full bg-[#4ADE80]"
                      style={{ animation: "status-ping 2s ease-out infinite" }}
                    />
                    <span className="relative size-2.5 rounded-full bg-[#4ADE80]" />
                  </span>
                </div>
                <Label title="Raspberry Pi 5" sub="4 cores, 16 GB of memory" />
              </div>

              <div className="lg:mt-14">
                <Connector />
              </div>

              {/* Its own network */}
              <div className="flex flex-col items-center">
                <div className="grid size-28 place-items-center rounded-full bg-white shadow-[0_14px_36px_-14px_rgba(15,27,51,0.25)] sm:size-32">
                  <WifiMark />
                </div>
                <Label title="Its own Wi-Fi" sub="No router, no internet" />
              </div>

              <div className="lg:mt-14">
                <Connector />
              </div>

              {/* Any device */}
              <div className="flex flex-col items-center">
                <div className="flex h-28 items-center gap-2.5 sm:h-32">
                  {[
                    { Icon: Smartphone, size: "size-6" },
                    { Icon: Tablet, size: "size-8" },
                    { Icon: Laptop, size: "size-8" },
                  ].map(({ Icon, size }, i) => (
                    <div
                      key={i}
                      className="grid size-[4.25rem] place-items-center rounded-full bg-white shadow-[0_12px_28px_-14px_rgba(15,27,51,0.28)] sm:size-[4.75rem]"
                    >
                      <Icon className={`${size} text-ink`} strokeWidth={1.6} />
                    </div>
                  ))}
                </div>
                <Label title="Any device" sub={`Opens ${DEVICE_URL} in a browser`} />
              </div>
            </div>
          </div>

          {/* Outside the room */}
          <div className="flex flex-col items-center justify-center rounded-3xl px-6 py-10 lg:py-0">
            <CloudOff className="size-16 text-mist" strokeWidth={1.5} aria-hidden="true" />
            <Label title="No internet" sub="Nothing leaves the room" />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex items-center gap-3 text-[15px] text-slate">
          <Leaf className="size-5 shrink-0 text-leaf" aria-hidden="true" />
          <p>
            <span className="font-semibold text-ink">Under 10 W per device</span>, and no data center.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
