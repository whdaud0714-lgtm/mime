import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { markSvg } from "@/lib/mark";
import { festival } from "@/lib/festival";

export const alt = `${festival.titleKo} — ${festival.sloganEn}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const mark = `data:image/svg+xml;base64,${Buffer.from(
  markSvg({ fg: "#f6f2e9", bg: "transparent", size: 120 }),
).toString("base64")}`;

const photoData = await readFile(join(process.cwd(), "media/3.jpg"), "base64");
const photoSrc = `data:image/jpeg;base64,${photoData}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#f6f2e9",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={1200}
          height={798}
          style={{ position: "absolute", top: -84, left: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(14,14,18,0.7) 0%, rgba(14,14,18,0.88) 100%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={92} height={92} alt="" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              letterSpacing: 4,
              fontSize: 25,
              color: "#ffb627",
            }}
          >
            <span>CHUNCHEON INTERNATIONAL MIME FESTIVAL</span>
            <span style={{ color: "#f6f2e9", opacity: 0.6 }}>2026 · 제38회</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: 100, fontWeight: 800, lineHeight: 1 }}>
            WHERE SILENCE
          </span>
          <span
            style={{
              fontSize: 100,
              fontWeight: 800,
              lineHeight: 1,
              color: "#ffb627",
            }}
          >
            SPEAKS.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            borderTop: "2px solid rgba(246,242,233,0.3)",
            paddingTop: 24,
          }}
        >
          <span>24 – 31 MAY 2026</span>
          <span style={{ color: "#ff5a5f" }}>CHUNCHEON · KOREA</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
