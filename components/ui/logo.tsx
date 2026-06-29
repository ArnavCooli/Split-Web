import { cn } from "@/lib/utils";

/** Split app mark: two vertical bars in a rounded green tile + name. */
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
        className="relative flex h-8 w-8 items-center justify-center gap-[3px] rounded-[0.55rem] bg-[#0c8f5e]"
      >
        <span className="block h-[14px] w-[6px] rounded-[2px] bg-[#f5f5f4]" />
        <span className="block h-[14px] w-[6px] rounded-[2px] bg-white/40" />
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
