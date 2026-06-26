import { CalendarX2, HelpCircle, Scale, Receipt } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger } from "@/components/anim/stagger";

const pains = [
  {
    icon: CalendarX2,
    title: "Someone always forgets to pay",
    body: "Reminders pile up in group chats and rent ends up late — again.",
  },
  {
    icon: HelpCircle,
    title: "Nobody remembers who bought what",
    body: "Receipts disappear and the math gets fuzzy by the end of the week.",
  },
  {
    icon: Scale,
    title: "Utilities aren't split evenly",
    body: "One person travels, another works from home. 50/50 rarely fits.",
  },
  {
    icon: Receipt,
    title: "Month-end settlement is a maze",
    body: "Untangling who owes whom turns into a spreadsheet nobody enjoys.",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <SectionHeader
        eyebrow="The problem"
        title="Splitting expenses shouldn't require a spreadsheet."
        description="Shared living comes with shared costs. The tracking is what makes it exhausting."
      />

      <Stagger
        each={0.08}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {pains.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="reveal-init flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-foreground">
              <Icon className="size-5" strokeWidth={1.75} />
            </span>
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold tracking-tight">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          </article>
        ))}
      </Stagger>
    </Section>
  );
}
