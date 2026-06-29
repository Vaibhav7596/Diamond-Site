const fs = require('fs');
const path = require('path');

const stepsDir = path.join(__dirname, 'src', 'components', 'DiamondJourney', 'steps');
const files = fs.readdirSync(stepsDir).filter(f => f.endsWith('.jsx') && f !== 'Step01.jsx');

files.forEach(file => {
  const filePath = path.join(stepsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // We want to match: <div className="flex justify-end... > \s* <button ... > ... NEXT STEP <ArrowRight ... /> \s* </button> \s* </div>
  const regex = /<div className="flex justify-end[^>]*>[\s\S]*?<button[^>]*>[\s\S]*?NEXT STEP[\s\S]*?<\/button>\s*<\/div>/g;
  
  const newContent = content.replace(regex, '');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Removed from', file);
  }
});
