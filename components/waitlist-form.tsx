"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type WaitlistFormProps = {
  className?: string;
  buttonLabel?: string;
  source?: string;
};

/**
 * Inline email capture. Submits to the `/api/waitlist` route handler, which
 * stores the email in Supabase, then confirms with a toast + inline success.
 */
export function WaitlistForm({
  className,
  buttonLabel = "Join Waitlist",
  source = "inline",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status !== "idle") return;

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong.");
      }

      setStatus("done");
      toast.success("You're on the list.", {
        description: "We'll email you the moment Split is ready.",
      });
    } catch (err) {
      setStatus("idle");
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      data-source={source}
      className={cn(
        "group flex w-full max-w-md items-center gap-1.5 rounded-full border border-border-strong bg-surface p-1.5 shadow-soft transition focus-within:ring-2 focus-within:ring-foreground/15",
        className,
      )}
    >
      <label htmlFor={`waitlist-${source}`} className="sr-only">
        Email address
      </label>
      <input
        id={`waitlist-${source}`}
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        disabled={status !== "idle"}
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-10 flex-1 bg-transparent px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status !== "idle"}
        className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition active:scale-[0.98] disabled:opacity-80"
      >
        {status === "loading" && <Loader2 className="size-4 animate-spin" />}
        {status === "done" && <Check className="size-4" />}
        {status === "idle" && (
          <>
            <span>{buttonLabel}</span>
            <ArrowRight className="size-4 transition-transform group-focus-within:translate-x-0.5" />
          </>
        )}
        {status === "loading" && <span>Joining…</span>}
        {status === "done" && <span>Added</span>}
      </button>
    </form>
  );
}
