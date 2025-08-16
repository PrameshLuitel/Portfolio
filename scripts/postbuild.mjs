import { glob } from 'glob';
import { writeFile, mkdir } from 'fs/promises';
import { dirname } from 'path';

async function generateSitemap() {
  const pages = await glob('src/app/**/page.tsx');
  const baseUrl = 'https://prameshluitel.com.np';
  const today = new Date().toISOString().split('T')[0];

  const sitemapEntries = pages
    .map(page => {
      const path = page
        .replace('src/app', '')
        .replace('/page.tsx', '')
        .replace(/\/index$/, '');
      const url = `${baseUrl}${path || '/'}`;
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
</urlset>`;

  const outDir = 'out';
  try {
    await mkdir(outDir, { recursive: true });
    await writeFile(`${outDir}/sitemap.xml`, sitemap, 'utf-8');
    console.log('Sitemap generated successfully at out/sitemap.xml');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

async function main() {
  await generateSitemap();
}

main();
