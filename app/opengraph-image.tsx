import { ImageResponse } from "next/og";

// output: "export" requires image routes to opt into static generation.
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "The Forward Society";

// The wordmark on ink. No photographs anywhere on the site, including here.
// Bodoni is not available to the OG renderer without shipping a font file, so
// this falls back to a system serif — the composition carries it.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#141210",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "10px", height: "10px", background: "#CE1126" }} />
          <div style={{ flex: 1, height: "1px", background: "#CE1126" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "104px",
              fontStyle: "italic",
              color: "#F5F0EA",
              letterSpacing: "-0.02em",
            }}
          >
            <span>The&nbsp;</span>
            <span style={{ color: "#CE1126" }}>Forward</span>
            <span>&nbsp;Society</span>
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "26px",
              color: "#9A938B",
              fontFamily: "Helvetica, Arial, sans-serif",
            }}
          >
            A student club for those who think ahead and take action.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "20px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9A938B",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Rutgers University · Launching Fall 2026
        </div>
      </div>
    ),
    size,
  );
}
