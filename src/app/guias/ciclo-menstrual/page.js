import GuideArticle from "../_components/guide-article";
import { getGuide } from "../../../content/guides";

const guide = getGuide("ciclo-menstrual");

export const metadata = {
  title: guide.title,
  description: guide.description,
  keywords: [
    "fases do ciclo menstrual",
    "como funciona o ciclo menstrual",
    "fase folicular",
    "ovulação",
    "fase lútea",
  ],
  alternates: { canonical: `/guias/${guide.slug}` },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `/guias/${guide.slug}`,
    title: guide.title,
    description: guide.description,
    publishedTime: guide.publishedAt,
    modifiedTime: guide.publishedAt,
    section: guide.category,
  },
  twitter: {
    card: "summary_large_image",
    title: guide.title,
    description: guide.description,
  },
};

export default function CicloMenstrualPage() {
  return <GuideArticle guide={guide} />;
}

