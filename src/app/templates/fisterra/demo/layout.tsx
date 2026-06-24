import { Cinzel, Playfair_Display, Montserrat } from "next/font/google";

const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["400", "600", "700"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata = {
  title: "Fisterra | Restaurante Estrella Michelin en Edimburgo",
  description:
    "Plantilla de demostración: restaurante con estrella Michelin de alta cocina gallega en Edimburgo.",
};

export default function FisterraDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cinzel.variable} ${playfair.variable} ${montserrat.variable}`}>
      {children}
    </div>
  );
}
