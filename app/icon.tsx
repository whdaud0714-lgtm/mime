import { ImageResponse } from "next/og";
import { markSvg } from "@/lib/mark";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const src = `data:image/svg+xml;base64,${Buffer.from(
	markSvg({ fg: "#f6f2e9", bg: "#0e0e12", size: 64 }),
).toString("base64")}`;

export default function Icon() {
	return new ImageResponse(
		<div style={{ display: "flex", width: "100%", height: "100%" }}>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={src} width={64} height={64} alt="" />
		</div>,
		{ ...size },
	);
}
