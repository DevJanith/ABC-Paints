const fs = require('fs');
const path = require('path');
const https = require('https');
const { create } = require('xmlbuilder');
require('dotenv').config();

const SHEET_ID = process.env.VITE_GOOGLE_SHEET_ID;
const DOMAIN = process.env.VITE_SITE_URL || 'https://abcpaints.lk';

const staticRoutes = [
    '/',
    '/about',
    '/products',
    '/services',
    '/calculator',
    '/contractors',
    '/contact',
    '/sellers'
];

// Helper to fetch CSV
const fetchCSV = (sheetName) => {
    return new Promise((resolve, reject) => {
        const url = `https://docs.google.com/spreadsheets/u/0/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', (err) => reject(err));
    });
};

const parseCSV = (csvText) => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());

    return lines.slice(1).map(line => {
        const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
        const entry = {};
        headers.forEach((header, index) => {
            let val = values[index] ? values[index].replace(/^"|"$/g, '') : '';
            entry[header] = val;
        });
        return entry;
    });
};

const generateSitemap = async () => {
    console.log('Generating sitemap...');

    const urlset = create('urlset', { version: '1.0', encoding: 'UTF-8' })
        .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

    // Add static routes
    staticRoutes.forEach(route => {
        urlset.ele('url')
            .ele('loc', `${DOMAIN}${route}`).up()
            .ele('changefreq', 'weekly').up()
            .ele('priority', route === '/' ? '1.0' : '0.8').up();
    });

    try {
        const sitemap = urlset.end({ pretty: true });
        const publicDir = path.resolve(__dirname, '../public');

        // Ensure public dir exists
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir);
        }

        fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
        console.log('Sitemap generated successfully at public/sitemap.xml');

    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
};

generateSitemap();
