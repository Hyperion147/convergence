import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Convergence UI";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(to bottom right, #111827, #000000)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        color: "white",
      }}
    >
      <img src="/og-image.png" alt="og-image" />
    </div>,
    {
      ...size,
    },
  );
}
