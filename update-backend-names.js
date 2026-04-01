const fs = require('fs');
const path = require('path');

const updates = [
  {
    pkgPath: 'apps/do-cinema/backend/package.json',
    name: '@dosomething/do-cinema-backend',
  },
  {
    pkgPath: 'apps/do-sport/backend/package.json',
    name: '@dosomething/do-sport-backend',
  },
  {
    pkgPath: 'apps/do-admin/backend/package.json',
    name: '@dosomething/do-admin-backend',
  },
];

updates.forEach((item) => {
  if (fs.existsSync(item.pkgPath)) {
    let pkg = JSON.parse(fs.readFileSync(item.pkgPath, 'utf-8'));
    pkg.name = item.name;
    fs.writeFileSync(item.pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    console.log(`✓ Updated ${item.name}`);
  } else {
    console.log(`✗ Not found: ${item.pkgPath}`);
  }
});

// Update project.json files
const projUpdates = [
  {
    projPath: 'apps/do-cinema/backend/project.json',
    name: '@dosomething/do-cinema-backend',
  },
  {
    projPath: 'apps/do-sport/backend/project.json',
    name: '@dosomething/do-sport-backend',
  },
  {
    projPath: 'apps/do-admin/backend/project.json',
    name: '@dosomething/do-admin-backend',
  },
];

projUpdates.forEach((item) => {
  const proj = { name: item.name };
  fs.writeFileSync(item.projPath, JSON.stringify(proj, null, 2) + '\n');
  console.log(`✓ Project: ${item.name}`);
});
