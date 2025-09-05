import type { Metadata } from "next";
import { Jaldi, Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/server/Header";
import Footer from "./components/server/Footer";

const jaldi = Jaldi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jaldi"
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito"
});

export const metadata: Metadata = {
  title: "Pokédx - Explore the World of Pokémon",
  description: "Discover, search and explore the amazing world of Pokémon. Find your favourite and learn about their stats.",
  keywords: ["pokemon", "pokedex", "nintendo", "game"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jaldi.variable} ${nunito.variable} font-jaldi antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}