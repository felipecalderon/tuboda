import type { Metadata } from "next";
import "./globals.css";
import { brandFont } from "./fonts";

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
