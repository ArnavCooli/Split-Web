import { cn } from "@/lib/utils";

export type Person = {
  name: string;
  initial: string;
  className: string; // avatar bg/text
};

export const people: Record<string, Person> = {
  maya: { name: "Maya", initial: "M", className: "bg-[#0c7a53] text-white" },
  leo: { name: "Leo", initial: "L", className: "bg-[#3b5bdb] text-white" },
  avery: { name: "Avery", initial: "A", className: "bg-[#b45309] text-white" },
  sam: { name: "Sam", initial: "S", className: "bg-[#7c3aed] text-white" },
};

export function Avatar({
  person,
  size = "sm",
  className,
}: {
  person: Person;
  size?: "xs" | "sm" | "md";
  className?: string;
}) {
  const dims =
    size === "xs"
      ? "h-5 w-5 text-[0.6rem]"
      : size === "md"
        ? "h-9 w-9 text-sm"
        : "h-7 w-7 text-xs";
  return (
    <span
      title={person.name}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-semibold ring-2 ring-surface",
        dims,
        person.className,
        className,
      )}
    >
      {person.initial}
    </span>
  );
}

/** Phone bezel wrapper used across mockups. */
export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[280px] rounded-[2.5rem] border border-border-strong bg-surface p-2.5 shadow-float",
        className,
      )}
    >
      <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0c0c0d]" />
      <div className="relative overflow-hidden rounded-[2rem] bg-surface-2 ring-1 ring-inset ring-border">
        {children}
      </div>
    </div>
  );
}
