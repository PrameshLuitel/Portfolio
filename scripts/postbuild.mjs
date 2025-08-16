import { writeFile, readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const outDir = 'out';
const domain = 'https://prameshluitel.com.np';

async function generateSitemap() {
  const urls = [];

  async function findHtmlFiles(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        await findHtmlFiles(fullPath);
      } else if (extname(entry.name) === '.html') {
        let route = fullPath.replace(outDir, '').replace(/\\/g, '/').replace('/index.html', '');
        if (route === '') {
            route = '/';
        } else if (route.endsWith('/index')) {
            route = route.slice(0, -5);
        }
        
        // Handle the root index.html
        if (entry.name === 'index.html' && dir === outDir) {
             if (!urls.find(u => u.loc === `${domain}/`)) {
                urls.push({ loc: `${domain}/`, lastmod: new Date().toISOString() });
             }
        } else {
             if (!urls.find(u => u.loc === `${domain}${route}`)) {
                urls.push({ loc: `${domain}${route}`, lastmod: new Date().toISOString() });
             }
        }
      }
    }
  }

  await findHtmlFiles(outDir);
  
  // Ensure the root path is included if not already
  if (!urls.find(u => u.loc === `${domain}/`)) {
    urls.unshift({ loc: `${domain}/`, lastmod: new Date().toISOString() });
  }

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <priority>${url.loc === `${domain}/` ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  try {
    await writeFile(join(outDir, 'sitemap.xml'), sitemapContent.trim());
    console.log('sitemap.xml generated successfully.');
  } catch (error) {
    console.error('Error writing sitemap.xml:', error);
  }
}

generateSitemap();
