import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camera Settings in EXIF — Aperture, ISO, Shutter Speed Explained",
  description:
    "Understand the camera settings stored in your photo EXIF data: aperture, shutter speed, ISO, focal length, white balance, flash, and metering mode. Learn to improve your photography by reading EXIF.",
  alternates: {
    canonical: "/camera-settings",
  },
  openGraph: {
    title: "Camera Settings in EXIF — Aperture, ISO, Shutter Speed Explained",
    description:
      "Understand camera settings stored in EXIF data and learn to improve your photography.",
    type: "article",
    url: "https://photometadata.net/camera-settings",
  },
};

export default function CameraSettingsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="text-teal-600 hover:underline">
          Home
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Camera Settings</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Understanding Camera Settings in EXIF Data
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Every photo stores the exact camera settings used when it was taken.
        Learning to read these EXIF fields helps you understand why some photos
        look better than others — and how to improve your own photography.
      </p>

      <div className="space-y-10">
        {/* Aperture */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Aperture (f-number)
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-gray-600 mb-3">
              <strong>EXIF field:</strong>{" "}
              <code className="bg-gray-100 px-1 rounded text-sm">FNumber</code>
            </p>
            <p className="text-gray-600 mb-3">
              Aperture controls how much light enters the lens. It is measured in
              f-stops (f/1.4, f/2.8, f/5.6, f/11, etc.). A{" "}
              <strong>lower f-number</strong> means a wider opening, more light,
              and shallower depth of field (blurry background). A{" "}
              <strong>higher f-number</strong> means a smaller opening, less
              light, and more of the scene in focus.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <p className="font-medium mb-1">How to use this EXIF data:</p>
              <p>
                If you see a portrait with beautiful background blur (bokeh),
                check the aperture — it will likely be f/1.4 to f/2.8. If you
                have a landscape where everything is sharp, expect f/8 to f/16.
                Use this knowledge to replicate the look in your own photos.
              </p>
            </div>
          </div>
        </section>

        {/* Shutter Speed */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Shutter Speed (Exposure Time)
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-gray-600 mb-3">
              <strong>EXIF field:</strong>{" "}
              <code className="bg-gray-100 px-1 rounded text-sm">
                ExposureTime
              </code>
            </p>
            <p className="text-gray-600 mb-3">
              Shutter speed is how long the sensor is exposed to light. It is
              shown as a fraction (1/125, 1/1000, 1/30) or in seconds for long
              exposures. <strong>Fast shutter speeds</strong> (1/1000+) freeze
              motion. <strong>Slow shutter speeds</strong> (1/30 and below)
              create motion blur and require a tripod.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <p className="font-medium mb-1">How to use this EXIF data:</p>
              <p>
                Check the shutter speed of sharp action photos (sports, birds in
                flight) — they will be 1/500 or faster. Long exposure photos
                (silky waterfalls, light trails) will show 1 second or longer.
                Match these settings to achieve similar results.
              </p>
            </div>
          </div>
        </section>

        {/* ISO */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            ISO (Sensitivity)
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-gray-600 mb-3">
              <strong>EXIF field:</strong>{" "}
              <code className="bg-gray-100 px-1 rounded text-sm">
                ISOSpeedRatings
              </code>
            </p>
            <p className="text-gray-600 mb-3">
              ISO controls the sensor&apos;s sensitivity to light. Low ISO (100-400)
              produces clean images with minimal noise. High ISO (1600-12800+)
              allows shooting in low light but introduces grain/noise.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <p className="font-medium mb-1">How to use this EXIF data:</p>
              <p>
                If a low-light photo looks clean, check the ISO and you will
                likely see a modern camera using ISO 800-3200 effectively. If a
                photo is noisy/grainy, the ISO was probably pushed too high.
                Knowing the ISO tells you how much light was available when the
                photo was taken.
              </p>
            </div>
          </div>
        </section>

        {/* Focal Length */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Focal Length
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-gray-600 mb-3">
              <strong>EXIF field:</strong>{" "}
              <code className="bg-gray-100 px-1 rounded text-sm">
                FocalLength
              </code>
            </p>
            <p className="text-gray-600 mb-3">
              Focal length (measured in mm) determines the angle of view and
              magnification. <strong>Wide angle (10-35mm)</strong> captures broad
              scenes. <strong>Normal (35-70mm)</strong> approximates human
              vision. <strong>Telephoto (70-400mm+)</strong> magnifies distant
              subjects and compresses perspective.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <p className="font-medium mb-1">How to use this EXIF data:</p>
              <p>
                Look at photos you admire and check the focal length. Portraits
                are often shot at 85-135mm. Landscapes often use 16-35mm.
                Street photography typically uses 28-50mm. This tells you what
                lens was used and helps with purchasing decisions.
              </p>
            </div>
          </div>
        </section>

        {/* White Balance */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            White Balance
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-gray-600 mb-3">
              <strong>EXIF field:</strong>{" "}
              <code className="bg-gray-100 px-1 rounded text-sm">
                WhiteBalance
              </code>
            </p>
            <p className="text-gray-600 mb-3">
              White balance adjusts color temperature so whites appear neutral
              under different lighting. Common values in EXIF are
              &quot;Auto,&quot; &quot;Daylight,&quot; &quot;Cloudy,&quot;
              &quot;Tungsten,&quot; &quot;Fluorescent,&quot; and
              &quot;Flash.&quot; Incorrect white balance makes photos look too
              blue (cool) or too orange (warm).
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <p className="font-medium mb-1">How to use this EXIF data:</p>
              <p>
                If a photo has accurate colors, check what white balance was
                used in that lighting condition. If your indoor photos look
                orange, you may need to switch from Auto to Tungsten white
                balance.
              </p>
            </div>
          </div>
        </section>

        {/* Flash */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Flash
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-gray-600 mb-3">
              <strong>EXIF field:</strong>{" "}
              <code className="bg-gray-100 px-1 rounded text-sm">Flash</code>
            </p>
            <p className="text-gray-600 mb-3">
              The Flash EXIF field records whether the flash fired and in what
              mode. Values include &quot;No flash,&quot; &quot;Flash fired,&quot;
              &quot;Flash fired, auto mode,&quot; &quot;Flash fired, red-eye
              reduction,&quot; and &quot;Flash did not fire, compulsory flash
              suppression.&quot;
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <p className="font-medium mb-1">How to use this EXIF data:</p>
              <p>
                Check whether well-lit indoor photos used flash or relied on
                available light with high ISO. Many professional-looking photos
                are shot without flash using wide apertures and high ISO,
                while event photos often use flash with moderate settings.
              </p>
            </div>
          </div>
        </section>

        {/* Metering Mode */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Metering Mode
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <p className="text-gray-600 mb-3">
              <strong>EXIF field:</strong>{" "}
              <code className="bg-gray-100 px-1 rounded text-sm">
                MeteringMode
              </code>
            </p>
            <p className="text-gray-600 mb-3">
              Metering mode tells the camera how to measure light in the scene.
              Common modes: <strong>Matrix/Evaluative</strong> (measures the
              entire frame), <strong>Center-weighted</strong> (prioritizes the
              center), and <strong>Spot</strong> (measures a small point,
              usually the focus area).
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
              <p className="font-medium mb-1">How to use this EXIF data:</p>
              <p>
                If a photo has correct exposure in a tricky lighting situation
                (backlit subject, stage lighting), check the metering mode. Spot
                metering is often used when the subject is much brighter or
                darker than the surroundings.
              </p>
            </div>
          </div>
        </section>

        {/* Reference table */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Quick Reference: Common Camera Settings
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Scenario
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Aperture
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Shutter
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    ISO
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Focal Length
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    Portrait (blurry background)
                  </td>
                  <td className="px-4 py-2 text-gray-600">f/1.4 - f/2.8</td>
                  <td className="px-4 py-2 text-gray-600">1/125 - 1/250</td>
                  <td className="px-4 py-2 text-gray-600">100 - 400</td>
                  <td className="px-4 py-2 text-gray-600">85 - 135mm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">
                    Landscape (everything sharp)
                  </td>
                  <td className="px-4 py-2 text-gray-600">f/8 - f/16</td>
                  <td className="px-4 py-2 text-gray-600">1/30 - 1/250</td>
                  <td className="px-4 py-2 text-gray-600">100 - 200</td>
                  <td className="px-4 py-2 text-gray-600">16 - 35mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    Sports / Action
                  </td>
                  <td className="px-4 py-2 text-gray-600">f/2.8 - f/5.6</td>
                  <td className="px-4 py-2 text-gray-600">1/500 - 1/2000</td>
                  <td className="px-4 py-2 text-gray-600">400 - 3200</td>
                  <td className="px-4 py-2 text-gray-600">70 - 400mm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">
                    Night / Low light
                  </td>
                  <td className="px-4 py-2 text-gray-600">f/1.4 - f/2.8</td>
                  <td className="px-4 py-2 text-gray-600">1/30 - 30s</td>
                  <td className="px-4 py-2 text-gray-600">1600 - 12800</td>
                  <td className="px-4 py-2 text-gray-600">24 - 50mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    Street photography
                  </td>
                  <td className="px-4 py-2 text-gray-600">f/5.6 - f/8</td>
                  <td className="px-4 py-2 text-gray-600">1/125 - 1/500</td>
                  <td className="px-4 py-2 text-gray-600">200 - 800</td>
                  <td className="px-4 py-2 text-gray-600">28 - 50mm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">
                    Macro / Close-up
                  </td>
                  <td className="px-4 py-2 text-gray-600">f/8 - f/16</td>
                  <td className="px-4 py-2 text-gray-600">1/125 - 1/250</td>
                  <td className="px-4 py-2 text-gray-600">100 - 400</td>
                  <td className="px-4 py-2 text-gray-600">90 - 105mm</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">
                    Waterfall (silky water)
                  </td>
                  <td className="px-4 py-2 text-gray-600">f/11 - f/16</td>
                  <td className="px-4 py-2 text-gray-600">0.5s - 5s</td>
                  <td className="px-4 py-2 text-gray-600">50 - 100</td>
                  <td className="px-4 py-2 text-gray-600">16 - 70mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to learn from EXIF */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Use EXIF Data to Improve Your Photography
          </h2>
          <ol className="space-y-4 text-gray-600 list-decimal list-inside">
            <li>
              <strong>Study photos you admire.</strong> Upload them to our{" "}
              <a href="/" className="text-teal-600 hover:underline">
                metadata viewer
              </a>{" "}
              to see the exact settings used. If you downloaded the photo from a
              source that preserves EXIF (like 500px or Flickr), all settings
              will be visible.
            </li>
            <li>
              <strong>Review your own best shots.</strong> Look at your personal
              favorites and note the settings. You will start to see patterns —
              certain focal lengths or apertures you gravitate toward.
            </li>
            <li>
              <strong>Compare successes and failures.</strong> If a photo is too
              dark, blurry, or noisy, check the EXIF to understand why. Was the
              shutter speed too slow? Was ISO pushed too high?
            </li>
            <li>
              <strong>Track your progress.</strong> As you practice, compare EXIF
              data from your recent photos to earlier ones. You will see your
              technical skills improving as you make better exposure decisions.
            </li>
            <li>
              <strong>Learn lens characteristics.</strong> By checking focal
              length on your zoom lens photos, you can discover which focal
              lengths you use most — which can inform your next lens purchase.
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
          <p className="text-gray-900 font-medium mb-1">
            Check the camera settings on any photo
          </p>
          <p className="text-gray-600 text-sm mb-3">
            Upload a photo to instantly see aperture, shutter speed, ISO, focal
            length, and all other EXIF data.
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
              href="/what-is-exif"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">What Is EXIF Data?</p>
              <p className="text-sm text-gray-600 mt-1">
                Complete guide to all types of metadata stored in photos.
              </p>
            </a>
            <a
              href="/gps-data"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">GPS Data in Photos</p>
              <p className="text-sm text-gray-600 mt-1">
                How location coordinates get embedded in your images.
              </p>
            </a>
            <a
              href="/privacy-guide"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">Photo Privacy Guide</p>
              <p className="text-sm text-gray-600 mt-1">
                What personal information your photos reveal and how to stay
                safe.
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
                Strip EXIF data from your photos before sharing online.
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
                Why does my phone EXIF show f/1.8 for every photo?
              </h3>
              <p className="text-gray-600">
                Most smartphones have a fixed aperture lens — it cannot change.
                The iPhone main camera, for example, is always f/1.8 or similar.
                The phone controls exposure only through shutter speed and ISO.
                Only dedicated cameras with interchangeable lenses (DSLRs and
                mirrorless) have adjustable apertures.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What does &quot;35mm equivalent focal length&quot; mean in EXIF?
              </h3>
              <p className="text-gray-600">
                Cameras with smaller sensors have a crop factor that changes the
                effective field of view. The &quot;35mm equivalent&quot; field
                translates the actual focal length to what it would be on a
                full-frame (35mm) camera. This makes it easier to compare photos
                from different camera systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I see EXIF data for RAW files?
              </h3>
              <p className="text-gray-600">
                Yes. RAW files (CR2, NEF, ARW, DNG) contain extensive EXIF data
                — often more than JPEGs, including proprietary manufacturer data.
                Our{" "}
                <a href="/" className="text-teal-600 hover:underline">
                  metadata viewer
                </a>{" "}
                supports reading EXIF from most common image formats.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do phone cameras record lens information in EXIF?
              </h3>
              <p className="text-gray-600">
                Yes. Modern phones with multiple cameras (ultra-wide, main,
                telephoto) record which lens was used. The EXIF will show the
                actual focal length of that specific lens module. For example, an
                iPhone might show 6.86mm (main), 2.22mm (ultra-wide), or 9mm
                (telephoto).
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
                name: "Camera Settings",
                item: "https://photometadata.net/camera-settings",
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
                name: "Why does my phone EXIF show f/1.8 for every photo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most smartphones have a fixed aperture lens — it cannot change. The iPhone main camera, for example, is always f/1.8 or similar. The phone controls exposure only through shutter speed and ISO. Only dedicated cameras with interchangeable lenses (DSLRs and mirrorless) have adjustable apertures.",
                },
              },
              {
                "@type": "Question",
                name: 'What does "35mm equivalent focal length" mean in EXIF?',
                acceptedAnswer: {
                  "@type": "Answer",
                  text: 'Cameras with smaller sensors have a crop factor that changes the effective field of view. The "35mm equivalent" field translates the actual focal length to what it would be on a full-frame (35mm) camera. This makes it easier to compare photos from different camera systems.',
                },
              },
              {
                "@type": "Question",
                name: "Can I see EXIF data for RAW files?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. RAW files (CR2, NEF, ARW, DNG) contain extensive EXIF data — often more than JPEGs, including proprietary manufacturer data. Our metadata viewer supports reading EXIF from most common image formats.",
                },
              },
              {
                "@type": "Question",
                name: "Do phone cameras record lens information in EXIF?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Modern phones with multiple cameras (ultra-wide, main, telephoto) record which lens was used. The EXIF will show the actual focal length of that specific lens module. For example, an iPhone might show 6.86mm (main), 2.22mm (ultra-wide), or 9mm (telephoto).",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
