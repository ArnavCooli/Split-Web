"use client";

import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { CountUp } from "@/components/anim/count-up";
import { Avatar, people } from "./shared";

const transfers = [
  { from: people.leo, to: people.maya, amount: 24.5 },
  { from: people.avery, to: people.maya, amount: 11.75 },
];

/** Final "settle up" screen with one minimal set of payments. */
export function Settlement({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-sm rounded-2xl border border-border bg-surface p-5 shadow-card",
        className,
      )}
    >
      <div className="mb-1 flex items-center justify-between">
        <p className="text-sm font-semibold">Settle up</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-[0.7rem] font-medium text-foreground">
          <Check className="size-3" strokeWidth={3} />
          Balanced
        </span>
      </div>
      <p className="mb-4 text-xs text-muted-foreground">
        2 payments settle the whole group
      </p>

      <div className="space-y-2.5">
        {transfers.map((t, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl border border-border bg-surface-2/50 px-3 py-3"
          >
            <div className="flex items-center gap-2">
              <Avatar person={t.from} size="sm" />
              <ArrowRight className="size-3.5 text-muted-foreground" />
              <Avatar person={t.to} size="sm" />
              <span className="ml-1 text-sm text-foreground">
                {t.from.name} → {t.to.name}
              </span>
            </div>
            <span className="text-sm font-semibold text-foreground">
              <CountUp value={t.amount} prefix="$" decimals={2} />
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-medium text-accent-foreground transition active:scale-[0.99]"
      >
        Mark all as settled
        <Check className="size-4" strokeWidth={2.5} />
      </button>
    </div>
  );
}
