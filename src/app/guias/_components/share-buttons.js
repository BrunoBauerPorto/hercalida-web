"use client";

import { MessageCircle, Share2 } from "lucide-react";

import { trackEvent } from "../../../lib/analytics";

export default function ShareButtons({ slug, title }) {
  const campaignUrl = `https://hercalida.com/guias/${slug}?utm_source=whatsapp&utm_medium=referral&utm_campaign=primeiros_100&utm_content=${slug}`;
  const message = `Encontrei este guia da HerCalida e achei que poderia ser útil: ${title}\n\n${campaignUrl}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(message)}`;

  async function shareNative() {
    trackEvent("share_guide", { method: "native", guide_slug: slug });

    if (navigator.share) {
      await navigator.share({ title, text: title, url: campaignUrl });
      return;
    }

    await navigator.clipboard.writeText(campaignUrl);
    window.alert("Link copiado.");
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          trackEvent("share_guide", { method: "whatsapp", guide_slug: slug })
        }
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 text-sm font-bold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-100"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Compartilhar no WhatsApp
      </a>
      <button
        type="button"
        onClick={shareNative}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-700 transition hover:border-rose-200 hover:bg-rose-50 focus:outline-none focus:ring-4 focus:ring-rose-100"
      >
        <Share2 className="h-4 w-4" aria-hidden="true" />
        Compartilhar
      </button>
    </div>
  );
}

