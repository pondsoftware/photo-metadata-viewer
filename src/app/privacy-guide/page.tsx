import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Privacy Guide — What Your Photos Reveal About You",
  description:
    "Learn what personal information your photos can reveal including GPS coordinates, device serial numbers, and timestamps. Includes a safety checklist for sharing photos online.",
  alternates: {
    canonical: "/privacy-guide",
  },
  openGraph: {
    title: "Photo Privacy Guide — What Your Photos Reveal About You",
    description:
      "Learn what personal information your photos can reveal and how to share safely online.",
    type: "article",
    url: "https://photometadata.net/privacy-guide",
  },
};

export default function PrivacyGuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="text-teal-600 hover:underline">
          Home
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Privacy Guide</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Photo Privacy Guide: What Your Photos Reveal About You
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-10">
        Every photo you share online can expose more personal information than
        you realize. This guide covers what data is at risk, real-world
        examples of privacy breaches, and a complete checklist for sharing
        photos safely.
      </p>

      <div className="space-y-10">
        {/* What photos reveal */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What Personal Information Can Photos Reveal?
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-red-700 mb-2">
                GPS Coordinates (Exact Location)
              </h3>
              <p className="text-gray-600">
                Most smartphones embed GPS coordinates accurate to within 3-5
                meters. A single photo can reveal your home address, workplace,
                gym, children&apos;s school, doctor&apos;s office, or any other
                location you photograph. Multiple photos create a detailed map of
                your daily life.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-amber-700 mb-2">
                Device Serial Numbers &amp; Unique IDs
              </h3>
              <p className="text-gray-600">
                Camera serial numbers and unique image identifiers can link
                photos posted under different accounts or on different platforms
                back to the same person. Even if you use an anonymous username,
                the device fingerprint can de-anonymize you.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-amber-700 mb-2">
                Timestamps &amp; Patterns
              </h3>
              <p className="text-gray-600">
                Exact timestamps reveal when you were at a location, your daily
                schedule, sleep patterns (late-night photos), work hours, and
                travel dates. Combined with GPS, they show that you leave home at
                7:30 AM every weekday, for example.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-700 mb-2">
                Camera &amp; Phone Model
              </h3>
              <p className="text-gray-600">
                Knowing someone uses a specific phone model or expensive camera
                body can be used for social engineering, targeted scams, or to
                identify high-value targets for theft.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-700 mb-2">
                Software &amp; Editing History
              </h3>
              <p className="text-gray-600">
                The software field reveals what apps you use. Edit history in XMP
                data can show that an image was manipulated, which can be
                relevant in legal or journalistic contexts.
              </p>
            </div>
          </div>
        </section>

        {/* Real-world examples */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Real-World Privacy Risks
          </h2>
          <div className="space-y-4 text-gray-600">
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-medium text-gray-900">
                Home address exposed via listing photos
              </p>
              <p className="mt-1">
                People selling items on marketplace sites often photograph the
                item at home. If the photo contains GPS data, the buyer knows
                exactly where the seller lives — including that they have
                valuable items.
              </p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-medium text-gray-900">
                Vacation photos reveal empty homes
              </p>
              <p className="mt-1">
                Posting vacation photos with timestamps and GPS data confirms you
                are far from home and when you left. Burglars have used social
                media metadata to identify empty homes.
              </p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-medium text-gray-900">
                Celebrity location tracking
              </p>
              <p className="mt-1">
                Photos posted by public figures have been used to identify
                private residences, frequented restaurants, and travel patterns
                through EXIF GPS data before platforms began stripping it.
              </p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-medium text-gray-900">
                Whistleblower identification
              </p>
              <p className="mt-1">
                Leaked documents and photos containing device serial numbers or
                unique printer tracking dots have been used to identify
                anonymous sources, sometimes with serious legal consequences.
              </p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-medium text-gray-900">
                Cross-platform de-anonymization
              </p>
              <p className="mt-1">
                Researchers have demonstrated linking anonymous accounts across
                platforms by matching camera serial numbers in EXIF data of
                posted photos.
              </p>
            </div>
          </div>
        </section>

        {/* Safety checklist */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Checklist: Sharing Photos Safely Online
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-600">
                <span className="text-teal-600 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <strong>Strip all metadata</strong> before uploading to any
                  site that doesn&apos;t automatically remove it. Use our{" "}
                  <a href="/" className="text-teal-600 hover:underline">
                    metadata viewer &amp; remover
                  </a>
                  .
                </span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <span className="text-teal-600 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <strong>Disable GPS tagging</strong> on your phone camera if
                  you do not actively use it. See our{" "}
                  <a href="/gps-data" className="text-teal-600 hover:underline">
                    GPS data guide
                  </a>{" "}
                  for instructions.
                </span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <span className="text-teal-600 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <strong>Check the platform&apos;s policy.</strong> Social media
                  like Instagram and Twitter strip metadata, but email, forums,
                  cloud storage, and many messaging apps do not.
                </span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <span className="text-teal-600 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <strong>Be cautious with original files.</strong> Downloading
                  someone&apos;s &quot;original&quot; photo from a cloud share gives you
                  all their metadata. Conversely, if you share originals, others
                  get yours.
                </span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <span className="text-teal-600 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <strong>Don&apos;t post photos of your home</strong> or
                  identifiable surroundings if you share the original files on
                  platforms that keep metadata.
                </span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <span className="text-teal-600 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <strong>Delay vacation photos</strong> until you are home. Real-time vacation
                  posts with GPS confirm you are away from home.
                </span>
              </li>
              <li className="flex gap-3 text-gray-600">
                <span className="text-teal-600 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span>
                  <strong>Verify after stripping.</strong> After removing
                  metadata, re-upload the cleaned photo to our{" "}
                  <a href="/" className="text-teal-600 hover:underline">
                    metadata viewer
                  </a>{" "}
                  to confirm no data remains.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Which platforms strip */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Which Platforms Strip Metadata Automatically?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Platform
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Strips GPS?
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Strips All EXIF?
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">Facebook</td>
                  <td className="px-4 py-2 text-green-600">Yes</td>
                  <td className="px-4 py-2 text-green-600">Yes</td>
                  <td className="px-4 py-2 text-gray-600">Strips on upload, but Facebook stores it internally</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">Instagram</td>
                  <td className="px-4 py-2 text-green-600">Yes</td>
                  <td className="px-4 py-2 text-green-600">Yes</td>
                  <td className="px-4 py-2 text-gray-600">Metadata removed from public images</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">Twitter/X</td>
                  <td className="px-4 py-2 text-green-600">Yes</td>
                  <td className="px-4 py-2 text-green-600">Yes</td>
                  <td className="px-4 py-2 text-gray-600">Stripped since 2014</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">WhatsApp</td>
                  <td className="px-4 py-2 text-green-600">Yes</td>
                  <td className="px-4 py-2 text-green-600">Yes</td>
                  <td className="px-4 py-2 text-gray-600">Photos are re-compressed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">Signal</td>
                  <td className="px-4 py-2 text-green-600">Yes</td>
                  <td className="px-4 py-2 text-green-600">Yes</td>
                  <td className="px-4 py-2 text-gray-600">Stripped by default</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">Email attachments</td>
                  <td className="px-4 py-2 text-red-600">No</td>
                  <td className="px-4 py-2 text-red-600">No</td>
                  <td className="px-4 py-2 text-gray-600">Files sent as-is with all metadata</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">Google Drive</td>
                  <td className="px-4 py-2 text-red-600">No</td>
                  <td className="px-4 py-2 text-red-600">No</td>
                  <td className="px-4 py-2 text-gray-600">Original files preserved exactly</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">Dropbox</td>
                  <td className="px-4 py-2 text-red-600">No</td>
                  <td className="px-4 py-2 text-red-600">No</td>
                  <td className="px-4 py-2 text-gray-600">Files stored and shared with full metadata</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium text-gray-800">iMessage</td>
                  <td className="px-4 py-2 text-amber-600">Partial</td>
                  <td className="px-4 py-2 text-red-600">No</td>
                  <td className="px-4 py-2 text-gray-600">Keeps most metadata; may strip some fields</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-800">Slack</td>
                  <td className="px-4 py-2 text-red-600">No</td>
                  <td className="px-4 py-2 text-red-600">No</td>
                  <td className="px-4 py-2 text-gray-600">Files uploaded with full metadata intact</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
          <p className="text-gray-900 font-medium mb-1">
            Check your photos for privacy risks
          </p>
          <p className="text-gray-600 text-sm mb-3">
            Upload any photo to see exactly what data it contains — then strip
            it with one click.
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
              href="/remove-metadata"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">
                Remove Photo Metadata
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Step-by-step instructions for stripping EXIF data on every
                platform.
              </p>
            </a>
            <a
              href="/gps-data"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">GPS Data in Photos</p>
              <p className="text-sm text-gray-600 mt-1">
                Deep dive into how GPS coordinates get embedded and how to
                disable geotagging.
              </p>
            </a>
            <a
              href="/what-is-exif"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-400 transition"
            >
              <p className="font-semibold text-gray-900">What Is EXIF Data?</p>
              <p className="text-sm text-gray-600 mt-1">
                Complete guide to EXIF data, file format support, and common
                fields.
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
                Can someone find my home address from a photo?
              </h3>
              <p className="text-gray-600">
                Yes, if the photo contains GPS coordinates and was taken at your
                home. GPS in photos is typically accurate to within 3-5 meters —
                enough to pinpoint your exact building. Always strip metadata
                from photos taken at home before sharing them publicly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is photo metadata used in legal cases?
              </h3>
              <p className="text-gray-600">
                Yes. EXIF data is routinely used as evidence in legal
                proceedings. GPS coordinates can place a person at a location,
                timestamps can establish timelines, and device serial numbers can
                link photos to specific people. However, since EXIF can be
                modified, it is usually considered supporting evidence rather than
                conclusive proof.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do social media apps store my metadata even if they strip it
                from the public image?
              </h3>
              <p className="text-gray-600">
                Most major platforms (Facebook, Instagram, Google) strip metadata
                from publicly visible images but retain the original metadata in
                their internal systems. They use this data for features like
                photo maps, memories, and targeted advertising. Check each
                platform&apos;s privacy policy for details.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What about photos other people take of me?
              </h3>
              <p className="text-gray-600">
                You have limited control over photos others take. If someone
                photographs you and posts the image with metadata intact, that
                location data is public. You can ask people not to tag you or
                share location-tagged photos of you, but ultimately you cannot
                control other people&apos;s devices or sharing habits.
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
                name: "Privacy Guide",
                item: "https://photometadata.net/privacy-guide",
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
                name: "Can someone find my home address from a photo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, if the photo contains GPS coordinates and was taken at your home. GPS in photos is typically accurate to within 3-5 meters — enough to pinpoint your exact building. Always strip metadata from photos taken at home before sharing them publicly.",
                },
              },
              {
                "@type": "Question",
                name: "Is photo metadata used in legal cases?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. EXIF data is routinely used as evidence in legal proceedings. GPS coordinates can place a person at a location, timestamps can establish timelines, and device serial numbers can link photos to specific people. However, since EXIF can be modified, it is usually considered supporting evidence rather than conclusive proof.",
                },
              },
              {
                "@type": "Question",
                name: "Do social media apps store my metadata even if they strip it from the public image?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most major platforms (Facebook, Instagram, Google) strip metadata from publicly visible images but retain the original metadata in their internal systems. They use this data for features like photo maps, memories, and targeted advertising. Check each platform's privacy policy for details.",
                },
              },
              {
                "@type": "Question",
                name: "What about photos other people take of me?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You have limited control over photos others take. If someone photographs you and posts the image with metadata intact, that location data is public. You can ask people not to tag you or share location-tagged photos of you, but ultimately you cannot control other people's devices or sharing habits.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
