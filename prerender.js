import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://rsutariyaexports.com';

const SHARED_ORG = {
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'R SUTARIYA EXPORTS',
  alternateName: 'RSE Diamonds',
  url: `${BASE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    '@id': `${BASE_URL}/#logo`,
    url: `${BASE_URL}/logo.jpeg`,
    caption: 'R SUTARIYA EXPORTS Logo'
  },
  image: { '@id': `${BASE_URL}/#logo` },
  description: 'Family-owned B2B manufacturer and exporter of IGI, GIA & HRD certified HPHT and CVD lab-grown diamonds based in Surat (Gujarat), India. Established 1973.',
  foundingDate: '1973',
  foundingLocation: {
    '@type': 'Place',
    name: 'Bhavnagar District, Gujarat, India'
  },
  email: 'sales.rsutariyaexports@gmail.com',
  telephone: '+91-9898507686',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9898507686',
      contactType: 'sales',
      availableLanguage: ['English', 'Italian', 'French', 'Hindi', 'Gujarati'],
      areaServed: ['IN', 'IT', 'FR', 'BE', 'NL', 'CH', 'DE', 'GB', 'US']
    }
  ],
  areaServed: ['IN', 'IT', 'FR', 'BE', 'NL', 'CH', 'DE', 'GB', 'US'],
  knowsAbout: [
    'HPHT Lab-Grown Diamonds',
    'CVD Lab-Grown Diamonds',
    'Diamond Cutting and Polishing',
    'B2B Diamond Export',
    'IGI Certified Diamonds',
    'GIA Certified Diamonds',
    'HRD Certified Diamonds'
  ],
  sameAs: ['https://wa.me/919898507686']
};

const NAV_HTML = `
    <header class="site-header">
      <nav aria-label="Main Navigation">
        <a href="/" class="brand-link"><strong>R SUTARIYA EXPORTS</strong></a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/collection">Collection</a></li>
          <li><a href="/certifications">Certifications</a></li>
          <li><a href="/export-shipping">Export &amp; Shipping</a></li>
          <li><a href="/diamond-journey">Diamond Journey</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>`;

const FOOTER_HTML = `
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <p><strong>R SUTARIYA EXPORTS</strong></p>
          <p>Precision Crafted. Ethically Grown. Globally Trusted. Since 1973.</p>
          <p>Room No. 106, Vrundavan Diamond Center, Opp. Central Warehouse, Varachha Police Station, Varachha Main Road, Surat – 395006, Gujarat, India</p>
          <p>Email: <a href="mailto:sales.rsutariyaexports@gmail.com">sales.rsutariyaexports@gmail.com</a> | WhatsApp: <a href="https://wa.me/919898507686">+91-9898507686</a></p>
        </div>
        <div class="footer-links">
          <p><strong>Navigate</strong></p>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/collection">Diamond Collection</a></li>
            <li><a href="/certifications">Certifications</a></li>
            <li><a href="/export-shipping">Export &amp; Shipping</a></li>
            <li><a href="/diamond-journey">The Diamond Journey</a></li>
            <li><a href="/contact">Contact Our Team</a></li>
          </ul>
        </div>
        <div class="footer-markets">
          <p><strong>Key Export Destinations</strong></p>
          <p>Italy (Milan, Rome, Vicenza, Valenza) · France (Paris, Lyon, Nice) · United Kingdom (London Hatton Garden, Birmingham) · United States (New York 47th St, Los Angeles) · Belgium (Antwerp) · Switzerland (Zurich)</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} R SUTARIYA EXPORTS. All rights reserved. Surat (Gujarat), India.</p>
      </div>
    </footer>`;

