import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Photo Metadata — Strip EXIF Data for Privacy",
  description:
    "Remove EXIF metadata from your photos to protect your privacy. Learn why you should strip metadata before sharing, plus step-by-step instructions for iPhone, Android, Windows, and Mac.",
  alternates: {
    canonical: "/remove-metadata",
  },
  openGraph: {
    title: "Remove Photo Metadata — Strip EXIF Data for Privacy",
    description:
      "Remove EXIF metadata from your photos to protect your privacy. Step-by-step instructions for all platforms.",
    type: "article",
    url: "https://photometadata.net/remove-metadata",
  },
};

export default function RemoveMetadataPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="text-teal-600 hover:underline">
          Home
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Remove Metadata</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Remove Photo Metadata (EXIF Data) for Privacy
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Your photos contain hidden data that can reveal your location, device,
        and habits. Learn why and how to strip EXIF metadata before sharing
        photos online.
      </p>

      <div className="space-y-10">
        {/* Use our tool */}
        <section className="bg-teal-50 border border-teal-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Strip Metadata Instantly — Free &amp; Private
          </h2>
          <p className="text-gray-600 mb-4">
            Our metadata viewer includes a built-in metadata stripper. Upload
            your photo, then click &quot;Strip Metadata &amp; Download&quot; to
            get a clean copy with all EXIF data removed. Everything happens in
            your browser — your photo is never uploaded to any server.
          </p>
          <a
            href="/"
            className="inline-block bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            Open Metadata Viewer &amp; Remover
          </a>
        </section>

        {/* Why remove metadata */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why Remove EXIF Data From Photos?
          </h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex gap-3">
              <span className="text-red-500 mt-0.5 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div>
                <strong>Location privacy.</strong> GPS coordinates in your photos
                can reveal your home address, workplace, children&apos;s school,
                and daily routines. A single photo posted online can expose where
                you live.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-500 mt-0.5 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div>
                <strong>Prevent stalking &amp; harassment.</strong> Detailed
                timestamps combined with GPS data create a map of your movements.
                Harassers and stalkers can use this information to track patterns.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-teal-500 mt-0.5 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 7H7v6h6V7z" />
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div>
                <strong>Device fingerprinting.</strong> Camera serial numbers and
                unique image IDs can be used to link photos across different
                platforms back to the same person, even if posted under different
                usernames.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-500 mt-0.5 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div>
                <strong>Professional requirements.</strong> Journalists,
                whistleblowers, and activists often need to share photos without
                revealing the source device or location for safety reasons.
              </div>
            </div>
          </div>
        </section>

        {/* Platform instructions */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Remove Metadata on Every Platform
          </h2>

          {/* iPhone */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              iPhone / iPad (iOS)
            </h3>
            <p className="text-gray-600 mb-3">
              iOS does not have a built-in metadata removal tool, but you have
              several options:
            </p>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>
                <strong>Before sharing:</strong> Open the photo, tap Share, then
                tap &quot;Options&quot; at the top. Toggle off
                &quot;Location&quot; to strip GPS data from the shared copy.
              </li>
              <li>
                <strong>Shortcuts app:</strong> Create a shortcut that strips
                EXIF: use the &quot;Convert Image&quot; action (which removes
                metadata) followed by &quot;Save to Photo Album.&quot;
              </li>
              <li>
                <strong>Use our web tool:</strong>{" "}
                <a href="/" className="text-teal-600 hover:underline">
                  Open Photo Metadata Viewer
                </a>{" "}
                in Safari, upload your photo, and download the stripped version.
              </li>
            </ol>
            <p className="text-sm text-gray-500 mt-3">
              To prevent GPS data from being saved in the first place: Settings
              &gt; Privacy &amp; Security &gt; Location Services &gt; Camera
              &gt; Never.
            </p>
          </div>

          {/* Android */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Android
            </h3>
            <p className="text-gray-600 mb-3">
              Android offers built-in options plus third-party tools:
            </p>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>
                <strong>Google Photos:</strong> Open the photo, tap the three-dot
                menu &gt; &quot;Edit&quot; &gt; save a copy. The copy typically
                has reduced metadata. For full removal, use a dedicated tool.
              </li>
              <li>
                <strong>Before sharing:</strong> In Google Photos, when sharing
                via link, go to sharing settings and toggle off &quot;Include
                location information.&quot;
              </li>
              <li>
                <strong>Use our web tool:</strong>{" "}
                <a href="/" className="text-teal-600 hover:underline">
                  Open Photo Metadata Viewer
                </a>{" "}
                in Chrome, upload your photo, and download the stripped version.
              </li>
            </ol>
            <p className="text-sm text-gray-500 mt-3">
              To stop saving GPS: Open Camera app &gt; Settings &gt; toggle off
              &quot;Store location&quot; or &quot;Geo tag photos.&quot;
            </p>
          </div>

          {/* Windows */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Windows
            </h3>
            <p className="text-gray-600 mb-3">
              Windows has built-in metadata removal in File Explorer:
            </p>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>
                Right-click the photo file and select &quot;Properties.&quot;
              </li>
              <li>Go to the &quot;Details&quot; tab.</li>
              <li>
                Click &quot;Remove Properties and Personal Information&quot; at
                the bottom.
              </li>
              <li>
                Choose &quot;Create a copy with all possible properties
                removed&quot; or select specific fields to remove.
              </li>
              <li>Click OK.</li>
            </ol>
            <p className="text-sm text-gray-500 mt-3">
              This works for JPEG, TIFF, and some other formats. For batch
              processing, use our web tool or a command-line tool like ExifTool.
            </p>
          </div>

          {/* Mac */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Mac (macOS)
            </h3>
            <p className="text-gray-600 mb-3">
              macOS does not have a one-click metadata remover in Finder, but you
              have options:
            </p>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>
                <strong>Preview app:</strong> Open the photo in Preview, go to
                Tools &gt; Show Inspector (Cmd+I). You can view metadata but
                cannot remove it from Preview directly.
              </li>
              <li>
                <strong>Photos app:</strong> Select the photo, go to Image &gt;
                Location &gt; Remove Location. This removes GPS only.
              </li>
              <li>
                <strong>Terminal (ExifTool):</strong> Install via{" "}
                <code className="bg-gray-100 px-1 rounded text-sm">
                  brew install exiftool
                </code>
                , then run{" "}
                <code className="bg-gray-100 px-1 rounded text-sm">
                  exiftool -all= photo.jpg
                </code>{" "}
                to strip all metadata.
              </li>
              <li>
                <strong>Use our web tool:</strong>{" "}
                <a href="/" className="text-teal-600 hover:underline">
                  Open Photo Metadata Viewer
                </a>{" "}
                in your browser for a no-install solution.
              </li>
            </ol>
          </div>
        </section>

        {/* What our tool removes */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What Does Our Tool Remove?
          </h2>
          <p className="text-gray-600 mb-4">
            When you use the &quot;Strip Metadata &amp; Download&quot; button on
            our{" "}
            <a href="/" className="text-teal-600 hover:underline">
              metadata viewer
            </a>
            , the photo is redrawn on a clean HTML5 canvas element. This process
            removes:
          </p>
          <ul className="space-y-1 text-gray-600 list-disc list-inside">
            <li>GPS coordinates and location data</li>
            <li>Camera make, model, and serial number</li>
            <li>All camera settings (aperture, ISO, shutter speed, etc.)</li>
            <li>Date and time information</li>
            <li>Software and editing history</li>
            <li>Embedded thumbnails</li>
            <li>IPTC and XMP metadata</li>
            <li>Any other embedded data</li>
          </ul>
          <p className="text-gray-600 mt-4">
            The result is a clean JPEG file that contains only pixel data — no
            hidden information of any kind.
          </p>
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
                Full guide to what information your photos reveal and how to
                share safely.
              </p>
            </a>
            <a
              href="/what-is-exif"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">What Is EXIF Data?</p>
              <p className="text-sm text-gray-600 mt-1">
                Learn what EXIF data is and what information is stored in your
                photos.
              </p>
            </a>
            <a
              href="/gps-data"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">GPS Data in Photos</p>
              <p className="text-sm text-gray-600 mt-1">
                How location tracking works in photos and how to disable it.
              </p>
            </a>
            <a
              href="/camera-settings"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">
                Camera Settings Guide
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Understand the camera settings data captured in your photo EXIF.
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
                Does removing metadata reduce image quality?
              </h3>
              <p className="text-gray-600">
                Our tool re-encodes the image at 95% JPEG quality, which is
                visually lossless for most purposes. There may be a tiny quality
                loss from the re-encoding, but it is imperceptible to the human
                eye. The Windows built-in method preserves the original quality
                since it only removes the metadata bytes without re-encoding.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I remove metadata from multiple photos at once?
              </h3>
              <p className="text-gray-600">
                Yes. Our{" "}
                <a href="/" className="text-teal-600 hover:underline">
                  metadata viewer
                </a>{" "}
                supports batch processing. Upload multiple photos, then click
                &quot;Strip All &amp; Download ZIP&quot; to get all cleaned
                photos in a single ZIP file.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is the metadata permanently removed?
              </h3>
              <p className="text-gray-600">
                Yes. When you download the stripped photo, it is a completely new
                file with no EXIF data. The original file on your device is
                unchanged — we create a new clean copy. There is no way to
                recover the stripped metadata from the clean file.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are my photos uploaded to a server?
              </h3>
              <p className="text-gray-600">
                No. All processing happens entirely in your web browser using
                JavaScript. Your photos never leave your device. We cannot see,
                access, or store your images. This makes our tool safe for
                sensitive photos.
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
                name: "Remove Metadata",
                item: "https://photometadata.net/remove-metadata",
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
                name: "Does removing metadata reduce image quality?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our tool re-encodes the image at 95% JPEG quality, which is visually lossless for most purposes. There may be a tiny quality loss from the re-encoding, but it is imperceptible to the human eye. The Windows built-in method preserves the original quality since it only removes the metadata bytes without re-encoding.",
                },
              },
              {
                "@type": "Question",
                name: "Can I remove metadata from multiple photos at once?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Our metadata viewer supports batch processing. Upload multiple photos, then click 'Strip All & Download ZIP' to get all cleaned photos in a single ZIP file.",
                },
              },
              {
                "@type": "Question",
                name: "Is the metadata permanently removed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. When you download the stripped photo, it is a completely new file with no EXIF data. The original file on your device is unchanged — we create a new clean copy. There is no way to recover the stripped metadata from the clean file.",
                },
              },
              {
                "@type": "Question",
                name: "Are my photos uploaded to a server?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. All processing happens entirely in your web browser using JavaScript. Your photos never leave your device. We cannot see, access, or store your images. This makes our tool safe for sensitive photos.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
