"use client";

import { OpeningHook } from "./OpeningHook";
import { TransitionBridge } from "./TransitionBridge";
import { RealityStats } from "./RealityStats";
import { TurningPoint } from "./TurningPoint";
import { SolutionFeatures } from "./SolutionFeatures";
import { Invitation } from "./Invitation";

export function ProblemSolutionSection() {
  return (
    <section id="story" className="relative">
      {/* Beat 1: Opening Hook - Meet Fatima */}
      <OpeningHook />

      {/* Beat 1.5: Transition Bridge - "Fatima is not alone" */}
      <TransitionBridge />

      {/* Beat 2: The Reality - Statistics */}
      <RealityStats />

      {/* Beat 3: Turning Point - "What if..." */}
      <TurningPoint />

      {/* Beat 4: The Solution - How Oasis Works */}
      <SolutionFeatures />

      {/* Beat 5: Invitation - CTA */}
      <Invitation />
    </section>
  );
}
