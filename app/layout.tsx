import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalLoader from "./components/GlobalLoader";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Dental M | პროფესიონალური სტომატოლოგიური კლინიკა",
    template: "%s | Dental M"
  },
  description: "Dental M გთავაზობთ უმაღლესი ხარისხის სტომატოლოგიურ მომსახურებას: იმპლანტოლოგია, ესთეტიკური რესტავრაცია და ციფრული დიაგნოსტიკა თბილისში.",
  keywords: ["სტომატოლოგიური კლინიკა", "კბილის ექიმი", "სტომატოლოგი თბილისი", "იმპლანტაცია", "Dental M", "კბილების გათეთრება"],
  authors: [{ name: "Dental M Team" }],
  
  // ტაბის აიქონები
  icons: {
    icon: "/button.png", // დარწმუნდი რომ public ფოლდერში გაქვს ეს ფაილი
  },

  // სოციალური ქსელებისთვის (Facebook, Instagram და ა.შ.)
  openGraph: {
    title: "Dental M | Dental Solutions",
    description: "პროფესიონალური სტომატოლოგიური მომსახურება თბილისში. ჩაეწერეთ ვიზიტზე!",
    url: "https://dentalm.ge", // შეცვალე შენი რეალური დომენით
    siteName: "Dental M",
    locale: "ka_GE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className="scroll-smooth">
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