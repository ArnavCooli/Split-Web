import { cn } from "@/lib/utils";

/** Split wordmark: stacked "split" bars in a rounded tile + name. */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="relative flex h-8 w-8 items-center justify-center rounded-[0.55rem] bg-accent"
      >
        <span className="flex flex-col gap-[3px]">
          <span className="block h-[3px] w-[14px] rounded-full bg-brand" />
          <span className="block h-[3px] w-[14px] rounded-full bg-accent-foreground" />
          <span className="block h-[3px] w-[14px] rounded-full bg-brand" />
        </span>
        <span className="absolute inset-0 rounded-[0.55rem] ring-1 ring-inset ring-white/10" />
      </span>
      {showWordmark && (
        <span className="text-[1.05rem] font-semibold tracking-tight">
          Split
        </span>
      )}
    </span>
  );
}
