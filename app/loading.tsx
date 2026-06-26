export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative flex items-center gap-3">
        <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <span className="text-lg font-semibold">S</span>
          <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
        </span>
        <span className="text-lg font-semibold tracking-tight">Split</span>
      </div>
      <div className="mt-8 h-px w-40 overflow-hidden rounded-full bg-border">
        <div className="h-full w-1/3 animate-[marquee_1.1s_ease-in-out_infinite] rounded-full bg-foreground/60" />
      </div>
      <span className="sr-only">Loading Split…</span>
    </div>
  );
}
