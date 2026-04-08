import { ImageResponse } from "next/og";

export const alt = "TEDx Salinas - Ideas Worth Spreading";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          background: "linear-gradient(135deg, #1a1a1a 0%, #111111 50%, #0a0a0a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(235,0,40,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* TEDx badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div
            style={{
              background: "#EB0028",
              color: "white",
              fontSize: "36px",
              fontWeight: 900,
              padding: "8px 16px",
              letterSpacing: "-1px",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <span style={{ display: "flex" }}>TED</span>
            <span style={{ fontSize: "20px", display: "flex", marginTop: "-2px" }}>x</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "28px", fontWeight: 300, display: "flex" }}>
            Salinas
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            color: "white",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "24px",
            display: "flex",
          }}
        >
          Ideas worth spreading
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "24px",
            lineHeight: 1.5,
            maxWidth: "700px",
            display: "flex",
          }}
        >
          12 talks from game changers and global thinkers in Salinas, California
        </div>

        {/* Bottom red line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#EB0028",
            display: "flex",
          }}
        />

        {/* Event info */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "60px",
            color: "rgba(255,255,255,0.4)",
            fontSize: "18px",
            textAlign: "right",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <span style={{ display: "flex" }}>February 25, 2017</span>
          <span style={{ display: "flex" }}>Santa Lucia Ballroom</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
