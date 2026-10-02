"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import celularCalendario from "../../public/Celular1.png";
import celularVisaoGeral from "../../public/Celular2.png";
import {
  Activity,
  ArrowRight,
  BellRing,
  BookOpen,
  Bot,
  CalendarDays,
  Check,
  ChevronDown,
  CircleUserRound,
  Database,
  Download,
  FileText,
  Heart,
  HeartPulse,
  LockKeyhole,
  Menu,
  MessageCircleHeart,
  MoonStar,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";

import { trackEvent } from "../lib/analytics";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.hercalida.app";

const navigation = [
  ["/guias", "Guias"],
  ["#produto", "O produto"],
  ["#como-funciona", "Como funciona"],
  ["#calie", "Calie"],
  ["#planos", "Planos"],
  ["#privacidade", "Privacidade"],
];

const featuredGuides = [
  {
    slug: "ciclo-menstrual",
    category: "Ciclo menstrual",
    title: "Como entender as fases do ciclo menstrual",
    description: "Menstruação, fase folicular, ovulação e fase lútea sem complicação.",
  },
  {
    slug: "inicio-da-gravidez",
    category: "Gravidez",
    title: "O que muda no corpo no início da gravidez?",
    description: "Sintomas comuns, confirmação, pré-natal e sinais que pedem avaliação.",
  },
  {
    slug: "primeiros-sinais-menopausa",
    category: "Climatério e menopausa",
    title: "Primeiros sinais da menopausa",
    description: "Mudanças do ciclo, ondas de calor, sono, humor e quando buscar cuidado.",
  },
];

const features = [
  {
    icon: CalendarDays,
    title: "Ciclo que aprende com você",
    description:
      "O histórico real de menstruações alimenta médias, variabilidade e um nível de confiança — tudo calculado localmente.",
    accent: "bg-fuchsia-50 text-fuchsia-700",
  },
  {
    icon: HeartPulse,
    title: "Gestação e pós-parto com segurança",
    description:
      "Acompanhe agenda, sintomas e percepção dos movimentos fetais. Mudanças relevantes direcionam para a equipe ou maternidade, sem avaliar o bem-estar fetal.",
    accent: "bg-rose-50 text-rose-700",
  },
  {
    icon: Activity,
    title: "Rotina e sintomas",
    description:
      "Registre dor, sono, emoções, hidratação, alimentação, exercícios, sangramento, corrimento e outros sinais do dia.",
    accent: "bg-amber-50 text-amber-700",
  },
  {
    icon: BellRing,
    title: "Lembretes que acompanham a rotina",
    description:
      "Pílula, pausa, consultas, check-in diário e hidratação são organizados no aparelho conforme as escolhas da usuária.",
    accent: "bg-violet-50 text-violet-700",
  },
  {
    icon: BookOpen,
    title: "Acompanhamento Billings",
    description:
      "Registre sensação, aparência, sangramento e fatores de interferência. O app organiza o histórico, sem identificar pico ou confirmar ovulação.",
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: Database,
    title: "Controle financeiro local",
    description:
      "Organize receitas, débitos e saldo mensal. Esses lançamentos ficam fora da Calie e dos Insights de saúde.",
    accent: "bg-sky-50 text-sky-700",
  },
  {
    icon: TrendingUp,
    title: "Padrões explicados no Premium",
    description:
      "Veja tendências apoiadas nos seus próprios registros, com linguagem proporcional à quantidade de dados disponível.",
    accent: "bg-sky-50 text-sky-700",
  },
  {
    icon: FileText,
    title: "Relatórios completos no Premium",
    description:
      "Gere visões organizadas e relatórios em PDF para levar informações mais claras ao atendimento profissional.",
    accent: "bg-violet-50 text-violet-700",
  },
  {
    icon: Download,
    title: "Seus dados com você",
    description:
      "Exporte e restaure manualmente seus registros em JSON. Você escolhe quando e onde guardar uma cópia.",
    accent: "bg-emerald-50 text-emerald-700",
  },
];

const plans = [
  {
    name: "Gratuito",
    eyebrow: "Para sempre",
    description:
      "Completo para registrar e cuidar da rotina.",
    price: "Grátis",
    priceNote: "Seus registros, seu diário e a exportação dos seus dados continuam seus, assinando ou não.",
    features: [
      "Registros, histórico e calendário",
      "Lembretes e recursos de segurança",
      "Exportação dos seus próprios dados",
    ],
    featured: false,
  },
  {
    name: "Premium",
    eyebrow: "Análises e relatórios",
    description:
      "Análises e relatórios, sem conversa generativa.",
    features: [
      "Tudo do plano Gratuito",
      "Relatórios completos para consultas",
      "Padrões e comparações explicados",
    ],
    billingOptions: [
      {
        label: "Anual",
        badge: "economize 34%",
        price: "R$ 79,99 por ano",
      },
      {
        label: "Mensal",
        price: "R$ 9,99 por mês",
      },
    ],
    featured: false,
  },
  {
    name: "HerCalida Assistente",
    eyebrow: "Conversa contextual",
    description:
      "Tudo do Premium e conversa contextual com a Calie.",
    features: [
      "Tudo do plano Premium",
      "Conversa contextual com a Calie",
      "Até 200 mensagens por mês",
    ],
    billingOptions: [
      {
        label: "Anual",
        badge: "economize 36%",
        price: "R$ 139,99 por ano",
      },
      {
        label: "Mensal",
        badge: "14 dias grátis",
        price: "R$ 17,99 por mês",
        note: "Cobrança só depois do teste",
      },
    ],
    featured: true,
  },
];

const faqItems = [
  {
    question: "O HerCalida faz diagnóstico?",
    answer:
      "Não. O HerCalida é uma ferramenta de registro, organização e educação em saúde. Ele não é um dispositivo médico e não substitui avaliação, diagnóstico ou tratamento profissional.",
  },
  {
    question: "Meus dados ficam na nuvem?",
    answer:
      "Por padrão, seus registros de saúde ficam criptografados no aparelho. Com consentimento específico para IA e idade de 18 anos ou mais, um contexto minimizado pode ser processado remotamente para gerar conselhos, análises e respostas no chat, conforme seu plano. Depois dessa autorização, abrir o Dashboard pode solicitar conselhos à IA automaticamente quando não houver um resultado reutilizável, mesmo sem enviar uma mensagem no chat. Os dados envolvidos estão descritos na Política de Privacidade.",
  },
  {
    question: "A Calie é obrigatória?",
    answer:
      "Não. Todos os recursos de IA da Calie são opcionais, exigem idade de 18 anos ou mais e consentimento específico. Os conselhos do Dashboard podem usar IA nos três planos; a análise completa, no Premium e no Assistente; e o chat, somente no Assistente ou em acesso equivalente por cortesia. Você pode revogar a autorização em Perfil → Segurança e privacidade sem perder os demais recursos compatíveis com seu plano.",
  },
  {
    question: "Qual é a diferença entre Premium e Assistente?",
    answer:
      "O Premium libera relatórios completos, padrões e comparações calculados no aparelho, além de Ver análise completa no Dashboard, que pode usar IA remota com autorização. Não inclui o chat. O HerCalida Assistente inclui tudo do Premium e acrescenta a conversa com a Calie, com até 200 mensagens por mês e 30 por dia no chat. Esses limites não se referem aos conselhos ou à análise completa do Dashboard.",
  },
  {
    question: "Onde posso baixar o aplicativo?",
    answer:
      "O HerCalida já está disponível para Android na Google Play. Use um dos botões desta página para abrir a loja e instalar o app.",
  },
];

function PlayStoreLink({ children, className, location, label = "Baixar o HerCalida na Google Play" }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onClick={() => trackEvent("play_store_click", { location })}
      className={className}
    >
      {children}
    </a>
  );
}

