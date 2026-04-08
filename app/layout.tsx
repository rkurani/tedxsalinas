import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "TEDx Salinas",
    template: "%s | TEDx Salinas",
  },
  description:
    "Independently organized TED event bringing together game changers and global thinkers in Salinas, California.",
  metadataBase: new URL("https://tedxsalinas.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TEDx Salinas",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
