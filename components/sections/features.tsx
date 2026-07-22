import { ScanLine, SlidersHorizontal, Globe, GitMerge, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/anim/reveal";
import { Parallax } from "@/components/anim/parallax";
import { cn } from "@/lib/utils";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import { screens, type ScreenKey } from "@/lib/screens";

type Feature = {
  icon: typeof ScanLine;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  screen: ScreenKey;
};

const features: Feature[] = [
  {
    icon: ScanLine,
    eyebrow: "AI Receipt Scanning",
    title: "Scan a receipt. We're already doing the math.",
    body: "Point your camera at any receipt and Split reads it on-device, then structures every line item, tax, and total in seconds.",
    points: ["Reads any printed receipt", "Merges duplicates and flags low confidence"],
    screen: "scanResult",
  },
  {
    icon: SlidersHorizontal,
    eyebrow: "Flexible Splitting",
    title: "Split it evenly, by percent, or to the cent.",
    body: "Choose equal shares, custom percentages, or exact amounts — and pick exactly who's included. Split does the per-person math live.",
    points: ["Equal, percentage, or exact amounts", "See each person's share as you edit"],
    screen: "expenseUsd",
  },
  {
    icon: Globe,
    eyebrow: "Multi-Currency",
    title: "Travel without the currency headache.",
    body: "Log an expense in any currency and Split converts it at the live rate, so the whole group settles in the money they actually use.",
    points: ["Live exchange rates built in", "Enter once, everyone sees their own total"],
    screen: "expenseEur",
  },
  {
    icon: GitMerge,
    eyebrow: "Net Settlement",
    title: "One payment instead of five.",
    body: "Split calculates the fewest transactions needed to settle everyone up, so the group clears its whole balance in a single tap.",
    points: ["Optimizes the group to minimal payments", "Mark it all settled at once"],
    screen: "settleUp",
  },
];

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const { icon: Icon, eyebrow, title, body, points, screen } = feature;
  const flip = index % 2 === 1;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal
        className={cn("flex flex-col gap-5", flip && "lg:order-2")}
        y={24}
      >
        <span className="lab-label inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-muted-foreground">
          <Icon className="size-3.5 text-brand" />
          {eyebrow}
        </span>
        <h3 className="text-balance text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
          {title}
        </h3>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
          {body}
        </p>
        <ul className="mt-1 space-y-2.5">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-3 text-sm">
              <span className="flex size-5 items-center justify-center rounded-full bg-brand text-on-brand">
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span className="text-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal
        className={cn("flex justify-center lg:justify-end", flip && "lg:order-1 lg:justify-start")}
        y={32}
        delay={0.05}
      >
        <Parallax
          className="relative flex w-full justify-center"
          y={flip ? 40 : -40}
        >
          <div className="absolute inset-0 -z-10 mx-auto max-w-[260px] rounded-[3rem] bg-brand/10 blur-[60px]" />
          <IPhoneFrame
            src={screens[screen].src}
            alt={screens[screen].alt}
            className="max-w-[262px]"
          />
        </Parallax>
      </Reveal>
    </div>
  );
}

export function Features() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="Features"
        title="Everything it takes to split fairly."
        description="Four pieces of quiet automation that replace the spreadsheet, the group chat math, and the awkward reminders."
      />

      <div className="mt-16 flex flex-col gap-20 sm:gap-28">
        {features.map((feature, i) => (
          <FeatureRow key={feature.eyebrow} feature={feature} index={i} />
        ))}
      </div>
    </Section>
  );
}
