import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Ludykid – Le parc indoor préféré des enfants",
  description:
    "Plus de 1 500 m² de fun couvert pour les enfants de 1 à 12 ans. Structure multi-jeux, trampolines, piscine à balles et anniversaires inoubliables.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${fredoka.variable} ${nunito.variable} font-nunito bg-white`}>
        {children}
      </body>
    </html>
  );
}
