const lastModified = new Date("2026-08-22T12:00:00-03:00");

export default function sitemap() {
  return [
    {
      url: "https://hercalida.com",
      lastModified: new Date("2026-08-30T12:00:00-03:00"),
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
      lastModified: new Date("2026-08-30T12:00:00-03:00"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://hercalida.com/termos-de-uso",
      lastModified: new Date("2026-08-30T12:00:00-03:00"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
