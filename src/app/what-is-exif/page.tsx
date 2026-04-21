import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is EXIF Data? — Complete Guide to Photo Metadata",
  description:
    "Learn what EXIF data is, what information is stored in your photos, how it gets embedded, and which file formats support it. Includes a reference table of common EXIF fields.",
  alternates: {
    canonical: "/what-is-exif",
  },
  openGraph: {
    title: "What Is EXIF Data? — Complete Guide to Photo Metadata",
    description:
      "Learn what EXIF data is, what information is stored in your photos, how it gets embedded, and which file formats support it.",
    type: "article",
    url: "https://photometadata.net/what-is-exif",
  },
};

export default function WhatIsExifPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="text-teal-600 hover:underline">
          Home
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">What Is EXIF Data?</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        What Is EXIF Data? A Complete Guide to Photo Metadata
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Every photo you take with a smartphone or digital camera contains hidden
        data called EXIF. This guide explains what it is, what it stores, and
        why it matters for your privacy.
      </p>

      <div className="space-y-10">
        {/* What is EXIF */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What Is EXIF?
          </h2>
          <p className="text-gray-600 mb-4">
            EXIF stands for <strong>Exchangeable Image File Format</strong>. It
            is a standard that defines how metadata is embedded inside image
            files. When you take a photo, your camera or phone automatically
            writes dozens of data fields into the file itself — things like the
            camera model, lens settings, date and time, and often your GPS
            coordinates.
          </p>
          <p className="text-gray-600">
            This metadata travels with the photo file. Anyone who receives the
            original file can read all of it using a metadata viewer. The data
            is invisible when you simply look at the photo, but it is fully
            accessible to anyone with the right tools.
          </p>
        </section>

        {/* What data is stored */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What Data Is Stored in EXIF?
          </h2>
          <p className="text-gray-600 mb-4">
            EXIF metadata can contain a wide range of information. Here are the
            most common categories:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span className="text-teal-600 font-bold shrink-0">1.</span>
              <div>
                <strong>Camera &amp; Device Info</strong> — Make, model, serial
                number, firmware version, and lens model.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-600 font-bold shrink-0">2.</span>
              <div>
                <strong>Camera Settings</strong> — Aperture (f-stop), shutter
                speed, ISO, focal length, flash status, white balance, and
                metering mode.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-600 font-bold shrink-0">3.</span>
              <div>
                <strong>GPS Location</strong> — Latitude, longitude, altitude,
                and sometimes direction. This is the most privacy-sensitive
                field.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-600 font-bold shrink-0">4.</span>
              <div>
                <strong>Date &amp; Time</strong> — When the photo was taken,
                digitized, and last modified. Timezone info may be included.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-600 font-bold shrink-0">5.</span>
              <div>
                <strong>Image Properties</strong> — Resolution, dimensions,
                orientation, color space, and compression type.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-600 font-bold shrink-0">6.</span>
              <div>
                <strong>Software</strong> — The application used to edit or
                process the photo (e.g., Adobe Lightroom, Snapseed).
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-teal-600 font-bold shrink-0">7.</span>
              <div>
                <strong>Thumbnail</strong> — A small preview image embedded
                inside the file for quick display.
              </div>
            </li>
          </ul>
        </section>

        {/* Common EXIF fields table */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Common EXIF Fields Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Field Name
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Category
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Example Value
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Privacy Risk
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2 font-mono text-gray-800">Make</td>
                  <td className="px-4 py-2 text-gray-600">Device</td>
                  <td className="px-4 py-2 text-gray-600">Apple</td>
                  <td className="px-4 py-2 text-amber-600">Low</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono text-gray-800">Model</td>
                  <td className="px-4 py-2 text-gray-600">Device</td>
                  <td className="px-4 py-2 text-gray-600">iPhone 15 Pro</td>
                  <td className="px-4 py-2 text-amber-600">Low</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-gray-800">
                    GPSLatitude
                  </td>
                  <td className="px-4 py-2 text-gray-600">Location</td>
                  <td className="px-4 py-2 text-gray-600">32.7767 N</td>
                  <td className="px-4 py-2 text-red-600 font-medium">High</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono text-gray-800">
                    GPSLongitude
                  </td>
                  <td className="px-4 py-2 text-gray-600">Location</td>
                  <td className="px-4 py-2 text-gray-600">96.7970 W</td>
                  <td className="px-4 py-2 text-red-600 font-medium">High</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-gray-800">
                    DateTimeOriginal
                  </td>
                  <td className="px-4 py-2 text-gray-600">Time</td>
                  <td className="px-4 py-2 text-gray-600">
                    2024:03:15 14:23:01
                  </td>
                  <td className="px-4 py-2 text-amber-600">Medium</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono text-gray-800">FNumber</td>
                  <td className="px-4 py-2 text-gray-600">Settings</td>
                  <td className="px-4 py-2 text-gray-600">f/1.8</td>
                  <td className="px-4 py-2 text-green-600">None</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-gray-800">
                    ExposureTime
                  </td>
                  <td className="px-4 py-2 text-gray-600">Settings</td>
                  <td className="px-4 py-2 text-gray-600">1/125</td>
                  <td className="px-4 py-2 text-green-600">None</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono text-gray-800">
                    ISOSpeedRatings
                  </td>
                  <td className="px-4 py-2 text-gray-600">Settings</td>
                  <td className="px-4 py-2 text-gray-600">200</td>
                  <td className="px-4 py-2 text-green-600">None</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-gray-800">
                    Software
                  </td>
                  <td className="px-4 py-2 text-gray-600">Processing</td>
                  <td className="px-4 py-2 text-gray-600">
                    Adobe Lightroom 6.5
                  </td>
                  <td className="px-4 py-2 text-green-600">None</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-mono text-gray-800">
                    SerialNumber
                  </td>
                  <td className="px-4 py-2 text-gray-600">Device</td>
                  <td className="px-4 py-2 text-gray-600">XK4928571</td>
                  <td className="px-4 py-2 text-red-600 font-medium">High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How EXIF gets embedded */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How Does EXIF Data Get Embedded?
          </h2>
          <p className="text-gray-600 mb-4">
            EXIF data is written at the moment a photo is captured. Here is how
            the process works:
          </p>
          <ol className="space-y-3 text-gray-600 list-decimal list-inside">
            <li>
              You press the shutter button on your camera or phone.
            </li>
            <li>
              The device&apos;s image processor captures the sensor data and
              creates the image file.
            </li>
            <li>
              Simultaneously, the device reads its internal sensors (GPS chip,
              clock, accelerometer) and camera settings.
            </li>
            <li>
              All of this information is written into a special header section of
              the image file according to the EXIF specification.
            </li>
            <li>
              The complete file (image data + metadata) is saved to storage.
            </li>
          </ol>
          <p className="text-gray-600 mt-4">
            Photo editing software can also add or modify EXIF data. For
            example, Adobe Lightroom adds a &quot;Software&quot; tag, and some
            apps can write GPS coordinates from a separate GPS track.
          </p>
        </section>

        {/* File format support */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Which File Formats Support EXIF?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Format
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    EXIF Support
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    JPEG (.jpg)
                  </td>
                  <td className="px-4 py-2 text-green-600 font-medium">
                    Full support
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    The most common format for EXIF. All cameras use JPEG+EXIF.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">
                    TIFF (.tif)
                  </td>
                  <td className="px-4 py-2 text-green-600 font-medium">
                    Full support
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    EXIF is actually based on the TIFF structure. Full metadata
                    support.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    HEIC/HEIF (.heic)
                  </td>
                  <td className="px-4 py-2 text-green-600 font-medium">
                    Full support
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    Apple&apos;s default format. Stores EXIF in HEIF container.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">
                    PNG (.png)
                  </td>
                  <td className="px-4 py-2 text-amber-600 font-medium">
                    Limited
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    PNG uses its own metadata chunks (tEXt, iTXt). Some tools
                    embed EXIF in eXIf chunks.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    WebP (.webp)
                  </td>
                  <td className="px-4 py-2 text-green-600 font-medium">
                    Full support
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    Google&apos;s format supports EXIF via RIFF container
                    chunks.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">
                    RAW (.cr2, .nef, .arw)
                  </td>
                  <td className="px-4 py-2 text-green-600 font-medium">
                    Full support
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    RAW files contain extensive metadata including proprietary
                    maker notes.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    GIF (.gif)
                  </td>
                  <td className="px-4 py-2 text-red-600 font-medium">
                    No support
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    GIF has no EXIF capability. Only basic comment fields.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">
                    AVIF (.avif)
                  </td>
                  <td className="px-4 py-2 text-green-600 font-medium">
                    Full support
                  </td>
                  <td className="px-4 py-2 text-gray-600">
                    Modern format based on HEIF container. Supports EXIF.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
          <p className="text-gray-900 font-medium mb-1">
            Want to see what EXIF data is in your photos?
          </p>
          <p className="text-gray-600 text-sm mb-3">
            Upload any photo to view all hidden metadata instantly — 100% free
            and private.
          </p>
          <a
            href="/"
            className="inline-block bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            Try the Photo Metadata Viewer
          </a>
        </section>

        {/* Internal links */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/privacy-guide"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">Photo Privacy Guide</p>
              <p className="text-sm text-gray-600 mt-1">
                Learn what personal information your photos can reveal and how to
                protect yourself.
              </p>
            </a>
            <a
              href="/remove-metadata"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">
                Remove Photo Metadata
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Strip all EXIF data from your photos before sharing online.
              </p>
            </a>
            <a
              href="/camera-settings"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">
                Camera Settings in EXIF
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Understand aperture, ISO, shutter speed, and other camera data
                stored in your photos.
              </p>
            </a>
            <a
              href="/gps-data"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">
                GPS Data in Photos
              </p>
              <p className="text-sm text-gray-600 mt-1">
                How location data gets embedded and what it means for your
                privacy.
              </p>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is EXIF data the same as metadata?
              </h3>
              <p className="text-gray-600">
                EXIF is one type of image metadata. Photos can also contain IPTC
                data (captions, keywords, copyright) and XMP data (editing
                history, ratings). EXIF specifically refers to the technical data
                recorded by the camera at the time of capture.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can EXIF data be faked or modified?
              </h3>
              <p className="text-gray-600">
                Yes. EXIF data can be edited, added, or removed using various
                tools. This means EXIF data alone should not be used as definitive
                proof of when or where a photo was taken, though it is useful as
                supporting evidence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do screenshots contain EXIF data?
              </h3>
              <p className="text-gray-600">
                Screenshots typically contain minimal metadata — usually just the
                device model, screen resolution, and timestamp. They do not
                contain GPS coordinates or camera settings since no camera was
                used to capture them.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Does sending a photo via text message remove EXIF data?
              </h3>
              <p className="text-gray-600">
                It depends on the messaging app. iMessage preserves most EXIF
                data, while MMS typically compresses the image and may strip some
                metadata. WhatsApp and Signal strip EXIF data from sent images.
                When in doubt, strip metadata manually before sending.
              </p>
            </div>
          </div>
        </section>
      </div>

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
                name: "What Is EXIF Data?",
                item: "https://photometadata.net/what-is-exif",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is EXIF data the same as metadata?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EXIF is one type of image metadata. Photos can also contain IPTC data (captions, keywords, copyright) and XMP data (editing history, ratings). EXIF specifically refers to the technical data recorded by the camera at the time of capture.",
                },
              },
              {
                "@type": "Question",
                name: "Can EXIF data be faked or modified?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. EXIF data can be edited, added, or removed using various tools. This means EXIF data alone should not be used as definitive proof of when or where a photo was taken, though it is useful as supporting evidence.",
                },
              },
              {
                "@type": "Question",
                name: "Do screenshots contain EXIF data?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Screenshots typically contain minimal metadata — usually just the device model, screen resolution, and timestamp. They do not contain GPS coordinates or camera settings since no camera was used to capture them.",
                },
              },
              {
                "@type": "Question",
                name: "Does sending a photo via text message remove EXIF data?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on the messaging app. iMessage preserves most EXIF data, while MMS typically compresses the image and may strip some metadata. WhatsApp and Signal strip EXIF data from sent images. When in doubt, strip metadata manually before sending.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
