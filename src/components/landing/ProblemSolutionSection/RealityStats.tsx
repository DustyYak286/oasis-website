"use client";

import { AnimatedStat } from "./AnimatedStat";

const stats = [
  {
    value: 1.3,
    suffix: "B",
    label: "children lack internet access at home",
    context:
      "In an increasingly connected world, over a billion young learners are left behind.",
  },
  {
    value: 617,
    suffix: "M",
    label: "cannot read a basic sentence",
    context:
      "Without quality materials, brilliant minds stay hidden. Dreams remain locked away.",
  },
  {
    value: 200,
    suffix: "M+",
    label: "children attend schools without electricity",
    context:
      "When the sun sets, learning stops. Potential fades into darkness.",
  },
];

interface RealityStatsProps {
  startAnimation?: boolean;
}

export function RealityStats({ startAnimation }: RealityStatsProps) {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-14 sm:pb-16 lg:pt-12 lg:pb-24">
        {/* Stats Grid - 3 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="mb-4"
                valueClassName="text-4xl [@media(min-width:360px)]:text-5xl sm:text-6xl lg:text-7xl text-white"
                startAnimation={startAnimation}
                animationDelay={index * 50}
              />
              <p
                className="text-sm [@media(min-width:360px)]:text-base lg:text-lg leading-relaxed max-w-xs mx-auto"
                style={{ color: "var(--background)", opacity: startAnimation ? 1 : 0, transition: "opacity 0.5s ease-out", transitionDelay: `${index * 50 + 300}ms` }}
              >
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
