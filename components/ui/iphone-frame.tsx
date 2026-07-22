import Image from "next/image";
import { cn } from "@/lib/utils";

type IPhoneFrameProps = {
  /** Path under /public, e.g. "/screens/scan-result.png". */
  src: string;
  alt: string;
  /** Native pixel dimensions of the screenshot (for aspect-ratio + optimization). */
  width?: number;
  height?: number;
  /** Eager-load the first frame that's above the fold. */
  priority?: boolean;
  /** Soft lime glow behind the device (used for hero centerpiece). */
  glow?: boolean;
  className?: string;
  /** Extra classes for the <Image>. */
  imageClassName?: string;
};

/**
 * A hand-built iPhone 16 Pro. The screenshots already bake in the iOS status
 * bar + Dynamic Island, so this renders only the physical device — titanium
 * rail, black bezel, rounded screen corners, and side buttons — and lets the
 * screen fill edge to edge.
 *
 * All radii/paddings use container-query width units (cqw) so the corners are
 * a fixed proportion of the device WIDTH at any size — matching a real iPhone
 * instead of the pinched look percentage radii produce on a tall element.
 */
export function IPhoneFrame({
  src,
  alt,
  width = 1206,
  height = 2622,
  priority = false,
  glow = false,
  className,
  imageClassName,
}: IPhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-[1206/2622] w-full max-w-[300px] select-none [container-type:inline-size]",
        className,
      )}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-8 -z-10 rounded-[50%] bg-brand/20 blur-[70px]"
        />
      )}

      {/* Side buttons on the titanium rail */}
      {/* left: action button + volume up/down */}
      <span className="absolute -left-[0.8cqw] top-[16%] h-[2.6%] w-[1.4cqw] rounded-l-[0.6cqw] bg-neutral-600" />
      <span className="absolute -left-[0.8cqw] top-[23%] h-[7%] w-[1.4cqw] rounded-l-[0.6cqw] bg-gradient-to-b from-neutral-400 to-neutral-600" />
      <span className="absolute -left-[0.8cqw] top-[32%] h-[7%] w-[1.4cqw] rounded-l-[0.6cqw] bg-gradient-to-b from-neutral-400 to-neutral-600" />
      {/* right: power button */}
      <span className="absolute -right-[0.8cqw] top-[27%] h-[10%] w-[1.4cqw] rounded-r-[0.6cqw] bg-gradient-to-b from-neutral-400 to-neutral-600" />

      {/* Titanium outer rail */}
      <div className="absolute inset-0 rounded-[15.2cqw] bg-gradient-to-br from-neutral-500 via-neutral-700 to-neutral-600 p-[1.4cqw] shadow-[0_40px_90px_-25px_rgba(0,0,0,0.75)]">
        {/* Black bezel */}
        <div className="h-full w-full rounded-[13.8cqw] bg-black p-[2.2cqw]">
          {/* Screen — tinted to the app's dark canvas so a decoding frame
              reads as the app loading rather than a dead black rectangle. */}
          <div className="relative h-full w-full overflow-hidden rounded-[11.6cqw] bg-[#1b2726]">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority={priority}
              quality={92}
              sizes="(max-width: 768px) 80vw, 320px"
              className={cn("h-full w-full object-cover", imageClassName)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
