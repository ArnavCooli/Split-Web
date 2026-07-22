import { ShieldCheck, Zap, CircleDollarSign, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger } from "@/components/anim/stagger";
import { Reveal } from "@/components/anim/reveal";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import { screens } from "@/lib/screens";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Privacy first",
    body: "Receipts are processed for itemization only — never sold, never used to profile you.",
  },
  {
    icon: Zap,
    title: "Instant processing",
    body: "Items appear in under a second, so scanning feels as fast as snapping a photo.",
  },
  {
    icon: CircleDollarSign,
    title: "Cost efficient",
    body: "Lightweight models keep the experience affordable — and free for you at launch.",
  },
  {
    icon: Sparkles,
    title: "No buzzwords",
    body: "AI runs quietly in the background. You just see organized expenses, not a chatbot.",
  },
];

export function AISection() {
  return (
    <Section id="ai">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-card sm:p-12 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Built with AI where it matters"
              title="Intelligence you feel, not jargon you read."
              description="We use lightweight AI models to read and organize receipts automatically — keeping the experience fast, accurate, and affordable."
            />

            <Stagger
              each={0.08}
              className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2"
            >
              {pillars.map(({ icon: Icon, title, body }) => (
                <div key={title} className="reveal-init flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-brand">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </Stagger>
          </div>

          <Reveal
            className="flex justify-center lg:justify-end"
            y={32}
            delay={0.05}
          >
            <IPhoneFrame
              src={screens.scanEmpty.src}
              alt={screens.scanEmpty.alt}
              glow
              className="max-w-[248px]"
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
