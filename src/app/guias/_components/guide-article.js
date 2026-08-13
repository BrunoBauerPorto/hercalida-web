import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  ExternalLink,
  Heart,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { getRelatedGuides } from "../../../content/guides";
import ShareButtons from "./share-buttons";

const SITE_URL = "https://hercalida.com";

function JsonLd({ guide }) {
  const canonicalUrl = `${SITE_URL}/guias/${guide.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Article", "MedicalWebPage"],
      headline: guide.title,
      description: guide.description,
      url: canonicalUrl,
      inLanguage: "pt-BR",
      datePublished: guide.publishedAt,
      dateModified: guide.publishedAt,
      isAccessibleForFree: true,
      author: {
        "@type": "Organization",
        name: "HerCalida",
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "HerCalida",
        url: SITE_URL,
      },
      mainEntityOfPage: canonicalUrl,
      citation: guide.sources.map((source) => source.url),
      audience: {
        "@type": "Audience",
        audienceType: "Mulheres brasileiras interessadas em saúde feminina",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guias",
          item: `${SITE_URL}/guias`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: guide.title,
          item: canonicalUrl,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function GuideSection({ section }) {
  const attention = section.tone === "attention";

  return (
    <section
      className={
        attention
          ? "my-10 rounded-3xl border border-amber-200 bg-amber-50/70 p-6 sm:p-8"
          : "border-t border-slate-200 py-9 first:border-t-0 first:pt-0 sm:py-11"
      }
    >
      <h2 className="font-serif text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
        {section.heading}
      </h2>
      {section.intro ? (
        <p className="mt-4 text-base leading-8 text-slate-700">{section.intro}</p>
      ) : null}
      {section.items ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {section.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
            >
              <h3 className="font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      ) : null}
      {section.bullets ? (
        <ul className="mt-5 space-y-3">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-base leading-7 text-slate-700">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
          {paragraph}
        </p>
      ))}
      {attention ? (
        <div className="mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-amber-900">
          <Stethoscope className="h-4 w-4" aria-hidden="true" />
          Orientação de segurança
        </div>
      ) : null}
    </section>
  );
}

export default function GuideArticle({ guide }) {
  const relatedGuides = getRelatedGuides(guide.slug);

  return (
    <div className="min-h-screen bg-[#fffdfd] text-slate-800 selection:bg-rose-200">
      <JsonLd guide={guide} />

      <a
        href="#conteudo"
        className="sr-only z-[100] rounded-full bg-slate-950 px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Ir para o conteúdo
      </a>

      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="HerCalida — início" className="shrink-0">
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
            href="/guias"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-bold text-slate-700 transition hover:border-rose-200 hover:text-rose-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Todos os guias
          </Link>
        </div>
      </header>

      <main id="conteudo">
        <article>
          <header className="relative isolate overflow-hidden border-b border-rose-100 bg-rose-50/50">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(244,63,94,0.16),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(217,70,239,0.10),transparent_28%)]" />
            <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
              <nav aria-label="Navegação estrutural" className="mb-7 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
                <Link href="/" className="hover:text-rose-600">Início</Link>
                <span aria-hidden="true">/</span>
                <Link href="/guias" className="hover:text-rose-600">Guias</Link>
                <span aria-hidden="true">/</span>
                <span className="text-rose-600">{guide.category}</span>
              </nav>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-rose-700 shadow-sm">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                {guide.category}
              </div>
              <h1 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                {guide.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {guide.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-rose-400" aria-hidden="true" />
                  Atualizado em <time dateTime={guide.publishedAt}>{guide.updatedAt}</time>
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-rose-400" aria-hidden="true" />
                  {guide.readingTime}
                </span>
              </div>
            </div>
          </header>

          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
            <div className="min-w-0">
              <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.15em] text-rose-600">
                  Resposta rápida
                </p>
                <p className="text-lg font-medium leading-8 text-slate-800">{guide.answer}</p>
              </div>

              <div className="mt-7">
                <ShareButtons slug={guide.slug} title={guide.title} />
              </div>

              <div className="mt-12">
                {guide.sections.map((section) => (
                  <GuideSection key={section.heading} section={section} />
                ))}
              </div>

              <section className="border-t border-slate-200 pt-10">
                <h2 className="font-serif text-2xl font-bold text-slate-950">Fontes consultadas</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  O conteúdo foi resumido em linguagem acessível a partir das fontes institucionais abaixo.
                </p>
                <ul className="mt-5 space-y-3">
                  {guide.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-start gap-2 text-sm font-bold leading-6 text-fuchsia-700 hover:underline"
                      >
                        {source.label}
                        <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mt-10 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
                <Heart className="mb-4 h-7 w-7 text-rose-300" aria-hidden="true" />
                <h2 className="font-serif text-2xl font-bold">Este guia ajudou?</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                  Compartilhe com alguém que possa se beneficiar. Informação clara pode ser um bom começo para uma conversa de cuidado.
                </p>
                <div className="mt-6">
                  <ShareButtons slug={guide.slug} title={guide.title} />
                </div>
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <ShieldCheck className="mb-4 h-6 w-6 text-amber-800" aria-hidden="true" />
                <h2 className="font-bold text-amber-950">Conteúdo educativo</h2>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  Este guia não faz diagnóstico, não indica tratamento e não substitui avaliação de um profissional de saúde.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-rose-600">
                  Próximo passo
                </p>
                <h2 className="mt-3 font-serif text-xl font-bold text-slate-950">
                  Organize seus próprios registros
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Conheça o beta do HerCalida e acompanhe novidades do aplicativo.
                </p>
                <Link
                  href={`/?utm_source=site&utm_medium=internal&utm_campaign=primeiros_100&utm_content=${guide.slug}_cta#beta`}
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-rose-500 px-4 text-sm font-bold text-white transition hover:bg-rose-600"
                >
                  Acompanhar o beta
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </article>

        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-600">Continue lendo</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-950">Outros guias da HerCalida</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={`/guias/${related.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl"
                >
                  <span className="text-xs font-black uppercase tracking-[0.13em] text-rose-500">
                    {related.category}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-slate-950">
                    {related.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-fuchsia-700">
                    Ler guia <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>© 2026 HerCalida. Conteúdo educativo, não atendimento médico.</p>
          <div className="flex gap-5">
            <Link href="/guias" className="font-bold hover:text-rose-600">Guias</Link>
            <Link href="/politica-de-privacidade" className="font-bold hover:text-rose-600">Privacidade</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
