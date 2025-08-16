import { writeFile } from 'fs/promises';
import { join } from 'path';

async function generateSitemap() {
  const baseUrl = 'https://prameshluitel.com.np';
  const lastModified = new Date().toISOString();

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${lastModified}</lastmod>
    <priority>1.00</priority>
  </url>
</urlset>`;

  const outputPath = join(process.cwd(), 'out', 'sitemap.xml');
  try {
    await writeFile(outputPath, sitemapContent, 'utf-8');
    console.log('Sitemap generated successfully at:', outputPath);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

async function main() {
  await generateSitemap();
}

main();
