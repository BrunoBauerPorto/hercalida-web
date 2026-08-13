export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-156NYBBMEQ";

export function trackEvent(name, parameters = {}) {
  if (typeof window === "undefined") return;
  if (!window.hercalidaAnalyticsGranted || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, parameters);
}

