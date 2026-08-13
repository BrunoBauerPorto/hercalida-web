import GuideArticle from "../_components/guide-article";
import { getGuide } from "../../../content/guides";

const guide = getGuide("primeiros-sinais-menopausa");

export const metadata = {
  title: guide.title,
  description: guide.description,
  keywords: [
    "primeiros sinais da menopausa",
    "sintomas do climatério",
    "perimenopausa",
    "mudanças menstruais menopausa",
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

export default function PrimeirosSinaisMenopausaPage() {
  return <GuideArticle guide={guide} />;
}

