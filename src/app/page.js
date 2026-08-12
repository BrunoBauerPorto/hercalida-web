"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
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

import { db } from "../lib/firebase";

const navigation = [
  ["#produto", "O produto"],
  ["#como-funciona", "Como funciona"],
  ["#calie", "Calie"],
  ["#planos", "Planos"],
  ["#privacidade", "Privacidade"],
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
    icon: BellRing,
    title: "Lembretes de contraceptivos",
    description:
      "Horários, pausas e próximos lembretes são organizados no aparelho para acompanhar a rotina configurada.",
    accent: "bg-amber-50 text-amber-700",
  },
  {
    icon: Activity,
    title: "Rotina e sintomas",
    description:
      "Registre dor, sono, emoções, hidratação, alimentação, exercícios e outros sinais do seu dia.",
    accent: "bg-rose-50 text-rose-700",
  },
  {
    icon: TrendingUp,
    title: "Insights com evidência",
    description:
      "Veja tendências apoiadas nos seus próprios registros, com linguagem proporcional à quantidade de dados disponível.",
    accent: "bg-sky-50 text-sky-700",
  },
  {
    icon: FileText,
    title: "Relatórios para consultas",
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
    eyebrow: "Para começar",
    description: "A base para registrar sua rotina e acompanhar o ciclo com privacidade.",
    features: [
      "Calendário e diário menstrual",
      "Registros de rotina e sintomas",
      "Aprendizado local do ciclo",
      "Lembretes de contraceptivos",
      "Conteúdo educativo",
    ],
    featured: false,
  },
  {
    name: "Premium",
    eyebrow: "Mais profundidade",
    description: "Ferramentas avançadas para organizar e visualizar sua jornada de saúde.",
    features: [
      "Tudo do plano Gratuito",
      "Insights e análises avançadas",
      "Relatórios e dossiês em PDF",
      "Recursos ampliados por fase de vida",
      "Mais formas de acompanhar tendências",
    ],
    featured: true,
  },
  {
    name: "HerCalida Assistente",
    eyebrow: "Com a Calie",
    description: "Uma camada de linguagem para conversar sobre o contexto dos seus registros.",
    features: [
      "Tudo do plano Premium",
      "Chat contextual com a Calie",
      "Observações personalizadas do dia",
      "Resumos apoiados nos seus registros",
      "Consentimento separado e revogável",
    ],
    featured: false,
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
      "Por padrão, seus registros de saúde ficam criptografados no aparelho. Somente ao autorizar a Calie, o contexto descrito na Política de Privacidade é processado remotamente para gerar a resposta solicitada.",
  },
  {
    question: "A Calie é obrigatória?",
    answer:
      "Não. A Calie é opcional, destinada a maiores de 18 anos e depende de consentimento específico. Você pode revogar a autorização sem perder os recursos locais compatíveis com seu plano.",
  },
  {
    question: "Quando o aplicativo estará disponível?",
    answer:
      "O HerCalida está em preparação para um beta fechado distribuído pela Google Play. Cadastre seu e-mail para receber informações sobre as próximas vagas de teste.",
  },
];

