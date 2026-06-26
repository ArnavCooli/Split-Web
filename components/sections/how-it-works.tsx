import { Camera, Hand, CheckCircle2, ScanLine } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger } from "@/components/anim/stagger";
import { PhoneFrame, Avatar, people } from "@/components/mockups/shared";
import { cn } from "@/lib/utils";

/* --- tiny phone screens, one per step --- */

function ScreenSnap() {
  return (
    <div className="relative aspect-[9/17] bg-[#0c0c0d] p-4 pt-9">
      <div className="absolute inset-x-5 top-9 bottom-20 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
        <div className="absolute inset-3 rounded-md border border-dashed border-white/25" />
        <div className="animate-scanline absolute inset-x-3 h-px bg-brand shadow-[0_0_12px_2px] shadow-brand/60" />
        <div className="absolute inset-x-3 top-6 space-y-2">
          <div className="h-2 w-2/3 rounded-full bg-white/15" />
          <div className="h-2 w-1/2 rounded-full bg-white/10" />
          <div className="h-2 w-3/4 rounded-full bg-white/10" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-5 flex flex-col items-center gap-2">
        <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[0.65rem] font-medium text-white">
          <ScanLine className="size-3" /> Reading receipt…
        </span>
        <span className="h-12 w-12 rounded-full border-4 border-white/80 bg-white/20" />
      </div>
    </div>
  );
}

function ScreenAssign() {
  const rows = [
    { label: "Cold brew", who: [people.maya] },
    { label: "Sourdough", who: [people.leo, people.sam] },
    { label: "Eggs", who: [people.avery] },
    { label: "Avocados", who: [people.maya, people.leo] },
  ];
  return (
    <div className="aspect-[9/17] bg-surface-2 p-4 pt-9">
      <p className="mb-3 text-xs font-semibold text-foreground">Assign items</p>
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5"
          >
            <span className="text-xs font-medium text-foreground">
              {r.label}
            </span>
            <span className="flex -space-x-1.5">
              {r.who.map((p, i) => (
                <Avatar key={i} person={p} size="xs" />
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenSettle() {
  return (
    <div className="flex aspect-[9/17] flex-col items-center justify-center gap-4 bg-surface-2 p-5 pt-9 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand">
        <CheckCircle2 className="size-9" strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-sm font-semibold text-foreground">All settled</p>
        <p className="mt-1 text-xs text-muted-foreground">
          2 payments cleared the group
        </p>
      </div>
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-xs">
          <span className="text-muted-foreground">Leo → Maya</span>
          <span className="font-semibold text-foreground">$24.50</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-xs">
          <span className="text-muted-foreground">Avery → Maya</span>
          <span className="font-semibold text-foreground">$11.75</span>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    n: "01",
    icon: Camera,
    title: "Snap a receipt.",
    body: "Point your camera at any receipt. Split reads it instantly.",
    screen: <ScreenSnap />,
  },
  {
    n: "02",
    icon: Hand,
    title: "Assign items.",
    body: "Tap to choose who shares what. Even splits or item-by-item.",
    screen: <ScreenAssign />,
  },
  {
    n: "03",
    icon: CheckCircle2,
    title: "Settle instantly.",
    body: "See the fewest payments needed and clear the balance in a tap.",
    screen: <ScreenSettle />,
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-surface/40">
      <SectionHeader
        eyebrow="How it works"
        title="Three taps from receipt to settled."
        description="No setup, no manual entry. Split does the bookkeeping the moment you snap a photo."
      />

      <Stagger
        each={0.12}
        className="mt-16 grid gap-12 sm:gap-8 md:grid-cols-3"
      >
        {steps.map(({ n, icon: Icon, title, body, screen }, i) => (
          <div
            key={n}
            className="reveal-init flex flex-col items-center text-center"
          >
            <PhoneFrame className="mb-8">{screen}</PhoneFrame>
            <div
              className={cn(
                "flex items-center gap-3",
                "before:hidden md:before:block",
              )}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-foreground shadow-soft">
                {i + 1}
              </span>
              <Icon className="size-5 text-brand" strokeWidth={1.75} />
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">
              {title}
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>
          </div>
        ))}
      </Stagger>
    </Section>
  );
}
