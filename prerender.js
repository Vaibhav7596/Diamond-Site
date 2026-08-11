import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://rsutariyaexports.com';

const PAGES = [
  {
    route: 'about',
    title: 'Our Story & Heritage | R SUTARIYA EXPORTS — Family Diamond Manufacturer Since 1973',
    description: 'Learn the story of R SUTARIYA EXPORTS — a family-owned B2B diamond manufacturer founded in Bhavnagar, Gujarat in 1973. Three generations of craftsmanship, HPHT innovation since 2021, and global exports since 2024.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      '@id': `${BASE_URL}/about#webpage`,
      url: `${BASE_URL}/about`,
      name: 'Our Story & Heritage | R SUTARIYA EXPORTS',
      description: 'The multigenerational story of R SUTARIYA EXPORTS — from a small village in Bhavnagar, Gujarat to becoming a premier HPHT lab-grown diamond manufacturer and global exporter in Surat, India.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'R SUTARIYA EXPORTS',
        foundingDate: '1973',
        foundingLocation: {
          '@type': 'Place',
          name: 'Bhavnagar District, Gujarat, India'
        },
        description: 'Three-generation family-owned HPHT and CVD lab-grown diamond manufacturer and B2B exporter based in Surat, Gujarat, India. Established 1973. Exports to Europe, USA, and UK since 2024.',
        employee: [
          {
            '@type': 'Person',
            jobTitle: 'Founder & Diamond Craftsman',
            description: 'Entered the diamond industry in Bhavnagar, Gujarat and built a reputation for quality polishing over 15 years before relocating to Surat.'
          },
          {
            '@type': 'Person',
            jobTitle: 'Second Generation Director',
            description: 'Led the expansion to HPHT Lab-Grown Diamonds in 2021 and initiated European export operations in 2024.'
          }
        ],
        knowsAbout: [
          'HPHT Lab-Grown Diamond Manufacturing',
          'CVD Lab-Grown Diamonds',
          'Diamond Polishing and Cutting',
          'B2B Diamond Export',
          'IGI GIA HRD Certified Diamonds',
          'Diamond Wholesale Europe'
        ],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', name: 'IGI Certified Diamond Supplier' },
          { '@type': 'EducationalOccupationalCredential', name: 'GIA Certified Diamond Supplier' },
          { '@type': 'EducationalOccupationalCredential', name: 'HRD Certified Diamond Supplier' }
        ]
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE_URL}/about` }
        ]
      }
    }
  },
  {
    route: 'collection',
    title: 'Wholesale HPHT Lab-Grown Diamond Collection | 16+ Shapes | R SUTARIYA EXPORTS',
    description: 'Browse our B2B wholesale collection of IGI, GIA and HRD certified HPHT & CVD lab-grown diamonds in 16+ shapes — Round, Oval, Princess, Marquise, Pear, Cushion and more. Factory-direct pricing from Surat, India.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${BASE_URL}/collection#webpage`,
      url: `${BASE_URL}/collection`,
      name: 'Wholesale HPHT Lab-Grown Diamond Collection | R SUTARIYA EXPORTS',
      description: 'B2B wholesale collection of HPHT and CVD lab-grown diamonds in 16+ shapes. IGI, GIA and HRD certified. Oval, Round, Princess, Marquise, Cushion, Pear, Radiant, Heart, Trillion and more. Factory pricing from Surat, India.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: {
        '@type': 'ItemList',
        name: 'HPHT Lab-Grown Diamond Shapes',
        description: 'Available diamond shapes for wholesale B2B orders',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Round Cut HPHT Lab-Grown Diamond' },
          { '@type': 'ListItem', position: 2, name: 'Oval Cut HPHT Lab-Grown Diamond' },
          { '@type': 'ListItem', position: 3, name: 'Princess Cut HPHT Lab-Grown Diamond' },
          { '@type': 'ListItem', position: 4, name: 'Cushion Cut HPHT Lab-Grown Diamond' },
          { '@type': 'ListItem', position: 5, name: 'Pear Cut HPHT Lab-Grown Diamond' },
          { '@type': 'ListItem', position: 6, name: 'Marquise Cut HPHT Lab-Grown Diamond' },
          { '@type': 'ListItem', position: 7, name: 'Radiant Cut HPHT Lab-Grown Diamond' },
          { '@type': 'ListItem', position: 8, name: 'Heart Cut HPHT Lab-Grown Diamond' },
          { '@type': 'ListItem', position: 9, name: 'Emerald Cut HPHT Lab-Grown Diamond' },
          { '@type': 'ListItem', position: 10, name: 'Trillion Cut HPHT Lab-Grown Diamond' }
        ]
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Diamond Collection', item: `${BASE_URL}/collection` }
        ]
      }
    }
  },
  {
    route: 'certifications',
    title: 'IGI, GIA & HRD Certified Lab-Grown Diamonds | R SUTARIYA EXPORTS',
    description: 'All diamonds from R SUTARIYA EXPORTS are certified by IGI, GIA or HRD. Understand how international gemological certification guarantees quality, grading accuracy and buyer confidence for wholesale B2B orders.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${BASE_URL}/certifications#webpage`,
      url: `${BASE_URL}/certifications`,
      name: 'IGI, GIA & HRD Certified Lab-Grown Diamonds | R SUTARIYA EXPORTS',
      description: 'Documentation on IGI, GIA, and HRD certification processes. All lab-grown diamonds exported by R SUTARIYA EXPORTS carry internationally recognised gemological certification.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: [
        { '@type': 'DefinedTerm', name: 'IGI Certification', description: 'International Gemological Institute certified lab-grown diamonds with full 4C grading report.' },
        { '@type': 'DefinedTerm', name: 'GIA Certification', description: 'Gemological Institute of America certified lab-grown diamonds with origin report.' },
        { '@type': 'DefinedTerm', name: 'HRD Certification', description: 'Hoge Raad voor Diamant certified diamonds — preferred by European jewellers.' }
      ],
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Certifications', item: `${BASE_URL}/certifications` }
        ]
      }
    }
  },
  {
    route: 'export-shipping',
    title: 'Secure Diamond Export & International Shipping | R SUTARIYA EXPORTS',
    description: 'R SUTARIYA EXPORTS ships certified HPHT lab-grown diamonds worldwide via Malca-Amit and Brinks. Fully insured, door-to-door delivery from Surat (Gujarat), India to USA, Europe, UK, and worldwide.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${BASE_URL}/export-shipping#webpage`,
      url: `${BASE_URL}/export-shipping`,
      name: 'Secure Diamond Export & International Shipping | R SUTARIYA EXPORTS',
      description: 'Fully insured international diamond shipping from Surat, India. We partner with Malca-Amit and Brinks for secure door-to-door delivery of HPHT lab-grown diamonds to the USA, Europe, UK, and beyond.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: {
        '@type': 'Service',
        name: 'International Diamond Export & Shipping',
        provider: { '@id': `${BASE_URL}/#organization` },
        serviceType: 'B2B Diamond Export',
        description: 'Wholesale HPHT lab-grown diamond export service from Surat, India. Certified, insured shipments via Malca-Amit and Brinks to clients in Italy, France, UK, USA, and worldwide.',
        areaServed: ['IT', 'FR', 'BE', 'NL', 'CH', 'DE', 'GB', 'US', 'IN'],
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: `${BASE_URL}/contact`,
          servicePhone: '+91-9898507686'
        }
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Export & Shipping', item: `${BASE_URL}/export-shipping` }
        ]
      }
    }
  },
  {
    route: 'diamond-journey',
    title: 'How HPHT Lab-Grown Diamonds Are Made | The Diamond Journey | R SUTARIYA EXPORTS',
    description: 'Follow the complete 8-step manufacturing journey of an HPHT lab-grown diamond — from carbon seed and reactor growth, to precision cutting, polishing, 4C quality grading, IGI/GIA certification and secure export packaging.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${BASE_URL}/diamond-journey#webpage`,
      url: `${BASE_URL}/diamond-journey`,
      name: 'How HPHT Lab-Grown Diamonds Are Made | The Diamond Journey',
      description: '8-step interactive guide through the HPHT lab-grown diamond manufacturing process — from carbon seed growth at extreme pressure and temperature, to precision cutting, polishing, 4C grading and IGI/GIA/HRD certification.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: {
        '@type': 'HowTo',
        name: 'How HPHT Lab-Grown Diamonds Are Manufactured',
        description: 'The complete step-by-step process for manufacturing HPHT lab-grown diamonds at R SUTARIYA EXPORTS in Surat, India.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Carbon Seed Selection', text: 'A high-quality diamond seed crystal (carbon) is carefully selected as the foundation for growth.' },
          { '@type': 'HowToStep', position: 2, name: 'HPHT Reactor Growth', text: 'The seed is placed in an HPHT press and subjected to extreme heat (1,300°C+) and pressure (58,000 atm) to grow a rough diamond crystal.' },
          { '@type': 'HowToStep', position: 3, name: 'Rough Diamond Evaluation', text: 'The grown rough diamond is assessed for shape, yield, and quality before planning the cut.' },
          { '@type': 'HowToStep', position: 4, name: 'Precision Cutting', text: 'Expert diamond cutters mark and split or saw the rough stone to optimise the final shape and carat yield.' },
          { '@type': 'HowToStep', position: 5, name: 'Bruting & Shaping', text: 'The diamond is rounded and shaped on a spinning lathe to achieve its designated cut profile.' },
          { '@type': 'HowToStep', position: 6, name: 'Polishing & Faceting', text: 'Skilled polishers create the facets that determine the diamond\'s light performance, brilliance, and fire.' },
          { '@type': 'HowToStep', position: 7, name: '4C Quality Grading', text: 'Each finished diamond is internally graded for Cut, Colour, Clarity, and Carat weight before certification.' },
          { '@type': 'HowToStep', position: 8, name: 'IGI / GIA / HRD Certification & Export', text: 'The diamond is submitted to IGI, GIA, or HRD for independent certification, then securely packaged and exported.' }
        ]
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Diamond Journey', item: `${BASE_URL}/diamond-journey` }
        ]
      }
    }
  },
  {
    route: 'contact',
    title: 'Contact Our B2B Diamond Sales Team | Request a Wholesale Quote | R SUTARIYA EXPORTS',
    description: 'Submit a B2B wholesale inquiry for HPHT or CVD lab-grown diamonds. Specify your shape, carat range, and quantity. Our sales team in Surat (Gujarat), India will respond within 24 hours with pricing and availability.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${BASE_URL}/contact#webpage`,
      url: `${BASE_URL}/contact`,
      name: 'Contact Our B2B Diamond Sales Team | R SUTARIYA EXPORTS',
      description: 'B2B wholesale diamond inquiry form. Contact R SUTARIYA EXPORTS in Surat, Gujarat for custom lab-grown diamond orders, price quotes, and shipping enquiries.',
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      mainEntity: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: '+91-9898507686',
            email: 'sales.rsutariyaexports@gmail.com',
            availableLanguage: ['English', 'Italian', 'French', 'Hindi', 'Gujarati'],
            areaServed: ['IN', 'IT', 'FR', 'BE', 'NL', 'CH', 'DE', 'GB', 'US'],
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '19:00'
            }
          }
        ]
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${BASE_URL}/contact` }
        ]
      }
    }
  }
];

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

    // 1. Replace canonical link
    html = html.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${pageUrl}" />`
    );

    // 2. Replace og:url
    html = html.replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${pageUrl}" />`
    );

    // 3. Replace page title
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${page.title}</title>`
    );

    // 4. Replace og:title and twitter:title
    html = html.replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${page.title}" />`
    );

    // 5. Replace meta description
    html = html.replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${page.description}" />`
    );

    // 6. Replace og:description and twitter:description
    html = html.replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${page.description}" />`
    );

    // 7. Inject page-specific JSON-LD schema just before </head>
    //    This adds unique structured data that clearly signals page purpose to Google
    const pageSchemaTag = `\n  <script type="application/ld+json">\n  ${JSON.stringify(page.schema, null, 2)}\n  </script>\n</head>`;
    html = html.replace('</head>', pageSchemaTag);

    // Write pre-rendered file
    const targetDir = path.join(distDir, page.route);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetHtmlPath = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetHtmlPath, html, 'utf8');
    console.log(`✅ Pre-rendered: /${page.route} → dist/${page.route}/index.html`);
    console.log(`   Schema type: ${page.schema['@type']} | Title length: ${page.title.length}`);
  }

  console.log('\n🎉 All routes pre-rendered with unique schema, canonical, and metadata!');
}

run().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
