import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://photometadata.net"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  title: "Photo Metadata Viewer — View & Remove EXIF Data Online",
  description:
    "View all hidden metadata in your photos: GPS location, camera model, timestamps, and more. Strip EXIF data for privacy. 100% browser-based — files never leave your device.",
  openGraph: {
    title: "Photo Metadata Viewer",
    description:
      "View all hidden metadata in your photos: GPS location, camera model, timestamps, and more. Strip EXIF data for privacy. 100% browser-based — files never leave your device.",
    type: "website",
    url: "https://photometadata.net",
    siteName: "Photo Metadata Viewer",
  },
  twitter: {
    card: "summary",
    title: "Photo Metadata Viewer",
    description:
      "View all hidden metadata in your photos: GPS location, camera model, timestamps, and more. Strip EXIF data for privacy. 100% browser-based — files never leave your device.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C0JK4D3S62"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C0JK4D3S62');
        `}
      </Script>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <header className="bg-teal-600 text-white shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <a href="/" className="flex items-center gap-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xl font-bold">Photo Metadata Viewer</span>
            </a>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-800 text-center mb-3">More Photo Tools</p>
              <div className="flex justify-center gap-4">
                <a href="https://imageconverters.net" className="flex-1 max-w-xs bg-teal-50 border border-teal-200 rounded-lg px-4 py-3 text-center hover:border-teal-400 hover:bg-teal-100 transition">
                  <p className="font-semibold text-teal-700 text-sm">Image Format Converter</p>
                  <p className="text-xs text-teal-600 mt-0.5">Convert HEIC, WEBP, AVIF &amp; more</p>
                </a>
                <a href="https://imageresizers.net" className="flex-1 max-w-xs bg-teal-50 border border-teal-200 rounded-lg px-4 py-3 text-center hover:border-teal-400 hover:bg-teal-100 transition">
                  <p className="font-semibold text-teal-700 text-sm">Social Image Resizer</p>
                  <p className="text-xs text-teal-600 mt-0.5">Resize for Instagram, TikTok &amp; more</p>
                </a>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 text-center mb-2">More Free Tools</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
                <a href="https://appliancecostcalculator.net" className="text-teal-600 hover:underline">Appliance Cost Calculator</a>
                <a href="https://sidehustletaxcalculator.net" className="text-teal-600 hover:underline">Side Hustle Tax Calculator</a>
                <a href="https://freelancerates.net" className="text-teal-600 hover:underline">Freelance Rate Calculator</a>
                <a href="https://lendingcalculator.net" className="text-teal-600 hover:underline">Mortgage Calculator</a>
                <a href="https://compoundinterestcalc.app" className="text-teal-600 hover:underline">Compound Interest Calculator</a>
                <a href="https://salaryconverter.net" className="text-teal-600 hover:underline">Salary Converter</a>
                <a href="https://printablepolly.com" className="text-teal-600 hover:underline">Printable Polly</a>
                <a href="https://biblegarden.net" className="text-teal-600 hover:underline">Bible Garden</a>
              </div>
            </div>
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
