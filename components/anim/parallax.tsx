"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** vertical travel in px across the element's scroll pass (negative = up) */
  y?: number;
  /** optional scrub rotation in degrees */
  rotate?: number;
};

/**
 * Drifts its content as it passes through the viewport, scrubbed to scroll.
 * Used to give flat lab cards a subtle sense of depth without shadows.
 */
export function Parallax({
  children,
  className,
  as,
  y = -60,
  rotate = 0,
}: ParallaxProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      gsap.fromTo(
        el,
        { y: -y, rotate: -rotate * 0.5 },
        {
          y,
          rotate: rotate * 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
