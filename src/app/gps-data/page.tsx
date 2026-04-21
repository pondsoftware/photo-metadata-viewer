import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPS Data in Photos — Location Metadata & Privacy Guide",
  description:
    "Learn how GPS coordinates get embedded in photos, which apps add location data, how to read GPS from EXIF, privacy implications, and how to disable geotagging on iPhone and Android.",
  alternates: {
    canonical: "/gps-data",
  },
  openGraph: {
    title: "GPS Data in Photos — Location Metadata & Privacy Guide",
    description:
      "How GPS location data gets embedded in photos, privacy risks, and how to disable geotagging.",
    type: "article",
    url: "https://photometadata.net/gps-data",
  },
};

export default function GpsDataPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="text-teal-600 hover:underline">
          Home
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">GPS Data</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        GPS Location Data in Photos: Complete Guide
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Most smartphones embed your exact GPS coordinates into every photo by
        default. This guide explains how it works, what risks it creates, and
        how to control it.
      </p>

      <div className="space-y-10">
        {/* How GPS gets embedded */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How GPS Coordinates Get Embedded in Photos
          </h2>
          <p className="text-gray-600 mb-4">
            When you take a photo with a GPS-enabled device (virtually all
            smartphones), the following happens:
          </p>
          <ol className="space-y-3 text-gray-600 list-decimal list-inside">
            <li>
              Your phone&apos;s GPS chip determines your current coordinates
              using satellite signals (GPS, GLONASS, Galileo).
            </li>
            <li>
              The accuracy is typically 3-5 meters outdoors, sometimes better
              with Wi-Fi and cell tower triangulation.
            </li>
            <li>
              The camera app reads these coordinates at the moment you press the
              shutter button.
            </li>
            <li>
              The latitude, longitude, and sometimes altitude are written into
              the EXIF header of the image file.
            </li>
            <li>
              This data travels with the file everywhere it is copied, shared, or
              uploaded (unless specifically stripped).
            </li>
          </ol>
          <p className="text-gray-600 mt-4">
            Unlike other EXIF data that is always recorded, GPS requires the
            phone&apos;s location services to be active and permission granted to
            the camera app. However, most users have this enabled by default.
          </p>
        </section>

        {/* Which devices add GPS */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Which Devices &amp; Apps Add GPS Data?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Device / App
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    GPS by Default?
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    iPhone (Camera app)
                  </td>
                  <td className="px-4 py-2 text-red-600">Yes</td>
                  <td className="px-4 py-2 text-gray-600">
                    Enabled when Location Services is on for Camera
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">
                    Android (Camera app)
                  </td>
                  <td className="px-4 py-2 text-red-600">Yes</td>
                  <td className="px-4 py-2 text-gray-600">
                    Most Android cameras enable geotagging by default
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    DSLR / Mirrorless cameras
                  </td>
                  <td className="px-4 py-2 text-green-600">No</td>
                  <td className="px-4 py-2 text-gray-600">
                    Most lack GPS. Some high-end models have built-in GPS or
                    optional GPS modules.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">
                    Instagram (in-app camera)
                  </td>
                  <td className="px-4 py-2 text-amber-600">Varies</td>
                  <td className="px-4 py-2 text-gray-600">
                    May embed GPS in the captured file but strips it on upload
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    WhatsApp camera
                  </td>
                  <td className="px-4 py-2 text-green-600">No</td>
                  <td className="px-4 py-2 text-gray-600">
                    WhatsApp strips metadata from sent photos
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">
                    Drone cameras (DJI, etc.)
                  </td>
                  <td className="px-4 py-2 text-red-600">Yes</td>
                  <td className="px-4 py-2 text-gray-600">
                    GPS is core to drone operation; always embedded in photos
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    GoPro / Action cameras
                  </td>
                  <td className="px-4 py-2 text-red-600">Yes</td>
                  <td className="px-4 py-2 text-gray-600">
                    GPS enabled by default on models that have it
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Reading GPS from EXIF */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Read GPS Coordinates From EXIF
          </h2>
          <p className="text-gray-600 mb-4">
            GPS data in EXIF is stored across several fields:
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
            <div className="space-y-2 text-sm font-mono">
              <div className="flex gap-4">
                <span className="text-gray-500 w-36 shrink-0">GPSLatitude</span>
                <span className="text-gray-800">32 deg 46&apos; 36.12&quot; N</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500 w-36 shrink-0">GPSLongitude</span>
                <span className="text-gray-800">96 deg 47&apos; 49.20&quot; W</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500 w-36 shrink-0">GPSAltitude</span>
                <span className="text-gray-800">152.3 m above sea level</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500 w-36 shrink-0">GPSTimeStamp</span>
                <span className="text-gray-800">19:23:45 UTC</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500 w-36 shrink-0">GPSDateStamp</span>
                <span className="text-gray-800">2024:03:15</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600">
            Upload any photo to our{" "}
            <a href="/" className="text-teal-600 hover:underline">
              metadata viewer
            </a>{" "}
            to instantly read GPS coordinates. If GPS data is present, we show
            it on an interactive map so you can see the exact location.
          </p>
        </section>

        {/* Coordinate formats */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            GPS Coordinate Formats Explained
          </h2>
          <p className="text-gray-600 mb-4">
            GPS coordinates appear in two common formats. Understanding both
            helps you work with location data:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                DMS (Degrees, Minutes, Seconds)
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                The traditional format used in EXIF data and on maps. Each
                coordinate has degrees, minutes (1/60th of a degree), and seconds
                (1/60th of a minute), plus a direction (N/S for latitude, E/W for
                longitude).
              </p>
              <div className="bg-gray-50 rounded p-3 font-mono text-sm">
                <p>32° 46&apos; 36.12&quot; N</p>
                <p>96° 47&apos; 49.20&quot; W</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Decimal Degrees (DD)
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                The simpler format used by most digital mapping tools (Google
                Maps, etc.). Positive values are North/East, negative values are
                South/West. This is what our metadata viewer displays.
              </p>
              <div className="bg-gray-50 rounded p-3 font-mono text-sm">
                <p>32.776700, -96.797000</p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2">
              Converting Between Formats
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              To convert DMS to Decimal Degrees:
            </p>
            <p className="text-gray-700 text-sm font-mono bg-gray-50 rounded p-3">
              DD = Degrees + (Minutes / 60) + (Seconds / 3600)
              <br />
              Example: 32° 46&apos; 36.12&quot; = 32 + (46/60) + (36.12/3600) =
              32.7767°
            </p>
            <p className="text-gray-500 text-sm mt-2">
              For West (W) and South (S) directions, the decimal result is
              negative.
            </p>
          </div>
        </section>

        {/* Privacy implications */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Privacy Implications of GPS in Photos
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-800 mb-2">
                What GPS data reveals
              </h3>
              <ul className="space-y-1 text-red-800 text-sm list-disc list-inside">
                <li>Your home address (from photos taken at home)</li>
                <li>Your workplace (from photos during work hours)</li>
                <li>
                  Your children&apos;s school or daycare location
                </li>
                <li>Vacation destinations and travel patterns</li>
                <li>Frequented locations (gym, church, doctor, etc.)</li>
                <li>Daily commute route (from photos along the way)</li>
                <li>Whether you are currently home or away</li>
              </ul>
            </div>
            <p className="text-gray-600">
              A single photo with GPS may not seem like a big risk, but over
              time, a collection of geotagged photos creates a comprehensive map
              of someone&apos;s life. Data aggregators and bad actors can combine
              GPS data from multiple photos to build detailed profiles.
            </p>
            <p className="text-gray-600">
              For a complete guide on protecting yourself, see our{" "}
              <a
                href="/privacy-guide"
                className="text-teal-600 hover:underline"
              >
                photo privacy guide
              </a>
              .
            </p>
          </div>
        </section>

        {/* How to disable */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Disable Geotagging
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              iPhone / iPad
            </h3>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>
                Open <strong>Settings</strong>.
              </li>
              <li>
                Tap <strong>Privacy &amp; Security</strong>.
              </li>
              <li>
                Tap <strong>Location Services</strong>.
              </li>
              <li>
                Scroll down and tap <strong>Camera</strong>.
              </li>
              <li>
                Select <strong>Never</strong>.
              </li>
            </ol>
            <p className="text-sm text-gray-500 mt-3">
              This only affects the Camera app. Third-party camera apps have
              their own location permissions that need to be disabled separately.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Android (Google Camera)
            </h3>
            <ol className="space-y-2 text-gray-600 list-decimal list-inside">
              <li>
                Open the <strong>Camera</strong> app.
              </li>
              <li>
                Tap the <strong>Settings gear icon</strong> (usually top-left or
                swipe down).
              </li>
              <li>
                Find <strong>&quot;Save location&quot;</strong> or
                <strong> &quot;Geo tag&quot;</strong> or
                <strong> &quot;Store location&quot;</strong>.
              </li>
              <li>
                Toggle it <strong>off</strong>.
              </li>
            </ol>
            <p className="text-sm text-gray-500 mt-3">
              The exact setting name varies by manufacturer (Samsung, Pixel,
              OnePlus, etc.). On Samsung, it is under Camera Settings &gt;
              &quot;Location tags.&quot;
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Alternative: Remove GPS After Taking Photos
            </h3>
            <p className="text-gray-600 mb-3">
              If you want location data for your own photo organization (e.g.,
              viewing photos on a map in Google Photos or Apple Photos) but want
              to remove it before sharing, you can keep geotagging enabled and
              strip metadata only when sharing:
            </p>
            <ul className="space-y-1 text-gray-600 list-disc list-inside">
              <li>
                <strong>iPhone:</strong> When sharing, tap Options and disable
                Location.
              </li>
              <li>
                <strong>Any device:</strong> Use our{" "}
                <a href="/" className="text-teal-600 hover:underline">
                  metadata viewer &amp; remover
                </a>{" "}
                to strip GPS before uploading anywhere.
              </li>
              <li>
                <strong>Desktop:</strong> See our{" "}
                <a
                  href="/remove-metadata"
                  className="text-teal-600 hover:underline"
                >
                  metadata removal guide
                </a>{" "}
                for Windows and Mac instructions.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
          <p className="text-gray-900 font-medium mb-1">
            Check if your photos contain GPS data
          </p>
          <p className="text-gray-600 text-sm mb-3">
            Upload a photo to see if it has location coordinates — we will show
            the exact spot on a map.
          </p>
          <a
            href="/"
            className="inline-block bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            Open Photo Metadata Viewer
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
                Complete guide to what your photos reveal and how to share
                safely.
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
                Strip all EXIF data including GPS from your photos before
                sharing.
              </p>
            </a>
            <a
              href="/what-is-exif"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">What Is EXIF Data?</p>
              <p className="text-sm text-gray-600 mt-1">
                Learn about all types of metadata stored in photos, not just
                GPS.
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
                Understand aperture, ISO, and other camera data in your photo
                EXIF.
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
                How accurate is GPS data in photos?
              </h3>
              <p className="text-gray-600">
                Smartphone GPS is typically accurate to 3-5 meters outdoors in
                good conditions. In urban areas with tall buildings, accuracy may
                drop to 10-20 meters. Indoors, GPS can be less accurate or
                unavailable, in which case the phone may use Wi-Fi positioning
                (accurate to about 15 meters).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I add GPS data to photos taken without it?
              </h3>
              <p className="text-gray-600">
                Yes. This is called &quot;geotagging after the fact.&quot; Many
                photo management apps (Lightroom, Google Photos, Apple Photos)
                let you manually set a location. You can also use a separate GPS
                logger and sync timestamps to add coordinates to DSLR photos
                automatically.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do all photo formats store GPS the same way?
              </h3>
              <p className="text-gray-600">
                JPEG, HEIC, TIFF, and WebP all store GPS in the standard EXIF
                format. The coordinate fields are the same regardless of file
                format. PNG files may store location in text chunks but this is
                less common. Our viewer reads GPS from all supported formats.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Does turning off location services break the camera app?
              </h3>
              <p className="text-gray-600">
                No. Disabling location for the camera only prevents GPS
                coordinates from being saved in photos. The camera continues to
                work perfectly — you just will not have location data in your
                photo library. You can always re-enable it if you want location
                tagging for a specific trip.
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
                name: "GPS Data in Photos",
                item: "https://photometadata.net/gps-data",
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
                name: "How accurate is GPS data in photos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Smartphone GPS is typically accurate to 3-5 meters outdoors in good conditions. In urban areas with tall buildings, accuracy may drop to 10-20 meters. Indoors, GPS can be less accurate or unavailable, in which case the phone may use Wi-Fi positioning (accurate to about 15 meters).",
                },
              },
              {
                "@type": "Question",
                name: "Can I add GPS data to photos taken without it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: 'Yes. This is called "geotagging after the fact." Many photo management apps (Lightroom, Google Photos, Apple Photos) let you manually set a location. You can also use a separate GPS logger and sync timestamps to add coordinates to DSLR photos automatically.',
                },
              },
              {
                "@type": "Question",
                name: "Do all photo formats store GPS the same way?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "JPEG, HEIC, TIFF, and WebP all store GPS in the standard EXIF format. The coordinate fields are the same regardless of file format. PNG files may store location in text chunks but this is less common. Our viewer reads GPS from all supported formats.",
                },
              },
              {
                "@type": "Question",
                name: "Does turning off location services break the camera app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Disabling location for the camera only prevents GPS coordinates from being saved in photos. The camera continues to work perfectly — you just will not have location data in your photo library. You can always re-enable it if you want location tagging for a specific trip.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
