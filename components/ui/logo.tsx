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
        className="relative flex h-8 w-8 items-center justify-center gap-[3px] rounded-[0.5rem] bg-brand"
      >
        <span className="block h-[14px] w-[5px] rounded-[2px] bg-[#222f30]" />
        <span className="block h-[14px] w-[5px] rounded-[2px] bg-[#222f30]/45" />
      </span>
      {showWordmark && (
        <span className="text-[1.15rem] font-medium tracking-[-0.02em]">
          Split
        </span>
      )}
    </span>
  );
}
