import { Check, X, TriangleAlert } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/anim/reveal";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

type Cell = "yes" | "no" | "partial";

const rows: { feature: string; venmo: Cell; splitwise: Cell; split: Cell }[] = [
  { feature: "Receipt itemization", venmo: "no", splitwise: "no", split: "yes" },
  { feature: "Uneven splits", venmo: "partial", splitwise: "yes", split: "yes" },
  { feature: "Net settlement", venmo: "no", splitwise: "yes", split: "yes" },
  { feature: "Item-level assignment", venmo: "no", splitwise: "no", split: "yes" },
];

function Mark({ value, brand }: { value: Cell; brand?: boolean }) {
  if (value === "yes")
    return (
      <span
        className={cn(
          "inline-flex size-6 items-center justify-center rounded-full",
          brand ? "bg-brand text-white" : "bg-brand-soft text-brand",
        )}
      >
        <Check className="size-3.5" strokeWidth={3} />
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
        <TriangleAlert className="size-3.5" />
      </span>
    );
  return (
    <span className="inline-flex size-6 items-center justify-center rounded-full bg-surface-2 text-muted-foreground">
      <X className="size-3.5" strokeWidth={2.5} />
    </span>
  );
}

export function Comparison() {
  return (
    <Section id="compare">
      <SectionHeader
        eyebrow="Comparison"
        title="What sets Split apart."
        description="The essentials other apps skip — itemized receipts and item-level assignment — are exactly where Split starts."
      />

      <Reveal className="mt-14 overflow-hidden rounded-2xl border border-border bg-surface shadow-card" y={28}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <caption className="sr-only">
              Feature comparison between Venmo, Splitwise, and Split
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="px-6 py-5 text-left font-medium text-muted-foreground"
                >
                  Feature
                </th>
                <th scope="col" className="px-4 py-5 text-center font-medium text-muted-foreground">
                  Venmo
                </th>
                <th scope="col" className="px-4 py-5 text-center font-medium text-muted-foreground">
                  Splitwise
                </th>
                <th
                  scope="col"
                  className="relative px-4 py-5 text-center font-semibold text-foreground"
                >
                  <span className="pointer-events-none absolute inset-x-1 inset-y-0 -z-0 rounded-t-xl bg-brand-soft" />
                  <span className="relative flex items-center justify-center">
                    <Logo showWordmark />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={cn(i !== rows.length - 1 && "border-b border-border")}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 text-left font-medium text-foreground"
                  >
                    {row.feature}
                  </th>
                  <td className="px-4 py-4 text-center">
                    <div className="flex justify-center">
                      <Mark value={row.venmo} />
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex justify-center">
                      <Mark value={row.splitwise} />
                    </div>
                  </td>
                  <td className="relative px-4 py-4 text-center">
                    <span
                      className={cn(
                        "pointer-events-none absolute inset-x-1 inset-y-0 -z-0 bg-brand-soft",
                        i === rows.length - 1 && "rounded-b-xl",
                      )}
                    />
                    <div className="relative flex justify-center">
                      <Mark value={row.split} brand />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
