import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AnalyticsConsent from "./_components/analytics-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hercalida.com"),
  title: {
    default: "HerCalida | Saúde feminina com contexto e privacidade",
    template: "%s | HerCalida",
  },
  description:
    "Acompanhe ciclo, rotina, sintomas e fases da vida com aprendizado local, lembretes e a Calie — sempre com escolhas claras sobre seus dados.",
  keywords: [
    "saúde feminina",
    "ciclo menstrual",
    "calendário menstrual",
    "gestação",
    "menopausa",
    "HerCalida",
    "Calie",
  ],
  applicationName: "HerCalida",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "HerCalida",
    title: "HerCalida | Saúde feminina com contexto e privacidade",
    description:
      "Um acompanhamento que evolui com seus registros, com dados locais por padrão.",
    images: [
      {
        url: "/HerCalida.png",
        width: 1200,
        height: 1500,
        alt: "HerCalida — saúde feminina com contexto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HerCalida | Saúde feminina com contexto e privacidade",
    description:
      "Acompanhe ciclo, rotina, sintomas e fases da vida com escolhas claras sobre seus dados.",
    images: ["/HerCalida.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  colorScheme: "light",
  themeColor: "#fff7f8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
