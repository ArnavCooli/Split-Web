"use client";

import { useRef } from "react";
import { Play } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { gsap, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import { screens } from "@/lib/screens";

const headline = ["Shared", "expenses", "without", "the", "awkward", "math."];

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Intro: headline + copy land first. The devices stay off-stage until
      // the visitor scrolls, so the first screenful is only the tagline.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set("[data-hero-stack]", { opacity: 0, yPercent: 22, scale: 0.92 });
        gsap.set("[data-hero-card]", { opacity: 0, y: 40 });

        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.9 },
        });

        tl.from("[data-hero-word]", {
          yPercent: 120,
          opacity: 0,
          stagger: 0.07,
          duration: 1,
        })
          .from("[data-hero-sub]", { opacity: 0, y: 16 }, "-=0.55")
          .from("[data-hero-cta]", { opacity: 0, y: 16 }, "-=0.6")
          .from("[data-hero-hint]", { opacity: 0, y: 8 }, "-=0.4");

        // Scrubbed hand-off: copy lifts away, the devices rise into frame.
        const scroll = gsap.timeline({
          scrollTrigger: {
            trigger: track.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        scroll
          .to(
            "[data-hero-copy]",
            { yPercent: -14, opacity: 0, scale: 0.96, ease: "power1.in" },
            0,
          )
          .to("[data-hero-hint]", { opacity: 0, duration: 0.15 }, 0)
          .to(
            "[data-hero-stack]",
            { opacity: 1, yPercent: 0, scale: 1, ease: "power2.out" },
            0.18,
          )
          .to(
            "[data-hero-card]",
            { opacity: 1, y: 0, stagger: 0.06, ease: "power2.out" },
            0.32,
          );
      });

      // Reduced motion: everything is already laid out statically by CSS.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          "[data-hero-stack], [data-hero-card], [data-hero-copy], [data-hero-hint]",
          { clearProps: "all" },
        );
      });
    },
    { scope: root },
  );

  return (
    <section id="top" ref={root} className="relative">
      {/* Scroll runway: one screen of tagline, then one of device reveal.
          Collapses to a plain stacked layout when motion is reduced. */}
      <div
        ref={track}
        className="relative h-[200svh] motion-reduce:h-auto"
        data-hero-track
      >
        <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden container-px motion-reduce:static motion-reduce:h-auto motion-reduce:flex-col motion-reduce:gap-12 motion-reduce:py-28">
          {/* background */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="bg-grid bg-radial-fade absolute inset-0 opacity-60" />
            <div className="absolute left-1/2 top-[-10%] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
          </div>

          {/* ---- layer 1: the tagline ---- */}
          <div
            data-hero-copy
            className="absolute inset-0 flex flex-col items-center justify-center pt-16 container-px motion-reduce:static motion-reduce:pt-0"
          >
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h1 className="text-balance text-[2.7rem] font-medium leading-[1.0] tracking-[-0.03em] sm:text-6xl lg:text-[5rem]">
                <span className="sr-only">
                  Shared expenses without the awkward math.
                </span>
                <span
                  aria-hidden
                  className="flex flex-wrap justify-center gap-x-[0.28em] gap-y-1 overflow-hidden"
                >
                  {headline.map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden pb-1">
                      <span data-hero-word className="inline-block">
                        {word}
                      </span>
                    </span>
                  ))}
                </span>
              </h1>

              <p
                data-hero-sub
                className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
              >
                <Balancer>
                  Split automatically itemizes receipts, handles uneven expenses,
                  and tells everyone exactly who owes what.
                </Balancer>
              </p>

              <div
                data-hero-cta
                className="mt-8 flex w-full flex-col items-center gap-4"
              >
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <a href="#waitlist">Join Waitlist</a>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <a href="#how-it-works">
                      <Play className="size-4" />
                      Watch Demo
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  No spreadsheets. No awkward reminders. Free at launch.
                </p>
              </div>
            </div>

            <span
              data-hero-hint
              aria-hidden
              className="absolute bottom-8 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground motion-reduce:hidden"
            >
              Scroll
            </span>
          </div>

          {/* ---- layer 2: the devices ---- */}
          <div
            data-hero-stack
            className="absolute inset-0 flex items-center justify-center pt-16 opacity-0 container-px motion-reduce:static motion-reduce:pt-0 motion-reduce:opacity-100"
          >
            <div className="relative flex w-full max-w-5xl items-center justify-center">
              <div
                data-hero-card
                className="absolute left-0 hidden w-[min(20svh,188px)] lg:block xl:left-16"
              >
                <div className="animate-float rotate-[-8deg] [animation-delay:-2s]">
                  <IPhoneFrame
                    src={screens.scanResult.src}
                    alt={screens.scanResult.alt}
                    priority
                    className="max-w-full"
                  />
                </div>
              </div>

              <div
                data-hero-card
                className="relative z-10 w-[min(58vw,34svh,268px)]"
              >
                <IPhoneFrame
                  src={screens.home.src}
                  alt={screens.home.alt}
                  priority
                  glow
                  className="max-w-full"
                />
              </div>

              <div
                data-hero-card
                className="absolute right-0 hidden w-[min(20svh,188px)] lg:block xl:right-16"
              >
                <div className="animate-float rotate-[8deg] [animation-delay:-4s]">
                  <IPhoneFrame
                    src={screens.group.src}
                    alt={screens.group.alt}
                    priority
                    className="max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