function BetaForm({ compact = false }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) return;

    setStatus("loading");
    try {
      await addDoc(collection(db, "lista_espera"), {
        email: normalizedEmail,
        dataCadastro: serverTimestamp(),
        origem: "landing_page_beta_fechado",
        finalidade: "convite_beta_e_novidades_do_produto",
        versaoPoliticaPrivacidade: "2026-08-12",
      });
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Não foi possível registrar o e-mail:", error);
      setStatus("error");
    }
  }

  const buttonLabel = {
    idle: "Quero participar do beta",
    loading: "Enviando...",
    success: "Cadastro realizado",
    error: "Tentar novamente",
  }[status];

  return (
    <div className={compact ? "w-full" : "mx-auto w-full max-w-2xl"}>
      <form
        onSubmit={handleSubmit}
        className={`flex gap-3 ${compact ? "flex-col sm:flex-row" : "flex-col sm:flex-row"}`}
      >
        <label htmlFor={compact ? "beta-email-footer" : "beta-email-main"} className="sr-only">
          Seu e-mail
        </label>
        <input
          id={compact ? "beta-email-footer" : "beta-email-main"}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="voce@exemplo.com"
          disabled={status === "loading" || status === "success"}
          className="min-h-12 flex-1 rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-400 focus:ring-4 focus:ring-rose-100 disabled:bg-slate-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white transition hover:bg-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-200 disabled:cursor-not-allowed disabled:bg-emerald-600"
        >
          {status === "success" ? <Check className="h-4 w-4" /> : null}
          {buttonLabel}
        </button>
      </form>
      <div aria-live="polite" className="mt-3 min-h-5 text-xs leading-relaxed text-slate-500">
        {status === "success" ? (
          <span className="font-medium text-emerald-700">
            Pronto. Avisaremos quando houver novidades sobre o beta.
          </span>
        ) : status === "error" ? (
          <span className="font-medium text-red-600">
            Não foi possível concluir agora. Confira a conexão e tente novamente.
          </span>
        ) : (
          <span>
            Usaremos seu e-mail somente para convites do beta e novidades do HerCalida. Leia a{" "}
            <Link href="/politica-de-privacidade" className="font-semibold underline underline-offset-2">
              Política de Privacidade
            </Link>
            .
          </span>
        )}
      </div>
    </div>
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
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-rose-400 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white">
          Mais possibilidades
        </span>
      ) : null}
      <p className={`mb-3 text-xs font-black uppercase tracking-[0.18em] ${plan.featured ? "text-rose-300" : "text-rose-500"}`}>
        {plan.eyebrow}
      </p>
      <h3 className="mb-3 font-serif text-2xl font-bold">{plan.name}</h3>
      <p className={`mb-7 min-h-16 text-sm leading-6 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>
        {plan.description}
      </p>
      <p className={`mb-5 border-y py-4 text-sm font-bold ${plan.featured ? "border-white/10 text-white" : "border-slate-100 text-slate-900"}`}>
        Valores e condições serão informados no lançamento.
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
      <a
        href="#beta"
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-bold transition ${
          plan.featured
            ? "bg-white text-slate-950 hover:bg-rose-100"
            : "border border-slate-200 bg-slate-50 text-slate-900 hover:border-rose-300 hover:bg-rose-50"
        }`}
      >
        Acompanhar o beta
      </a>
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
        <span className="inline-flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-rose-500" aria-hidden="true" />
          Em preparação para beta fechado no Android pela Google Play
        </span>
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
            <a
              href="#beta"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white transition hover:bg-rose-500 sm:inline-flex"
            >
              Participar do beta
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
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
              <a href="#beta" onClick={closeMenu} className="mt-3 rounded-full bg-slate-950 px-5 py-3.5 text-center font-bold text-white">
                Participar do beta
              </a>
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
                <a href="#beta" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-rose-500 px-7 text-sm font-bold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5 hover:bg-rose-600">
                  Quero participar do beta
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
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
                <Image src="/celular-calendario.png" alt="Tela de calendário do HerCalida" width={539} height={1092} priority className="h-auto w-full drop-shadow-2xl" />
              </div>
              <div className="absolute right-[4%] top-[4%] z-20 w-[50%] rotate-6 transition duration-500 hover:-translate-y-2 hover:rotate-3 sm:right-[8%] sm:w-[46%]">
                <Image src="/celular-visao-geral.png" alt="Tela de insights do HerCalida" width={539} height={1092} priority className="h-auto w-full drop-shadow-2xl" />
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
                <Bot className="h-4 w-4" /> HerCalida Assistente
              </div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-5xl">A Calie conversa sobre o que você realmente registrou.</h2>
              <p className="mt-5 leading-7 text-slate-600">A IA recebe um contexto minimizado somente após autorização. Ela usa fatos recentes e observações produzidas pelo motor do HerCalida para oferecer uma conversa mais pessoal, sem inventar padrões novos.</p>
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
              <p className="mt-5 leading-7 text-slate-600">A assinatura de um plano nunca será tratada como autorização automática para enviar dados à IA.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 md:pt-4">
              {plans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-5 text-slate-500">Durante o beta fechado, recursos poderão ser disponibilizados temporariamente para avaliação. A composição final, os preços e as condições serão informados antes de qualquer cobrança.</p>
          </div>
        </section>

        <section id="beta" className="relative isolate overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_50%,rgba(251,113,133,0.22),transparent_25%),radial-gradient(circle_at_80%_50%,rgba(217,70,239,0.14),transparent_25%)]" />
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600"><Sparkles className="h-6 w-6" /></div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-rose-500">Beta fechado</p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-5xl">Ajude a construir a próxima fase do HerCalida.</h2>
            <p className="mx-auto mt-5 mb-8 max-w-2xl leading-7 text-slate-600">Cadastre seu e-mail para receber informações sobre vagas, instalação pela Google Play e novidades relevantes do produto.</p>
            <BetaForm />
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
          <div className="grid gap-10 border-b border-slate-200 pb-12 md:grid-cols-[1fr_0.8fr_1.2fr]">
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
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-lg font-bold text-slate-950">Receba novidades do beta</h2>
              <p className="mb-5 text-sm leading-6 text-slate-600">Um canal direto para convites e atualizações importantes.</p>
              <BetaForm compact />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 pt-7 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 HerCalida. Todos os direitos reservados.</p>
            <a href="mailto:hersyncapp@gmail.com" className="font-medium hover:text-rose-500">hersyncapp@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
