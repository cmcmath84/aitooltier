import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AIToolTier — Honest AI Tool Reviews & Comparisons",
    template: "%s | AIToolTier",
  },
  description:
    "Data-backed AI tool reviews with real scores, pricing breakdowns, known issues, and honest comparisons. Find the best AI tool for any task.",
  openGraph: {
    siteName: "AIToolTier",
    type: "website",
    url: "https://aitooltier.com",
  },
  metadataBase: new URL("https://aitooltier.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
