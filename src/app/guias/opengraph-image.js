import { createGuideOgImage, guideOgSize } from "./_components/create-guide-og-image";

export const alt = "Guias de saúde feminina — HerCalida";
export const size = guideOgSize;
export const contentType = "image/png";

export default function Image() {
  return createGuideOgImage("Biblioteca HerCalida", "Entenda seu corpo sem complicação");
}

