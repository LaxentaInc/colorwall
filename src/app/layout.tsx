import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/app/contexts/ThemeContext";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.laxenta.tech'),
  title: {
    default: "ColorWall",
    template: "%s | ColorWall"
  },
  description: "Next-gen wallpaper engine for Windows with glassmorphism UI.",
  keywords: [
    "wallpaper engine",
    "live wallpapers",
    "4k wallpapers",
    "windows customization",
    "glassmorphism",
    "anime wallpapers",
    "desktop customization"
  ],
  authors: [{ name: "Laxenta", url: "https://github.com/shelleyloosespatience" }],
  creator: "@me_straight",
  publisher: "Laxenta Inc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.laxenta.tech',
    siteName: 'ColorWall',
    title: 'ColorWall',
    description: 'Next-gen wallpaper engine for Windows',
    images: [
      {
        url: '/LxColorWall.png',
        width: 1200,
        height: 630,
        alt: 'ColorWall',
        type: 'image/png',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.laxenta.tech',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            {/* Background elements for glass effect depth */}
            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none z-0" />

            <main className="relative z-10 flex-1 flex flex-col transition-all duration-300">
              {children}
            </main>
          </div>
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}