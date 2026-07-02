import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/anim/reveal";
import Balancer from "react-wrap-balancer";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 container-px sm:py-28 lg:py-32",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Badge>{eyebrow}</Badge>
        </Reveal>
      )}
      <Reveal as="h2" delay={0.05}>
        <span className="block max-w-3xl text-balance text-3xl font-medium tracking-[-0.02em] sm:text-4xl lg:text-[2.85rem] lg:leading-[1.06]">
          <Balancer>{title}</Balancer>
        </span>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            <Balancer>{description}</Balancer>
          </p>
        </Reveal>
      )}
    </div>
  );
}
