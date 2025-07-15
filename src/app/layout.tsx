import type { Metadata } from "next";
import Header from "./components/HeaderDesktop/Header";
import Footer from "./components/FooterDesktop/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AG Custom",
  description: "Portfolio AG Custom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body 
        style={{ backgroundColor: '#181A1C', color: '#fff' }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
