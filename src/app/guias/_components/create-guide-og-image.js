import { ImageResponse } from "next/og";

export const guideOgSize = {
  width: 1200,
  height: 630,
};

export function createGuideOgImage(category, title) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #fff7f8 0%, #ffffff 52%, #fce7f3 100%)",
          color: "#0f172a",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 38, fontWeight: 700, color: "#9d4b6c" }}>
            HerCalida
          </div>
          <div
            style={{
              display: "flex",
              border: "2px solid #fecdd3",
              borderRadius: 999,
              padding: "12px 22px",
              fontFamily: "Arial, sans-serif",
              fontSize: 20,
              fontWeight: 700,
              color: "#be123c",
              background: "rgba(255,255,255,0.8)",
            }}
          >
            {category}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1020 }}>
          <div style={{ display: "flex", fontSize: 64, lineHeight: 1.08, fontWeight: 700 }}>
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontFamily: "Arial, sans-serif",
              fontSize: 25,
              color: "#475569",
            }}
          >
            Informação clara, acolhedora e baseada em fontes institucionais.
          </div>
        </div>
      </div>
    ),
    guideOgSize,
  );
}

