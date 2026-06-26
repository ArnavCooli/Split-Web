"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** CSS selector for the children to stagger (direct children by default) */
  selector?: string;
  y?: number;
  each?: number;
  start?: string;
};

/**
 * Reveals a set of children with a stagger as the group scrolls into view.
 * Children get `.reveal-init` automatically? No — caller adds `reveal-init`
 * to each animated child for the no-flash fallback.
 */
export function Stagger({
  children,
  className,
  as,
  selector,
  y = 20,
  each = 0.08,
  start = "top 82%",
}: StaggerProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = selector
        ? el.querySelectorAll(selector)
        : (Array.from(el.children) as Element[]);
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: each,
        scrollTrigger: { trigger: el, start, once: true },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
