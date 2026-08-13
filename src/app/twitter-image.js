import {
  createGuideOgImage,
  guideOgSize,
} from "./guias/_components/create-guide-og-image";

export const alt = "HerCalida — saúde feminina com contexto e privacidade";
export const size = guideOgSize;
export const contentType = "image/png";

export default function Image() {
  return createGuideOgImage(
    "Saúde feminina com contexto",
    "Um acompanhamento que evolui com os seus registros",
  );
}

