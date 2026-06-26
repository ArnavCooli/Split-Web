"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn, formatCurrency } from "@/lib/utils";
import { Avatar, people } from "./shared";

const rows = [
  { name: "Cold brew", price: 12.0, who: [people.maya] },
  { name: "Sourdough loaf", price: 5.25, who: [people.leo, people.sam] },
  { name: "Organic eggs", price: 6.99, who: [people.avery] },
  { name: "Avocados ×4", price: 5.16, who: [people.maya, people.leo] },
];

/** Grocery receipt where avatars get assigned to each line, looping. */
export function ItemAssign({ className }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const avatars = gsap.utils.toArray<HTMLElement>("[data-assign]");
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.6 });
      tl.set(avatars, { scale: 0, opacity: 0 });
      tl.to(avatars, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.8)",
        stagger: 0.22,
        delay: 0.5,
      });
      tl.to({}, { duration: 1.6 });
      tl.to(avatars, { scale: 0, opacity: 0, duration: 0.35, stagger: 0.05 });
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
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold">Assign items</p>
        <p className="text-xs text-muted-foreground">Tap to split</p>
      </div>

      <ul className="space-y-2">
        {rows.map((row) => (
          <li
            key={row.name}
            className="flex items-center justify-between rounded-xl border border-border bg-surface-2/50 px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                {row.name}
              </p>
              <p className="text-xs text-muted-foreground tabular-nums">
                {formatCurrency(row.price)}
              </p>
            </div>
            <div className="flex -space-x-2 pl-3">
              {row.who.map((p, i) => (
                <span key={i} data-assign className="inline-flex">
                  <Avatar person={p} size="sm" />
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
