import { ImageResponse } from "next/og";
import { speakers, getSpeakerById } from "@/lib/speakers";

export const alt = "TEDx Salinas Speaker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return speakers.map((s) => ({ id: s.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const speaker = getSpeakerById(id);

  if (!speaker) {
    return new ImageResponse(
      <div style={{ width: "100%", height: "100%", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 48 }}>
        TEDx Salinas
      </div>,
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left: YouTube thumbnail */}
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            position: "relative",
          }}
        >
          <img
            src={`https://img.youtube.com/vi/${speaker.videoId}/maxresdefault.jpg`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Gradient overlay on image */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "120px",
              height: "100%",
              background: "linear-gradient(to right, transparent, #111111)",
              display: "flex",
            }}
          />
        </div>

        {/* Right: Speaker info */}
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "48px",
          }}
        >
          {/* TEDx badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <div
              style={{
                background: "#EB0028",
                color: "white",
                fontSize: "22px",
                fontWeight: 900,
                padding: "6px 12px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <span style={{ display: "flex" }}>TED</span>
              <span style={{ fontSize: "13px", display: "flex", marginTop: "-1px" }}>x</span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "18px", display: "flex" }}>
              Salinas
            </span>
          </div>

          {/* Speaker name */}
          <div
            style={{
              color: "white",
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "12px",
              display: "flex",
            }}
          >
            {speaker.name}
          </div>

          {/* Title */}
          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "20px",
              marginBottom: "24px",
              display: "flex",
            }}
          >
            {speaker.title}
          </div>

          {/* Talk title */}
          <div
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: 1.3,
              display: "flex",
            }}
          >
            &ldquo;{speaker.talkTitle}&rdquo;
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
        </div>
      </div>
    ),
    { ...size }
  );
}
