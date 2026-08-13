import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Heart, ShieldCheck } from "lucide-react";

import { guideOrder, guides } from "../../content/guides";

export const metadata = {
  title: "Guias de saúde feminina",
  description:
    "Guias educativos e acolhedores sobre ciclo menstrual, início da gravidez, climatério e menopausa, com fontes institucionais.",
  alternates: { canonical: "/guias" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/guias",
    title: "Guias de saúde feminina | HerCalida",
    description:
      "Respostas claras sobre ciclo menstrual, gravidez e menopausa, com fontes institucionais.",
  },
};

export default function GuidesPage() {
  const items = guideOrder.map((slug) => guides[slug]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guias de saúde feminina da HerCalida",
    description:
      "Conteúdo educativo sobre ciclo menstrual, gravidez, climatério e menopausa.",
    url: "https://hercalida.com/guias",
    inLanguage: "pt-BR",
    hasPart: items.map((guide) => ({
      "@type": "Article",
      headline: guide.title,
      url: `https://hercalida.com/guias/${guide.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[#fffdfd] text-slate-800 selection:bg-rose-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="HerCalida — início">
            <Image
              src="/NovaLogo.png"
              alt="HerCalida"
              width={220}
              height={61}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>
          <Link
            href="/?utm_source=site&utm_medium=internal&utm_campaign=primeiros_100&utm_content=guias_header#beta"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-rose-500"
          >
            Conhecer o beta <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden border-b border-rose-100 bg-rose-50/50">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(244,63,94,0.17),transparent_28%),radial-gradient(circle_at_15%_90%,rgba(217,70,239,0.10),transparent_30%)]" />
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-rose-700 shadow-sm">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Biblioteca HerCalida
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              Entenda seu corpo sem complicação.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Guias educativos, acolhedores e baseados em fontes institucionais para apoiar perguntas melhores — nunca para substituir uma consulta.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {items.map((guide, index) => (
                <article
                  key={guide.slug}
                  className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/50"
                >
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-lg font-black text-rose-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-rose-500">
                    {guide.category}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-bold leading-snug text-slate-950">
                    {guide.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                    {guide.description}
                  </p>
                  <Link
                    href={`/guias/${guide.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-fuchsia-700"
                  >
                    Ler guia
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:grid-cols-2 sm:p-9">
              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-rose-500" aria-hidden="true" />
                <div>
                  <h2 className="font-bold text-slate-950">Fontes visíveis</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Cada guia mostra as fontes institucionais consultadas e a data da última atualização.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Heart className="mt-1 h-6 w-6 shrink-0 text-rose-500" aria-hidden="true" />
                <div>
                  <h2 className="font-bold text-slate-950">Limites claros</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    O conteúdo é educativo e orienta a procurar atendimento quando um sintoma merece avaliação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>© 2026 HerCalida. Conteúdo educativo, não atendimento médico.</p>
          <Link href="/politica-de-privacidade" className="font-bold hover:text-rose-600">
            Política de Privacidade
          </Link>
        </div>
      </footer>
    </div>
  );
}

