import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
      <body className={`${inter.className}min-h-screen antialiased px-8 py-8`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
