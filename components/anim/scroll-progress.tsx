"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * A bioluminescent-lime signal bar pinned to the top edge that scales with
 * document scroll progress — the page's own progress indicator.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 0.3,
      },
    });
  });

  return <div ref={ref} className="scroll-progress" aria-hidden />;
}
