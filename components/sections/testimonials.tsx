import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger } from "@/components/anim/stagger";
import { Avatar, people } from "@/components/mockups/shared";

const testimonials = [
  {
    quote: "We stopped using spreadsheets entirely. Rent, groceries, utilities — it all just balances now.",
    person: people.maya,
    role: "Shares a 3-bed in Austin",
  },
  {
    quote: "Finally an expense app that understands roommates. Item-level splitting is the feature I didn't know I needed.",
    person: people.leo,
    role: "Lives with 2 roommates",
  },
  {
    quote: "This would've saved us so many arguments in college. Everyone pays for exactly what they used.",
    person: people.avery,
    role: "Recent grad, NYC",
  },
  {
    quote: "Our group trip to Lisbon settled in one tap on the flight home. No one had to chase anyone.",
    person: people.sam,
    role: "Planned a 6-person trip",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface/40">
      <SectionHeader
        eyebrow="Loved by housemates"
        title="The end of roommate accounting."
        description="Early testers told us the same thing — Split quietly removed the most annoying part of living together."
      />

      <Stagger
        each={0.08}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-5"
      >
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="reveal-init flex flex-col justify-between gap-6 rounded-2xl border border-border bg-surface p-7 shadow-soft"
          >
            <blockquote className="text-pretty text-lg font-medium leading-relaxed tracking-tight text-foreground">
              “{t.quote}”
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <Avatar person={t.person} size="md" />
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {t.person.name}
                </div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </Stagger>
    </Section>
  );
}
