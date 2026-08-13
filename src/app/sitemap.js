const lastModified = new Date("2026-08-13T12:00:00-03:00");

export default function sitemap() {
  return [
    {
      url: "https://hercalida.com",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://hercalida.com/guias",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://hercalida.com/guias/ciclo-menstrual",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://hercalida.com/guias/inicio-da-gravidez",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://hercalida.com/guias/primeiros-sinais-menopausa",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://hercalida.com/politica-de-privacidade",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}

