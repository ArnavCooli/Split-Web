"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

// Four nodes on a circle.
const nodes = [
  { id: "maya", x: 70, y: 36, label: "M", color: "#0c7a53" },
  { id: "leo", x: 168, y: 70, label: "L", color: "#3b5bdb" },
  { id: "avery", x: 168, y: 158, label: "A", color: "#b45309" },
  { id: "sam", x: 70, y: 192, label: "S", color: "#7c3aed" },
];

const pos = Object.fromEntries(nodes.map((n) => [n.id, n]));

// The tangle: everybody owes a little to everybody.
const tangled: [string, string][] = [
  ["leo", "maya"],
  ["avery", "maya"],
  ["sam", "leo"],
  ["sam", "maya"],
  ["avery", "leo"],
  ["sam", "avery"],
];

// The net result: just two payments.
const net: [string, string][] = [
  ["sam", "maya"],
  ["leo", "maya"],
];

function edge(a: string, b: string) {
  return `M ${pos[a].x} ${pos[a].y} L ${pos[b].x} ${pos[b].y}`;
}

/** Visualizes Split collapsing many debts into the fewest payments. */
export function NetGraph({ className }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });
      tl.set("[data-tangled]", { opacity: 0 });
      // tangled in
      tl.fromTo(
        "[data-tangled]",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.08 },
        0.3,
      );
      tl.to({}, { duration: 1 });
      // collapse to net
      tl.to("[data-tangled]", { opacity: 0, duration: 0.5 });
      tl.fromTo(
        "[data-net]",
        { opacity: 0, strokeDashoffset: 220 },
        { opacity: 1, strokeDashoffset: 0, duration: 0.7, stagger: 0.12 },
        "<0.1",
      );
      tl.to({}, { duration: 1.4 });
      tl.to("[data-net]", { opacity: 0, duration: 0.5 });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className={cn(
        "w-full max-w-sm rounded-2xl border border-border bg-surface p-5 shadow-card",
        className,
      )}
    >
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold">Net settlement</p>
        <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[0.7rem] font-medium text-brand">
          6 debts → 2 payments
        </span>
      </div>

      <svg viewBox="0 0 238 228" className="h-56 w-full">
        <g strokeLinecap="round" fill="none">
          {tangled.map(([a, b], i) => (
            <path
              key={`t-${i}`}
              data-tangled
              d={edge(a, b)}
              className="stroke-border-strong"
              strokeWidth="2"
              strokeDasharray="4 5"
            />
          ))}
          {net.map(([a, b], i) => (
            <path
              key={`n-${i}`}
              data-net
              d={edge(a, b)}
              stroke="var(--brand)"
              strokeWidth="2.5"
              strokeDasharray="220"
            />
          ))}
        </g>

        {nodes.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r="17"
              fill={n.color}
              className="drop-shadow-sm"
            />
            <text
              x={n.x}
              y={n.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fill="white"
              fontSize="13"
              fontWeight="600"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
