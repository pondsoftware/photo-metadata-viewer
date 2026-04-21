import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cameraBrands, getBrandBySlug } from "@/data/cameras";

interface PageProps {
  params: Promise<{ brand: string }>;
}

export async function generateStaticParams() {
  return cameraBrands.map((brand) => ({
    brand: brand.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  const title = `${brand.name} EXIF Data Guide — Camera Metadata & MakerNote Fields`;
  const description = `Complete guide to ${brand.name} camera EXIF data. Learn about ${brand.name}-specific MakerNote fields, popular models, raw format (${brand.rawFormat}), and tips for reading metadata from ${brand.name} photos.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/cameras/${brand.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://photometadata.net/cameras/${brand.slug}`,
    },
  };
}

export default async function CameraBrandPage({ params }: PageProps) {
  const { brand: slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="text-teal-600 hover:underline">
          Home
        </a>
        <span className="mx-2">/</span>
        <a href="/cameras" className="text-teal-600 hover:underline">
          Cameras
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{brand.name}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {brand.name} EXIF Data Guide
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Everything you need to know about EXIF metadata from {brand.name} cameras
        — including brand-specific MakerNote fields, popular models, and privacy
        considerations.
      </p>

      <div className="space-y-10">
        {/* Brand Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            About {brand.name}
          </h2>
          <p className="text-gray-600 mb-4">{brand.overview}</p>
          <p className="text-gray-600">{brand.marketPosition}</p>
          <div className="mt-4 inline-block bg-gray-100 rounded-lg px-4 py-2 text-sm">
            <span className="font-medium text-gray-700">Raw Format:</span>{" "}
            <span className="text-gray-600">{brand.rawFormat}</span>
          </div>
        </section>

        {/* Common EXIF Fields */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Common EXIF Fields in {brand.name} Photos
          </h2>
          <p className="text-gray-600 mb-4">
            These are the standard EXIF fields you will find in photos taken with {brand.name} cameras:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Field</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Description</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Example Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {brand.commonExifFields.map((field, i) => (
                  <tr key={field.field} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-2 font-mono text-gray-800">{field.field}</td>
                    <td className="px-4 py-2 text-gray-600">{field.description}</td>
                    <td className="px-4 py-2 text-gray-600">{field.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Brand-Specific MakerNote Fields */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            {brand.name}-Specific MakerNote Fields
          </h2>
          <p className="text-gray-600 mb-4">
            Beyond standard EXIF data, {brand.name} cameras embed proprietary metadata in the
            MakerNote section. These fields are unique to {brand.name} and contain additional
            technical details about how the photo was captured:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Field</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Description</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Example Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {brand.makerNoteFields.map((field, i) => (
                  <tr key={field.field} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-2 font-mono text-gray-800">{field.field}</td>
                    <td className="px-4 py-2 text-gray-600">{field.description}</td>
                    <td className="px-4 py-2 text-gray-600">{field.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Popular Models */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Popular {brand.name} Camera Models
          </h2>
          <p className="text-gray-600 mb-4">
            These are the most common {brand.name} cameras you will encounter when viewing EXIF data:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Model</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Megapixels</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {brand.popularModels.map((model, i) => (
                  <tr key={model.name} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-2 font-medium text-gray-800">{model.name}</td>
                    <td className="px-4 py-2 text-gray-600">{model.type}</td>
                    <td className="px-4 py-2 text-gray-600">
                      {model.megapixels > 0 ? `${model.megapixels} MP` : "N/A (Film)"}
                    </td>
                    <td className="px-4 py-2 text-gray-600">{model.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Tips for Reading {brand.name} EXIF Data
          </h2>
          <ul className="space-y-3 text-gray-600">
            {brand.exifTips.map((tip, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-teal-600 font-bold shrink-0">{i + 1}.</span>
                <div>{tip}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
          <p className="text-gray-900 font-medium mb-1">
            Have a photo from a {brand.name} camera?
          </p>
          <p className="text-gray-600 text-sm mb-3">
            Upload it to see all EXIF data including {brand.name}-specific MakerNote fields — 100% free and private.
          </p>
          <a
            href="/"
            className="inline-block bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            Try the Photo Metadata Viewer
          </a>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {brand.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/cameras"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">All Camera Brands</p>
              <p className="text-sm text-gray-600 mt-1">
                Browse EXIF guides for all camera manufacturers.
              </p>
            </a>
            <a
              href="/what-is-exif"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">What Is EXIF Data?</p>
              <p className="text-sm text-gray-600 mt-1">
                Complete guide to photo metadata — what it is and how it works.
              </p>
            </a>
            <a
              href="/privacy-guide"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">Photo Privacy Guide</p>
              <p className="text-sm text-gray-600 mt-1">
                What personal information your photos reveal and how to protect yourself.
              </p>
            </a>
            <a
              href="/camera-settings"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">Camera Settings in EXIF</p>
              <p className="text-sm text-gray-600 mt-1">
                Understand aperture, ISO, shutter speed, and other camera settings in metadata.
              </p>
            </a>
          </div>
        </section>
      </div>

      {/* Structured Data: BreadcrumbList */}
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
              {
                "@type": "ListItem",
                position: 3,
                name: brand.name,
                item: `https://photometadata.net/cameras/${brand.slug}`,
              },
            ],
          }),
        }}
      />
      {/* Structured Data: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: brand.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
