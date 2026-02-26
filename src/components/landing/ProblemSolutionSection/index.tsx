"use client";

import { OpeningHook } from "./OpeningHook";
import { TransitionBridge } from "./TransitionBridge";
import { RealityStats } from "./RealityStats";
import { TurningPoint } from "./TurningPoint";
import { SolutionFeatures } from "./SolutionFeatures";
import { Invitation } from "./Invitation";

export function ProblemSolutionSection() {
  return (
    <section id="story" className="relative bg-gray-900">
      {/* Beat 1: Opening Hook - Meet Fatima */}
      <OpeningHook />

      {/* Beat 1.5: Transition Bridge - "Fatima is not alone" */}
      <div className="-mt-px">
        <TransitionBridge />
      </div>

      {/* Beat 2: The Reality - Statistics */}
      <div className="-mt-px">
        <RealityStats />
      </div>

      {/* Beat 3: Turning Point - "What if..." */}
      <div className="-mt-px">
        <TurningPoint />
      </div>

      {/* Beat 4: The Solution - How Oasis Works */}
      <div className="-mt-px">
        <SolutionFeatures />
      </div>

      {/* Beat 5: Invitation - CTA */}
      <div className="-mt-px">
        <Invitation />
      </div>
    </section>
  );
}
