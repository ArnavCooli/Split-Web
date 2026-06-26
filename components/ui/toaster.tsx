"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Sonner
      theme={(resolvedTheme as ToasterProps["theme"]) ?? "system"}
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast:
            "!bg-surface !text-foreground !border !border-border !rounded-xl !shadow-card",
          description: "!text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}
