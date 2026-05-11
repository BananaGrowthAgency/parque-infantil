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
  title: "Ludykid – El parque indoor favorito de los niños",
  description:
    "Más de 1.500 m² de diversión cubierta para niños de 1 a 12 años. Estructura multijuegos, trampolines, piscina de bolas y cumpleaños inolvidables.",
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
