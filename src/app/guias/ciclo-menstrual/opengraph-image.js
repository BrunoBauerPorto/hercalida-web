import {
  createGuideOgImage,
  guideOgSize,
} from "../_components/create-guide-og-image";

export const alt = "Como entender as fases do ciclo menstrual — HerCalida";
export const size = guideOgSize;
export const contentType = "image/png";

export default function Image() {
  return createGuideOgImage(
    "Ciclo menstrual",
    "Como entender as fases do ciclo menstrual",
  );
}

