import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rhys Butler | Head of Development at Rapid",
  description: "Personal website of Rhys Butler, Head of Development at Rapid and ex-developer",
  openGraph: {
    title: "Rhys Butler | Head of Development at Rapid",
    description: "Personal website of Rhys Butler, Head of Development at Rapid and ex-developer",
    url: "https://rhysbutler.com",
    siteName: "Rhys Butler",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhys Butler | Head of Development at Rapid",
    description: "Personal website of Rhys Butler, Head of Development at Rapid and ex-developer",
    creator: "@mrrhysbutler",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
