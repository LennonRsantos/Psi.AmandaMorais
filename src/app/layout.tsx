import type { Metadata } from "next";
import { Anton, Public_Sans, Caveat } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intensivo TCC | Amanda Morais",
  description:
    "Intensivo O Mapa das Técnicas Cognitivas e Comportamentais (TCC) com a Psicóloga e Supervisora Amanda Morais. Inscrições abertas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${publicSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-soft-alt text-text-dark">
        {children}
      </body>
    </html>
  );
}
