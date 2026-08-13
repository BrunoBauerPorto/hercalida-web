import GuideArticle from "../_components/guide-article";
import { getGuide } from "../../../content/guides";

const guide = getGuide("inicio-da-gravidez");

export const metadata = {
  title: guide.title,
  description: guide.description,
  keywords: [
    "sintomas no início da gravidez",
    "primeiros sinais de gravidez",
    "mudanças no corpo gravidez",
    "quando começar o pré-natal",
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

export default function InicioDaGravidezPage() {
  return <GuideArticle guide={guide} />;
}

