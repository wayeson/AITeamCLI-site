import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#030303",
          color: "#f5f5f5",
          fontFamily: "IBM Plex Sans, sans-serif",
          padding: "56px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            borderRadius: 32,
            border: "1px solid rgba(255,255,255,0.12)",
            backgroundColor: "#090909",
            backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            opacity: 0.32,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div
              style={{
                fontSize: 24,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              AITeam CLI
            </div>
            <div
              style={{
                padding: "12px 18px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                fontSize: 18,
                color: "rgba(255,255,255,0.64)",
              }}
            >
              Shell-first orchestration
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
            <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 700, letterSpacing: "-0.05em" }}>
              Make your AI coding tools work like a real team.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.45, color: "rgba(255,255,255,0.72)" }}>
              Shell-first orchestration for role-based AI CLI workflows that stays inspectable and resumable on disk.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: 28,
              color: "rgba(255,255,255,0.7)",
              fontSize: 22,
            }}
          >
            <div>planner -&gt; implementer -&gt; reviewer -&gt; qa -&gt; finalizer</div>
            <div>Open source</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
