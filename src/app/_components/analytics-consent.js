"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import { GA_MEASUREMENT_ID } from "../../lib/analytics";

const STORAGE_KEY = "hercalida_analytics_consent";

function disableAnalytics() {
  if (typeof window === "undefined") return;

  window.hercalidaAnalyticsGranted = false;
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;

  for (const cookieName of ["_ga", `_ga_${GA_MEASUREMENT_ID.replace("G-", "")}`]) {
    document.cookie = `${cookieName}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=.hercalida.com; SameSite=Lax`;
  }
}

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState("loading");

  useEffect(() => {
    const savedChoice = window.localStorage.getItem(STORAGE_KEY);

    if (savedChoice === "accepted") {
      window.hercalidaAnalyticsGranted = true;
      window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
      queueMicrotask(() => setChoice("accepted"));
    } else if (savedChoice === "rejected") {
      disableAnalytics();
      queueMicrotask(() => setChoice("rejected"));
    } else {
      queueMicrotask(() => setChoice("unset"));
    }
  }, []);

  function acceptAnalytics() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    window.hercalidaAnalyticsGranted = true;
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
    setChoice("accepted");
  }

  function rejectAnalytics() {
    window.localStorage.setItem(STORAGE_KEY, "rejected");
    disableAnalytics();
    setChoice("rejected");
  }

  return (
    <>
      {choice === "accepted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="hercalida-ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
        </>
      ) : null}

      {choice === "unset" ? (
        <aside
          aria-label="Preferências de medição"
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/20 sm:inset-x-6 sm:p-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="font-bold text-slate-950">Você escolhe se quer ajudar na medição</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Com sua autorização, usamos Google Analytics para contar visitas, origens de
                campanha e cliques. Não enviamos ao Analytics os registros de saúde do aplicativo.
              </p>
              <a
                href="/politica-de-privacidade#site"
                className="mt-2 inline-flex text-xs font-bold text-rose-600 hover:underline"
              >
                Entender o tratamento de dados
              </a>
            </div>
            <div className="flex shrink-0 flex-col-reverse gap-2 sm:flex-row">
              <button
                type="button"
                onClick={rejectAnalytics}
                className="min-h-11 rounded-full border border-slate-200 px-5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Continuar sem medir
              </button>
              <button
                type="button"
                onClick={acceptAnalytics}
                className="min-h-11 rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-rose-500"
              >
                Autorizar medição
              </button>
            </div>
          </div>
        </aside>
      ) : null}

      {choice === "accepted" || choice === "rejected" ? (
        <button
          type="button"
          onClick={() => setChoice("unset")}
          className="fixed bottom-3 left-3 z-[90] rounded-full border border-slate-200 bg-white/95 px-3 py-2 text-[11px] font-bold text-slate-600 shadow-lg backdrop-blur transition hover:text-rose-600"
        >
          Privacidade
        </button>
      ) : null}
    </>
  );
}
