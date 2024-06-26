import "../globals.css";
import { leagueSpartan } from "@/fonts/fonts";
import { Footer } from "@/sections";

export const metadata = {
  title: "Dine Restaurant",
  description: "Dine Restaurant website and booking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} scroll-smooth`}>
      <body className="font-leagueSpartan">
        {children}
        <Footer />
      </body>
    </html>
  );
}
