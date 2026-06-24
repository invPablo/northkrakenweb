import { ImageResponse } from "next/og";

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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0d",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(57,255,140,0.25), transparent 60%)",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#39ff8c",
            marginBottom: 24,
          }}
        >
          Next.js + Tailwind Templates
        </div>
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#f4f4f5",
            lineHeight: 0.95,
            letterSpacing: -2,
          }}
        >
          NORTH
        </div>
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#39ff8c",
            lineHeight: 0.95,
            letterSpacing: -2,
          }}
        >
          KRAKEN
        </div>
        <div style={{ fontSize: 26, color: "#a1a1aa", marginTop: 32 }}>
          Production-ready templates. Buy, customize, deploy.
        </div>
      </div>
    ),
    { ...size }
  );
}
