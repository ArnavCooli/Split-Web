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

  useGSAP(
    () => {
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
        .from(
          "[data-hero-card]",
          { opacity: 0, y: 48, scale: 0.96, stagger: 0.12, duration: 1.1 },
          "-=0.5",
        );

      // Fade + lift the hero copy as it scrolls out of view.
      gsap.to("[data-hero-copy]", {
        y: -60,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });

      // Parallax drift on scroll.
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax);
        gsap.to(el, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative overflow-hidden pb-20 pt-32 container-px sm:pt-40 lg:pb-28"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid bg-radial-fade absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div
        data-hero-copy
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <h1 className="mt-6 text-balance text-[2.7rem] font-medium leading-[1.0] tracking-[-0.03em] sm:text-6xl lg:text-[5rem]">
          <span className="sr-only">Shared expenses without the awkward math.</span>
          <span aria-hidden className="flex flex-wrap justify-center gap-x-[0.28em] gap-y-1 overflow-hidden">
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
            Split automatically itemizes receipts, handles uneven expenses, and
            tells everyone exactly who owes what.
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

      {/* mockup stage — real app on real iPhones */}
      <div className="relative mx-auto mt-14 flex max-w-5xl justify-center sm:mt-16">
        <div
          data-hero-card
          data-parallax="-50"
          className="absolute -bottom-2 left-2 hidden w-[188px] lg:block xl:left-16"
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
          data-parallax="24"
          className="relative z-10 w-[248px] sm:w-[268px]"
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
          data-parallax="-70"
          className="absolute -bottom-2 right-2 hidden w-[188px] lg:block xl:right-16"
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
    </section>
  );
}
