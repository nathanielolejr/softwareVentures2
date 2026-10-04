import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} – ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#ffffff",
        color: "#0f172a",
      }}
    >
      <div style={{ width: 80, height: 8, background: "#4338ca", marginBottom: 40 }} />
      <div style={{ fontSize: 88, fontWeight: 700 }}>{site.name}</div>
      <div style={{ fontSize: 44, color: "#475569", marginTop: 16 }}>{site.tagline}</div>
    </div>,
    size,
  );
}
