import MetadataViewer from "@/components/MetadataViewer";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          View & Remove Photo Metadata (EXIF Data)
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          See what hidden data is embedded in your photos — GPS location, camera
          model, timestamps, software, and more. Strip it all with one click
          before sharing online.
        </p>
      </div>

      <MetadataViewer />

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What Is EXIF Data?
          </h2>
          <p className="text-gray-600">
            EXIF (Exchangeable Image File Format) is metadata automatically
            embedded in photos by your camera or phone. It can include your
            exact GPS coordinates, the device model, lens settings, date and
            time, and even the software used to edit the image. While useful for
            photographers, this data can be a privacy concern when sharing
            photos online.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why Should You Care?
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
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
                <strong>Location tracking.</strong> Photos taken with GPS
                enabled contain your exact coordinates. A photo of your home
                reveals your address. A vacation photo reveals you&apos;re away.
              </div>
            </li>
            <li className="flex gap-3">
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
                <strong>Timestamps.</strong> The exact date and time a photo was
                taken is stored, which can reveal patterns about your routine.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 mt-0.5 shrink-0">
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
                <strong>Device fingerprinting.</strong> Your camera model,
                serial number, and unique image ID can be used to link different
                photos back to the same device.
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Which Platforms Strip EXIF Data?
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-sm">
              <div>
                <span className="text-green-600 font-medium">Facebook</span> —
                strips
              </div>
              <div>
                <span className="text-green-600 font-medium">Instagram</span> —
                strips
              </div>
              <div>
                <span className="text-green-600 font-medium">Twitter/X</span> —
                strips
              </div>
              <div>
                <span className="text-red-600 font-medium">Email</span> —
                keeps
              </div>
              <div>
                <span className="text-red-600 font-medium">Craigslist</span> —
                keeps
              </div>
              <div>
                <span className="text-red-600 font-medium">Forums</span> —
                varies
              </div>
              <div>
                <span className="text-red-600 font-medium">Google Drive</span>{" "}
                — keeps
              </div>
              <div>
                <span className="text-red-600 font-medium">Dropbox</span> —
                keeps
              </div>
              <div>
                <span className="text-amber-600 font-medium">iMessage</span> —
                partial
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <p className="text-gray-900 font-medium mb-1">Need to convert image formats?</p>
        <p className="text-gray-600 text-sm mb-3">Convert between PNG, JPG, WebP, and more — free and browser-based.</p>
        <a href="https://imageconverters.net" className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Try our free Image Converter</a>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I remove GPS data from a photo?</h3>
            <p className="text-gray-600">Upload your photo above, then click the &apos;Strip Metadata &amp; Download&apos; button. This removes all EXIF data including GPS coordinates, camera settings, and timestamps. The cleaned photo downloads instantly.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can someone track my location from a photo?</h3>
            <p className="text-gray-600">Yes, if your phone has location services enabled for the camera, photos contain GPS coordinates accurate to within a few meters. Always strip metadata before sharing sensitive photos online.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Does Instagram strip EXIF data?</h3>
            <p className="text-gray-600">Yes, Instagram removes most EXIF metadata when you upload, including GPS location. However, Facebook, email attachments, and many messaging apps may preserve EXIF data.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is EXIF data?</h3>
            <p className="text-gray-600">EXIF (Exchangeable Image File Format) is metadata embedded in photos by cameras and phones. It includes camera model, settings (aperture, shutter speed, ISO), date/time, and often GPS location.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I stop my phone from saving location in photos?</h3>
            <p className="text-gray-600">On iPhone: Settings &gt; Privacy &gt; Location Services &gt; Camera &gt; Never. On Android: Open Camera app &gt; Settings &gt; toggle off Location/GPS tags.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I remove GPS data from a photo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Upload your photo above, then click the 'Strip Metadata & Download' button. This removes all EXIF data including GPS coordinates, camera settings, and timestamps. The cleaned photo downloads instantly."
                }
              },
              {
                "@type": "Question",
                "name": "Can someone track my location from a photo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, if your phone has location services enabled for the camera, photos contain GPS coordinates accurate to within a few meters. Always strip metadata before sharing sensitive photos online."
                }
              },
              {
                "@type": "Question",
                "name": "Does Instagram strip EXIF data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Instagram removes most EXIF metadata when you upload, including GPS location. However, Facebook, email attachments, and many messaging apps may preserve EXIF data."
                }
              },
              {
                "@type": "Question",
                "name": "What is EXIF data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "EXIF (Exchangeable Image File Format) is metadata embedded in photos by cameras and phones. It includes camera model, settings (aperture, shutter speed, ISO), date/time, and often GPS location."
                }
              },
              {
                "@type": "Question",
                "name": "How do I stop my phone from saving location in photos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "On iPhone: Settings > Privacy > Location Services > Camera > Never. On Android: Open Camera app > Settings > toggle off Location/GPS tags."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
