import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} – ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const mark = await readFile(path.join(process.cwd(), "public", site.logo.mark));
  const markSrc = `data:image/svg+xml;base64,${mark.toString("base64")}`;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 56,
        padding: 80,
        background: "#f2f2f3",
        color: "#1d1f20",
      }}
    >
      <img src={markSrc} width={260} height={260} alt="" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.05,
            fontSize: 96,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          {site.name}
        </div>
        <div style={{ fontSize: 44, color: "#416180", marginTop: 12 }}>{site.tagline}</div>
      </div>
    </div>,
    size,
  );
}
