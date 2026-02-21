import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunday Unplugged — Reclaim Your Sunday",
  description:
    "One day offline, done right. Sunday Unplugged automatically silences distracting apps every Sunday so you can rest, go outside, and be present. No accounts. No tracking.",
  metadataBase: new URL("https://sundayunplugged.app"),
  openGraph: {
    title: "Sunday Unplugged — Reclaim Your Sunday",
    description: "One day offline, done right.",
    url: "https://sundayunplugged.app",
    siteName: "Sunday Unplugged",
    images: [{ url: "/screens/ActiveSessionLight.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunday Unplugged — Reclaim Your Sunday",
    description: "One day offline, done right.",
    images: ["/screens/ActiveSessionLight.png"],
  },
  alternates: { canonical: "https://sundayunplugged.app" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
