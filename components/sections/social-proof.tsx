import { Home, Heart, Users, Plane, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/anim/reveal";
import { Stagger } from "@/components/anim/stagger";

const audiences = [
  { icon: Home, label: "Roommates" },
  { icon: Heart, label: "Couples" },
  { icon: Users, label: "Friends" },
  { icon: Plane, label: "Group Trips" },
  { icon: GraduationCap, label: "College Housing" },
];

export function SocialProof() {
  return (
    <section className="border-y border-border bg-surface/40 py-14 container-px">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Perfect for
          </p>
        </Reveal>

        <Stagger
          each={0.06}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {audiences.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="reveal-init group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-6 text-center shadow-soft transition-colors hover:border-border-strong"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-foreground transition-colors group-hover:bg-brand-soft group-hover:text-brand">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-foreground">
                {label}
              </span>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
