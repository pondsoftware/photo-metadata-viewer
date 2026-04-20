"use client";

import { useState, useCallback, useRef } from "react";
import ExifReader from "exifreader";
import JSZip from "jszip";

interface MetadataResult {
  fileName: string;
  fileSize: number;
  fileType: string;
  previewUrl: string;
  file: File;
  gps: { lat: number; lng: number } | null;
  camera: Record<string, string>;
  image: Record<string, string>;
  dates: Record<string, string>;
  all: Record<string, string>;
}

export default function MetadataViewer() {
  const [results, setResults] = useState<MetadataResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isStrippingAll, setIsStrippingAll] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "overview" | "camera" | "dates" | "all"
  >("overview");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (file: File): Promise<MetadataResult> => {
    const arrayBuffer = await file.arrayBuffer();
    const tags = ExifReader.load(arrayBuffer, { expanded: true });
    const previewUrl = URL.createObjectURL(file);

    // Extract GPS
    let gps: { lat: number; lng: number } | null = null;
    if (tags.gps?.Latitude && tags.gps?.Longitude) {
      gps = {
        lat: tags.gps.Latitude,
        lng: tags.gps.Longitude,
      };
    }

    // Helper to get tag value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getVal = (
      group: any,
      key: string
    ): string | undefined => {
      const tag = group?.[key];
      if (!tag) return undefined;
      if (tag.description) return String(tag.description);
      if (tag.value !== undefined) return String(tag.value);
      return undefined;
    };

    // Camera info
    const camera: Record<string, string> = {};
    const exif = tags.exif;
    if (getVal(exif, "Make")) camera["Make"] = getVal(exif, "Make")!;
    if (getVal(exif, "Model")) camera["Model"] = getVal(exif, "Model")!;
    if (getVal(exif, "LensModel"))
      camera["Lens"] = getVal(exif, "LensModel")!;
    if (getVal(exif, "FocalLength"))
      camera["Focal Length"] = getVal(exif, "FocalLength")!;
    if (getVal(exif, "FNumber"))
      camera["Aperture"] = `f/${getVal(exif, "FNumber")}`;
    if (getVal(exif, "ExposureTime"))
      camera["Shutter Speed"] = getVal(exif, "ExposureTime")!;
    if (getVal(exif, "ISOSpeedRatings") || getVal(exif, "PhotographicSensitivity"))
      camera["ISO"] =
        getVal(exif, "ISOSpeedRatings") ||
        getVal(exif, "PhotographicSensitivity") ||
        "";
    if (getVal(exif, "Flash")) camera["Flash"] = getVal(exif, "Flash")!;
    if (getVal(exif, "WhiteBalance"))
      camera["White Balance"] = getVal(exif, "WhiteBalance")!;
    if (getVal(exif, "ExposureMode"))
      camera["Exposure Mode"] = getVal(exif, "ExposureMode")!;
    if (getVal(exif, "MeteringMode"))
      camera["Metering"] = getVal(exif, "MeteringMode")!;

    // Image info
    const image: Record<string, string> = {};
    if (getVal(exif, "PixelXDimension") && getVal(exif, "PixelYDimension"))
      image["Dimensions"] = `${getVal(exif, "PixelXDimension")} x ${getVal(exif, "PixelYDimension")}`;
    if (getVal(exif, "Orientation"))
      image["Orientation"] = getVal(exif, "Orientation")!;
    if (getVal(exif, "ColorSpace"))
      image["Color Space"] = getVal(exif, "ColorSpace")!;
    if (getVal(exif, "Software"))
      image["Software"] = getVal(exif, "Software")!;

    // Dates
    const dates: Record<string, string> = {};
    if (getVal(exif, "DateTimeOriginal"))
      dates["Date Taken"] = getVal(exif, "DateTimeOriginal")!;
    if (getVal(exif, "DateTimeDigitized"))
      dates["Date Digitized"] = getVal(exif, "DateTimeDigitized")!;
    if (getVal(exif, "DateTime"))
      dates["Last Modified"] = getVal(exif, "DateTime")!;

    // All tags flattened
    const all: Record<string, string> = {};
    for (const group of Object.values(tags)) {
      if (typeof group !== "object" || group === null) continue;
      for (const [key, tag] of Object.entries(
        group as Record<string, { description?: string; value?: unknown }>
      )) {
        if (key === "MakerNote" || key === "UserComment") continue;
        const val = tag?.description || (tag?.value !== undefined ? String(tag.value) : null);
        if (val && val.length < 200) all[key] = val;
      }
    }

    return {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      previewUrl,
      file,
      gps,
      camera,
      image,
      dates,
      all,
    };
  }, []);

  const processFiles = useCallback(async (files: FileList | File[]) => {
    setIsLoading(true);
    try {
      const fileArray = Array.from(files).filter(f => f.type.startsWith("image/"));
      if (fileArray.length === 0) {
        alert("No valid image files found.");
        return;
      }
      const processed: MetadataResult[] = [];
      for (const file of fileArray) {
        try {
          const result = await processFile(file);
          processed.push(result);
        } catch {
          // Skip files that can't be processed
        }
      }
      if (processed.length === 0) {
        alert("Could not read metadata from any of the selected files.");
        return;
      }
      setResults(processed);
      setSelectedIndex(0);
      setActiveTab("overview");
    } finally {
      setIsLoading(false);
    }
  }, [processFile]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const files = e.dataTransfer.files;
      if (files.length > 0) processFiles(files);
    },
    [processFiles]
  );

  const stripSingleFile = useCallback((result: MetadataResult) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          const baseName = result.fileName.replace(/\.[^.]+$/, "");
          a.href = url;
          a.download = `${baseName}-clean.jpg`;
          a.click();
          URL.revokeObjectURL(url);
        },
        "image/jpeg",
        0.95
      );
    };
    img.src = result.previewUrl;
  }, []);

  const stripAllAndDownload = useCallback(async () => {
    if (results.length === 0) return;
    setIsStrippingAll(true);

    try {
      if (results.length === 1) {
        stripSingleFile(results[0]);
        return;
      }

      const zip = new JSZip();

      const stripFile = (result: MetadataResult): Promise<Blob | null> => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d");
            if (!ctx) { resolve(null); return; }
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(
              (blob) => resolve(blob),
              "image/jpeg",
              0.95
            );
          };
          img.onerror = () => resolve(null);
          img.src = result.previewUrl;
        });
      };

      for (const result of results) {
        const blob = await stripFile(result);
        if (blob) {
          const baseName = result.fileName.replace(/\.[^.]+$/, "");
          zip.file(`${baseName}-clean.jpg`, blob);
        }
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "photos-stripped.zip";
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setIsStrippingAll(false);
    }
  }, [results, stripSingleFile]);

  const selectedResult = results[selectedIndex] || null;

  return (
    <div className="space-y-6">
      {/* Drop Zone */}
      {results.length === 0 && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-16 text-center cursor-pointer transition ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => e.target.files && e.target.files.length > 0 && processFiles(e.target.files)}
            className="hidden"
          />
          {isLoading ? (
            <div className="w-8 h-8 mx-auto border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <svg
                className="w-12 h-12 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-lg font-medium text-gray-700">
                Drop photos here or click to browse
              </p>
              <p className="text-sm text-gray-500 mt-1">
                JPG, PNG, TIFF, WEBP — upload one or multiple images
              </p>
            </>
          )}
        </div>
      )}

      {/* Batch File Grid */}
      {results.length > 1 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">
              {results.length} Photos Loaded
            </h3>
            <div className="flex gap-3">
              <button
                onClick={stripAllAndDownload}
                disabled={isStrippingAll}
                className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isStrippingAll ? "Processing..." : "Strip All & Download ZIP"}
              </button>
              <button
                onClick={() => {
                  results.forEach(r => URL.revokeObjectURL(r.previewUrl));
                  setResults([]);
                  setSelectedIndex(0);
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition"
              >
                Clear All
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {results.map((r, idx) => (
              <div
                key={idx}
                onClick={() => { setSelectedIndex(idx); setActiveTab("overview"); }}
                className={`rounded-lg border p-2 cursor-pointer transition hover:shadow-md ${
                  idx === selectedIndex
                    ? "border-blue-500 ring-2 ring-blue-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.previewUrl}
                  alt={r.fileName}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p className="text-xs font-medium text-gray-800 truncate" title={r.fileName}>
                  {r.fileName}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {r.camera["Model"] || "Unknown camera"}
                </p>
                <p className="text-xs text-gray-500">
                  {r.image["Dimensions"] || "Unknown size"}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {r.gps ? (
                    <span className="inline-flex items-center text-xs text-red-600">
                      <svg className="w-3 h-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      GPS
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">No GPS</span>
                  )}
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); stripSingleFile(r); }}
                  className="mt-2 w-full px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium hover:bg-gray-200 transition"
                >
                  Strip & Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected File Details */}
      {selectedResult && (
        <div className="space-y-6">
          {/* Image preview + actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="sm:w-48 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedResult.previewUrl}
                  alt="Preview"
                  className="w-full rounded-lg object-cover max-h-48"
                />
              </div>
              <div className="flex-1 space-y-2">
                <h2 className="text-lg font-semibold text-gray-900">
                  {selectedResult.fileName}
                </h2>
                <p className="text-sm text-gray-500">
                  {formatSize(selectedResult.fileSize)} &middot;{" "}
                  {selectedResult.fileType || "Unknown type"}
                </p>
                {Object.keys(selectedResult.all).length === 0 ? (
                  <p className="text-sm text-amber-700 bg-amber-50 rounded-lg p-3 mt-2">
                    No EXIF metadata found in this image. It may have been
                    stripped already, or the format doesn&apos;t support EXIF.
                  </p>
                ) : (
                  <p className="text-sm text-gray-500">
                    {Object.keys(selectedResult.all).length} metadata fields found
                  </p>
                )}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => stripSingleFile(selectedResult)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition"
                  >
                    Strip Metadata & Download
                  </button>
                  <button
                    onClick={() => {
                      results.forEach(r => URL.revokeObjectURL(r.previewUrl));
                      setResults([]);
                      setSelectedIndex(0);
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition"
                  >
                    {results.length > 1 ? "Clear All" : "Load Another"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* GPS Map */}
          {selectedResult.gps && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                GPS Location Found
              </h3>
              <div className="rounded-lg overflow-hidden border border-gray-200 mb-3">
                <iframe
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedResult.gps.lng - 0.01},${selectedResult.gps.lat - 0.01},${selectedResult.gps.lng + 0.01},${selectedResult.gps.lat + 0.01}&layer=mapnik&marker=${selectedResult.gps.lat},${selectedResult.gps.lng}`}
                  width="100%"
                  height="300"
                  className="rounded-lg border border-gray-200"
                  style={{ border: 0 }}
                />
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Coordinates:{" "}
                <span className="font-mono">
                  {selectedResult.gps.lat.toFixed(6)}, {selectedResult.gps.lng.toFixed(6)}
                </span>
              </p>
              <a
                href={`https://www.openstreetmap.org/?mlat=${selectedResult.gps.lat}&mlon=${selectedResult.gps.lng}#map=15/${selectedResult.gps.lat}/${selectedResult.gps.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                View on OpenStreetMap &rarr;
              </a>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-3">
                <p className="text-sm text-red-800">
                  <strong>Privacy warning:</strong> This photo reveals exactly
                  where it was taken. If you share this photo online, anyone
                  can see this location. Use the &quot;Strip Metadata&quot; button above
                  to remove this data before sharing.
                </p>
              </div>
            </div>
          )}

          {/* Tabs */}
          {Object.keys(selectedResult.all).length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex border-b border-gray-200">
                {(
                  [
                    ["overview", "Overview"],
                    ["camera", "Camera"],
                    ["dates", "Dates"],
                    ["all", `All (${Object.keys(selectedResult.all).length})`],
                  ] as const
                ).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-4 py-3 text-sm font-medium transition ${
                      activeTab === key
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="p-4">
                <MetadataTable
                  data={
                    activeTab === "overview"
                      ? { ...selectedResult.image, ...selectedResult.camera, ...selectedResult.dates }
                      : activeTab === "camera"
                        ? selectedResult.camera
                        : activeTab === "dates"
                          ? selectedResult.dates
                          : selectedResult.all
                  }
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function MetadataTable({ data }: { data: Record<string, string> }) {
  const entries = Object.entries(data);
  if (entries.length === 0)
    return <p className="text-sm text-gray-500">No data in this category.</p>;

  return (
    <div className="divide-y divide-gray-100">
      {entries.map(([key, value]) => (
        <div key={key} className="flex py-2 text-sm">
          <span className="w-48 shrink-0 font-medium text-gray-600">
            {key}
          </span>
          <span className="text-gray-900 break-all">{value}</span>
        </div>
      ))}
    </div>
  );
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