function FeatureCard({ feature }) {
  const Icon = feature.icon;
  return (
    <article className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/60 md:p-7">
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${feature.accent}`}>
        <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-950">{feature.title}</h3>
      <p className="text-sm leading-6 text-slate-600">{feature.description}</p>
    </article>
  );
}

function PlanCard({ plan }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-[2rem] border p-7 md:p-8 ${
        plan.featured
          ? "border-rose-300 bg-slate-950 text-white shadow-2xl shadow-slate-300/60 md:-translate-y-4"
          : "border-slate-200 bg-white text-slate-950 shadow-sm"
      }`}
    >
      {plan.featured ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-rose-400 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white">
          Mais completo
        </span>
      ) : null}
      <p className={`mb-3 text-xs font-black uppercase tracking-[0.18em] ${plan.featured ? "text-rose-300" : "text-rose-500"}`}>
        {plan.eyebrow}
      </p>
      <h3 className="mb-3 font-serif text-2xl font-bold">{plan.name}</h3>
      <p className={`mb-7 min-h-16 text-sm leading-6 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>
        {plan.description}
      </p>
      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className={`flex gap-3 text-sm leading-5 ${plan.featured ? "text-slate-200" : "text-slate-600"}`}>
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.featured ? "bg-rose-400 text-white" : "bg-rose-50 text-rose-500"}`}>
              <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {plan.billingOptions ? (
        <div className="mb-6 space-y-3">
          {plan.billingOptions.map((option, index) => (
            <div
              key={option.label}
              className={`rounded-2xl border p-4 ${
                plan.featured
                  ? index === 0
                    ? "border-rose-300 bg-white/10"
                    : "border-white/10 bg-white/[0.05]"
                  : index === 0
                    ? "border-rose-300 bg-rose-50/60"
                    : "border-slate-200 bg-slate-50"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className={`font-bold ${plan.featured ? "text-white" : "text-slate-950"}`}>{option.label}</p>
                {option.badge ? (
                  <span className="rounded-full bg-rose-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                    {option.badge}
                  </span>
                ) : null}
              </div>
              <p className={`mt-2 text-base font-semibold ${plan.featured ? "text-slate-100" : "text-slate-800"}`}>
                {option.price}
              </p>
              {option.note ? (
                <p className={`mt-1 text-xs ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>{option.note}</p>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className={`mb-6 border-y py-4 ${plan.featured ? "border-white/10" : "border-slate-100"}`}>
          <p className={`text-xl font-bold ${plan.featured ? "text-white" : "text-slate-900"}`}>{plan.price}</p>
          <p className={`mt-2 text-xs leading-5 ${plan.featured ? "text-slate-300" : "text-slate-500"}`}>{plan.priceNote}</p>
        </div>
      )}

      <PlayStoreLink
        location={`plan_${plan.name.toLowerCase().replaceAll(" ", "_")}`}
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-bold transition ${
          plan.featured
            ? "bg-white text-slate-950 hover:bg-rose-100"
            : "border border-slate-200 bg-slate-50 text-slate-900 hover:border-rose-300 hover:bg-rose-50"
        }`}
      >
        {plan.name === "Gratuito" ? "Baixar grátis" : "Ver na Google Play"}
      </PlayStoreLink>
    </article>
  );
}

export default function HerCalidaLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-slate-800 selection:bg-rose-200">
      <a
        href="#conteudo"
        className="sr-only z-[100] rounded-full bg-slate-950 px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Ir para o conteúdo
      </a>

      <div className="border-b border-rose-100 bg-rose-50 px-4 py-2.5 text-center text-xs font-semibold text-rose-900">
        <PlayStoreLink location="announcement_bar" className="inline-flex items-center gap-2 transition hover:text-rose-600">
          <ShieldCheck className="h-4 w-4 text-rose-500" aria-hidden="true" />
          O HerCalida já está disponível para Android — baixar na Google Play
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </PlayStoreLink>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" aria-label="HerCalida — início" className="shrink-0">
            <Image
              src="/NovaLogo.png"
              alt="HerCalida"
              width={220}
              height={61}
              priority
              className="h-9 w-auto object-contain md:h-10"
            />
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
            {navigation.map(([href, label]) => (
              <a key={href} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-rose-500">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <PlayStoreLink
              location="header"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white transition hover:bg-rose-500 sm:inline-flex"
            >
              Baixar o app
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </PlayStoreLink>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-rose-200 hover:text-rose-500 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav aria-label="Navegação móvel" className="absolute inset-x-0 top-full border-b border-slate-200 bg-white px-4 py-5 shadow-2xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navigation.map(([href, label]) => (
                <a key={href} href={href} onClick={closeMenu} className="rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-rose-50 hover:text-rose-600">
                  {label}
                </a>
              ))}
              <PlayStoreLink
                location="mobile_menu"
                className="mt-3 rounded-full bg-slate-950 px-5 py-3.5 text-center font-bold text-white"
              >
                Baixar o app
              </PlayStoreLink>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="conteudo">
        <section id="inicio" className="relative isolate overflow-hidden border-b border-slate-100">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_18%,rgba(251,113,133,0.20),transparent_27%),radial-gradient(circle_at_65%_70%,rgba(217,70,239,0.10),transparent_28%)]" />
          <div className="absolute inset-0 -z-30 bg-[#fffdfd]" />
          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
            <div className="relative z-10 text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-rose-700 shadow-sm">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Saúde feminina com contexto
              </div>
              <h1 className="mx-auto max-w-3xl font-serif text-4xl font-bold leading-[1.06] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:mx-0 lg:text-[4.55rem]">
                Um acompanhamento que evolui com os seus registros.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
                Acompanhe ciclo, rotina, sintomas e diferentes fases da vida. O HerCalida organiza o que você registra para mostrar contexto pessoal — sem transformar estimativas em certezas clínicas.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <PlayStoreLink location="hero" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-rose-500 px-7 text-sm font-bold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5 hover:bg-rose-600">
                  Baixar na Google Play
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </PlayStoreLink>
                <a href="#como-funciona" className="inline-flex min-h-13 items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-sm font-bold text-slate-800 transition hover:border-rose-200 hover:bg-rose-50">
                  Ver como funciona
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold text-slate-500 lg:justify-start">
                <span className="inline-flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-rose-400" /> Dados locais criptografados</span>
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-rose-400" /> Sem anúncios comportamentais</span>
                <span className="inline-flex items-center gap-2"><Bot className="h-4 w-4 text-rose-400" /> Calie opcional</span>
              </div>
            </div>

            <div className="relative mx-auto h-[500px] w-full max-w-[650px] sm:h-[610px] lg:h-[650px]">
              <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose-200/60 bg-gradient-to-br from-rose-100 via-white to-fuchsia-100 shadow-[0_40px_100px_rgba(244,63,94,0.15)]" />
              <div className="absolute left-[7%] top-[17%] z-10 w-[47%] -rotate-6 transition duration-500 hover:-translate-y-2 hover:-rotate-3 sm:left-[10%] sm:w-[43%]">
                <Image
                  src={celularCalendario}
                  alt="Tela de calendário do HerCalida"
                  sizes="(min-width: 640px) 280px, 47vw"
                  priority
                  className="h-auto w-full drop-shadow-2xl"
                />
              </div>
              <div className="absolute right-[4%] top-[4%] z-20 w-[50%] rotate-6 transition duration-500 hover:-translate-y-2 hover:rotate-3 sm:right-[8%] sm:w-[46%]">
                <Image
                  src={celularVisaoGeral}
                  alt="Tela de insights do HerCalida"
                  sizes="(min-width: 640px) 300px, 50vw"
                  priority
                  className="h-auto w-full drop-shadow-2xl"
                />
              </div>
              <div className="absolute bottom-[7%] left-[1%] z-30 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur sm:left-[4%]">
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.14em] text-rose-500">Aprendizado local</p>
                <p className="text-sm font-bold text-slate-900">Média + variabilidade + confiança</p>
              </div>
              <div className="absolute right-0 top-[16%] z-30 rounded-2xl border border-white/80 bg-slate-950 p-4 text-white shadow-xl sm:right-[1%]">
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.14em] text-rose-300">Privacidade</p>
                <p className="text-sm font-bold">Local por padrão</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Princípios do HerCalida" className="border-b border-slate-100 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-100 px-4 sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">
            {[
              [Database, "Local-first", "Registros no aparelho"],
              [CalendarDays, "Ciclo adaptativo", "Histórico real"],
              [BellRing, "Rotina assistida", "Lembretes configuráveis"],
              [ShieldCheck, "Controle", "Exportar e apagar"],
            ].map(([Icon, title, text]) => (
              <div key={title} className="flex items-center gap-3 px-3 py-6 sm:px-6">
                <Icon className="h-6 w-6 shrink-0 text-rose-400" strokeWidth={1.7} aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{title}</p>
                  <p className="text-xs text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="guias" className="border-b border-slate-100 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-rose-500">
                  Guias educativos
                </p>
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-5xl">
                  Comece pela dúvida que trouxe você até aqui.
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                  Respostas diretas, linguagem acolhedora, fontes institucionais e limites claros sobre quando procurar atendimento.
                </p>
              </div>
              <Link
                href="/guias"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-800 transition hover:border-rose-200 hover:bg-rose-50"
              >
                Ver todos os guias <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {featuredGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guias/${guide.slug}`}
                  onClick={() => trackEvent("guide_click", { guide_slug: guide.slug, location: "home" })}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/50 p-6 transition hover:-translate-y-1 hover:border-rose-200 hover:bg-white hover:shadow-xl hover:shadow-rose-100/50"
                >
                  <BookOpen className="mb-5 h-6 w-6 text-rose-500" strokeWidth={1.7} aria-hidden="true" />
                  <span className="text-xs font-black uppercase tracking-[0.13em] text-rose-500">
                    {guide.category}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-slate-950">
                    {guide.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{guide.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-fuchsia-700">
                    Ler guia <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="produto" className="bg-slate-50/70 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl md:mb-16">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-rose-500">O produto hoje</p>
              <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-5xl">
                Menos respostas prontas. Mais contexto construído com o tempo.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                Cada registro ajuda o HerCalida a organizar sua própria linha do tempo. Quando ainda faltam dados, o aplicativo deixa isso claro em vez de inventar uma conclusão.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-rose-500">Como funciona</p>
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-5xl">
                  O ciclo deixa de ser um número fixo e passa a refletir seu histórico.
                </h2>
                <p className="mt-5 leading-7 text-slate-600">
                  O HerCalida identifica inícios de menstruação registrados, mantém o histórico dos ciclos concluídos e calcula duração média e variabilidade no próprio aparelho.
                </p>
                <div className="mt-8 space-y-6">
                  {[
                    ["01", "Você registra", "Menstruação, sintomas e rotina entram na sua linha do tempo."],
                    ["02", "O histórico se forma", "Cada ciclo concluído melhora a base usada nas estimativas."],
                    ["03", "A confiança é exibida", "O app mostra a força dos dados e evita apresentar estimativa como confirmação."],
                  ].map(([number, title, text]) => (
                    <div key={number} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">{number}</span>
                      <div>
                        <h3 className="font-bold text-slate-950">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.5rem] border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-fuchsia-50 p-6 shadow-xl shadow-rose-100/50 sm:p-10">
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-rose-200/50 blur-3xl" />
                <div className="relative rounded-[2rem] border border-white bg-white/90 p-6 shadow-xl backdrop-blur sm:p-8">
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-rose-500">Seu histórico</p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-950">Aprendizado do ciclo</h3>
                    </div>
                    <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">Confiança em evolução</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      ["28 dias", "Média observada"],
                      ["3 dias", "Variabilidade"],
                      ["4 ciclos", "Histórico completo"],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <p className="text-xl font-black text-slate-950">{value}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 rounded-2xl bg-slate-950 p-5 text-white">
                    <div className="mb-3 flex items-center gap-2 text-sm font-bold"><TrendingUp className="h-4 w-4 text-rose-300" /> Leitura proporcional aos dados</div>
                    <p className="text-sm leading-6 text-slate-300">Estimativas ajudam a observar sua rotina, mas não confirmam ovulação, fertilidade, gravidez ou proteção contraceptiva.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-slate-950 py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-rose-300">Fases da vida</p>
                <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">O contexto muda. O acompanhamento também.</h2>
                <p className="mt-5 max-w-xl leading-7 text-slate-300">O app adapta a experiência à fase informada e evita aplicar regras do ciclo natural onde elas não fazem sentido.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [CalendarDays, "Ciclo menstrual", "Calendário, diário, histórico e aprendizado do ciclo."],
                  [HeartPulse, "Gestação", "Rotina, sintomas, consultas, exames e acompanhamento gestacional."],
                  [MoonStar, "Climatério e menopausa", "Registros voltados a sono, sintomas, humor e terapia hormonal."],
                  [CircleUserRound, "Contexto individual", "Método contraceptivo, fase de vida e condições informadas orientam a experiência."],
                ].map(([Icon, title, text]) => (
                  <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:bg-white/[0.09]">
                    <Icon className="mb-5 h-7 w-7 text-rose-300" strokeWidth={1.6} aria-hidden="true" />
                    <h3 className="mb-2 text-lg font-bold">{title}</h3>
                    <p className="text-sm leading-6 text-slate-300">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="calie" className="overflow-hidden bg-[#fffafa] py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-10 rounded-full bg-rose-200/60 blur-3xl" />
              <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-rose-200/50">
                <div className="flex items-center justify-between bg-slate-950 px-5 py-4 text-white">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-400"><Heart className="h-4 w-4 fill-white" /></span>
                    <div><p className="text-sm font-bold">Calie</p><p className="text-[11px] text-slate-400">HerCalida Assistente</p></div>
                  </div>
                  <MessageCircleHeart className="h-5 w-5 text-rose-300" />
                </div>
                <div className="space-y-4 bg-slate-50 p-5 sm:p-6">
                  <div className="max-w-[86%] rounded-2xl rounded-tl-sm border border-slate-100 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">
                    O que meus registros mostram sobre meu sono nesta semana?
                  </div>
                  <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-rose-500 p-4 text-sm leading-6 text-white shadow-sm">
                    Segundo suas anotações, você registrou menos horas de sono em três dos últimos cinco dias. Ainda não há dados suficientes para relacionar isso a uma causa — vale continuar observando e conversar com um profissional se o cansaço persistir.
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">
                    <ShieldCheck className="h-4 w-4 shrink-0" /> Resposta educativa, não diagnóstico.
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-rose-600">
                <Bot className="h-4 w-4" /> Calie no Dashboard e no chat
              </div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-5xl">A Calie ajuda a entender o que você registrou.</h2>
              <p className="mt-5 leading-7 text-slate-600">A IA recebe um contexto minimizado somente após autorização. Os conselhos do Dashboard podem usar IA nos três planos; a análise completa está no Premium e no Assistente; e a conversa no chat é exclusiva do Assistente ou de acesso equivalente por cortesia.</p>
              <p className="mt-4 leading-7 text-slate-600">As explicações usam registros recentes e observações calculadas no aparelho, mas podem conter erros. Após o consentimento, abrir o Dashboard pode solicitar conselhos à IA mesmo sem iniciar uma conversa.</p>
              <ul className="mt-8 space-y-4">
                {[
                  "Consentimento específico, separado e revogável",
                  "Nome do perfil não é enviado automaticamente",
                  "Disponível somente para pessoas com 18 anos ou mais",
                  "Não diagnostica, prescreve ou substitui atendimento profissional",
                ].map((text) => (
                  <li key={text} className="flex gap-3 text-sm font-medium leading-6 text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600"><Check className="h-3 w-3" strokeWidth={3} /></span>
                    {text}
                  </li>
                ))}
              </ul>
              <Link href="/politica-de-privacidade#ia" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-fuchsia-700 hover:underline">
                Entenda como a Calie trata dados <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="privacidade" className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 p-7 text-white shadow-2xl sm:p-10 md:p-14">
              <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"><LockKeyhole className="h-6 w-6 text-rose-300" /></div>
                  <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Privacidade por padrão. Escolhas claras quando há processamento remoto.</h2>
                  <p className="mt-5 max-w-2xl leading-7 text-slate-300">Os registros de saúde ficam criptografados no aparelho. Recursos locais continuam funcionando sem a Calie, e você pode exportar, restaurar ou apagar seus dados pelo próprio app.</p>
                  <Link href="/politica-de-privacidade" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:bg-rose-100">
                    Ler a Política de Privacidade <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    [LockKeyhole, "Criptografia AES-256", "Bases locais protegidas e chave no armazenamento seguro do sistema."],
                    [ShieldCheck, "App Check", "Proteção das chamadas remotas contra clientes não autorizados."],
                    [Download, "Portabilidade", "Exportação e restauração manual dos registros em JSON."],
                    [X, "Exclusão", "Notificações, consentimentos, registros e caches podem ser apagados."],
                  ].map(([Icon, title, text]) => (
                    <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.07] p-5">
                      <Icon className="mb-4 h-5 w-5 text-rose-300" />
                      <h3 className="mb-2 font-bold">{title}</h3>
                      <p className="text-xs leading-5 text-slate-300">{text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="border-y border-slate-100 bg-slate-50/70 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-rose-500">Três formas de usar</p>
              <h2 className="font-serif text-3xl font-bold text-slate-950 sm:text-4xl md:text-5xl">Escolha a profundidade que combina com você.</h2>
              <p className="mt-5 leading-7 text-slate-600">Comece gratuitamente e assine somente se quiser relatórios mais completos ou conversar com a Calie. Recursos de IA são opcionais e exigem idade de 18 anos ou mais e consentimento específico, separado e revogável.</p>
            </div>
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3 md:pt-4">
              {plans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-5 text-slate-500">A assinatura é cobrada pelo Google Play e renova sozinha até você cancelar. O cancelamento é feito na Central de Assinaturas da loja, a qualquer momento, e o acesso continua até o fim do período já pago. Os valores exibidos na loja prevalecem sobre esta página.</p>
          </div>
        </section>

        <section id="download" className="relative isolate overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_50%,rgba(251,113,133,0.22),transparent_25%),radial-gradient(circle_at_80%_50%,rgba(217,70,239,0.14),transparent_25%)]" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600"><Download className="h-6 w-6" /></div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-rose-500">Disponível para Android</p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-5xl">Seu cuidado pode começar agora.</h2>
            <p className="mx-auto mt-5 mb-8 max-w-2xl leading-7 text-slate-600">Baixe o HerCalida gratuitamente pela Google Play. Você pode registrar sua rotina, acompanhar o histórico e conhecer os recursos antes de decidir se quer assinar.</p>
            <PlayStoreLink location="download_section" className="inline-flex rounded-xl transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-rose-200">
              <Image
                src="/disponivel-google-play-badge.png"
                alt="Disponível no Google Play"
                width={246}
                height={73}
                className="h-auto w-[220px] sm:w-[246px]"
              />
            </PlayStoreLink>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-rose-500">Perguntas frequentes</p>
              <h2 className="font-serif text-3xl font-bold text-slate-950 sm:text-4xl">O essencial, sem letras miúdas.</h2>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqItems.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
                    {item.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-rose-400 transition group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="max-w-2xl pt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 pt-14 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 border-b border-slate-200 pb-12 md:grid-cols-[1.1fr_0.8fr_1fr]">
            <div>
              <Image src="/NovaLogo.png" alt="HerCalida" width={220} height={61} className="h-10 w-auto object-contain" />
              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">Acompanhamento de saúde feminina com contexto pessoal, privacidade por padrão e linguagem responsável.</p>
              <a href="https://www.instagram.com/hercalida_app?igsh=bzJmc3EzeTByaDJv" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-rose-500">Instagram <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-black uppercase tracking-[0.14em] text-slate-900">Navegação</h2>
              <ul className="space-y-3 text-sm text-slate-600">
                {navigation.map(([href, label]) => <li key={href}><a href={href} className="hover:text-rose-500">{label}</a></li>)}
                <li><Link href="/politica-de-privacidade" className="hover:text-rose-500">Política de Privacidade</Link></li>
                <li><Link href="/termos-de-uso" className="hover:text-rose-500">Termos de Uso</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-950">Baixe o HerCalida</h2>
              <p className="mb-5 text-sm leading-6 text-slate-600">Disponível agora para dispositivos Android.</p>
              <PlayStoreLink location="footer" className="inline-flex rounded-lg transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-rose-200">
                <Image
                  src="/disponivel-google-play-badge.png"
                  alt="Disponível no Google Play"
                  width={205}
                  height={61}
                  className="h-auto w-[190px]"
                />
              </PlayStoreLink>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 pt-7 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 HerCalida. Todos os direitos reservados.</p>
            <a href="mailto:suporte@hercalida.com" className="font-medium hover:text-rose-500">suporte@hercalida.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
