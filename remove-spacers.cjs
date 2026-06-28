const fs = require('fs');
const path = require('path');

const stepsDir = path.join(__dirname, 'src', 'components', 'DiamondJourney', 'steps');
const files = fs.readdirSync(stepsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(stepsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove <div className="h-6"></div> and <div className="h-10"></div> and similar
  const regex = /<div className="h-\d+"><\/div>( \/\*.*?\*\/)?/g;
  
  const newContent = content.replace(regex, '');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Removed spacer div from', file);
  }
});
