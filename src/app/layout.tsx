import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PERSONAL } from "@/data/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://arjunmehta.dev"),
  title: {
    default: `${PERSONAL.name} — ${PERSONAL.title}`,
    template: `%s | ${PERSONAL.name}`,
  },
  description: PERSONAL.seo.description,
  keywords: PERSONAL.seo.keywords,
  authors: [{ name: PERSONAL.name }],
  creator: PERSONAL.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arjunmehta.dev",
    siteName: PERSONAL.name,
    title: `${PERSONAL.name} — ${PERSONAL.title}`,
    description: PERSONAL.seo.description,
    images: [
      {
        url: PERSONAL.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${PERSONAL.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} — ${PERSONAL.title}`,
    description: PERSONAL.seo.description,
    creator: "@arjunmehta",
    images: [PERSONAL.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
