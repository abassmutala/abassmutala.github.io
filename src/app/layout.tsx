import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { mainNavConfig } from "./config/MainNav";
import "./globals.css";

// const fontHeading = localFont({
//   src: [
//     {
//       path: "../assets/fonts/InstrumentSans/InstrumentSans-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/InstrumentSans/InstrumentSans-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/InstrumentSans/InstrumentSans-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/InstrumentSans/InstrumentSans-SemiBold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//   ],
//   variable: "--font-heading",
// });

// const fontBody = localFont({
//   src: [
//     {
//       path: "../assets/fonts/Arcon/Arcon-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Arcon/Arcon-Rounded-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-body",
// });

const fontBody = localFont({
  src: [
    {
      path: "../assets/fonts/Onest/Onest-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Onest/Onest-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Onest/Onest-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Onest/Onest-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-body",
});

// const fontBody = localFont({
//   src: [
//     {
//       path: "../assets/fonts/Selawik/Selawik-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     // {
//     //   path: "../assets/fonts/Selawik/Selawik-Medium.woff2",
//     //   weight: "500",
//     //   style: "normal",
//     // },
//     {
//       path: "../assets/fonts/Selawik/Selawik-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Selawik/Selawik-SemiBold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//   ],
//   variable: "--font-body",
// });

// const fontHeading = localFont({
//   src: [
//     // {
//     //   path: "../assets/fonts/Lack/Lack-Line-Regular.woff2",
//     //   weight: "400",
//     //   style: "normal",
//     // },
//     {
//       path: "../assets/fonts/Lack/Lack-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-body",
// });

// const fontHeading = localFont({
//   src: [
//     {
//       path: "../assets/fonts/Simpel/Simpel-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//   ],
//   variable: "--font-body",
// });

export const metadata: Metadata = {
  title: "Abass Mutala | Software engineer",
  description: "Web and Mobile Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          // fontHeading.className,
          "flex flex-col min-h-screen bg-background text-foreground font-body antialiased",
          // fontHeading.variable,
          fontBody.variable
        )}
      >
        <Navbar items={mainNavConfig.mainNavItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
