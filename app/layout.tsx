import type { Metadata } from "next";
import {  Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import StructuredData from "./_components/structured-data";

const montserrat = Montserrat({
  variable: "--font-montserrat",  
  subsets: ["latin"],
  weight:["400","500","600","700"],
});

const montserratMono = Montserrat({
  variable: "--font-montserrat-mono",
  subsets: ["latin"],
  weight:["400","500","600","700"],
});

export const metadata: Metadata = {
  title: "São Geraldo - Tradição e Qualidade em Produtos",
  description: "Descubra a tradição do São Geraldo em produtos alimentícios de qualidade. Conheça nossa história, lojas, aplicativo e faça parte do nosso clube de vantagens.",
  keywords: ["São Geraldo", "produtos alimentícios", "tradição", "qualidade", "supermercado", "aplicativo", "clube de vantagens"],
  authors: [{ name: "São Geraldo" }],
  creator: "São Geraldo",
  publisher: "São Geraldo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://saogeraldo.com.br',
    siteName: 'São Geraldo',
    title: 'São Geraldo - Tradição e Qualidade em Produtos Alimentícios',
    description: 'Descubra a tradição do São Geraldo em produtos alimentícios de qualidade. Conheça nossa história, lojas, aplicativo e faça parte do nosso clube de vantagens.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'São Geraldo Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'São Geraldo - Tradição e Qualidade em Produtos Alimentícios',
    description: 'Descubra a tradição do São Geraldo em produtos alimentícios de qualidade.',
    images: ['/logo.png'],
  },
  verification: {
    google: 'seu-codigo-de-verificacao-google',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${montserrat.variable} ${montserratMono.variable} bg-white antialiased w-screen h-[100vh]`}
      >
        {children}
      </body>
    </html>
  );
}
