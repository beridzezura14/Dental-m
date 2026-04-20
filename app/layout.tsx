import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import GlobalLoader from "./components/GlobalLoader";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dental M | Dental Solutions",
  description: "პროფესიონალური სტომატოლოგიური მომსახურება",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">

      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <GlobalLoader />
        <Header />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}