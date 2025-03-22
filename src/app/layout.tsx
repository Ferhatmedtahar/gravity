import Footer from "@/src/components/common/footer/Footer";
import Navbar from "@/src/components/common/navbar/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satochi = localFont({
  src: "../../fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Gravity | Crypto Market",
  description:
    "A simple and modern Crypto Market to track your favorite cryptocurrencies.",
  keywords: "crypto, bitcoin, ethereum, crypto market, trading",
  openGraph: {
    title: "Gravity | Crypto Market",
    description: "Track your favorite cryptocurrencies in real time.",
    type: "website",
    // url: "https://",later
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gravity Crypto Market",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satochi.variable} text-white-50 min-h-screen antialiased  selection:bg-secondary selection:text-gray-700 `}
      >
        {/* sticky top-4 border-b border-b-white-50/50 pb-2 */}
        <header className=" relative container max-container padding-container mt-28 lg:mt-3  sm:mb-20 ">
          <Navbar />
        </header>

        {children}

        <Footer />
      </body>
    </html>
  );
}
