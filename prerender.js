import fs from 'fs';
import path from 'path';

const PAGES = [
  {
    route: 'about',
    title: 'About Us | R SUTARIYA EXPORTS - Established Heritage Exporter Since 1973',
    description: 'Discover the legacy of R SUTARIYA EXPORTS, premier family-owned B2B lab-grown diamond manufacturer from Surat (Gujarat), India. Crafting premium HPHT & CVD diamonds since 1973.'
  },
  {
    route: 'collection',
    title: 'B2B Lab-Grown Diamond Collection | R SUTARIYA EXPORTS',
    description: 'Explore our premium wholesale collection of IGI, GIA, and HRD certified HPHT & CVD lab-grown diamonds. Available in 16+ shapes, including Round, Oval, and Marquise.'
  },
  {
    route: 'certifications',
    title: 'IGI, GIA & HRD Certified Diamonds | R SUTARIYA EXPORTS',
    description: 'Verify our world-class diamond quality standards. We offer fully certified lab-grown diamonds with documentation from leading gemological laboratories (IGI, GIA, HRD).'
  },
  {
    route: 'export-shipping',
    title: 'Secure Global Diamond Export & Shipping | R SUTARIYA EXPORTS',
    description: 'Learn about our insured door-to-door global shipping from Surat (Gujarat), India. Serving jewelry businesses in the USA, Europe, UK, and worldwide via Malca-Amit & Brinks.'
  },
  {
    route: 'diamond-journey',
    title: 'The Interactive Diamond Journey | R SUTARIYA EXPORTS',
    description: 'Take a step-by-step interactive journey through our diamond manufacturing process, from raw carbon seed growth under HPHT technology to precision cutting and certification.'
  },
  {
    route: 'contact',
    title: 'Contact B2B Sales Team | R SUTARIYA EXPORTS',
    description: 'Get in touch with our B2B sales team in Surat (Gujarat), India. Request custom wholesale price quotes, order details, or logistics support for HPHT & CVD diamonds.'
  }
];

const BASE_URL = 'https://rsutariyaexports.com';

async function run() {
  const distDir = path.resolve('dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('Error: dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(indexHtmlPath, 'utf8');

  for (const page of PAGES) {
    const pageUrl = `${BASE_URL}/${page.route}`;
    let html = template;

    // Replace canonical link
    html = html.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${pageUrl}" />`
    );

    // Replace og:url
    html = html.replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${pageUrl}" />`
    );

    // Replace page title
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${page.title}</title>`
    );

    // Replace og:title
    html = html.replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${page.title}" />`
    );

    // Replace page description
    html = html.replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${page.description}" />`
    );

    // Replace og:description
    html = html.replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${page.description}" />`
    );

    // Create target directory
    const targetDir = path.join(distDir, page.route);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Write index.html for the route
    const targetHtmlPath = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetHtmlPath, html, 'utf8');
    console.log(`Pre-rendered route: /${page.route} -> dist/${page.route}/index.html`);
  }

  console.log('Pre-rendering of all SPA route shells complete!');
}

run().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
