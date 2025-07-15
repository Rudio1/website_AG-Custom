import type { Metadata } from "next";
import { Work_Sans, Open_Sans } from "next/font/google";
import Header from "./components/HeaderDesktop/Header";
import Footer from "./components/FooterDesktop/Footer";

const workSans = Work_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-work-sans',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['300', '400'],
  variable: '--font-open-sans',
});

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
        className={`${workSans.variable} ${openSans.variable}`}
        style={{ backgroundColor: '#181A1C', color: '#fff' }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
