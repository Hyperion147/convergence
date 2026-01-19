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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          padding: "40px 80px",
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: 80,
            fontWeight: 800,
            background: "linear-gradient(to right, #fff, #999)",
            backgroundClip: "text",
            color: "transparent",
            margin: 0,
            letterSpacing: "-0.05em",
          }}
        >
          Convergence
        </h1>
        <p
          style={{
            fontSize: 30,
            color: "#888",
            marginTop: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          UI Kit
        </p>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
