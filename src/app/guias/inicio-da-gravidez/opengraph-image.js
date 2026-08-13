import {
  createGuideOgImage,
  guideOgSize,
} from "../_components/create-guide-og-image";

export const alt = "O que muda no corpo no início da gravidez — HerCalida";
export const size = guideOgSize;
export const contentType = "image/png";

export default function Image() {
  return createGuideOgImage(
    "Gravidez",
    "O que muda no corpo no início da gravidez?",
  );
}

