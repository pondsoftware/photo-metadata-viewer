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
    </div>
  );
}
