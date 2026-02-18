import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const brandFont = localFont({
  src: [
    {
      path: "./fonts/TheSeasonsRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TheSeasonsItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/TheSeasonsBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/TheSeasonsBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Tu Boda Chile",
  description:
    "Somos la vitrina ideal para que los novios de todo Chile encuentren y contraten a los mejores profesionales y servicios para su boda, desde locaciones y decoración hasta fotografía, vestidos, banquetería y mucho más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${brandFont.className} antialiased`}>{children}</body>
    </html>
  );
}
