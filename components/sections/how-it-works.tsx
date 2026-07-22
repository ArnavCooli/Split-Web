import { Camera, Hand, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger } from "@/components/anim/stagger";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import { screens, type ScreenKey } from "@/lib/screens";
import { cn } from "@/lib/utils";

const steps: {
  n: string;
  icon: typeof Camera;
  title: string;
  body: string;
  screen: ScreenKey;
}[] = [
  {
    n: "01",
    icon: Camera,
    title: "Snap a receipt.",
    body: "Point your camera at any receipt. Split reads it on-device in seconds.",
    screen: "scanEmpty",
  },
  {
    n: "02",
    icon: Hand,
    title: "Split it your way.",
    body: "Confirm the items, then split evenly, by percent, or to the exact cent.",
    screen: "scanResult",
  },
  {
    n: "03",
    icon: CheckCircle2,
    title: "Settle instantly.",
    body: "Split reduces the group to the fewest payments and clears it in a tap.",
    screen: "settleUp",
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
            <IPhoneFrame
              src={screens[screen].src}
              alt={screens[screen].alt}
              className="mb-8 max-w-[240px]"
            />
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
