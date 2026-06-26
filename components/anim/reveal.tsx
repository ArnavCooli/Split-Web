"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** vertical travel distance in px */
  y?: number;
  delay?: number;
  duration?: number;
  start?: string;
};

/**
 * Reveals a single element on scroll. The element ships with `.reveal-init`
 * (hidden) so there's no flash; if JS/ScrollTrigger never runs it falls back
 * to visible via the reduced-motion CSS rule.
 */
export function Reveal({
  children,
  className,
  as,
  y = 18,
  delay = 0,
  duration = 0.9,
  start = "top 85%",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      gsap.set(el, { opacity: 0, y });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start, once: true },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn("reveal-init", className)}>
      {children}
    </Tag>
  );
}
