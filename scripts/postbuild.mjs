import fs from 'fs';
import path from 'path';

const publicUrl = 'https://prameshluitel.com.np';
const outDir = 'out';

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${publicUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
  console.log('sitemap.xml generated successfully.');
};

// Create scripts directory if it doesn't exist
if (!fs.existsSync('scripts')) {
  fs.mkdirSync('scripts');
}

// Generate sitemap
generateSitemap();
