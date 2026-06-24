import { Inter, Oswald } from "next/font/google";
import "./iron.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });

export const metadata = {
  title: "Iron | Premium Gym Template",
  description: "A premium, dynamic gym and fitness website template.",
};

export default function IronLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${oswald.variable} iron-scope`}>
      {children}
    </div>
  );
}
