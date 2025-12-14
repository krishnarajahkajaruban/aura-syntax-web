
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MOCK_DATA_PATH = path.join(__dirname, '../src/data/mockData.ts');
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

const BASE_URL = 'https://www.aurasyntax.com';

function extractIds(content, arrayName) {
    const regex = new RegExp(`export const ${arrayName}.*?\\[([\\s\\S]*?)\\];`, 'm');
    const match = content.match(regex);
    if (!match) return [];

    const block = match[1];
    const ids = [];
    // Match: newline, 4 spaces, id: <digits>, comma
    const idRegex = /^\s{4}id:\s*(\d+),/gm;
    let idMatch;
    while ((idMatch = idRegex.exec(block)) !== null) {
        // deduplicate
        if (!ids.includes(idMatch[1])) {
            ids.push(idMatch[1]);
        }
    }
    return ids;
}

try {
    const mockDataContent = fs.readFileSync(MOCK_DATA_PATH, 'utf-8');
    const serviceIds = extractIds(mockDataContent, 'services');
    const projectIds = extractIds(mockDataContent, 'projects');

    const staticPages = [
        '',
        '/privacy',
        '/terms'
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
${serviceIds.map(id => `  <url>
    <loc>${BASE_URL}/services/${id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}
${projectIds.map(id => `  <url>
    <loc>${BASE_URL}/projects/${id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, xml);
    console.log(`Sitemap generated successfully with ${staticPages.length + serviceIds.length + projectIds.length} URLs.`);
} catch (error) {
    console.error("Error generating sitemap:", error);
    process.exit(1);
}
