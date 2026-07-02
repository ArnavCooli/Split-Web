import * as React from "react";
import { cn } from "@/lib/utils";

/** Small pill label used as section eyebrows. */
export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "lab-label inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-muted-foreground",
        className,
      )}
      {...props}
    >
      <span className="lab-dot" aria-hidden />
      {children}
    </span>
  );
}
