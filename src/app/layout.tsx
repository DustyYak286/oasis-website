import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oasis-edu.org"),
  title: "Oasis - Bringing Quality Education Anywhere",
  description:
    "A sustainable, offline-first educational platform for schools without internet connectivity or stable electricity. Join us in bridging the global education gap.",
  keywords: [
    "education",
    "offline learning",
    "sustainable technology",
    "Raspberry Pi",
    "educational platform",
    "EdTech",
    "rural education",
    "UNESCO",
  ],
  authors: [{ name: "Oasis Team" }],
  openGraph: {
    title: "Oasis - Bringing Quality Education Anywhere",
    description:
      "Sustainable offline education for underserved schools worldwide.",
    url: "https://oasis-edu.org",
    siteName: "Oasis",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oasis Educational Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oasis - Bringing Quality Education Anywhere",
    description:
      "Sustainable offline education for underserved schools worldwide.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
