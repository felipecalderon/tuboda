import type { Metadata } from "next";
import "./globals.css";
import { brandFont } from "./fonts";
import Script from "next/script";

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
      <body className={`${brandFont.className} antialiased`}>
        {children}
        <Script
          id="intersection-fallback"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            console.log("ok renderizado :)");
              if (!CSS.supports("animation-timeline","view()")) {
                var o = new IntersectionObserver(function(e){
                  e.forEach(function(entry){
                    if(entry.isIntersecting){
                      entry.target.classList.add("is-visible");
                      o.unobserve(entry.target);
                    }
                  });
                }, { threshold: 0.1 });
                document
                  .querySelectorAll("main > *")
                  .forEach(function(el){ o.observe(el); });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
