import { Home, Heart, Users, Plane, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/anim/reveal";
import { Stagger } from "@/components/anim/stagger";
import { cn } from "@/lib/utils";

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
          <p className="lab-label text-muted-foreground">Perfect for</p>
        </Reveal>

        <Stagger
          each={0.06}
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {audiences.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={cn(
                "reveal-init group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-6 text-center shadow-soft transition-colors hover:border-border-strong",
                // On the 2-column mobile grid the final card lands alone on its
                // own row — span both columns and center it at one column's width
                // so it sits in the middle instead of hugging the left edge.
                i === audiences.length - 1 &&
                  "max-sm:col-span-2 max-sm:mx-auto max-sm:w-[calc(50%-0.375rem)]",
              )}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-foreground transition-colors group-hover:bg-brand group-hover:text-on-brand">
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
