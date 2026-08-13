import {
  createGuideOgImage,
  guideOgSize,
} from "../_components/create-guide-og-image";

export const alt = "Primeiros sinais da menopausa — HerCalida";
export const size = guideOgSize;
export const contentType = "image/png";

export default function Image() {
  return createGuideOgImage(
    "Climatério e menopausa",
    "Primeiros sinais da menopausa: o que observar",
  );
}

