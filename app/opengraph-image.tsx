import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0c0c0d",
          backgroundImage:
            "radial-gradient(circle at 78% 18%, rgba(52,201,139,0.18), transparent 45%)",
          color: "#f7f7f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#f7f7f7",
              color: "#0c0c0d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.5 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: -2.5,
              lineHeight: 1.05,
              maxWidth: 920,
            }}
          >
            Shared expenses without the awkward math.
          </div>
          <div style={{ fontSize: 30, color: "#a1a1a1", maxWidth: 820 }}>
            Scan a receipt, assign items, and settle up in one tap.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 99,
              background: "#34c98b",
            }}
          />
          <div style={{ fontSize: 24, color: "#a1a1a1" }}>{site.tagline}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
