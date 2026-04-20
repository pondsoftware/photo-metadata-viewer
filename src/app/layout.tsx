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
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 text-center mb-2">More Free Tools</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
                <a href="https://appliancecostcalculator.net" className="text-blue-600 hover:underline">Appliance Cost Calculator</a>
                <a href="https://sidehustletaxcalculator.net" className="text-blue-600 hover:underline">Side Hustle Tax Calculator</a>
                <a href="https://imageconverters.net" className="text-blue-600 hover:underline">Image Converter</a>
                <a href="https://freelancerates.net" className="text-blue-600 hover:underline">Freelance Rate Calculator</a>
                <a href="https://imageresizers.net" className="text-blue-600 hover:underline">Social Image Resizer</a>
                <a href="https://lendingcalculator.net" className="text-blue-600 hover:underline">Mortgage Calculator</a>
                <a href="https://compoundinterestcalc.app" className="text-blue-600 hover:underline">Compound Interest Calculator</a>
                <a href="https://salaryconverter.net" className="text-blue-600 hover:underline">Salary Converter</a>
                <a href="https://printablepolly.com" className="text-blue-600 hover:underline">Printable Polly</a>
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
