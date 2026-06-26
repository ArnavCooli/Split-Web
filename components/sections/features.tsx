import type { ReactNode } from "react";
import { ScanLine, Hand, PieChart, GitMerge, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/anim/reveal";
import { cn } from "@/lib/utils";
import { ReceiptScan } from "@/components/mockups/receipt-scan";
import { ItemAssign } from "@/components/mockups/item-assign";
import { SplitChart } from "@/components/mockups/split-chart";
import { NetGraph } from "@/components/mockups/net-graph";

type Feature = {
  icon: typeof ScanLine;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  visual: ReactNode;
};

const features: Feature[] = [
  {
    icon: ScanLine,
    eyebrow: "AI Receipt Scanning",
    title: "Scan a receipt. We're already doing the math.",
    body: "Take a photo and Split automatically itemizes every purchase — line items, taxes, and totals, organized in seconds.",
    points: ["Reads any printed receipt", "Itemized in under a second"],
    visual: <ReceiptScan />,
  },
  {
    icon: Hand,
    eyebrow: "Item-Level Splitting",
    title: "Pay only for what you actually used.",
    body: "Assign individual items to roommates with a tap. The cold brew is yours, the eggs are shared — Split keeps everyone honest.",
    points: ["Assign per item, not per bill", "Split single items any number of ways"],
    visual: <ItemAssign />,
  },
  {
    icon: PieChart,
    eyebrow: "Asymmetric Splits",
    title: "Because life isn't always 50/50.",
    body: "Split rent, utilities, and subscriptions using custom percentages or fixed shares that match how you actually live.",
    points: ["Percentages, shares, or exact amounts", "Save splits for recurring bills"],
    visual: <SplitChart />,
  },
  {
    icon: GitMerge,
    eyebrow: "Net Settlement",
    title: "One payment instead of five.",
    body: "Split calculates the smallest number of transactions needed to settle everyone up, so the group clears its balance in a tap.",
    points: ["Minimizes total transactions", "Settle the whole group at once"],
    visual: <NetGraph />,
  },
];

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const { icon: Icon, eyebrow, title, body, points, visual } = feature;
  const flip = index % 2 === 1;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal
        className={cn("flex flex-col gap-5", flip && "lg:order-2")}
        y={24}
      >
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
          <Icon className="size-3.5 text-brand" />
          {eyebrow}
        </span>
        <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h3>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
          {body}
        </p>
        <ul className="mt-1 space-y-2.5">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-3 text-sm">
              <span className="flex size-5 items-center justify-center rounded-full bg-brand-soft text-brand">
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
        <div className="relative w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand/5 blur-2xl" />
          {visual}
        </div>
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
