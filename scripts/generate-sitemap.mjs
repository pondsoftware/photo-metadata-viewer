import { writeFileSync } from "fs";

const DOMAIN = "https://photometadata.net";

const cameraBrands = [
  "canon", "nikon", "sony", "fujifilm", "panasonic", "olympus", "leica",
  "pentax", "samsung", "apple", "google", "huawei", "dji", "gopro", "hasselblad",
];

const urls = [
  "/",
  "/what-is-exif",
  "/remove-metadata",
  "/privacy-guide",
  "/camera-settings",
  "/gps-data",
  "/cameras",
  ...cameraBrands.map((b) => `/cameras/${b}`),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${DOMAIN}${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", sitemap);
console.log(`Sitemap generated: ${urls.length} URLs`);
