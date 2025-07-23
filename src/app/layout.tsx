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
      <head>
        {/* Meta tag para melhorar a estabilidade do HMR */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body 
        style={{ backgroundColor: '#181A1C', color: '#fff' }}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
