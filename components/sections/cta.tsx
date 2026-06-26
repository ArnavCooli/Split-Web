import Balancer from "react-wrap-balancer";
import { Reveal } from "@/components/anim/reveal";
import { WaitlistForm } from "@/components/waitlist-form";

export function CTA() {
  return (
    <section id="waitlist" className="scroll-mt-24 py-20 container-px sm:py-28">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center shadow-card sm:px-12 sm:py-20">
        {/* premium subtle background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid bg-radial-fade absolute inset-0 opacity-40" />
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[110px]" />
        </div>

        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            <Balancer>Stop doing roommate math.</Balancer>
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-4 max-w-md text-pretty text-base text-muted-foreground sm:text-lg">
            Shared living is complicated enough. Be first to settle up the easy
            way.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-col items-center gap-3">
          <WaitlistForm
            className="mx-auto"
            buttonLabel="Get Notified"
            source="cta"
          />
          <p className="text-xs text-muted-foreground">
            Join the waitlist — we&apos;ll only email you at launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
