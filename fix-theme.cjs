const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components', 'DiamondJourney');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Fix Light Mode Colors
  content = content.replace(/bg-main/g, 'bg-luxury-bg');
  content = content.replace(/bg-sidebar/g, 'bg-luxury-bg-sec');
  // For the specific hex backgrounds used in cards
  content = content.replace(/bg-\[\#1A1A1A\]/g, 'bg-luxury-card');
  content = content.replace(/bg-\[\#EBEBEB\]/g, 'bg-luxury-card'); // used in step 6
  // Text colors
  content = content.replace(/text-white/g, 'text-luxury-text');
  content = content.replace(/text-gray-300/g, 'text-luxury-text-sec');
  content = content.replace(/text-gray-400/g, 'text-luxury-text-sec');
  content = content.replace(/text-gray-500/g, 'text-luxury-text-sec opacity-80');
  content = content.replace(/text-gray-600/g, 'text-luxury-text-sec opacity-60');
  // Borders
  content = content.replace(/border-gray-800/g, 'border-luxury-border');
  content = content.replace(/border-gray-300/g, 'border-luxury-border');

  // 2. Reduce Vertical Gaps / Heights to scale things down
  // In Step layout files, we often have flex-col gap-8 or gap-10
  content = content.replace(/gap-10/g, 'gap-6');
  content = content.replace(/gap-8/g, 'gap-5');
  // Decrease huge paddings
  content = content.replace(/p-6/g, 'p-5');
  content = content.replace(/p-8/g, 'p-6');
  content = content.replace(/py-8/g, 'py-5');
  content = content.replace(/pt-8/g, 'pt-5');
  content = content.replace(/pb-8/g, 'pb-5');
  content = content.replace(/mt-8/g, 'mt-5');
  content = content.replace(/mb-8/g, 'mb-5');

  // Limit hero image heights
  content = content.replace(/w-full h-auto/g, 'w-full max-h-[350px] object-contain');
  content = content.replace(/w-full h-full object-cover/g, 'w-full h-full max-h-[400px] object-cover');
  content = content.replace(/aspect-square/g, 'aspect-[4/3]'); // less tall

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

traverseDir(directoryPath);

// Specifically fix JourneyLayout.jsx to scale down max width
const layoutPath = path.join(directoryPath, 'JourneyLayout.jsx');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');
layoutContent = layoutContent.replace(/max-w-\[1232px\]/, 'max-w-[1000px]');
fs.writeFileSync(layoutPath, layoutContent, 'utf8');
console.log('Updated max-width in JourneyLayout.jsx');
