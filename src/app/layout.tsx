import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photo Metadata Viewer — View & Remove EXIF Data Online",
  description:
    "View all hidden metadata in your photos: GPS location, camera model, timestamps, and more. Strip EXIF data for privacy. 100% browser-based — files never leave your device.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K7FMZ8XELQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K7FMZ8XELQ');
        `}
      </Script>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <p className="text-xl font-bold text-gray-900">
              Photo Metadata Viewer
            </p>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 text-center">
              All processing happens in your browser. Your photos are never
              uploaded to any server. We cannot see, access, or store your
              images or their metadata.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
