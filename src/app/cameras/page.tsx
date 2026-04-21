import type { Metadata } from "next";
import { cameraBrands } from "@/data/cameras";

export const metadata: Metadata = {
  title: "Camera Brand EXIF Data Guide — Photo Metadata by Manufacturer",
  description:
    "Explore how different camera brands store EXIF metadata. Guides for Canon, Nikon, Sony, Fujifilm, Apple iPhone, DJI drones, and more — including brand-specific MakerNote fields and popular models.",
  alternates: {
    canonical: "/cameras",
  },
  openGraph: {
    title: "Camera Brand EXIF Data Guide — Photo Metadata by Manufacturer",
    description:
      "Explore how different camera brands store EXIF metadata. Guides for Canon, Nikon, Sony, Fujifilm, Apple iPhone, DJI drones, and more.",
    type: "website",
    url: "https://photometadata.net/cameras",
  },
};

export default function CamerasPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="text-teal-600 hover:underline">
          Home
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Cameras</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Camera Brand EXIF Data Guide
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Every camera manufacturer stores EXIF metadata differently. Explore our
        guides to understand the specific metadata fields, MakerNote data, and
        privacy considerations for each brand.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {cameraBrands.map((brand) => (
          <a
            key={brand.slug}
            href={`/cameras/${brand.slug}`}
            className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-teal-400 hover:shadow-sm transition"
          >
            <h2 className="font-semibold text-gray-900 mb-1">{brand.name}</h2>
            <p className="text-sm text-gray-600 line-clamp-2">
              {brand.marketPosition.slice(0, 120)}
              {brand.marketPosition.length > 120 ? "..." : ""}
            </p>
            <p className="text-xs text-teal-600 mt-2 font-medium">
              {brand.popularModels.length} models &middot; {brand.makerNoteFields.length} brand-specific fields
            </p>
          </a>
        ))}
      </div>

      <section className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center mb-10">
        <p className="text-gray-900 font-medium mb-1">
          Want to see the EXIF data in your photos?
        </p>
        <p className="text-gray-600 text-sm mb-3">
          Upload any photo from any camera to view all hidden metadata — 100% free and private.
        </p>
        <a
          href="/"
          className="inline-block bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
        >
          Try the Photo Metadata Viewer
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Understanding Camera-Specific EXIF Data
        </h2>
        <div className="space-y-4 text-gray-600">
          <p>
            While all cameras record standard EXIF fields like aperture, shutter speed,
            and ISO, each manufacturer also embeds proprietary data in a section called
            <strong> MakerNote</strong>. This section contains brand-specific information
            that only that manufacturer&apos;s cameras record.
          </p>
          <p>
            For example, Nikon cameras record the total shutter count, Canon cameras embed
            the owner&apos;s name, and DJI drones log gimbal angles and flight speed. Understanding
            these brand-specific fields helps you get more information from your photos and
            be aware of what data you&apos;re sharing.
          </p>
          <p>
            Our guides above cover the most popular camera brands, including dedicated
            cameras from Canon, Nikon, Sony, and Fujifilm, as well as smartphone cameras
            from Apple, Google, Samsung, and Huawei, and specialty devices from DJI and GoPro.
          </p>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://photometadata.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Cameras",
                item: "https://photometadata.net/cameras",
              },
            ],
          }),
        }}
      />
    </div>
  );
}
