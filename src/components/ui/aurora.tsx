"use client";

import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

type Band = {
  color: string;
  alpha: number;
  /** vertical centre, as a fraction of the height */
  y: number;
  /** amplitude and thickness, as a fraction of the reference size */
  amp: number;
  thick: number;
  freq: number;
  phase: number;
  /** extra blur multiplier for thin highlight bands */
  soft?: number;
};

// The wave from the deck's title slide: a deep blue body, a sage upper edge,
// a bright blue core and light highlights.
const WAVE: Band[] = [
  { color: "#2C64C8", alpha: 0.9, y: 0.02, amp: 0.06, thick: 0.19, freq: 0.75, phase: 0 },
  { color: "#7DABAD", alpha: 0.7, y: -0.075, amp: 0.055, thick: 0.07, freq: 0.8, phase: 0.9 },
  { color: "#3F84E5", alpha: 0.95, y: 0.01, amp: 0.07, thick: 0.11, freq: 0.7, phase: 1.7 },
  { color: "#8CB8F2", alpha: 0.7, y: 0.07, amp: 0.06, thick: 0.045, freq: 0.72, phase: 2.3, soft: 0.6 },
  { color: "#9CC9B0", alpha: 0.35, y: -0.03, amp: 0.05, thick: 0.03, freq: 0.9, phase: 3.1, soft: 0.5 },
];

interface AuroraProps {
  className?: string;
  /** where the wave sits, as a fraction of the height */
  baseline?: number;
  /** rise of the wave from left to right, as a fraction of the height */
  tilt?: number;
  /** scales band thickness */
  scale?: number;
  /** starting phase, so two waves on one page don't match */
  seed?: number;
  /** blur in CSS pixels */
  blur?: number;
}

const DOWNSCALE = 3;
const PASSES = [
  { width: 0.62, alpha: 0.42 },
  { width: 0.3, alpha: 0.7 },
];

export function Aurora({
  className,
  baseline = 0.74,
  tilt = -0.12,
  scale = 1,
  seed = 0.3,
  blur = 28,
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noise = createNoise3D(() => 0.42);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Safari ignores ctx.filter, so fall back to a CSS blur on the element.
    ctx.filter = "blur(2px)";
    const canvasBlur = ctx.filter === "blur(2px)";
    ctx.filter = "none";
    canvas.style.filter = canvasBlur ? "" : `blur(${blur}px)`;

    let w = 0;
    let h = 0;
    let ref = 0;
    let raf = 0;
    let visible = true;
    const start = performance.now();

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width / DOWNSCALE));
      h = Math.max(1, Math.round(rect.height / DOWNSCALE));
      canvas.width = w;
      canvas.height = h;
      // Size bands against the shorter side so phones get a wave, not a wall.
      ref = Math.min(h, Math.max(w * 0.62, h * 0.75));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const steps = 48;
      const x0 = -0.15 * w;
      const x1 = 1.15 * w;

      WAVE.forEach((b, i) => {
        const ph = seed + b.phase;
        const centre: [number, number, number][] = [];
        for (let s = 0; s <= steps; s++) {
          const x = x0 + ((x1 - x0) * s) / steps;
          const u = x / w;
          const drift =
            Math.sin(2 * Math.PI * b.freq * u + ph + t * 0.16) +
            0.35 * Math.sin(2 * Math.PI * b.freq * 2.1 * u + 1.7 * ph + 0.6 - t * 0.11);
          const wobble = noise(u * 1.1, i * 1.7, t * 0.06) * 0.35;
          const yc =
            h * (baseline + tilt * (u - 0.5)) +
            ref * (b.y * scale + b.amp * (drift + wobble));
          const th =
            ref * b.thick * scale * (1 + 0.35 * Math.sin(2 * Math.PI * 1.3 * u + 0.5 * ph + 1 + t * 0.12));
          centre.push([x, yc, th]);
        }

        ctx.save();
        if (canvasBlur) {
          ctx.filter = `blur(${((blur * (b.soft ?? 1)) / DOWNSCALE).toFixed(1)}px)`;
        }
        ctx.fillStyle = b.color;
        // A wide faint pass and a narrow bright core give each band a soft
        // falloff from its centre, like the deck's rendered waves.
        for (const pass of PASSES) {
          ctx.globalAlpha = b.alpha * pass.alpha;
          ctx.beginPath();
          for (let k = 0; k < centre.length; k++) {
            const [x, y, th] = centre[k];
            if (k === 0) ctx.moveTo(x, y - th * pass.width);
            else ctx.lineTo(x, y - th * pass.width);
          }
          for (let k = centre.length - 1; k >= 0; k--) {
            const [x, y, th] = centre[k];
            ctx.lineTo(x, y + th * pass.width);
          }
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      });
    };

    const loop = () => {
      if (visible) draw((performance.now() - start) / 1000);
      raf = requestAnimationFrame(loop);
    };

    resize();
    draw(0);
    canvas.style.opacity = "1";

    const ro = new ResizeObserver(() => {
      resize();
      draw((performance.now() - start) / 1000);
    });
    ro.observe(parent);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(parent);

    if (!reduceMotion) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [baseline, tilt, scale, seed, blur]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-1000",
        className
      )}
    />
  );
}
