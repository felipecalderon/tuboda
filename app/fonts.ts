import localFont from "next/font/local";

export const brandFont = localFont({
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

export const bigMaker = localFont({
  src: "./fonts/TheBigmaker.woff2",
  variable: "--font-bigmaker",
  display: "swap",
});
