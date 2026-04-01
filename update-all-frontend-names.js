const fs = require('fs');
const path = require('path');

const domains = [
  'do-admin',
  'do-business',
  'do-cinema',
  'do-event',
  'do-library',
  'do-sport',
  'do-social',
  'do-hospital',
];

domains.forEach((domain) => {
  const frontendDir = path.join('apps', domain, 'frontend');
  if (fs.existsSync(frontendDir)) {
    const pkgPath = path.join(frontendDir, 'package.json');
    if (fs.existsSync(pkgPath)) {
      let pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
      pkg.name = `@dosomething/${domain}-frontend`;
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
      console.log(`Updated ${domain}`);
    }
    const projPath = path.join(frontendDir, 'project.json');
    const projContent = { name: `@dosomething/${domain}-frontend` };
    fs.writeFileSync(projPath, JSON.stringify(projContent, null, 2) + '\n');
  }
});
console.log('Done updating frontend names');
