"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { Avatar, people } from "./shared";

const RADIUS = 52;
const CIRC = 2 * Math.PI * RADIUS;

const rawSegments = [
  { person: people.maya, pct: 45, color: "#0c7a53" },
  { person: people.leo, pct: 30, color: "#3b5bdb" },
  { person: people.avery, pct: 25, color: "#b45309" },
];

// Precompute the cumulative rotation offset for each arc up front so we never
// mutate state during render.
const segments = rawSegments.map((seg, i) => {
  const startPct = rawSegments
    .slice(0, i)
    .reduce((sum, s) => sum + s.pct, 0);
  return {
    ...seg,
    len: (seg.pct / 100) * CIRC,
    rotation: (startPct / 100) * 360,
  };
});

/** Donut chart for asymmetric splits; arcs draw in on view. */
export function SplitChart({ className }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const arcs = gsap.utils.toArray<SVGCircleElement>("[data-arc]");
      gsap.set(arcs, { strokeDashoffset: CIRC });
      arcs.forEach((arc) => {
        const len = Number(arc.dataset.len);
        gsap.to(arc, {
          strokeDashoffset: CIRC - len,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className={cn(
        "w-full max-w-sm rounded-2xl border border-border bg-surface p-6 shadow-card",
        className,
      )}
    >
      <p className="mb-4 text-sm font-semibold">Monthly apartment costs</p>
      <div className="flex items-center gap-6">
        <div className="relative h-32 w-32 shrink-0">
          <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
            <circle
              cx="64"
              cy="64"
              r={RADIUS}
              fill="none"
              className="stroke-surface-2"
              strokeWidth="16"
            />
            {segments.map((seg, i) => (
              <circle
                key={i}
                data-arc
                data-len={seg.len}
                cx="64"
                cy="64"
                r={RADIUS}
                fill="none"
                stroke={seg.color}
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                transform={`rotate(${seg.rotation} 64 64)`}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-semibold tabular-nums">$2,840</span>
            <span className="text-[0.65rem] text-muted-foreground">/ month</span>
          </div>
        </div>

        <ul className="flex-1 space-y-2.5">
          {segments.map((seg, i) => (
            <li key={i} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2">
                <Avatar person={seg.person} size="xs" />
                <span className="text-foreground">{seg.person.name}</span>
              </span>
              <span className="font-medium tabular-nums text-muted-foreground">
                {seg.pct}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
