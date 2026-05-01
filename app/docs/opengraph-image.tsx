import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Convergence UI Documentation";
export const size = {
  width: 1200,
  height: 630,
};

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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f140f 0%, #1a1f1a 100%)",
          fontFamily: '"Geist Sans", system-ui, sans-serif',
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              color: "#4a9d6f",
              fontWeight: "600",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Documentation
          </div>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "900",
              color: "#ffffff",
              margin: "0",
              letterSpacing: "-2px",
              lineHeight: "1.2",
            }}
          >
            Learn Convergence
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#a1a8a1",
              margin: "20px 0 0 0",
              fontWeight: "500",
              maxWidth: "80%",
            }}
          >
            Comprehensive guide to live theming and UI customization
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "32px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                padding: "6px 12px",
                backgroundColor: "#2a3d2a",
                color: "#4a9d6f",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "600",
                border: "1px solid #3a4d3a",
              }}
            >
              Installation
            </span>
            <span
              style={{
                padding: "6px 12px",
                backgroundColor: "#2a3d2a",
                color: "#4a9d6f",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "600",
                border: "1px solid #3a4d3a",
              }}
            >
              API Reference
            </span>
            <span
              style={{
                padding: "6px 12px",
                backgroundColor: "#2a3d2a",
                color: "#4a9d6f",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "600",
                border: "1px solid #3a4d3a",
              }}
            >
              Examples
            </span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            fontSize: "14px",
            color: "#686f68",
          }}
        >
          convergence.suryansu.pro/docs
        </div>
      </div>
    ),
    { ...size },
  );
}