const PAGES = [
  {
    route: 'about',
    title: 'About R Sutariya Exports | Surat, India',
    description: 'Learn about R Sutariya Exports, a family-owned diamond manufacturer in Surat, India with over 50 years of polishing heritage and HPHT lab-grown innovation.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${BASE_URL}/about#webpage`,
          url: `${BASE_URL}/about`,
          name: 'About R Sutariya Exports | Surat, India',
          description: 'Three generations of diamond cutting and polishing craftsmanship, evolving from natural diamonds to next-generation HPHT lab-grown manufacturing in Surat, Gujarat.',
          inLanguage: 'en-GB',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          about: { '@id': `${BASE_URL}/#organization` },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            '@id': `${BASE_URL}/about#breadcrumb`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE_URL}/about` }
            ]
          }
        },
        SHARED_ORG
      ]
    },
    bodyHtml: `
      <main class="page-content">
        <section class="hero-section">
          <p class="tagline">From a Gujarat Village to European Markets</p>
          <h1>About R Sutariya Exports | Surat, India</h1>
          <p class="subtitle">Three generations of diamond cutting and polishing craftsmanship, evolving from natural diamonds to next-generation HPHT lab-grown manufacturing in Surat, Gujarat.</p>
        </section>

        <section class="story-section">
          <h2>Generations of Diamond Mastery Since 1973</h2>
          <p>Our story began in a small village in the Bhavnagar district of Gujarat, India. Driven by determination and craftsmanship, our founder and his brothers entered the diamond industry as workers — learning every aspect of diamond polishing through hands-on experience and unwavering dedication.</p>
          <p>Over fifteen years, they built a reputation for quality workmanship, polishing diamonds and serving clients across nearby villages and the Bhavnagar diamond market. Their commitment laid the foundation for what would become a multi-generational business.</p>
          <p>Recognizing the growing opportunities in Surat — the global hub of diamond manufacturing — the family made a bold decision to expand operations. This move marked a new chapter of growth, allowing the business to serve a wider market while continuing to uphold the values established from the very beginning: Quality, Trust, Integrity, and Continuous Growth.</p>
        </section>

        <section class="milestones-section">
          <h2>Milestones Across Decades</h2>
          <ul>
            <li><strong>1973 (Roots in a Village):</strong> Founded in Bhavnagar district, Gujarat, mastering hand-polishing and cutting techniques.</li>
            <li><strong>15 Years of Mastery:</strong> Built trusted reputation across Gujarat regional diamond trade.</li>
            <li><strong>Expansion to Surat:</strong> Relocated cutting and processing operations to Surat, the world's diamond cutting capital.</li>
            <li><strong>After 1995 (Next Generation Leadership):</strong> Second generation joined, modernizing production and strengthening business partnerships.</li>
            <li><strong>2021 (HPHT Lab-Grown Innovation):</strong> Established advanced HPHT lab-grown diamond manufacturing facilities.</li>
            <li><strong>2024 (Global B2B Exports):</strong> Launched direct international export pipeline to Italy, France, the UK, and the USA.</li>
            <li><strong>Today:</strong> Leading B2B supplier of certified loose HPHT &amp; CVD diamonds to jewelry houses worldwide.</li>
          </ul>
        </section>

        <section class="values-section">
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Quality:</strong> Every diamond exported meets strict 4C standards verified by IGI and GIA gemologists.</li>
            <li><strong>Integrity:</strong> Complete disclosure of growth methods, natural Type IIa characteristics, and laser girdle traceability.</li>
            <li><strong>Craftsmanship:</strong> Over five decades of lapidary mastery ensuring superior polish, symmetry, and optical fire.</li>
            <li><strong>Continuous Growth:</strong> Investing in state-of-the-art growth reactors, planning software, and international logistics.</li>
          </ul>
        </section>

        <section class="facilities-section">
          <h2>Manufacturing &amp; Office Infrastructure</h2>
          <p>Our headquarters office is located at Room No. 106, Vrundavan Diamond Center, Varachha Main Road, Surat, Gujarat. From this hub, our team manages customer relations, custom parcel assortment, quality control auditing, and tamper-evident packaging for international export shipments.</p>
          <p>Interested in sourcing certified lab-grown diamonds directly from the manufacturer? <a href="/contact">Contact our export team</a> or <a href="/collection">explore our diamond collection</a>.</p>
        </section>
      </main>`
  },
  {
    route: 'collection',
    title: 'Wholesale Lab-Grown Diamond Shapes | R Sutariya Exports',
    description: 'Explore 16+ certified HPHT and CVD lab-grown diamond shapes direct from Surat manufacturer. Calibrated melee to solitaire parcels with IGI & GIA certification.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': `${BASE_URL}/collection#webpage`,
          url: `${BASE_URL}/collection`,
          name: 'Wholesale Lab-Grown Diamond Shapes | R Sutariya Exports',
          description: 'Factory-direct B2B catalog of IGI, GIA & HRD certified HPHT & CVD loose diamonds across 16+ shapes, custom length-to-width ratios, and calibrated parcels from Surat, India.',
          inLanguage: 'en-GB',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          about: {
            '@type': 'ItemList',
            name: 'Wholesale Lab-Grown Diamond Shapes Catalog',
            description: 'Available certified HPHT and CVD diamond cut shapes manufactured for wholesale jewelry clients.',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Round Brilliant Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 2, name: 'Oval Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 3, name: 'Princess Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 4, name: 'Emerald Cut (4 Step) Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 5, name: 'Cushion Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 6, name: 'Pear Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 7, name: 'Marquise Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 8, name: 'Radiant Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 9, name: 'Asscher Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 10, name: 'Heart Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 11, name: 'Rose Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 12, name: 'Trilliant Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 13, name: 'Baguette Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 14, name: 'Tapered Baguette Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 15, name: 'Triangle Cut Lab-Grown Diamond' },
              { '@type': 'ListItem', position: 16, name: 'Rectangle Cushion Cut Lab-Grown Diamond' }
            ]
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            '@id': `${BASE_URL}/collection#breadcrumb`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Diamond Collection', item: `${BASE_URL}/collection` }
            ]
          }
        },
        SHARED_ORG
      ]
    },
    bodyHtml: `
      <main class="page-content">
        <section class="hero-section">
          <p class="tagline">Core Diamond Catalog · Direct from Surat Manufacturer</p>
          <h1>Wholesale Lab-Grown Diamond Shapes</h1>
          <p class="subtitle">Factory-direct B2B catalog of IGI, GIA &amp; HRD certified HPHT &amp; CVD loose diamonds across 16+ shapes, custom length-to-width ratios, and calibrated parcels from Surat, India.</p>
        </section>

        <section class="shapes-catalog">
          <h2>16+ Available Diamond Shapes &amp; Specifications</h2>
          <div class="shapes-grid">
            <article class="shape-card">
              <h3>Round Brilliant Cut</h3>
              <p>57-58 precision facets maximizing optical brilliance, fire, and scintillation. The universal benchmark cut for solitaire rings and luxury eternity bands.</p>
              <p><strong>Available Sizes:</strong> 0.005 ct – 10.00 ct | <strong>Growth:</strong> HPHT &amp; CVD | <strong>Clarity:</strong> VVS1 – SI1 | <strong>Color:</strong> D – J</p>
            </article>
            <article class="shape-card">
              <h3>Oval Brilliant Cut</h3>
              <p>Elongated silhouette with brilliant faceting providing high visual spread per carat and flattering finger elongation for modern bridal jewelry.</p>
              <p><strong>Available Sizes:</strong> 0.30 ct – 8.00 ct | <strong>Growth:</strong> HPHT &amp; CVD | <strong>Ratios:</strong> 1.35 – 1.50</p>
            </article>
            <article class="shape-card">
              <h3>Princess Cut</h3>
              <p>Square cut with sharp geometric corners and pyramid-style pavilion facets delivering crisp, contemporary sparkle.</p>
              <p><strong>Available Sizes:</strong> 0.30 ct – 8.00 ct | <strong>Growth:</strong> HPHT &amp; CVD</p>
            </article>
            <article class="shape-card">
              <h3>4 Step Emerald Cut</h3>
              <p>Rectangular step-cut with cropped corners and open hall-of-mirrors table showcasing diamond crystal purity and clarity.</p>
              <p><strong>Available Sizes:</strong> 0.50 ct – 10.00 ct | <strong>Growth:</strong> HPHT &amp; CVD</p>
            </article>
            <article class="shape-card">
              <h3>Cushion Cut (Square &amp; Elongated)</h3>
              <p>Soft rounded pillow corners combining antique romantic charm with intense modern facet brilliance.</p>
              <p><strong>Available Sizes:</strong> 0.40 ct – 8.00 ct | <strong>Growth:</strong> HPHT &amp; CVD</p>
            </article>
            <article class="shape-card">
              <h3>Pear Cut</h3>
              <p>Teardrop silhouette uniting the brilliance of a round cut with the pointed elegance of a marquise.</p>
              <p><strong>Available Sizes:</strong> 0.30 ct – 7.00 ct | <strong>Growth:</strong> HPHT &amp; CVD</p>
            </article>
            <article class="shape-card">
              <h3>Marquise Cut</h3>
              <p>Dramatic eye-shaped cut maximizing carat weight perception with long curved sides and pointed tips.</p>
              <p><strong>Available Sizes:</strong> 0.30 ct – 6.00 ct | <strong>Growth:</strong> HPHT &amp; CVD</p>
            </article>
            <article class="shape-card">
              <h3>Radiant Cut</h3>
              <p>Rectangular or square cut with clipped corners featuring 70 vibrant facets combining emerald step lines with brilliant-style fire.</p>
              <p><strong>Available Sizes:</strong> 0.50 ct – 8.00 ct | <strong>Growth:</strong> HPHT &amp; CVD</p>
            </article>
            <article class="shape-card">
              <h3>Asscher Cut</h3>
              <p>Square step-cut with octagonal outline and high crown, delivering vintage Art Deco sophistication.</p>
              <p><strong>Available Sizes:</strong> 0.50 ct – 6.00 ct | <strong>Growth:</strong> HPHT &amp; CVD</p>
            </article>
            <article class="shape-card">
              <h3>Heart Cut</h3>
              <p>Precision-sculpted cleft and lobe symmetry creating an iconic romantic symbol for bespoke pendants and rings.</p>
              <p><strong>Available Sizes:</strong> 0.50 ct – 5.00 ct | <strong>Growth:</strong> HPHT &amp; CVD</p>
            </article>
            <article class="shape-card">
              <h3>Rose Cut, Trilliant, Baguette &amp; Tapered Baguette</h3>
              <p>Specialized fancy geometric cuts for side stones, three-stone rings, vintage designs, and architectural high-jewelry settings.</p>
              <p><strong>Available Sizes:</strong> Calibrated parcels &amp; layouts from 0.05 ct to 3.00 ct</p>
            </article>
          </div>
        </section>

        <section class="b2b-specs">
          <h2>B2B Supply Capabilities &amp; Ordering Options</h2>
          <p>We supply jewelry manufacturers, designers, and wholesalers with:</p>
          <ul>
            <li><strong>Calibrated Melee Parcels:</strong> Precision-sieved round brilliant melee from 0.005 ct to 0.25 ct in D-F/VVS-VS and G-H/VS-SI assortments.</li>
            <li><strong>Certified Solitaires:</strong> Certified stones above 0.30 ct accompanied by IGI, GIA, or HRD reports with laser girdle inscriptions.</li>
            <li><strong>Matched Pairs &amp; Layouts:</strong> Perfectly paired ovals, pears, emeralds, and trillions for earrings, three-stone rings, and tennis necklaces.</li>
            <li><strong>Custom OEM Cutting:</strong> Cut to exact millimeters, length-to-width ratios, and facet specifications for proprietary collections.</li>
          </ul>
          <p>Ready to request pricing? <a href="/contact">Submit your B2B shape inquiry</a> or <a href="/export-shipping">view our insured international shipping process</a>.</p>
        </section>
      </main>`
  },
  {
    route: 'certifications',
    title: 'Lab-Grown Diamond Certification | R Sutariya Exports',
    description: 'Discover international certification standards for our lab-grown diamonds. Complete 4C grading and laser girdle inscription from IGI, GIA, and HRD laboratories.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/certifications#webpage`,
          url: `${BASE_URL}/certifications`,
          name: 'Lab-Grown Diamond Certification | R Sutariya Exports',
          description: 'Independent IGI, GIA & HRD laboratory verification guaranteeing authentic 4C grading, Type IIa growth confirmation, and laser girdle inscription.',
          inLanguage: 'en-GB',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          about: [
            {
              '@type': 'DefinedTerm',
              name: 'IGI Certification',
              description: 'International Gemological Institute comprehensive grading report for lab-grown diamonds specifying 4C parameters, growth method (HPHT/CVD), and laser inscribed report number.'
            },
            {
              '@type': 'DefinedTerm',
              name: 'GIA Certification',
              description: 'Gemological Institute of America grading standards verifying diamond origin, carat weight, color, clarity, and cut proportions.'
            },
            {
              '@type': 'DefinedTerm',
              name: 'HRD Antwerp Certification',
              description: 'European gemological authority certificate providing detailed cut proportion analysis and light performance metrics.'
            }
          ],
          breadcrumb: {
            '@type': 'BreadcrumbList',
            '@id': `${BASE_URL}/certifications#breadcrumb`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Certifications', item: `${BASE_URL}/certifications` }
            ]
          }
        },
        SHARED_ORG
      ]
    },
    bodyHtml: `
      <main class="page-content">
        <section class="hero-section">
          <p class="tagline">Independent Verification · Uncompromising Quality</p>
          <h1>Lab-Grown Diamond Certification</h1>
          <p class="subtitle">Independent IGI, GIA &amp; HRD laboratory verification guaranteeing authentic 4C grading, Type IIa growth confirmation, and laser girdle inscription.</p>
        </section>

        <section class="labs-section">
          <h2>World-Leading Gemological Laboratories</h2>
          <div class="labs-grid">
            <article>
              <h3>IGI (International Gemological Institute)</h3>
              <p>The foremost international authority in lab-grown diamond grading. IGI reports provide comprehensive 4C verification (Cut, Color, Clarity, Carat Weight), confirm the synthesis method (HPHT or CVD), state whether post-growth treatments exist, and include digital QR code verification.</p>
            </article>
            <article>
              <h3>GIA (Gemological Institute of America)</h3>
              <p>The creator of the 4Cs and the world's most recognized gemological authority. GIA laboratory-grown diamond reports evaluate color and clarity using full natural diamond comparison standards, confirming Type IIa crystal purity.</p>
            </article>
            <article>
              <h3>HRD Antwerp</h3>
              <p>Europe's premier diamond certification authority based in Belgium. HRD certificates are widely preferred by European jewelry houses and luxury retailers for rigorous cut proportion analysis and light reflection diagnostics.</p>
            </article>
          </div>
        </section>

        <section class="qc-section">
          <h2>Our 4-Step Quality Control Process</h2>
          <ol>
            <li><strong>Raw Crystal Selection:</strong> Only high-purity carbon seed crystals are cultivated in our HPHT reactors to minimize structural defects and nitrogen impurities.</li>
            <li><strong>Precision Cutting &amp; Polishing:</strong> Lapidary masters plan each stone with 3D computer scanning to maximize light return, achieve Excellent polish, and ensure optimal symmetry.</li>
            <li><strong>Micro Laser Girdle Inscription:</strong> Each certified diamond is permanently laser-inscribed on the girdle with the unique laboratory certificate number and "LAB GROWN" identifier.</li>
            <li><strong>Dual Internal Gemological Audit:</strong> Before dispatch, in-house gemologists examine every stone against the laboratory report to confirm 100% accuracy in weight, dimensions, and inclusions.</li>
          </ol>
        </section>

        <section class="compliance-section">
          <h2>B2B Compliance &amp; Documentation Support</h2>
          <p>Every international shipment from R SUTARIYA EXPORTS includes complete customs documentation, certificates of origin, tax invoices, and laboratory certificates. Inquire about certification options by <a href="/contact">contacting our sales team</a> or review our <a href="/diamond-journey">diamond journey walkthrough</a>.</p>
        </section>
      </main>`
  },
  {
    route: 'export-shipping',
    title: 'Lab-Grown Diamond Exporter India | R Sutariya Exports',
    description: 'Secure, fully insured international export of lab-grown diamonds from Surat, India to the USA, Europe, UK, and worldwide via Malca-Amit and Brinks armored couriers.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/export-shipping#webpage`,
          url: `${BASE_URL}/export-shipping`,
          name: 'Lab-Grown Diamond Exporter India | R Sutariya Exports',
          description: 'Secure, fully insured door-to-door diamond shipping from Surat to the USA, Italy, France, UK, and worldwide with full export customs clearance.',
          inLanguage: 'en-GB',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          about: {
            '@type': 'Service',
            name: 'International Diamond Export and Secure Logistics',
            provider: { '@id': `${BASE_URL}/#organization` },
            serviceType: 'B2B Diamond Export',
            description: 'Insured international diamond export services from Surat, India. Full door-to-door delivery via Malca-Amit and Brinks armored air couriers with customs documentation.',
            areaServed: ['IT', 'FR', 'BE', 'NL', 'CH', 'DE', 'GB', 'US', 'IN']
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            '@id': `${BASE_URL}/export-shipping#breadcrumb`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Export & Shipping', item: `${BASE_URL}/export-shipping` }
            ]
          }
        },
        SHARED_ORG
      ]
    },
    bodyHtml: `
      <main class="page-content">
        <section class="hero-section">
          <p class="tagline">Direct Pipeline to Global Markets · Origin: Surat (21.1702° N, 72.8311° E)</p>
          <h1>Lab-Grown Diamond Exporter India</h1>
          <p class="subtitle">Secure, fully insured door-to-door diamond shipping from Surat to the USA, Italy, France, UK, and worldwide with full export customs clearance.</p>
        </section>

        <section class="logistics-partners">
          <h2>Armored Logistics Partners &amp; 100% Insurance</h2>
          <p>We partner with premier global precious cargo carriers — <strong>Malca-Amit</strong> and <strong>Brinks</strong> — to provide armored, fully insured door-to-door air freight directly to your business premises. Every parcel is 100% insured from the moment it leaves our Surat facility until physical handover to your authorized recipient.</p>
        </section>

        <section class="destinations-section">
          <h2>Key International Export Hubs</h2>
          <div class="destinations-grid">
            <article>
              <h3>Italy (Milan · Rome · Vicenza · Valenza)</h3>
              <p><strong>Transit Time:</strong> 2 – 3 Business Days | <strong>Courier:</strong> Armored Air Courier</p>
              <p>Direct delivery to Italian goldsmiths, jewelry manufacturers, and trade wholesalers with bilateral customs clearance handled seamlessly.</p>
            </article>
            <article>
              <h3>France (Paris · Lyon · Nice)</h3>
              <p><strong>Transit Time:</strong> 3 – 4 Business Days | <strong>Courier:</strong> Insured Express Logistics</p>
              <p>Serving Parisian jewelry houses, high-fashion brands, and boutique ateliers with complete import documentation and tax invoices.</p>
            </article>
            <article>
              <h3>United Kingdom (London Hatton Garden · Birmingham)</h3>
              <p><strong>Transit Time:</strong> 2 – 3 Business Days | <strong>Courier:</strong> Armored Air Express</p>
              <p>Direct supply to Hatton Garden diamond merchants and Birmingham Jewellery Quarter manufacturers with UK import compliance.</p>
            </article>
            <article>
              <h3>USA (New York Diamond District · Los Angeles)</h3>
              <p><strong>Transit Time:</strong> 4 – 6 Business Days | <strong>Courier:</strong> Insured International Armored Express</p>
              <p>Supplying 47th Street diamond wholesalers, bridal manufacturers, and American jewelry retail chains with full US Customs declarations.</p>
            </article>
            <article>
              <h3>Rest of Europe (Antwerp · Zurich · Amsterdam)</h3>
              <p><strong>Transit Time:</strong> 3 – 5 Business Days | <strong>Courier:</strong> Specialized Secured Freight</p>
              <p>Serving major European diamond trading bourses and watchmaking centers across Switzerland, Belgium, and the Netherlands.</p>
            </article>
          </div>
        </section>

        <section class="workflow-section">
          <h2>Our 7-Step Export &amp; Order Process</h2>
          <ol>
            <li><strong>Inquiry Submission:</strong> Provide your required shape, carat weight, color, clarity, and quantity via our website or WhatsApp.</li>
            <li><strong>Consultation &amp; Media:</strong> Our gemological team shares 360-degree HD videos, certificate numbers, and precise measurements.</li>
            <li><strong>Wholesale Quotation:</strong> We provide transparent, factory-direct wholesale pricing in USD or EUR.</li>
            <li><strong>Order Confirmation:</strong> Proforma invoice and commercial terms are mutually signed to lock the order.</li>
            <li><strong>Quality Check &amp; Sorting:</strong> Parcels are carefully sorted, inspected under microscopy, and matched against laboratory reports.</li>
            <li><strong>Customs &amp; Secure Dispatch:</strong> Packed in tamper-evident security parcels with export declarations and handed to armored couriers.</li>
            <li><strong>Insured Delivery:</strong> Door-to-door delivery with live GPS tracking until safe signature confirmation.</li>
          </ol>
          <p>Ready to start an export order? <a href="/contact">Contact our export team</a> today.</p>
        </section>
      </main>`
  },
  {
    route: 'diamond-journey',
    title: 'The Diamond Journey | R Sutariya Exports',
    description: 'Follow the 8-step journey of lab-grown diamonds from HPHT crystal synthesis and precision laser cutting to 4C grading, certification, and insured global delivery.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/diamond-journey#webpage`,
          url: `${BASE_URL}/diamond-journey`,
          name: 'The Diamond Journey | R Sutariya Exports',
          description: 'Follow the complete 8-step manufacturing journey of an HPHT lab-grown diamond — from carbon seed growth to precision cutting, polishing, 4C quality grading, IGI/GIA certification and secure export packaging.',
          inLanguage: 'en-GB',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          about: {
            '@type': 'HowTo',
            name: 'How HPHT Lab-Grown Diamonds Are Manufactured',
            description: 'The complete step-by-step process for manufacturing HPHT lab-grown diamonds at R SUTARIYA EXPORTS in Surat, India.',
            step: [
              { '@type': 'HowToStep', position: 1, name: 'Carbon Seed Selection & HPHT Synthesis', text: 'A premium diamond seed crystal is placed in a high-pressure, high-temperature press operating at 1,300°C–1,600°C and 55,000–60,000 atmospheres to crystallize carbon into rough diamond.' },
              { '@type': 'HowToStep', position: 2, name: 'Rough Diamond Analysis & Laser Planning', text: 'State-of-the-art 3D computerized scanning analyzes the rough crystal inclusions and proportions to optimize carat yield and facet geometry.' },
              { '@type': 'HowToStep', position: 3, name: 'Precision Laser Sawing & Cleaving', text: 'High-precision industrial lasers slice the rough diamond along planned axes with zero thermal stress.' },
              { '@type': 'HowToStep', position: 4, name: 'Bruting & Cone Shaping', text: 'Two diamond-bearing spindles rotate against one another to shape the rough stone into a perfect round, oval, or fancy girdle outline.' },
              { '@type': 'HowToStep', position: 5, name: 'Faceting & Master Polishing', text: 'Skilled lapidaries polish individual table, star, kite, and pavilion facets on cast-iron scaifes coated with diamond powder.' },
              { '@type': 'HowToStep', position: 6, name: '4C Quality Evaluation', text: 'Internal gemologists inspect cut proportions, symmetry, polish, color grades (D-M), and clarity under 10x-40x binocular microscopy.' },
              { '@type': 'HowToStep', position: 7, name: 'Independent Certification (IGI/GIA/HRD)', text: 'Diamonds are submitted to international gemological laboratories for origin verification, 4C certification, and laser girdle inscription.' },
              { '@type': 'HowToStep', position: 8, name: 'Tamper-Evident Packaging & Armored Export', text: 'Stones are vacuum-sealed in security capsules with certificates and shipped via insured armored carriers worldwide.' }
            ]
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            '@id': `${BASE_URL}/diamond-journey#breadcrumb`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Diamond Journey', item: `${BASE_URL}/diamond-journey` }
            ]
          }
        },
        SHARED_ORG
      ]
    },
    bodyHtml: `
      <main class="page-content">
        <section class="hero-section">
          <p class="tagline">Multigenerational Lapidary Craftsmanship Meets Next-Gen Science</p>
          <h1>The Diamond Journey | R Sutariya Exports</h1>
          <p class="subtitle">The 8-Step HPHT Lab-Grown Diamond Manufacturing Process: from carbon seed crystallization to independent certification and global delivery.</p>
        </section>

        <section class="steps-walkthrough">
          <article class="journey-step">
            <h2>Step 01: High Pressure High Temperature (HPHT) Synthesis</h2>
            <p>The journey begins with a carefully selected, high-purity diamond seed crystal placed within a high-pressure, high-temperature hydraulic cubic press. Operating at pressures exceeding 55,000 atmospheres and temperatures above 1,300°C–1,600°C, molten metallic catalyst dissolves pure carbon, depositing it atom by atom onto the seed to grow a rough diamond crystal with natural Type IIa crystal structure.</p>
          </article>

          <article class="journey-step">
            <h2>Step 02: 3D Laser Planning &amp; Inclusions Mapping</h2>
            <p>Advanced optical scanner cameras generate a high-definition 3D virtual model of the rough stone. Sophisticated algorithms map internal crystal structures, allowing master diamond planners to determine the exact cut shape and proportions that will optimize clarity, brilliance, and carat retention.</p>
          </article>

          <article class="journey-step">
            <h2>Step 03: Precision Laser Sawing &amp; Sectioning</h2>
            <p>Using ultra-narrow focused laser beams, the rough diamond is sliced along planned crystalline planes without inducing internal thermal stress, preparing the preform for shaping.</p>
          </article>

          <article class="journey-step">
            <h2>Step 04: Bruting &amp; Girdle Profiling</h2>
            <p>The diamond preform is mounted on high-speed spindles where counter-rotating diamond tools shape the girdle into its intended outline — perfectly circular for rounds, or mathematically contoured for fancy shapes like ovals, pears, and emeralds.</p>
          </article>

          <article class="journey-step">
            <h2>Step 05: Master Faceting &amp; Scaife Polishing</h2>
            <p>Surat's master craftsmen meticulously grind and polish each facet onto the diamond using diamond-dust-coated cast-iron wheels (scaifes). Perfect facet alignment, sharp facet junctions, and mirror-smooth surfaces ensure maximum light reflection and dispersion.</p>
          </article>

          <article class="journey-step">
            <h2>Step 06: 4C Quality Grading &amp; Gemological Analysis</h2>
            <p>Finished diamonds undergo rigorous internal auditing under binocular microscopy and colorimeters to assess Cut grade, Color (D through M), Clarity (FL/IF through SI2), and exact Carat weight.</p>
          </article>

          <article class="journey-step">
            <h2>Step 07: Independent Laboratory Certification</h2>
            <p>Diamonds are sent to independent gemological laboratories such as IGI, GIA, or HRD Antwerp. Accredited gemologists verify that the diamond is lab-grown, confirm 4C parameters, and engrave the report number onto the diamond's girdle with a microscopic laser.</p>
          </article>

          <article class="journey-step">
            <h2>Step 08: Secure Packaging &amp; Insured Global Delivery</h2>
            <p>Every certified diamond is sealed in tamper-evident security holders with certificate documentation and dispatched via Malca-Amit or Brinks armored air courier directly to global jewelry clients.</p>
          </article>
        </section>

        <section class="journey-cta">
          <h2>Source Directly from the Manufacturer</h2>
          <p>Experience the quality of authentic Indian diamond craftsmanship. <a href="/collection">Browse our 16+ shapes collection</a> or <a href="/contact">request wholesale quotation pricing</a>.</p>
        </section>
      </main>`
  },
  {
    route: 'contact',
    title: 'Contact Our Diamond Export Team | R Sutariya Exports',
    description: 'Contact the R Sutariya Exports B2B sales team in Surat, India. Request wholesale diamond price quotations, custom parcel orders, and worldwide shipping details.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': `${BASE_URL}/contact#webpage`,
          url: `${BASE_URL}/contact`,
          name: 'Contact Our Diamond Export Team | R Sutariya Exports',
          description: 'Direct factory supply and wholesale quotations for certified HPHT & CVD lab-grown diamonds from Surat (Gujarat), India. Inquiries answered within 24 hours.',
          inLanguage: 'en-GB',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          about: { '@id': `${BASE_URL}/#organization` },
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
            '@id': `${BASE_URL}/contact#breadcrumb`,
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${BASE_URL}/contact` }
            ]
          }
        },
        SHARED_ORG
      ]
    },
    bodyHtml: `
      <main class="page-content">
        <section class="hero-section">
          <p class="tagline">Global Communications · Direct Factory Supply</p>
          <h1>Contact Our Diamond Export Team</h1>
          <p class="subtitle">Direct factory supply and wholesale quotations for certified HPHT &amp; CVD lab-grown diamonds from Surat (Gujarat), India. Inquiries answered within 24 hours.</p>
        </section>

        <section class="coordinates-section">
          <h2>Contact Coordinates</h2>
          <div class="contact-details">
            <div>
              <h3>Office Headquarters</h3>
              <p><strong>R SUTARIYA EXPORTS</strong><br />
              Room No. 106, Vrundavan Diamond Center,<br />
              Opp. Central Warehouse, Varachha Police Station,<br />
              Varachha Main Road, Surat – 395006, Gujarat, India</p>
            </div>
            <div>
              <h3>Direct Email</h3>
              <p><a href="mailto:sales.rsutariyaexports@gmail.com">sales.rsutariyaexports@gmail.com</a></p>
              <p>For inventory requests, customized parcel inquiries, and commercial invoices.</p>
            </div>
            <div>
              <h3>WhatsApp Export Hotline</h3>
              <p><a href="https://wa.me/919898507686" target="_blank" rel="noopener noreferrer">+91-9898507686 (Direct Message)</a></p>
              <p>Instant consultation, 360-degree stone videos, and real-time inventory checking.</p>
            </div>
            <div>
              <h3>Business Hours &amp; Languages</h3>
              <p>Monday – Saturday: 09:00 – 19:00 (IST / UTC+5:30)</p>
              <p>Supported languages: English, Italian, French, Hindi, Gujarati.</p>
            </div>
          </div>
        </section>

        <section class="inquiry-guidance">
          <h2>B2B Quotation Guidance</h2>
          <p>When requesting pricing, please specify:</p>
          <ul>
            <li>Preferred cut shapes (Round, Oval, Princess, Emerald, Cushion, Pear, Radiant, etc.)</li>
            <li>Carat size range per stone (e.g. 0.50ct – 1.00ct, 2.00ct+) or total parcel weight</li>
            <li>Color preference (D-F, G-H) and clarity range (VVS, VS, SI)</li>
            <li>Certification requirements (IGI, GIA, HRD, or non-certified melee parcels)</li>
            <li>Delivery destination country and city for insured courier routing</li>
          </ul>
          <p>Browse our catalog of <a href="/collection">16+ diamond shapes</a> or learn about our <a href="/export-shipping">insured shipping process</a>.</p>
        </section>
      </main>`
  }
];

const HOME_BODY_HTML = `
    <main class="page-content">
      <section class="hero-section">
        <p class="tagline">Established Heritage Exporter · Surat (Gujarat), India</p>
        <h1>HPHT &amp; CVD Lab-Grown Diamonds | R Sutariya Exports</h1>
        <p class="subtitle">Directly exported from Surat (Gujarat), India, serving jewellers, manufacturers, wholesalers, and retailers across the USA, Europe, UK, and worldwide with premium quality, international certification, and reliable global shipping.</p>
        <p><a href="/collection">Explore Diamond Shapes Collection</a> | <a href="/contact">Request Wholesale Quotation</a></p>
      </section>

      <section class="trust-indicators">
        <h2>Trust &amp; Supply Credentials</h2>
        <ul>
          <li>Heritage in Diamond Polishing Since 1973</li>
          <li>HPHT &amp; CVD Growth Specialists based in Surat, India</li>
          <li>Independent Certification by IGI, GIA &amp; HRD Antwerp</li>
          <li>Global Insured Export Logistics via Malca-Amit &amp; Brinks</li>
          <li>Direct Factory Pricing — Eliminate Middlemen</li>
        </ul>
      </section>

      <section class="heritage-overview">
        <h2>Our Heritage &amp; Craftsmanship</h2>
        <p>Founded in 1973 in Gujarat, R SUTARIYA EXPORTS brings over five decades of diamond cutting and polishing expertise. Evolving from traditional natural diamond polishing to modern HPHT and CVD diamond technology in Surat, our multi-generational family enterprise supplies certified loose diamonds to leading jewelry ateliers, wholesalers, and designers worldwide.</p>
        <p><a href="/about">Read our full story and company milestones &rarr;</a></p>
      </section>

      <section class="shapes-preview">
        <h2>16+ Available Diamond Shapes</h2>
        <p>We manufacture and export certified loose lab-grown diamonds across all major and fancy cut profiles: Round Brilliant, Oval, Princess, Emerald (4-Step), Cushion, Pear, Marquise, Radiant, Asscher, Heart, Rose Cut, Trilliant, Baguette, Tapered Baguette, Triangle, and Rectangle Cushion.</p>
        <p><a href="/collection">Browse complete shapes catalog with carat sizes &rarr;</a></p>
      </section>

      <section class="manufacturing-preview">
        <h2>The 8-Step Diamond Journey</h2>
        <p>From carbon seed selection and high-pressure high-temperature reactor growth, to 3D laser planning, precision bruting, master faceting, 4C gemological inspection, IGI/GIA certification, and tamper-evident packaging — every stone follows an uncompromising quality pipeline.</p>
        <p><a href="/diamond-journey">Explore the interactive manufacturing walkthrough &rarr;</a></p>
      </section>

      <section class="export-logistics">
        <h2>Insured International Shipping from Surat</h2>
        <p>We provide door-to-door insured air freight via armored couriers Malca-Amit and Brinks to key jewelry trading hubs in Italy (Milan, Rome, Vicenza, Valenza), France (Paris, Lyon, Nice), the UK (London Hatton Garden, Birmingham), the USA (New York Diamond District, Los Angeles), Belgium (Antwerp), and Switzerland (Zurich).</p>
        <p><a href="/export-shipping">View shipping details, transit times, and export process &rarr;</a></p>
      </section>

      <section class="faq-section">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <dl>
          <dt>What are lab-grown diamonds?</dt>
          <dd>Lab-grown diamonds are real diamonds created in controlled laboratory environments using advanced HPHT (High Pressure High Temperature) or CVD (Chemical Vapor Deposition) technology.</dd>

          <dt>Are lab-grown diamonds real diamonds?</dt>
          <dd>Yes. Lab-grown diamonds possess the exact same optical, physical, and chemical properties as mined diamonds, consisting of pure carbon crystallized in an isometric cubic system.</dd>

          <dt>What is the difference between lab-grown and natural diamonds?</dt>
          <dd>The primary difference is origin. Natural diamonds crystallize deep in the Earth's mantle over billions of years, whereas lab-grown diamonds are cultivated in specialized laboratories using advanced engineering in weeks.</dd>

          <dt>What is HPHT diamond growth?</dt>
          <dd>HPHT (High Pressure High Temperature) replicates the natural earth conditions under which diamonds form, subjecting a diamond seed to extreme pressures (approx. 55,000–60,000 atmospheres) and temperatures exceeding 1,300°C–1,600°C.</dd>

          <dt>What is CVD diamond growth?</dt>
          <dd>CVD (Chemical Vapor Deposition) grows diamonds layer by layer from carbon-rich gases (such as methane) inside a vacuum chamber at moderate temperatures and low pressure.</dd>

          <dt>Are your diamonds certified?</dt>
          <dd>Yes. Diamonds are supplied with internationally recognized certifications from IGI (International Gemological Institute), GIA (Gemological Institute of America), or HRD Antwerp, complete with laser girdle inscriptions.</dd>

          <dt>Which diamond shapes do you offer?</dt>
          <dd>We manufacture and export Round Brilliant, Oval, Princess, Emerald, Radiant, Cushion, Pear, Marquise, Asscher, Heart, Trilliant, Baguette, Tapered Baguette, Rose Cut, and custom shapes.</dd>

          <dt>Do you export internationally?</dt>
          <dd>Yes. We export lab-grown diamonds worldwide with secure, fully insured door-to-door armored delivery via Malca-Amit and Brinks to Italy, France, the UK, the USA, and worldwide.</dd>

          <dt>Can I request custom specifications or parcel assortments?</dt>
          <dd>Yes. We provide custom calibrated melee parcels, matched pairs for earrings, layout parcels for necklaces, and custom millimeter cuts tailored to designer specifications.</dd>

          <dt>How do I request a quotation?</dt>
          <dd>You can use the website inquiry form, email sales.rsutariyaexports@gmail.com, or message our WhatsApp hotline at +91-9898507686. Our sales team responds within 24 hours.</dd>

          <dt>Are lab-grown diamonds sustainable and conflict-free?</dt>
          <dd>Yes. Lab-grown diamonds require zero open-pit mining, do not disturb delicate ecosystems, and are 100% origin-traceable and conflict-free.</dd>

          <dt>Why choose R Sutariya Exports?</dt>
          <dd>We combine five decades of diamond cutting heritage, state-of-the-art HPHT technology, direct factory wholesale pricing, and reliable global export logistics.</dd>
        </dl>
      </section>

      <section class="contact-cta">
        <h2>Start Your B2B Diamond Sourcing</h2>
        <p>Connect directly with our Surat export team for wholesale price lists, inventory spreadsheets, and sample orders.</p>
        <p><a href="/contact">Contact Our Team &rarr;</a></p>
      </section>
    </main>`;

async function run() {
  const distDir = path.resolve('dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('Error: dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(indexHtmlPath, 'utf8');

  // 1. Update dist/index.html with pre-rendered semantic HTML inside <div id="root">
  const homeSemanticHtml = `<div id="root">${NAV_HTML}${HOME_BODY_HTML}${FOOTER_HTML}</div>`;
  const updatedHomeHtml = baseTemplate.replace('<div id="root"></div>', homeSemanticHtml);
  fs.writeFileSync(indexHtmlPath, updatedHomeHtml, 'utf8');
  console.log('✅ Injected semantic HTML into dist/index.html (Home)');

  // 2. Pre-render each subpage
  for (const page of PAGES) {
    const pageUrl = `${BASE_URL}/${page.route}`;
    let html = baseTemplate;

    // A. Replace canonical link
    html = html.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${pageUrl}" />`
    );

    // B. Replace og:url
    html = html.replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${pageUrl}" />`
    );

    // C. Replace page title
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${page.title}</title>`
    );

    // D. Replace og:title and twitter:title
    html = html.replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${page.title}" />`
    );
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${page.title}" />`
    );

    // E. Replace meta description
    html = html.replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${page.description}" />`
    );

    // F. Replace og:description and twitter:description
    html = html.replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${page.description}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${page.description}" />`
    );

    // G. Replace default index.html JSON-LD schema with page-specific schema
    const schemaRegex = /<script type="application\/ld\+json">[\s\S]*?<\/script>/;
    const pageSchemaTag = `<script type="application/ld+json">\n${JSON.stringify(page.schema, null, 2)}\n  </script>`;
    if (schemaRegex.test(html)) {
      html = html.replace(schemaRegex, pageSchemaTag);
    } else {
      html = html.replace('</head>', `  ${pageSchemaTag}\n</head>`);
    }

    // H. Inject route-specific semantic HTML into <div id="root">
    const routeSemanticHtml = `<div id="root">${NAV_HTML}${page.bodyHtml}${FOOTER_HTML}</div>`;
    html = html.replace('<div id="root"></div>', routeSemanticHtml);

    // Write pre-rendered file to dist/{route}/index.html
    const targetDir = path.join(distDir, page.route);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetHtmlPath = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetHtmlPath, html, 'utf8');
    console.log(`✅ Pre-rendered: /${page.route} → dist/${page.route}/index.html`);
    console.log(`   Title: "${page.title}" (${page.title.length} chars)`);
  }

  console.log('\n🎉 All routes pre-rendered with unique schema, canonical, metadata, and crawlable semantic HTML!');
}

run().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
