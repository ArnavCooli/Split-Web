"use client";

import { useRef } from "react";
import { ScanLine, Check } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/utils";

const items = [
  { name: "Oat milk", price: 4.49 },
  { name: "Organic eggs", price: 6.99 },
  { name: "Sourdough loaf", price: 5.25 },
  { name: "Cold brew", price: 12.0 },
  { name: "Avocados ×4", price: 5.16 },
];

const total = items.reduce((s, i) => s + i.price, 0);

/** Receipt that "scans" then itemizes line by line, looping. */
export function ReceiptScan({ className }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>("[data-row]");
      const checks = gsap.utils.toArray<HTMLElement>("[data-check]");

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.4 });
      tl.set(rows, { opacity: 0.25, x: 0 });
      tl.set(checks, { scale: 0, opacity: 0 });

      rows.forEach((row, i) => {
        tl.to(
          row,
          { opacity: 1, duration: 0.35, ease: "power2.out" },
          0.45 * i + 0.6,
        );
        tl.to(
          checks[i],
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" },
          0.45 * i + 0.7,
        );
      });

      tl.to("[data-total]", { opacity: 1, y: 0, duration: 0.4 }, "-=0.1");
      tl.to({}, { duration: 1.2 }); // hold
      tl.to([rows, checks, "[data-total]"], { opacity: 0.25, duration: 0.4 });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className={cn(
        "relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-card",
        className,
      )}
    >
      {/* scanline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
        <div className="animate-scanline absolute inset-x-4 h-16 rounded-full bg-gradient-to-b from-transparent via-brand/15 to-transparent" />
        <div className="animate-scanline absolute inset-x-4 h-px bg-brand/60 shadow-[0_0_12px_2px] shadow-brand/40" />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Whole Foods Market</p>
          <p className="text-xs text-muted-foreground">Today · 6:42 PM</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-[0.7rem] font-medium text-brand">
          <ScanLine className="size-3" />
          Scanning
        </span>
      </div>

      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item.name}
            data-row
            className="flex items-center justify-between rounded-lg px-2.5 py-2 text-sm odd:bg-surface-2/60"
          >
            <span className="flex items-center gap-2.5">
              <span
                data-check
                className="flex size-4 items-center justify-center rounded-full bg-brand text-white"
              >
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              <span className="text-foreground">{item.name}</span>
            </span>
            <span className="font-medium tabular-nums text-foreground">
              {formatCurrency(item.price)}
            </span>
          </li>
        ))}
      </ul>

      <div
        data-total
        className="mt-4 flex translate-y-2 items-center justify-between border-t border-border pt-3 opacity-0"
      >
        <span className="text-sm text-muted-foreground">Total itemized</span>
        <span className="text-base font-semibold tabular-nums">
          {formatCurrency(total)}
        </span>
      </div>
    </div>
  );
}
